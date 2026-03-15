import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gift, Repeat, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface WaysToGiveSectionProps {
  className?: string;
}

export default function WaysToGiveSection({ className = '' }: WaysToGiveSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
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
          optionsRef.current,
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
        .to(optionsRef.current, { x: '-14vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(imageRef.current, { x: '18vw', opacity: 0, ease: 'power2.in' }, 0.7);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ways-to-give"
      className={`relative w-full h-screen overflow-hidden bg-background ${className}`}
    >
      {/* Left Headline Card */}
      <div
        ref={headlineRef}
        className="absolute left-[6vw] top-[18vh] w-[44vw] bg-background p-8 rounded-[28px] border border-border/50"
      >
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,3.2vw,44px)] leading-[1.0] tracking-[-0.01em] text-foreground uppercase mb-3">
          Ways to give
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Choose what works for you.
        </p>
      </div>

      {/* Left Options Card */}
      <div
        ref={optionsRef}
        className="absolute left-[6vw] top-[44vh] w-[44vw] h-[38vh] bg-primary rounded-[28px] p-8 flex flex-col justify-between"
      >
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                One-time donation
              </h3>
              <p className="text-white/80 text-sm">Support a student immediately.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Repeat className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Monthly giving
              </h3>
              <p className="text-white/80 text-sm">Provide steady, predictable support.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Corporate partnership
              </h3>
              <p className="text-white/80 text-sm">Sponsor a cohort in your region.</p>
            </div>
          </div>
        </div>

        <Button
          className="bg-background text-primary hover:bg-background/90 rounded-full px-6 py-3 font-medium w-fit mt-4"
        >
          Donate now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Right Image Card */}
      <div
        ref={imageRef}
        className="absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(17,28,17,0.10)]"
      >
        <img
          src="/donate_group.jpg"
          alt="Students studying together"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
