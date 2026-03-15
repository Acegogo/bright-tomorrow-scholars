import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-['Montserrat'] font-bold text-lg tracking-tight text-foreground hover:opacity-80 transition-opacity"
          >
            Bright Tomorrow
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('ways-to-give')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Donate
            </button>
            <button
              onClick={() => scrollToSection('apply')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Apply
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[99] bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection('ways-to-give')}
              className="text-2xl font-['Montserrat'] font-semibold text-foreground"
            >
              Donate
            </button>
            <button
              onClick={() => scrollToSection('apply')}
              className="text-2xl font-['Montserrat'] font-semibold text-foreground"
            >
              Apply
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-2xl font-['Montserrat'] font-semibold text-foreground"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
