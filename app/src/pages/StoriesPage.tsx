import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, MapPin, GraduationCap, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    name: 'Denis',
    role: 'Alumnus',
    location: 'Kenya',
    image: '/hero_kenyan_student.jpg',
    quote: 'The Bright Tomorrow Scholars Foundation gave me hope when I had none. Their support has been the foundation of my success today.',
    achievement: 'University Graduate',
    currentRole: 'Professional in Kenya',
    rating: 5,
  },
  {
    name: 'Elijah',
    role: 'Scholar',
    location: 'Kenya',
    image: '/study_group_kenya.jpg',
    quote: 'I am forever grateful for the opportunity to pursue my education without the burden of financial stress.',
    achievement: 'Academic Excellence',
    currentRole: 'University Student',
    rating: 5,
  },
  {
    name: 'Ruth',
    role: 'Alumna',
    location: 'Kenya',
    image: '/female_graduate_kenya.jpg',
    quote: 'Through the foundation, I learned that my dreams are valid. I am now working towards empowering others in my community.',
    achievement: 'Degree Holder',
    currentRole: 'Community Leader',
    rating: 5,
  },
  {
    name: 'Peter',
    role: 'Scholar',
    location: 'Kenya',
    image: '/medical_student_kenya.jpg',
    quote: 'The mentorship and guidance I received were just as valuable as the financial support. Thank you for believing in me.',
    achievement: 'Dean\'s List',
    currentRole: 'Medical Student',
    rating: 5,
  },
  {
    name: 'Diana',
    role: 'Alumna',
    location: 'Kenya',
    image: '/campus_kenya.jpg',
    quote: 'My educational journey was made possible by the generous donors of this foundation. I am a proud product of your kindness.',
    achievement: 'First Class Honors',
    currentRole: 'Corporate Professional',
    rating: 5,
  },
  {
    name: 'Wawira',
    role: 'Scholar',
    location: 'Kenya',
    image: '/graduation_kenya.jpg',
    quote: 'Every day I strive to make the foundation proud. The scholarship gave me wings to fly high.',
    achievement: 'Student Leader',
    currentRole: 'Undergraduate',
    rating: 5,
  },
  {
    name: 'Baba Joy',
    role: 'Parent',
    location: 'Kenya',
    image: '/study_group_kenya.jpg',
    quote: 'As a parent, seeing my daughter Joy get the education she deserves brings tears to my eyes. God bless the Bright Tomorrow family.',
    achievement: 'Proud Parent',
    currentRole: 'Business Owner',
    rating: 5,
  },
  {
    name: 'Esther',
    role: 'Alumna',
    location: 'Kenya',
    image: '/female_graduate_kenya.jpg',
    quote: 'I am building my career and supporting my younger siblings, all thanks to the strong foundation I received here.',
    achievement: 'Professional Certification',
    currentRole: 'Financial Analyst',
    rating: 5,
  },
  {
    name: 'Kimani',
    role: 'Scholar',
    location: 'Kenya',
    image: '/hero_student.jpg',
    quote: 'The holiday tuition and mentorship camps truly shaped my character and academic focus.',
    achievement: 'Top KCSE Performer',
    currentRole: 'Engineering Student',
    rating: 5,
  },
  {
    name: 'Carol',
    role: 'Alumna',
    location: 'Kenya',
    image: '/medical_student_kenya.jpg',
    quote: 'I look back at where I came from, and I know it is by God\'s grace and the foundation\'s help that I am here today.',
    achievement: 'Master\'s Degree Candidate',
    currentRole: 'Educator',
    rating: 5,
  },
  {
    name: 'Jesse',
    role: 'Scholar',
    location: 'Kenya',
    image: '/campus_kenya.jpg',
    quote: 'The scholarship relieved my family of a huge burden. I am committed to making the most of this opportunity.',
    achievement: 'Excellence in Sciences',
    currentRole: 'High School Student',
    rating: 5,
  },
  {
    name: 'Brighitte Njoki Muchemi',
    role: 'Alumna',
    location: 'Kenya',
    image: '/graduation_kenya.jpg',
    quote: 'I am proud to be associated with an organization that genuinely cares about the future of Kenyan youth.',
    achievement: 'University Graduate',
    currentRole: 'Professional',
    rating: 5,
  }
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
                className="story-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group border border-gray-100"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#2D9C4E] to-[#1B5E2E] p-8 text-white">
                  <h3 className="font-['Montserrat'] font-bold text-2xl mb-2">
                    {story.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <MapPin className="w-4 h-4" />
                    {story.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#F4A261] fill-[#F4A261]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-10 flex-grow">
                    <Quote className="absolute -top-3 -left-3 w-10 h-10 text-[#2D9C4E]/10" />
                    <p className="text-gray-700 leading-relaxed pl-5 font-medium italic text-lg">
                      "{story.quote}"
                    </p>
                  </div>

                  {/* Achievement */}
                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#2D9C4E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D9C4E] group-hover:text-white transition-colors duration-300">
                        <GraduationCap className="w-5 h-5 text-[#2D9C4E] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-bold text-gray-800">{story.achievement}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E63946]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E63946] group-hover:text-white transition-colors duration-300">
                        <Briefcase className="w-5 h-5 text-[#E63946] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-bold text-gray-800">{story.currentRole}</span>
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
                  "The Glue That Holds The Family Together"
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Meet Wilson, a Bright Tomorrow alumnus who is currently pursuing his PhD in the USA.
                  His journey exemplifies the ripple effect of education and the deep gratitude our scholars hold.
                </p>
                <p className="text-white/80 leading-relaxed mb-8 italic">
                  "Thank you for always being there for your family and siblings. Your love, strength, and sacrifices never go unnoticed. You carry everyone with patience, kindness, and a big heart, even when it’s not easy. You are the glue that holds the family together, the voice of comfort in hard times, and the reason many of us keep going. We appreciate you more than words can say, and we are truly blessed to have you."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Wilson</p>
                    <p className="text-white/80">Pursuing PhD, USA</p>
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
