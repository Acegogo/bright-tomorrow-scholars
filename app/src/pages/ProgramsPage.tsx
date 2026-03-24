import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, BookOpen, GraduationCap, Globe, ClipboardCheck, FileText, MessageSquare, ArrowRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    id: 'primary',
    icon: BookOpen,
    title: 'Primary Education Support',
    subtitle: 'Building Strong Foundations',
    description: 'Our primary education program ensures that bright young minds from vulnerable communities have access to quality education from the very beginning.',
    coverage: [
      'Full tuition fees for primary school',
      'School uniforms and shoes',
      'Textbooks and learning materials',
      'School supplies and stationery',
      'Lunch program support',
      'After-school tutoring',
    ],
    eligibility: [
      'Kenyan citizen aged 6-13 years',
      'Demonstrated financial need',
      'Good academic performance',
      'Enrollment in a recognized primary school',
    ],
    color: 'from-[#2D9C4E] to-[#1B5E2E]',
    bgColor: 'bg-[#2D9C4E]/5',
    image: '/primary_students_kenya.jpg',
  },
  {
    id: 'secondary',
    icon: GraduationCap,
    title: 'Secondary School Scholarships',
    subtitle: 'Shaping Future Leaders',
    description: 'Comprehensive scholarships for secondary education, covering all expenses to ensure students can focus on their studies.',
    coverage: [
      'Full boarding school fees',
      'Tuition and examination fees',
      'Books, uniforms, and personal effects',
      'Transportation to and from school',
      'Holiday tutoring programs',
      'Career guidance and counseling',
    ],
    eligibility: [
      'KCPE certificate with good grades',
      'Admission to a recognized secondary school',
      'Demonstrated financial need',
      'Commitment to academic excellence',
    ],
    color: 'from-[#E63946] to-[#D62839]',
    bgColor: 'bg-[#E63946]/5',
    image: '/study_group_kenya.jpg',
  },
  {
    id: 'university',
    icon: Globe,
    title: 'University & International Studies',
    subtitle: 'Reaching for the Stars',
    description: 'Supporting top-performing students through university education and international study opportunities.',
    coverage: [
      'Full university tuition fees',
      'Accommodation and living expenses',
      'Books and study materials',
      'Laptop and technology support',
      'Internship and mentorship programs',
      'International exchange opportunities',
    ],
    eligibility: [
      'KCSE certificate with university entry grades',
      'Admission to a recognized university',
      'Outstanding academic performance',
      'Leadership potential and community involvement',
    ],
    color: 'from-[#F4A261] to-[#E76F51]',
    bgColor: 'bg-[#F4A261]/5',
    image: '/tech_students_kenya.jpg',
  },
  {
    id: 'sports',
    icon: Award,
    title: 'Sports Tournaments',
    subtitle: 'Nurturing Talent & Unity',
    description: 'We organize sports tournaments to nurture local athletic talent, promote community unity, and raise funds for our educational scholarship programs.',
    coverage: [
      'Sports equipment and gear',
      'Tournament organization and logistics',
      'Coaching and mentorship clinics',
      'Community engagement events',
      'Trophies and recognition awards',
      'Talent scouting opportunities',
    ],
    eligibility: [
      'Youth from local communities',
      'Passion for sports and teamwork',
      'Commitment to community values',
      'Willingness to participate in mentorship',
    ],
    color: 'from-[#9B5DE5] to-[#7B2CBF]',
    bgColor: 'bg-[#9B5DE5]/5',
    image: '/sports_tournament.png',
  },
];

const applicationSteps = [
  {
    icon: ClipboardCheck,
    title: 'Check Eligibility',
    description: 'Review the eligibility criteria for your desired program to ensure you qualify.',
  },
  {
    icon: FileText,
    title: 'Submit Application',
    description: 'Complete the online application form and upload required documents.',
  },
  {
    icon: MessageSquare,
    title: 'Interview & Assessment',
    description: 'Shortlisted candidates will be invited for an interview and academic assessment.',
  },
];

export default function ProgramsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.program-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.program-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.programs-section',
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.step-card',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.application-section',
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
      <section className="relative py-24 bg-gradient-to-br from-[#2D9C4E]/10 via-white to-[#F4A261]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="program-hero-content">
            <span className="inline-block px-4 py-2 bg-[#2D9C4E]/10 text-[#2D9C4E] rounded-full text-sm font-medium mb-6">
              Our Programs
            </span>
            <h1 className="font-['Montserrat'] font-black text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-6">
              Education at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C4E] to-[#1B5E2E]">
                Every Level
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From primary school to university and beyond, we provide comprehensive 
              support to ensure every scholar reaches their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`program-card grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 ${program.bgColor} rounded-full mb-6`}>
                    <program.icon className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${program.color}`} />
                    <span className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${program.color}`}>
                      {program.subtitle}
                    </span>
                  </div>
                  <h2 className="font-['Montserrat'] font-black text-3xl lg:text-4xl text-gray-900 mb-4">
                    {program.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {program.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-lg text-gray-900 mb-4">
                        What's Covered
                      </h3>
                      <ul className="space-y-2">
                        {program.coverage.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className={`w-5 h-5 flex-shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${program.color}`} />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-lg text-gray-900 mb-4">
                        Eligibility
                      </h3>
                      <ul className="space-y-2">
                        {program.eligibility.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className={`w-5 h-5 flex-shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${program.color}`} />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a href="https://wa.me/254725673476" target="_blank" rel="noopener noreferrer">
                    <Button className={`bg-gradient-to-r ${program.color} text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl`}>
                      Apply via WhatsApp
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="application-section py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#F4A261]/10 text-[#E76F51] rounded-full text-sm font-medium mb-4">
              How to Apply
            </span>
            <h2 className="font-['Montserrat'] font-black text-4xl text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to apply for a scholarship with Bright Tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => (
              <div
                key={index}
                className="step-card bg-white rounded-3xl p-8 shadow-lg text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#2D9C4E] to-[#1B5E2E] flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="w-10 h-10 mx-auto -mt-16 mb-6 rounded-full bg-[#E63946] flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Have questions about the application process? We're here to help.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-[#2D9C4E] text-[#2D9C4E] hover:bg-[#2D9C4E] hover:text-white rounded-full px-8 py-6">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
