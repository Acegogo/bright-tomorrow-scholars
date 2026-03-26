import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Heart, Award, Users, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We believe every child deserves access to quality education regardless of their background.',
    color: 'bg-[#E63946]/10 text-[#E63946]',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, from selection to support.',
    color: 'bg-[#2D9C4E]/10 text-[#2D9C4E]',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build lasting relationships between scholars, mentors, and supporters.',
    color: 'bg-[#F4A261]/10 text-[#E76F51]',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We operate with transparency and accountability in all our programs.',
    color: 'bg-[#9B5DE5]/10 text-[#9B5DE5]',
  },
];

const milestones = [
  { year: '2003', event: 'Foundation established in Nairobi' },
  { year: '2008', event: 'First 100 students graduate from university' },
  { year: '2012', event: 'Expanded to secondary school scholarships' },
  { year: '2016', event: 'Launched international study program' },
  { year: '2020', event: 'Reached 10,000 students supported' },
  { year: '2024', event: 'Celebrating 20+ years of impact' },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.milestone-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.timeline-section',
            start: 'top 75%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#2D9C4E]/5 to-[#F4A261]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="about-hero-content">
              <span className="inline-block px-4 py-2 bg-[#2D9C4E]/10 text-[#2D9C4E] rounded-full text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="font-['Montserrat'] font-black text-4xl lg:text-5xl text-gray-900 leading-[1.1] mb-6">
                The Vision of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C4E] to-[#1B5E2E]">
                  Teacher Nice
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Bright Tomorrow Scholars Foundation was born out of the unmatched compassion and unyielding resilience of our founder, Niceta Ndege—affectionately and popularly known as "Teacher Nice" by her students and the countless beneficiaries of this foundation. 
                Her journey began right inside her own classrooms. Day after day, Teacher Nice noticed brilliant but deeply needy students struggling simply because they lacked resources. 
                Unable to look away, she took it upon herself to act.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Armed with nothing but faith and an unshakable set of values, Teacher Nice started this mission alone, going from door to door 
                to support the most vulnerable. Her unwavering commitment to her students, even in the face of daunting financial and emotional challenges, 
                formed the very bedrock of the foundation we see today.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a profoundly God-fearing woman who firmly believes that God's grace is sufficient for her, she has nurtured this 
                foundation from its humble beginnings. Because of the unmatched joy in charity shown by Teacher Nice, countless needy students from Kenya 
                have not only reached their dreams but have soared beyond them, with some even securing opportunities to study abroad.
              </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/hero_slide_1.png"
                  alt="Bright Tomorrow Scholars Foundation impact"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-4 lg:-right-6 bg-white rounded-2xl shadow-xl p-6 z-10 hidden sm:block">
                <p className="font-['Montserrat'] font-bold text-3xl text-[#2D9C4E]">20+</p>
                <p className="text-gray-600">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#2D9C4E] to-[#1B5E2E] rounded-3xl p-10 text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-['Montserrat'] font-bold text-3xl mb-4">Our Mission</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                To provide comprehensive educational support to deserving students from 
                vulnerable communities in Kenya, empowering them to achieve their full 
                potential and become agents of positive change in society.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E63946] to-[#D62839] rounded-3xl p-10 text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-['Montserrat'] font-bold text-3xl mb-4">Our Vision</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                A Kenya where every child has access to quality education and the 
                opportunity to build a brighter future, regardless of their socioeconomic 
                background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#F4A261]/10 text-[#E76F51] rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-['Montserrat'] font-black text-4xl text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from selecting scholars to 
              supporting them throughout their educational journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#9B5DE5]/10 text-[#9B5DE5] rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="font-['Montserrat'] font-black text-4xl text-gray-900 mb-4">
              Milestones Through the Years
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2D9C4E] via-[#F4A261] to-[#E63946]" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="milestone-item relative flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-[#2D9C4E] flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                    <span className="font-['Montserrat'] font-bold text-sm text-[#2D9C4E]">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6">
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-[#2D9C4E]/5 to-[#F4A261]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#2D9C4E]/10 text-[#2D9C4E] rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="font-['Montserrat'] font-black text-4xl text-gray-900 mb-4">
              Dedicated to Making a Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team of passionate educators, administrators, and volunteers work 
              tirelessly to support our scholars.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-[#F4A261] to-[#E76F51] flex items-center justify-center">
                <Heart className="w-20 h-20 text-white/50" />
              </div>
              <div className="p-6">
                <h3 className="font-['Montserrat'] font-bold text-xl text-gray-900 mb-1">
                  Niceta Ndege (Teacher Nice)
                </h3>
                <p className="text-[#2D9C4E] font-medium mb-3">Founder & Chairperson</p>
                <p className="text-gray-600 text-sm">
                  Known popularly and affectionately as "Teacher Nice" to her students and beneficiaries, her journey began right in her own classrooms where she first saw the deep need among her brilliant scholars. Her unmatched joy in charity and profound resilience 
                  have transformed countless lives. As a God-fearing woman relying entirely on His grace, 
                  Teacher Nice's strong moral values continue to inspire and drive our mission to see needy Kenyan students achieve their dreams.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-[#2D9C4E] to-[#1B5E2E] flex items-center justify-center">
                <BookOpen className="w-20 h-20 text-white/50" />
              </div>
              <div className="p-6">
                <h3 className="font-['Montserrat'] font-bold text-xl text-gray-900 mb-1">
                  Dr. James Ochieng
                </h3>
                <p className="text-[#2D9C4E] font-medium mb-3">Executive Director</p>
                <p className="text-gray-600 text-sm">
                  Dr. Ochieng oversees all operations and strategic planning, bringing 
                  15 years of nonprofit leadership experience to the foundation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-[#E63946] to-[#D62839] flex items-center justify-center">
                <Users className="w-20 h-20 text-white/50" />
              </div>
              <div className="p-6">
                <h3 className="font-['Montserrat'] font-bold text-xl text-gray-900 mb-1">
                  Sarah Akinyi
                </h3>
                <p className="text-[#E63946] font-medium mb-3">Program Manager</p>
                <p className="text-gray-600 text-sm">
                  Sarah manages our scholarship programs and student support services, 
                  ensuring every scholar receives the help they need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
