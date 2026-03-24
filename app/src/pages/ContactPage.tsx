import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: [
      'Bright Tomorrow Scholars Foundation',
      'Kimathi Street, Nairobi CBD',
      'P.O. Box 12345-00100',
      'Nairobi, Kenya',
    ],
    color: 'bg-[#2D9C4E]/10 text-[#2D9C4E]',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: [
      '+254 725 673476',
      'Mon-Fri, 8am-5pm EAT',
    ],
    color: 'bg-[#E63946]/10 text-[#E63946]',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: [
      'info@brightscholarstomorrow.org',
    ],
    color: 'bg-[#F4A261]/10 text-[#E76F51]',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: [
      'Monday - Friday: 8:00 AM - 5:00 PM',
      'Saturday: 9:00 AM - 1:00 PM',
      'Sunday: Closed',
    ],
    color: 'bg-[#9B5DE5]/10 text-[#9B5DE5]',
  },
];

const regionalOffices = [
  {
    city: 'Nairobi',
    address: 'Kimathi Street, Nairobi CBD',
    phone: '+254 725 673476',
  },
  {
    city: 'Mombasa',
    address: 'Moi Avenue, Mombasa CBD',
    phone: '+254 725 673476',
  },
  {
    city: 'Kisumu',
    address: 'Oginga Odinga Street, Kisumu',
    phone: '+254 725 673476',
  },
  {
    city: 'Nakuru',
    address: 'Kenyatta Avenue, Nakuru',
    phone: '+254 725 673476',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.contact-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.contact-info-section',
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.office-card',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.offices-section',
            start: 'top 75%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#2D9C4E]/10 via-white to-[#F4A261]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="contact-hero-content">
            <span className="inline-block px-4 py-2 bg-[#2D9C4E]/10 text-[#2D9C4E] rounded-full text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h1 className="font-['Montserrat'] font-black text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-6">
              We'd Love to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C4E] to-[#1B5E2E]">
                Hear From You
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Whether you're interested in applying for a scholarship, making a donation, 
              or partnering with us, we're here to help. Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="contact-card bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl ${info.color} flex items-center justify-center mb-4`}>
                  <info.icon className="w-7 h-7" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h2 className="font-['Montserrat'] font-bold text-2xl text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="py-6"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="py-6"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 725 673476"
                      className="py-6"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="py-6"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#2D9C4E] to-[#1B5E2E] hover:from-[#1B5E2E] hover:to-[#0D3320] text-white rounded-xl py-6 text-lg font-bold"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Social */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-80">
                <div className="w-full h-full bg-gradient-to-br from-[#2D9C4E]/20 to-[#F4A261]/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#2D9C4E] mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Nairobi, Kenya</p>
                    <p className="text-gray-500 text-sm">Kimathi Street, Nairobi CBD</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="font-['Montserrat'] font-bold text-xl text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Follow us on social media for updates on our programs, success stories, and events.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white text-[#1877F2] transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white text-[#1DA1F2] transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#E4405F]/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white text-[#E4405F] transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="offices-section py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#F4A261]/10 text-[#E76F51] rounded-full text-sm font-medium mb-4">
              Regional Offices
            </span>
            <h2 className="font-['Montserrat'] font-black text-4xl text-gray-900 mb-4">
              We're Across Kenya
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our regional offices for in-person support and inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalOffices.map((office, index) => (
              <div
                key={index}
                className="office-card bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2D9C4E]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#2D9C4E]" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-gray-900 mb-2">
                  {office.city}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                <p className="text-[#2D9C4E] font-medium text-sm">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 bg-gradient-to-br from-[#2D9C4E] to-[#1B5E2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Montserrat'] font-black text-4xl text-white mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Check out our frequently asked questions or reach out to us directly. 
            We're here to help with any inquiries about our programs, applications, or donations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@brightscholarstomorrow.org"
              className="inline-flex items-center gap-2 bg-white text-[#2D9C4E] rounded-full px-8 py-4 font-bold hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href="tel:+254725673476"
              className="inline-flex items-center gap-2 border-2 border-white text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
            <a
              href="https://wa.me/254725673476"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white rounded-full px-8 py-4 font-bold hover:bg-[#128C7E] transition-colors"
            >
              {/* Using Phone icon for WhatsApp as standard Lucide doesn't have a dedicated WhatsApp icon */}
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
