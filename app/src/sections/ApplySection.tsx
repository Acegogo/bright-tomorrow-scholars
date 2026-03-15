import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardCheck, FileText, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface ApplySectionProps {
  className?: string;
}

export default function ApplySection({ className = '' }: ApplySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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
          stepsRef.current,
          { x: '60vw', y: '10vh', opacity: 0 },
          { x: 0, y: 0, opacity: 1, ease: 'none' },
          0.1
        );

      // SETTLE (30%-70%): Hold positions

      // EXIT (70%-100%)
      scrollTl
        .to(imageRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(headlineRef.current, { x: '12vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(stepsRef.current, { x: '14vw', opacity: 0, ease: 'power2.in' }, 0.7);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="apply"
      className={`relative w-full h-screen overflow-hidden bg-background ${className}`}
    >
      {/* Left Image Card */}
      <div
        ref={imageRef}
        className="absolute left-[6vw] top-[18vh] w-[40vw] h-[64vh] rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(17,28,17,0.10)]"
      >
        <img
          src="/apply_campus.jpg"
          alt="Student on campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Top Headline Card */}
      <div
        ref={headlineRef}
        className="absolute left-[50vw] top-[18vh] w-[44vw] bg-background p-8 rounded-[28px] border border-border/50"
      >
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,3.2vw,44px)] leading-[1.0] tracking-[-0.01em] text-foreground uppercase mb-3">
          How to apply
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Three steps to access support.
        </p>
      </div>

      {/* Right Bottom Steps Card */}
      <div
        ref={stepsRef}
        className="absolute left-[50vw] top-[44vh] w-[44vw] h-[38vh] bg-primary rounded-[28px] p-8 flex flex-col justify-between"
      >
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <ClipboardCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Check eligibility
              </h3>
              <p className="text-white/80 text-sm">Enrollment + financial need documentation.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Submit application
              </h3>
              <p className="text-white/80 text-sm">Online form, transcripts, and references.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Interview & decision
              </h3>
              <p className="text-white/80 text-sm">Meet the team; get a decision within 2 weeks.</p>
            </div>
          </div>
        </div>

        <Button
          className="bg-background text-primary hover:bg-background/90 rounded-full px-6 py-3 font-medium w-fit mt-4"
        >
          Start your application
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
