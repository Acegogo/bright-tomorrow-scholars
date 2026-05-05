import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/programs', label: 'Our Programs' },
  { path: '/stories', label: 'Success Stories' },
  { path: '/donate', label: 'Donate' },
  { path: '/contact', label: 'Get in Touch' },
];

const programs = [
  { label: 'Primary Education' },
  { label: 'Secondary School' },
  { label: 'University Scholarships' },
  { label: 'Vocational Training' },
  { label: 'Mentorship Program' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9C4E] rounded-md">
              <img
                src="/bright-logo.png"
                alt="Bright Tomorrow Scholars Foundation"
                className="h-20 sm:h-24 lg:h-[6.75rem] w-auto max-w-[380px] sm:max-w-[420px] object-contain object-left brightness-[1.06] contrast-105 saturate-[1.02]"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering Kenyan students through education for over 20 years. 
              Building brighter futures, one scholar at a time.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2D9C4E] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2D9C4E] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2D9C4E] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2D9C4E] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#2D9C4E] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-lg mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <span className="text-gray-400 text-sm">{program.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2D9C4E] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Olympia Building, Nyahururu Town<br />
                  Koinange Street, Floor 2, Room 43<br />
                  Nyahururu, Laikipia County<br />
                  P.O. Box 1368, 20300 Nyahururu, Kenya<br />
                  <span className="text-gray-500">Regional hubs: Mbeere, Embu County · Mwingi North, Kitui County</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2D9C4E] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+254 722 931145</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2D9C4E] flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@brightscholarstomorrow.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Bright Tomorrow Scholars Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
