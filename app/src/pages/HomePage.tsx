import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Heart, GraduationCap, Users, BookOpen, TrendingUp, Award, Globe, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: GraduationCap, value: '12,400+', label: 'Students Supported' },
  { icon: TrendingUp, value: '94%', label: 'Graduation Rate' },
  { icon: Award, value: 'KSh 2.4B', label: 'Scholarships Awarded' },
  { icon: Globe, value: '36', label: 'Partner Institutions' },
];

const programs = [
  {
    icon: BookOpen,
    title: 'Primary Education',
    description: 'Supporting bright young minds from primary school with tuition, books, and uniforms.',
    color: 'from-[#2D9C4E] to-[#1B5E2E]',
  },
  {
    icon: GraduationCap,
    title: 'Secondary School',
    description: 'Full scholarships for secondary education including boarding and exam fees.',
    color: 'from-[#E63946] to-[#D62839]',
  },
  {
    icon: Globe,
    title: 'University & Abroad',
    description: 'University scholarships and international study opportunities for top performers.',
    color: 'from-[#F4A261] to-[#E76F51]',
  },
  {
    icon: Award,
    title: 'Sports Tournaments',
    description: 'Nurturing athletic talent, promoting unity, and supporting education through sports.',
    color: 'from-[#9B5DE5] to-[#7B2CBF]',
  },
  {
    icon: Sprout,
    title: 'Sustainable Agriculture',
    description: 'Farming and tree-seedling production on 20 acres in Mbeere, generating income to keep more children in school.',
    color: 'from-[#2D9C4E] to-[#F4A261]',
  },
];

const heroSlides = [
  '/home_main_hero.png',
  '/home_alternate_symbolic.png',
  '/hero_slide_1.png',
  '/hero_slide_2.png',
  '/founder_graduation_celebration.webp',
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.hero-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        '.hero-image',
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
      );

      // Stats animation
      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        }
      );

      // Programs animation
      gsap.fromTo(
        '.program-card',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: programsRef.current,
            start: 'top 75%',
          },
        }
      );

      // Impact section
      gsap.fromTo(
        '.impact-content',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: impactRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.impact-image',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: impactRef.current,
            start: 'top 70%',
          },
        }
      );

      // CTA animation
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed photo backdrop */}
        <div className="hero-image absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Bright Tomorrow Scholars Foundation — story ${index + 1}`}
                className={`w-full h-full object-cover ${index === currentSlide ? 'animate-kenburns' : ''}`}
              />
            </div>
          ))}
        </div>

        {/* Scrim layers — keep the nav legible up top and the glass panel readable at left */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#07170F]/40 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 lg:pb-24">
          <div className="hero-content max-w-xl">
            {/* Glass panel */}
            <div className="rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.55)] p-8 sm:p-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md mb-6">
                <Heart className="w-4 h-4 text-[#F4A261] fill-[#F4A261]" />
                <span className="text-sm font-medium text-white">20+ Years of Impact</span>
              </div>
              <h1 className="font-['Montserrat'] font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Building{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7EE8A8] to-[#F4A261]">
                  Brighter
                </span>{' '}
                Futures for Kenyan Youth
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Empowering students from vulnerable communities across Kenya through
                education scholarships from primary school to university—and beyond.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/donate">
                  <Button className="bg-gradient-to-r from-[#E63946] to-[#D62839] hover:from-[#D62839] hover:to-[#C41E2B] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                    <Heart className="w-5 h-5 mr-2 fill-white" />
                    Donate Now
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button
                    variant="outline"
                    className="border-2 border-white/50 bg-white/5 text-white hover:bg-white hover:text-gray-900 backdrop-blur-md rounded-full px-8 py-6 text-lg transition-all"
                  >
                    Our Programs
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Stat row */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                <div className="w-14 h-14 shrink-0 rounded-full bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-['Montserrat'] font-bold text-2xl text-white">12,400+</p>
                  <p className="text-sm text-white/70">Lives Transformed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 right-6 sm:right-10 z-10 flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show story ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
                index === currentSlide ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-[#2D9C4E] to-[#1B5E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-['Montserrat'] font-black text-4xl text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={programsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#F4A261]/10 text-[#E76F51] rounded-full text-sm font-medium mb-4">
              Our Programs
            </span>
            <h2 className="font-['Montserrat'] font-black text-4xl lg:text-5xl text-gray-900 mb-4">
              Education at Every Level
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From primary school to university and international studies, we support 
              students at every step of their educational journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="program-card group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <div className="p-8 flex flex-col flex-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-1">
                    {program.description}
                  </p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center text-[#2D9C4E] font-medium hover:text-[#1B5E2E] transition-colors mt-auto"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={impactRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="impact-content">
              <span className="inline-block px-4 py-2 bg-[#E63946]/10 text-[#E63946] rounded-full text-sm font-medium mb-4">
                Our Impact
              </span>
              <h2 className="font-['Montserrat'] font-black text-4xl lg:text-5xl text-gray-900 mb-6">
                Real Stories,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#D62839]">
                  Real Change
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                For over two decades, we've been transforming lives through education. 
                Our scholars have gone on to become doctors, engineers, teachers, and 
                leaders who are shaping Kenya's future.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2D9C4E]/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#2D9C4E]" />
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-lg text-gray-900 mb-1">
                      94% Graduation Rate
                    </h4>
                    <p className="text-gray-600">
                      Our comprehensive support ensures students complete their education.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F4A261]/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#E76F51]" />
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-lg text-gray-900 mb-1">
                      Global Opportunities
                    </h4>
                    <p className="text-gray-600">
                      Scholars studying at top universities in Kenya and abroad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#E63946]" />
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-lg text-gray-900 mb-1">
                      Community of Alumni
                    </h4>
                    <p className="text-gray-600">
                      A network of successful graduates giving back to the community.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/stories">
                <Button className="bg-[#2D9C4E] hover:bg-[#1B5E2E] text-white rounded-full px-8 py-6">
                  Read Success Stories
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="impact-image relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/graduation_kenya.jpg"
                      alt="Graduation celebration"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/primary_students_kenya.jpg"
                      alt="Primary students"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/study_group_kenya.jpg"
                      alt="Students studying"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/celebration_kenya.jpg"
                      alt="Graduate celebration"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/home_bottom_cta_band.png')] bg-cover bg-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D9C4E]/92 via-[#1B5E2E]/95 to-[#0D3320]/98" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4A261]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content">
            <Heart className="w-16 h-16 text-white/80 mx-auto mb-6 fill-white/20" />
            <h2 className="font-['Montserrat'] font-black text-4xl lg:text-5xl text-white mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Your donation can transform a life. Join us in building a brighter 
              future for Kenya's youth—one scholar at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donate">
                <Button className="bg-white text-[#2D9C4E] hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all">
                  <Heart className="w-5 h-5 mr-2 fill-[#2D9C4E]" />
                  Donate Today
                </Button>
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[3.5rem] cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white/15 px-10 py-3 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#14532d] sm:py-7"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
