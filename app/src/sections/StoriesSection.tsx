import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StoriesSectionProps {
  className?: string;
}

export default function StoriesSection({ className = '' }: StoriesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

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
          quoteRef.current,
          { x: '60vw', y: '10vh', opacity: 0 },
          { x: 0, y: 0, opacity: 1, ease: 'none' },
          0.1
        );

      // SETTLE (30%-70%): Hold positions

      // EXIT (70%-100%)
      scrollTl
        .to(imageRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(headlineRef.current, { x: '12vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(quoteRef.current, { x: '14vw', opacity: 0, ease: 'power2.in' }, 0.7);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stories"
      className={`relative w-full h-screen overflow-hidden bg-background ${className}`}
    >
      {/* Left Image Card */}
      <div
        ref={imageRef}
        className="absolute left-[6vw] top-[18vh] w-[40vw] h-[64vh] rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(17,28,17,0.10)]"
      >
        <img
          src="/stories_graduate.jpg"
          alt="Graduate portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Top Headline Card */}
      <div
        ref={headlineRef}
        className="absolute left-[50vw] top-[18vh] w-[44vw] bg-background p-8 rounded-[28px] border border-border/50"
      >
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,3.2vw,44px)] leading-[1.0] tracking-[-0.01em] text-foreground uppercase mb-3">
          Meet the scholars
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Voices from our community.
        </p>
      </div>

      {/* Right Bottom Quote Card */}
      <div
        ref={quoteRef}
        className="absolute left-[50vw] top-[44vh] w-[44vw] h-[38vh] bg-primary rounded-[28px] p-8 flex flex-col justify-between"
      >
        <div>
          <Quote className="w-8 h-8 text-white/40 mb-4" />
          <p className="text-white text-lg leading-relaxed mb-4">
            "I was the first in my family to attend university. The foundation didn't just pay tuition—they believed in me."
          </p>
          <p className="text-white/80 text-sm font-medium">
            — Amina, Engineering Graduate
          </p>
        </div>

        <button className="flex items-center gap-2 text-white/85 hover:text-white text-sm font-medium transition-colors mt-4">
          Read more stories
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
