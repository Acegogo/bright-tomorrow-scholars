import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Video, Briefcase, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EventsSectionProps {
  className?: string;
}

export default function EventsSection({ className = '' }: EventsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
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
          eventsRef.current,
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
        .to(eventsRef.current, { x: '-14vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(imageRef.current, { x: '18vw', opacity: 0, ease: 'power2.in' }, 0.7);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="events"
      className={`relative w-full h-screen overflow-hidden bg-background ${className}`}
    >
      {/* Left Headline Card */}
      <div
        ref={headlineRef}
        className="absolute left-[6vw] top-[18vh] w-[44vw] bg-background p-8 rounded-[28px] border border-border/50"
      >
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,3.2vw,44px)] leading-[1.0] tracking-[-0.01em] text-foreground uppercase mb-3">
          Join us at an event
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Meet mentors, students, and supporters.
        </p>
      </div>

      {/* Left Events Card */}
      <div
        ref={eventsRef}
        className="absolute left-[6vw] top-[44vh] w-[44vw] h-[38vh] bg-primary rounded-[28px] p-8 flex flex-col justify-between"
      >
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Spring Fundraiser Night
              </h3>
              <p className="text-white/80 text-sm">Apr 24 • City Arts Hall</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Video className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Mentorship Office Hours
              </h3>
              <p className="text-white/80 text-sm">First Saturday monthly • Online</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                Career Workshop: Resumes & Interviews
              </h3>
              <p className="text-white/80 text-sm">May 10 • Community Center</p>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-2 text-white/85 hover:text-white text-sm font-medium transition-colors mt-4">
          View all events
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right Image Card */}
      <div
        ref={imageRef}
        className="absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(17,28,17,0.10)]"
      >
        <img
          src="/events_mentorship.jpg"
          alt="Mentorship meeting"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
