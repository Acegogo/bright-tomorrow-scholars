import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Initial states
      gsap.set(imageRef.current, { opacity: 0, scale: 1.06 });
      gsap.set(headlineRef.current, { opacity: 0, x: '10vw' });
      gsap.set(ctaRef.current, { opacity: 0, y: '8vh' });

      // Entrance sequence
      tl.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.9 }, 0)
        .to(headlineRef.current, { opacity: 1, x: 0, duration: 0.7 }, 0.15)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.3);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset to visible when scrolling back to top
            gsap.to([imageRef.current, headlineRef.current, ctaRef.current], {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.3,
            });
          },
        },
      });

      // ENTRANCE (0%-30%): Hold - elements already visible from load animation
      // SETTLE (30%-70%): Hold
      // EXIT (70%-100%): Elements exit
      scrollTl
        .fromTo(
          imageRef.current,
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          headlineRef.current,
          { x: 0, opacity: 1 },
          { x: '12vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          ctaRef.current,
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.7
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

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`relative w-full h-screen overflow-hidden bg-background ${className}`}
    >
      {/* Hero Image Card */}
      <div
        ref={imageRef}
        className="absolute left-[6vw] top-[18vh] w-[62vw] h-[64vh] rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(17,28,17,0.10)]"
      >
        <img
          src="/hero_student.jpg"
          alt="Student portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Headline Card */}
      <div
        ref={headlineRef}
        className="absolute left-[58vw] top-[26vh] w-[36vw] bg-background p-8 rounded-[28px]"
      >
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
          Scholarships for Bright Futures
        </p>
        <h1 className="font-['Montserrat'] font-bold text-[clamp(32px,4vw,56px)] leading-[0.95] tracking-[-0.02em] text-foreground uppercase mb-4">
          Education
          <br />
          opens doors.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-[90%]">
          We support students from underserved communities with funding, mentorship, and a path forward.
        </p>
      </div>

      {/* CTA Card */}
      <div
        ref={ctaRef}
        className="absolute left-[58vw] top-[62vh] w-[36vw] h-[18vh] bg-primary rounded-[28px] p-8 flex flex-col justify-center"
      >
        <div className="flex gap-4">
          <Button
            onClick={() => scrollToSection('ways-to-give')}
            className="bg-background text-primary hover:bg-background/90 rounded-full px-6 py-3 font-medium"
          >
            Donate
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() => scrollToSection('apply')}
            variant="ghost"
            className="text-white/85 hover:text-white hover:bg-white/10 rounded-full px-6 py-3 font-medium"
          >
            Apply
          </Button>
        </div>
      </div>
    </section>
  );
}
