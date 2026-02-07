'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/قِيَم-removebg-preview.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'البرامج', href: '#programs' },
    { name: 'نظام المكافآت', href: '#rewards' },
    { name: 'المتصدرين', href: '#leaderboard' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="أكاديمية قيم" className="h-10 w-10" />
          <span
            className={cn(
              'text-2xl font-headline font-bold transition-colors',
              isScrolled ? 'text-primary' : 'text-primary',
            )}
          >
            أكاديمية قيم
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary font-medium hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 rounded-full border-none">
            <a href="#register">انضم الآن</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-4 flex flex-col gap-4 md:hidden border-t"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary text-lg font-medium p-2 border-b last:border-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-secondary text-primary font-bold w-full py-6 text-lg">
              <a href="#register">انضم الآن</a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
