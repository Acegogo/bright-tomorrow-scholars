import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Gift, Repeat, Building2, Check, Shield, Users, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

gsap.registerPlugin(ScrollTrigger);

const donationOptions = [
  { amount: 1000, label: 'KSh 1,000', description: 'School supplies for one student' },
  { amount: 5000, label: 'KSh 5,000', description: 'Monthly tuition support' },
  { amount: 10000, label: 'KSh 10,000', description: 'Full term fees for primary school' },
  { amount: 25000, label: 'KSh 25,000', description: 'Secondary school term fees' },
  { amount: 50000, label: 'KSh 50,000', description: 'University semester support' },
  { amount: 100000, label: 'KSh 100,000', description: 'Full year scholarship' },
];

const donationTypes = [
  {
    id: 'one-time',
    icon: Gift,
    title: 'One-Time Donation',
    description: 'Make a single donation to support a student immediately. Every contribution makes a difference.',
    color: 'from-[#2D9C4E] to-[#1B5E2E]',
  },
  {
    id: 'monthly',
    icon: Repeat,
    title: 'Monthly Giving',
    description: 'Become a sustaining supporter with monthly donations. Provide steady, predictable support for our scholars.',
    color: 'from-[#E63946] to-[#D62839]',
  },
  {
    id: 'corporate',
    icon: Building2,
    title: 'Corporate Partnership',
    description: 'Partner with us to sponsor a cohort of students in your region. Make a lasting impact on Kenyan education.',
    color: 'from-[#F4A261] to-[#E76F51]',
  },
];

const impactExamples = [
  { amount: 'KSh 1,000', impact: 'Provides school supplies for one student' },
  { amount: 'KSh 5,000', impact: 'Covers monthly tuition for a primary school student' },
  { amount: 'KSh 10,000', impact: 'Pays for a full term of secondary school' },
  { amount: 'KSh 50,000', impact: 'Supports a university student for a semester' },
  { amount: 'KSh 100,000', impact: 'Funds a full year scholarship including accommodation' },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10000);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [isProcessing, setIsProcessing] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.donate-hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.donation-type-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.donation-types-section',
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.impact-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.impact-section',
            start: 'top 75%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleDonate = async () => {
    const amount = selectedAmount || parseInt(customAmount) || 0;
    if (amount < 100) {
      alert('Please enter a valid amount (minimum KSh 100)');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Thank you for your donation of KSh ${amount.toLocaleString()}! You will receive a confirmation email shortly.`);
    }, 2000);
  };

  const finalAmount = selectedAmount || parseInt(customAmount) || 0;

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#E63946]/10 via-white to-[#2D9C4E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="donate-hero-content">
              <span className="inline-block px-4 py-2 bg-[#E63946]/10 text-[#E63946] rounded-full text-sm font-medium mb-6">
                Make a Difference
              </span>
              <h1 className="font-['Montserrat'] font-black text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-6">
                Every Donation{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#D62839]">
                  Changes a Life
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Your generosity directly supports Kenyan students from vulnerable 
                communities, giving them the opportunity to build a brighter future 
                through education.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D9C4E] to-[#1B5E2E] border-2 border-white flex items-center justify-center"
                    >
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">2,500+</span> donors have contributed this year
                </p>
              </div>
            </div>

            {/* Donation Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="font-['Montserrat'] font-bold text-2xl text-gray-900 mb-2">
                  Make Your Donation
                </h2>
                <p className="text-gray-600">Choose an amount to support our scholars</p>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {donationOptions.map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => {
                      setSelectedAmount(option.amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedAmount === option.amount
                        ? 'border-[#2D9C4E] bg-[#2D9C4E]/5'
                        : 'border-gray-200 hover:border-[#2D9C4E]/50'
                    }`}
                  >
                    <p className="font-bold text-gray-900">{option.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or enter custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    KSh
                  </span>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-14 py-6 text-lg"
                  />
                </div>
              </div>

              {/* Donation Type */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Donation Type
                </label>
                <div className="flex gap-3">
                  {['one-time', 'monthly'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setDonationType(type)}
                      className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium capitalize transition-all ${
                        donationType === type
                          ? 'border-[#2D9C4E] bg-[#2D9C4E] text-white'
                          : 'border-gray-200 text-gray-700 hover:border-[#2D9C4E]/50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donate Button */}
              <Button
                onClick={handleDonate}
                disabled={isProcessing || finalAmount < 100}
                className="w-full bg-gradient-to-r from-[#E63946] to-[#D62839] hover:from-[#D62839] hover:to-[#C41E2B] text-white rounded-xl py-6 text-lg font-bold shadow-lg"
              >
                {isProcessing ? (
                  'Processing...'
                ) : (
                  <>
                    <Heart className="w-5 h-5 mr-2 fill-white" />
                    Donate KSh {finalAmount > 0 ? finalAmount.toLocaleString() : '0'}
                  </>
                )}
              </Button>

              {/* Security Note */}
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Secure payment processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Types */}
      <section className="donation-types-section py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#F4A261]/10 text-[#E76F51] rounded-full text-sm font-medium mb-4">
              Ways to Give
            </span>
            <h2 className="font-['Montserrat'] font-black text-4xl text-gray-900 mb-4">
              Choose How You Want to Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer multiple ways to support our mission. Choose the option that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {donationTypes.map((type) => (
              <div
                key={type.id}
                className={`donation-type-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 ${
                  donationType === type.id ? 'border-[#2D9C4E]' : 'border-transparent'
                }`}
                onClick={() => setDonationType(type.id)}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#2D9C4E]/10 text-[#2D9C4E] rounded-full text-sm font-medium mb-4">
                Your Impact
              </span>
              <h2 className="font-['Montserrat'] font-black text-4xl text-gray-900 mb-6">
                See How Your Donation Helps
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Every shilling you donate goes directly to supporting our scholars. 
                Here's how your contribution makes a difference:
              </p>

              <div className="space-y-4">
                {impactExamples.map((item, index) => (
                  <div
                    key={index}
                    className="impact-item flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#2D9C4E]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-[#2D9C4E]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.amount}</p>
                      <p className="text-gray-600 text-sm">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/graduation_kenya.jpg"
                  alt="Graduation celebration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2D9C4E] to-[#1B5E2E] flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-2xl text-gray-900">94%</p>
                    <p className="text-sm text-gray-500">Graduation Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-24 bg-gradient-to-br from-[#2D9C4E] to-[#1B5E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                Corporate Partnership
              </span>
              <h2 className="font-['Montserrat'] font-black text-4xl mb-6">
                Partner With Us
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Join leading Kenyan companies in making a lasting impact on education. 
                Corporate partnerships help us reach more students and create sustainable change.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#F4A261] flex-shrink-0" />
                  <span className="text-white/90">Sponsor a cohort of students in your region</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#F4A261] flex-shrink-0" />
                  <span className="text-white/90">Mentorship and internship opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#F4A261] flex-shrink-0" />
                  <span className="text-white/90">Brand visibility and CSR recognition</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#F4A261] flex-shrink-0" />
                  <span className="text-white/90">Tax-deductible contributions</span>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#2D9C4E] rounded-full px-8 py-4 font-bold hover:bg-gray-100 transition-colors"
              >
                Become a Partner
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6">
                Current Corporate Partners
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Safaricom', 'KCB Bank', 'Equity Bank', 'Kenya Power', 'Kenyatta University', 'University of Nairobi'].map((partner) => (
                  <div
                    key={partner}
                    className="bg-white/10 rounded-xl p-4 text-center text-white font-medium"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
