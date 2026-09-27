'use client';

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { clsx } from 'clsx';
import { Pause, Play } from 'lucide-react';

type PlaybackMode = 'pending' | 'motion' | 'still';

interface CinematicVideoProps {
  src: string;
  poster: string;
  /** Outer layer classes (positioning / sizing). Defaults to filling the parent frame. */
  className?: string;
  /** Placement of the media box inside the layer. Defaults to `inset-0`. */
  mediaClassName?: string;
  /** Classes on the <video> itself (grading filters, hover transforms). */
  videoClassName?: string;
  objectPosition?: string;
  /** Opening-scene footage: fetched immediately (preload="auto") and faded in from black. */
  priority?: boolean;
  /** Subtle pause/play toggle — moving footage longer than 5s needs one (WCAG 2.2.2). */
  showControl?: boolean;
  controlClassName?: string;
  /** Overlays (gradients, vignettes) that should track the footage. */
  children?: ReactNode;
}

/* ---------- Shared playback coordinator ----------
 * Each mounted clip reports how much of it is on screen. On viewports below lg
 * only the most visible clip may decode, so phones never run several streams
 * at once; on desktop every clip that is meaningfully visible plays. */
interface PlaybackController {
  ratio: number;
  userPaused: boolean;
  apply: (shouldPlay: boolean) => void;
}

const controllers = new Map<string, PlaybackController>();
const PLAY_RATIO = 0.2;
const SINGLE_STREAM_QUERY = '(max-width: 1023px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function reconcilePlayback() {
  const singleStream = window.matchMedia(SINGLE_STREAM_QUERY).matches;
  const leader = { id: null as string | null, ratio: 0 };

  controllers.forEach((controller, id) => {
    if (!controller.userPaused && controller.ratio >= PLAY_RATIO && controller.ratio > leader.ratio) {
      leader.id = id;
      leader.ratio = controller.ratio;
    }
  });

  controllers.forEach((controller, id) => {
    const eligible = !controller.userPaused && controller.ratio >= PLAY_RATIO;
    controller.apply(singleStream ? id === leader.id : eligible);
  });
}

function prefersStillImage(): boolean {
  if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return true;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return connection?.saveData === true;
}

export default function CinematicVideo({
  src,
  poster,
  className,
  mediaClassName,
  videoClassName,
  objectPosition = '50% 50%',
  priority = false,
  showControl = true,
  controlClassName,
  children,
}: CinematicVideoProps) {
  const id = useId();
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldPlayRef = useRef(false);
  const userPausedRef = useRef(false);

  // 'pending' during SSR/hydration: the poster renders, nothing streams yet.
  const [mode, setMode] = useState<PlaybackMode>('pending');
  const [sourceAttached, setSourceAttached] = useState(false);
  const [revealed, setRevealed] = useState(false);
  // The toggle reflects the viewer's intent, not the automatic off-screen pauses.
  const [userPaused, setUserPaused] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  const playSafely = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    // React does not serialise `muted` as an attribute; set it explicitly so autoplay policies accept playback.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    const attempt = video.play();
    if (attempt !== undefined) {
      // Refused autoplay (e.g. iOS Low Power Mode) leaves the poster up; the toggle can start it.
      attempt.catch((error: DOMException) => {
        if (error.name === 'NotAllowedError') setAutoplayBlocked(true);
      });
    }
  }, []);

  // Reduced motion or data saver → poster only.
  useEffect(() => {
    const motionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const update = () => {
      const still = prefersStillImage();
      setMode(still ? 'still' : 'motion');
      if (still) videoRef.current?.pause();
    };
    update();
    motionQuery.addEventListener?.('change', update);
    return () => motionQuery.removeEventListener?.('change', update);
  }, []);

  // Opening scene: fade up from black once footage runs (or its poster, as a fallback).
  useEffect(() => {
    if (!priority || mode === 'pending') return;
    if (mode === 'still') {
      setRevealed(true);
      return;
    }
    const fallback = window.setTimeout(() => setRevealed(true), 1400);
    return () => window.clearTimeout(fallback);
  }, [priority, mode]);

  // Visibility, lazy source attachment and playback coordination.
  useEffect(() => {
    if (mode === 'pending') return;
    const media = mediaRef.current;
    if (!media) return;

    if (!('IntersectionObserver' in window)) {
      setRevealed(true);
      if (mode === 'motion') {
        setSourceAttached(true);
        shouldPlayRef.current = true;
      }
      return;
    }

    const motion = mode === 'motion';
    const controller: PlaybackController = {
      ratio: 0,
      userPaused: userPausedRef.current,
      apply: (shouldPlay) => {
        shouldPlayRef.current = shouldPlay;
        const video = videoRef.current;
        if (!video || !video.getAttribute('src')) return;
        if (shouldPlay) playSafely();
        else if (!video.paused) video.pause();
      },
    };
    if (motion) controllers.set(id, controller);

    const visibility = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        controller.ratio = entry.isIntersecting ? entry.intersectionRatio : 0;
        if (!priority && controller.ratio > 0.05) setRevealed(true);
        if (motion) reconcilePlayback();
      },
      { threshold: [0, 0.05, 0.2, 0.4, 0.6, 0.8, 1] }
    );
    visibility.observe(media);

    let loader: IntersectionObserver | undefined;
    if (motion && priority) {
      setSourceAttached(true);
    } else if (motion) {
      // Section clips stay at preload="none" until they approach the viewport.
      loader = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setSourceAttached(true);
            loader?.disconnect();
          }
        },
        { rootMargin: '50% 0px' }
      );
      loader.observe(media);
    }

    const streamQuery = window.matchMedia(SINGLE_STREAM_QUERY);
    streamQuery.addEventListener?.('change', reconcilePlayback);

    return () => {
      visibility.disconnect();
      loader?.disconnect();
      streamQuery.removeEventListener?.('change', reconcilePlayback);
      if (controllers.delete(id)) reconcilePlayback();
    };
  }, [mode, id, priority, playSafely]);

  // Source just attached while already cleared to play → start it.
  useEffect(() => {
    if (sourceAttached && shouldPlayRef.current) playSafely();
  }, [sourceAttached, playSafely]);

  const showsPlay = userPaused || autoplayBlocked;

  const togglePlayback = () => {
    const pause = !showsPlay;
    userPausedRef.current = pause;
    setUserPaused(pause);
    setAutoplayBlocked(false);
    const controller = controllers.get(id);
    if (controller) controller.userPaused = pause;

    if (pause) {
      videoRef.current?.pause();
      reconcilePlayback();
      return;
    }
    setSourceAttached(true);
    reconcilePlayback();
    if (shouldPlayRef.current) playSafely();
  };

  const motionEnabled = mode === 'motion';

  return (
    <div className={clsx('overflow-hidden', className ?? 'absolute inset-0')}>
      <div
        ref={mediaRef}
        aria-hidden="true"
        className={clsx(
          'pointer-events-none absolute transition-[opacity,transform] ease-out',
          mediaClassName ?? 'inset-0',
          priority ? 'duration-[2200ms]' : 'duration-[1400ms]',
          revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.04]'
        )}
      >
        <video
          ref={videoRef}
          className={clsx('h-full w-full object-cover', videoClassName)}
          style={{ objectPosition }}
          poster={poster}
          src={motionEnabled && sourceAttached ? src : undefined}
          preload={priority ? 'auto' : 'none'}
          autoPlay={motionEnabled && sourceAttached}
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          tabIndex={-1}
          onPlay={(event) => {
            if (!shouldPlayRef.current) event.currentTarget.pause();
          }}
          onPlaying={() => {
            setAutoplayBlocked(false);
            if (priority) setRevealed(true);
          }}
        />
        {children}
      </div>

      {showControl && motionEnabled && revealed && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={showsPlay ? 'Play background footage' : 'Pause background footage'}
          className={clsx(
            'absolute z-20 inline-flex items-center gap-1.5 rounded-sm border border-surface-border bg-surface/70 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-widest text-cinematic-muted opacity-70 backdrop-blur-sm transition-all duration-300 hover:border-gold-primary/40 hover:text-gold-bright hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-primary',
            controlClassName ?? 'top-3 right-3 sm:top-4 sm:right-4'
          )}
        >
          {showsPlay ? (
            <Play className="h-2.5 w-2.5 text-gold-primary" aria-hidden="true" />
          ) : (
            <Pause className="h-2.5 w-2.5 text-gold-primary" aria-hidden="true" />
          )}
          <span>{showsPlay ? 'Play' : 'Pause'}</span>
        </button>
      )}
    </div>
  );
}
