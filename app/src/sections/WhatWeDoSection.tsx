import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Users, Heart, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface WhatWeDoSectionProps {
  className?: string;
}

export default function WhatWeDoSection({ className = '' }: WhatWeDoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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
          imageRef.current,
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          headlineRef.current,
          { x: '60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .fromTo(
          servicesRef.current,
          { x: '60vw', y: '10vh', opacity: 0 },
          { x: 0, y: 0, opacity: 1, ease: 'none' },
          0.1
        );

      // SETTLE (30%-70%): Hold positions

      // EXIT (70%-100%)
      scrollTl
        .to(imageRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(headlineRef.current, { x: '12vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(servicesRef.current, { x: '14vw', opacity: 0, ease: 'power2.in' }, 0.7);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      className={`relative w-full h-screen overflow-hidden bg-background ${className}`}
    >
      {/* Left Image Card */}
      <div
        ref={imageRef}
        className="absolute left-[6vw] top-[18vh] w-[40vw] h-[64vh] rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(17,28,17,0.10)]"
      >
        <img
          src="/whatwedo_graduation.jpg"
          alt="Graduation celebration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Top Headline Card */}
      <div
        ref={headlineRef}
        className="absolute left-[50vw] top-[18vh] w-[44vw] bg-background p-8 rounded-[28px] border border-border/50"
      >
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,3.2vw,44px)] leading-[1.0] tracking-[-0.01em] text-foreground uppercase mb-3">
          We don't just fund education.
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          We stay with students—so they finish strong.
        </p>
      </div>

      {/* Right Bottom Services Card */}
      <div
        ref={servicesRef}
        className="absolute left-[50vw] top-[44vh] w-[44vw] h-[38vh] bg-primary rounded-[28px] p-8 flex flex-col justify-between"
      >
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Scholarships
              </h3>
              <p className="text-white/80 text-sm">Tuition, books, and supplies.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Mentorship
              </h3>
              <p className="text-white/80 text-sm">One-on-one guidance and career planning.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Community
              </h3>
              <p className="text-white/80 text-sm">Networking events and peer support.</p>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-2 text-white/85 hover:text-white text-sm font-medium transition-colors mt-4">
          Learn more about our programs
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
