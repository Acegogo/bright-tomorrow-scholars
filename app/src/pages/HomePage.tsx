import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Heart, GraduationCap, Users, BookOpen, TrendingUp, Award, Globe } from 'lucide-react';
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
];

export default function HomePage() {
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
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D9C4E]/10 via-transparent to-[#E63946]/10" />
          <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-[#F4A261]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#2D9C4E]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D9C4E]/10 rounded-full mb-6">
                <Heart className="w-4 h-4 text-[#E63946] fill-[#E63946]" />
                <span className="text-sm font-medium text-[#2D9C4E]">20+ Years of Impact</span>
              </div>
              <h1 className="font-['Montserrat'] font-black text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-[1.1] mb-6">
                Building{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C4E] to-[#1B5E2E]">
                  Brighter
                </span>{' '}
                Futures for Kenyan Youth
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Empowering students from vulnerable communities across Kenya through 
                education scholarships from primary school to university—and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate">
                  <Button className="bg-gradient-to-r from-[#E63946] to-[#D62839] hover:from-[#D62839] hover:to-[#C41E2B] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                    <Heart className="w-5 h-5 mr-2 fill-white" />
                    Donate Now
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button variant="outline" className="border-2 border-[#2D9C4E] text-[#2D9C4E] hover:bg-[#2D9C4E] hover:text-white rounded-full px-8 py-6 text-lg transition-all">
                    Our Programs
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hero-image relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/hero_kenyan_student.jpg"
                  alt="Kenyan student"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2D9C4E] to-[#1B5E2E] flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-2xl text-gray-900">12,400+</p>
                    <p className="text-sm text-gray-500">Lives Transformed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="program-card group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-2xl text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center text-[#2D9C4E] font-medium hover:text-[#1B5E2E] transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D9C4E] via-[#1B5E2E] to-[#0D3320]" />
        <div className="absolute inset-0 opacity-20">
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
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg transition-all">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
