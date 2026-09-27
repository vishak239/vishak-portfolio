'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '@/data/portfolioContent';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'work', 'journey', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-xl border-b border-surface-border py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Monogram / Brand */}
          <Link
            href="#"
            className="group flex items-center gap-3 text-cinematic-text hover:text-gold-bright transition-colors"
          >
            <div className="w-9 h-9 rounded-sm bg-surface-panel border border-surface-border flex items-center justify-center group-hover:border-gold-primary/50 transition-all">
              <svg className="w-5 h-5 text-gold-primary" viewBox="0 0 100 100" fill="none">
                <path d="M26 28L50 78L74 28" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M37 50L63 50" stroke="#E6C45A" strokeWidth="3" strokeDasharray="3 4" />
                <circle cx="50" cy="78" r="4" fill="#E6C45A" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold tracking-cinematic uppercase text-gold-bright">
                {profileData.name}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-cinematic-muted uppercase">
                AI Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono tracking-widest uppercase text-cinematic-muted">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-all duration-200 relative py-1 hover:text-cinematic-text ${
                    isActive ? 'text-gold-bright font-medium' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-primary shadow-gold-subtle" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Status Indicator & CTA */}
          <div className="hidden xl:flex items-center gap-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-surface-panel/80 border border-surface-border text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse shadow-gold-glow" />
              <span className="text-cinematic-muted uppercase tracking-wider">{profileData.contact.status}</span>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 rounded-sm bg-gold-primary text-black font-mono text-xs font-semibold tracking-wider uppercase hover:bg-gold-bright transition-all shadow-gold-subtle flex items-center gap-1.5"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-sm bg-surface-panel border border-surface-border flex items-center justify-center text-cinematic-text hover:text-gold-bright transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/98 backdrop-blur-2xl lg:hidden pt-24 px-8 pb-12 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="text-[11px] font-mono tracking-cinematic text-gold-bright uppercase border-b border-surface-border pb-3">
              Navigation Index
            </div>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-cinematic-text hover:text-gold-bright transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-cinematic-muted" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-surface-border">
            <div className="flex items-center gap-2 text-xs font-mono text-cinematic-muted">
              <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse" />
              <span>{profileData.contact.status}</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-sm bg-gold-primary text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-gold-bright transition-colors shadow-gold-subtle"
            >
              Initialize Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
