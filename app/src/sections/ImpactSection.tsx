import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, GraduationCap, TrendingUp, DollarSign, School } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ImpactSectionProps {
  className?: string;
}

export default function ImpactSection({ className = '' }: ImpactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
        },
      });

      // ENTRANCE (0%-30%)
      scrollTl
        .fromTo(
          headlineRef.current,
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          statsRef.current,
          { x: '-60vw', y: '10vh', opacity: 0 },
          { x: 0, y: 0, opacity: 1, ease: 'none' },
          0.08
        )
        .fromTo(
          imageRef.current,
          { x: '60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.05
        );

      // SETTLE (30%-70%): Hold positions

      // EXIT (70%-100%)
      scrollTl
        .to(headlineRef.current, { x: '-12vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(statsRef.current, { x: '-14vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(imageRef.current, { x: '18vw', opacity: 0, ease: 'power2.in' }, 0.7);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className={`relative w-full h-screen overflow-hidden bg-background ${className}`}
    >
      {/* Left Headline Card */}
      <div
        ref={headlineRef}
        className="absolute left-[6vw] top-[18vh] w-[44vw] bg-background p-8 rounded-[28px] border border-border/50"
      >
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,3.2vw,44px)] leading-[1.0] tracking-[-0.01em] text-foreground uppercase">
          Real support. Real graduates. Real change.
        </h2>
      </div>

      {/* Left Stats Card */}
      <div
        ref={statsRef}
        className="absolute left-[6vw] top-[44vh] w-[44vw] h-[38vh] bg-primary rounded-[28px] p-8 flex flex-col justify-between"
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-['Montserrat'] font-bold text-white text-2xl">12,400+</p>
              <p className="text-white/80 text-sm">students supported</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-['Montserrat'] font-bold text-white text-2xl">94%</p>
              <p className="text-white/80 text-sm">graduation rate</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-['Montserrat'] font-bold text-white text-2xl">$18M</p>
              <p className="text-white/80 text-sm">in scholarships</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <School className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-['Montserrat'] font-bold text-white text-2xl">36</p>
              <p className="text-white/80 text-sm">partner schools</p>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-2 text-white/85 hover:text-white text-sm font-medium transition-colors mt-4">
          Download our annual report
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right Image Card */}
      <div
        ref={imageRef}
        className="absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(17,28,17,0.10)]"
      >
        <img
          src="/impact_graduate.jpg"
          alt="Graduate celebrating"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
