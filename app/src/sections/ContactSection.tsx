import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className = '' }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Flowing section - elements animate as they enter viewport
      gsap.fromTo(
        contactRef.current,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { y: '4vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        newsletterRef.current,
        { y: '4vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        footerRef.current,
        { y: '2vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
            end: 'top 75%',
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing! You will receive updates soon.');
    setEmail('');
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative w-full min-h-screen bg-[#111C11] py-[10vh] ${className}`}
    >
      <div className="relative px-[6vw]">
        {/* Contact Card */}
        <div
          ref={contactRef}
          className="w-full lg:w-[44vw] bg-white/5 backdrop-blur-sm rounded-[28px] p-8 lg:p-10 border border-white/10 mb-8"
        >
          <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,3.2vw,44px)] leading-[1.0] tracking-[-0.01em] text-white uppercase mb-4">
            Let's build tomorrow—together.
          </h2>
          <p className="text-base text-white/70 leading-relaxed mb-8">
            Have questions? Want to partner? Reach out.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white/70" />
              </div>
              <span className="text-white/90">hello@brighttomorrowscholars.org</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white/70" />
              </div>
              <span className="text-white/90">+1 (555) 014-2200</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white/70" />
              </div>
              <span className="text-white/90">1204 Hope Street, Suite 300, Portland, OR</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => scrollToSection('ways-to-give')}
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 py-3 font-medium"
            >
              Donate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollToSection('apply')}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-3 font-medium"
            >
              Apply
            </Button>
          </div>
        </div>

        {/* Image Card */}
        <div
          ref={imageRef}
          className="hidden lg:block absolute right-[6vw] top-[10vh] w-[40vw] h-[56vh] rounded-[28px] overflow-hidden"
        >
          <img
            src="/contact_team.jpg"
            alt="Team unity"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Newsletter Row */}
        <div
          ref={newsletterRef}
          className="w-full bg-white/5 backdrop-blur-sm rounded-[28px] p-8 border border-white/10 mt-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-xl mb-2">
                Get updates
              </h3>
              <p className="text-white/70 text-sm">
                Scholar stories, events, and impact reports delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-5 py-3 w-full lg:w-72"
                required
              />
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 py-3 font-medium"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer
          ref={footerRef}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => scrollToSection('what-we-do')}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('ways-to-give')}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Donate
              </button>
              <button
                onClick={() => scrollToSection('apply')}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Apply
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="flex gap-6">
              <button className="text-white/50 hover:text-white/70 text-sm transition-colors">
                Privacy
              </button>
              <button className="text-white/50 hover:text-white/70 text-sm transition-colors">
                Terms
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Bright Tomorrow Scholars Foundation. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
