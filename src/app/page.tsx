import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PrepPitchProject from '@/components/PrepPitchProject';
import DrowsinessProject from '@/components/DrowsinessProject';
import HousePriceProject from '@/components/HousePriceProject';
import OtherProjects from '@/components/OtherProjects';
import JourneyTimeline from '@/components/JourneyTimeline';
import SkillsEcosystem from '@/components/SkillsEcosystem';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Education from '@/components/Education';
import FinalScene from '@/components/FinalScene';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-surface text-cinematic-text selection:bg-gold-primary selection:text-black">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Main Narrative Orchestration */}
      <main className="flex flex-col relative w-full overflow-hidden">
        {/* ACT I: CINEMATIC OPENING */}
        <Hero />

        {/* ACT II: ORIGIN (ABOUT & ARCHITECTURE CONSTELLATION) */}
        <About />

        {/* FEATURED PROJECT: PREPPITCH */}
        <PrepPitchProject />

        {/* VISION SYSTEM: DRIVER DROWSINESS DETECTION */}
        <DrowsinessProject />

        {/* PREDICTIVE ANALYTICS: HOUSE PRICE PREDICTION */}
        <HousePriceProject />

        {/* SELECTED ARCHIVE: MOVIE BOOKING, FOOD ORDERING */}
        <OtherProjects />

        {/* INTELLECTUAL EVOLUTION: THE AI TRAJECTORY */}
        <JourneyTimeline />

        {/* REPERTOIRE MATRIX: TECHNICAL DISCIPLINES */}
        <SkillsEcosystem />

        {/* CHRONICLES: ENGINEERING RESIDENCIES */}
        <ExperienceTimeline />

        {/* ACADEMIC FOUNDATION: LOYOLA B.TECH AI & DS */}
        <Education />

        {/* ACT III: FINALE & EPILOGUE (THE NEXT CHAPTER) */}
        <FinalScene />
      </main>

      {/* Editorial Colophon */}
      <Footer />
    </div>
  );
}
