import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/programs', label: 'Programs' },
  { path: '/stories', label: 'Stories' },
  { path: '/contact', label: 'Get in Touch' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
          isScrolled
            ? 'border-gray-200/80 bg-white/95 shadow-md backdrop-blur-xl backdrop-saturate-150'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[5rem] items-center justify-between gap-4 py-2 sm:min-h-[5.5rem] lg:min-h-[6.75rem] lg:py-3">
            {/* Logo — sized to read clearly beside nav pills (512×512 PNG scales down cleanly) */}
            <Link
              to="/"
              className="group flex shrink-0 items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9C4E] focus-visible:ring-offset-2"
            >
              <img
                src="/bright-logo.png"
                alt="Bright Tomorrow Scholars Foundation"
                className={`h-[4.5rem] w-auto max-w-[calc(100vw-5.5rem)] object-contain object-left transition-opacity duration-300 group-hover:opacity-90 sm:h-[5.75rem] sm:max-w-[min(560px,calc(100vw-13rem))] md:h-28 lg:h-[7.25rem] lg:max-w-[min(640px,calc(100vw-22rem))] xl:h-[7.75rem] ${
                  isScrolled ? 'drop-shadow-sm' : 'drop-shadow-[0_2px_14px_rgba(255,255,255,0.9)]'
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-[#2D9C4E] text-white'
                      : 'text-gray-700 hover:bg-[#2D9C4E]/10 hover:text-[#2D9C4E]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/donate">
                <Button className="bg-gradient-to-r from-[#E63946] to-[#D62839] hover:from-[#D62839] hover:to-[#C41E2B] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all">
                  <Heart className="w-4 h-4 mr-2 fill-white" />
                  Donate Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-24">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-[#2D9C4E] text-white'
                      : 'text-gray-700 hover:bg-[#2D9C4E]/10 hover:text-[#2D9C4E]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t">
              <Link to="/donate">
                <Button className="w-full bg-gradient-to-r from-[#E63946] to-[#D62839] text-white rounded-xl py-6 shadow-lg">
                  <Heart className="w-5 h-5 mr-2 fill-white" />
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
