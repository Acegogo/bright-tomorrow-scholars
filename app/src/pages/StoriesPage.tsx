import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, MapPin, GraduationCap, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    name: 'Amina Hassan',
    role: 'Engineering Graduate',
    location: 'Nairobi',
    image: '/female_graduate_kenya.jpg',
    quote: 'I was the first in my family to attend university. The foundation didn\'t just pay my tuition—they believed in me when no one else did. Today, I\'m a civil engineer building roads across Kenya.',
    achievement: 'First Class Honors, University of Nairobi',
    currentRole: 'Civil Engineer at Kenya National Highways Authority',
    rating: 5,
  },
  {
    name: 'John Ochieng',
    role: 'Medical Doctor',
    location: 'Kisumu',
    image: '/medical_student_kenya.jpg',
    quote: 'Growing up in a village, becoming a doctor seemed like an impossible dream. Bright Tomorrow made it possible. Now I\'m giving back by treating patients in underserved communities.',
    achievement: 'MBChB, Moi University',
    currentRole: 'Medical Officer at Jaramogi Oginga Odinga Hospital',
    rating: 5,
  },
  {
    name: 'Grace Wanjiku',
    role: 'Software Engineer',
    location: 'Nairobi',
    image: '/campus_kenya.jpg',
    quote: 'The mentorship I received was invaluable. My mentor guided me through my studies and helped me secure my first job. Now I work at a global tech company.',
    achievement: 'BSc Computer Science, Strathmore University',
    currentRole: 'Software Engineer at Microsoft',
    rating: 5,
  },
  {
    name: 'Peter Kamau',
    role: 'Teacher',
    location: 'Nakuru',
    image: '/hero_kenyan_student.jpg',
    quote: 'Education changed my life, and now I\'m changing lives through education. I teach mathematics at a high school and inspire the next generation of scholars.',
    achievement: 'BEd Mathematics, Kenyatta University',
    currentRole: 'Mathematics Teacher at Nakuru High School',
    rating: 5,
  },
  {
    name: 'Faith Akinyi',
    role: 'Lawyer',
    location: 'Mombasa',
    image: '/graduation_kenya.jpg',
    quote: 'The foundation saw potential in me when I couldn\'t see it in myself. Their support gave me the confidence to pursue law and fight for justice.',
    achievement: 'LLB, University of Nairobi',
    currentRole: 'Advocate at the High Court of Kenya',
    rating: 5,
  },
  {
    name: 'David Mutua',
    role: 'Entrepreneur',
    location: 'Machakos',
    image: '/study_group_kenya.jpg',
    quote: 'Beyond the financial support, the foundation taught me leadership and entrepreneurship. I\'ve started my own business and now employ 20 people in my community.',
    achievement: 'BCom, University of Nairobi',
    currentRole: 'Founder & CEO, Mutua Enterprises',
    rating: 5,
  },
];

const stats = [
  { value: '12,400+', label: 'Students Supported' },
  { value: '8,500+', label: 'Graduates' },
  { value: '3,200+', label: 'Currently Studying' },
  { value: '450+', label: 'Studying Abroad' },
];

export default function StoriesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stories-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.story-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stories-grid',
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
          <div className="stories-hero-content">
            <span className="inline-block px-4 py-2 bg-[#E63946]/10 text-[#E63946] rounded-full text-sm font-medium mb-6">
              Success Stories
            </span>
            <h1 className="font-['Montserrat'] font-black text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-6">
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C4E] to-[#1B5E2E]">
                Scholars
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Real stories of transformation, perseverance, and success. Our scholars 
              are proof that education can change lives and build a brighter future.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <p className="font-['Montserrat'] font-black text-3xl text-[#2D9C4E] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="stories-grid py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="story-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-1">
                      {story.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <MapPin className="w-4 h-4" />
                      {story.location}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#F4A261] fill-[#F4A261]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#2D9C4E]/20" />
                    <p className="text-gray-600 leading-relaxed pl-4">
                      {story.quote}
                    </p>
                  </div>

                  {/* Achievement */}
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-[#2D9C4E] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{story.achievement}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-[#E63946] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{story.currentRole}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#2D9C4E] to-[#1B5E2E] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16 text-white">
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                  Featured Scholar
                </span>
                <h2 className="font-['Montserrat'] font-black text-4xl mb-4">
                  "Education Gave Me a Voice"
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Meet Dr. Sarah Njeri, a Bright Tomorrow alumna who is now a leading 
                  researcher in renewable energy. Her journey from a small village in 
                  Kiambu to earning a PhD from MIT is a testament to the power of 
                  education and perseverance.
                </p>
                <p className="text-white/80 leading-relaxed mb-8">
                  "The foundation didn't just fund my education; they invested in my 
                  dreams. Today, I'm working on sustainable energy solutions that will 
                  power Kenya's future."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Dr. Sarah Njeri</p>
                    <p className="text-white/80">PhD Renewable Energy, MIT</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 lg:h-auto">
                <img
                  src="/awards_kenya.jpg"
                  alt="Featured scholar"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Montserrat'] font-black text-4xl text-gray-900 mb-6">
            Be Part of the Success Story
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Your support can help create more success stories like these. Every donation 
            brings us closer to a Kenya where every child has access to quality education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E63946] to-[#D62839] text-white rounded-full px-8 py-4 font-medium hover:shadow-lg transition-shadow"
            >
              Donate Today
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#2D9C4E] text-[#2D9C4E] rounded-full px-8 py-4 font-medium hover:bg-[#2D9C4E] hover:text-white transition-colors"
            >
              Apply for Scholarship
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
