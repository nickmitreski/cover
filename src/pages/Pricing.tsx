import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing | FollowFuseApp</title>
        <meta name="description" content="Simple, transparent pricing for Instagram growth." />
      </Helmet>
      
      <div className="bg-gray-100 py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Simple, <span className="text-[#208CFC]">Transparent</span> Pricing
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              One powerful plan to transform your Instagram presence. No hidden fees, no complicated tiers - just everything you need to succeed.
            </p>
          </div>

          {/* Single Pricing Card */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#208CFC] relative group transform hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 inset-x-0 h-2 bg-[#208CFC] rounded-t-xl"></div>
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="bg-[#208CFC] text-white text-xs font-bold uppercase py-1 px-4 rounded-full shadow-md animate-float-small">
                  Most Popular
                </span>
              </div>

              <div className="p-6 md:p-8 pt-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1 animate-fade-in-up">Professional</h3>
                    <p className="text-gray-500 animate-fade-in-up delay-100">For serious Instagram creators</p>
                  </div>
                  <span className="bg-[#208CFC]/10 text-[#208CFC] rounded-full text-xs font-medium px-3 py-1 animate-fade-in-up">
                    Best Value
                  </span>
                </div>
                
                <div className="mb-6 animate-fade-in-up delay-200">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                </div>
                
                <Link 
                  to="/signup?plan=pro" 
                  className="block w-full py-2.5 px-4 text-center rounded-lg bg-[#208CFC] text-white font-medium hover:bg-[#208CFC]/90 transition-all hover:scale-105 duration-300 mb-6 animate-fade-in-up delay-300"
                >
                  Start 7-Day Free Trial
                </Link>
                
                <div className="space-y-3">
                  <div className="flex items-start animate-fade-in-up delay-400">
                    <Check className="h-5 w-5 text-[#208CFC] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 ml-3">AI-Generated Captions & Content</p>
                  </div>
                  <div className="flex items-start animate-fade-in-up delay-400">
                    <Check className="h-5 w-5 text-[#208CFC] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 ml-3">Personalized Content Strategy</p>
                  </div>
                  <div className="flex items-start animate-fade-in-up delay-400">
                    <Check className="h-5 w-5 text-[#208CFC] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 ml-3">Optimized Bio & Profile Setup</p>
                  </div>
                  <div className="flex items-start animate-fade-in-up delay-500">
                    <Check className="h-5 w-5 text-[#208CFC] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 ml-3">Hashtag & Niche Research</p>
                  </div>
                  <div className="flex items-start animate-fade-in-up delay-500">
                    <Check className="h-5 w-5 text-[#208CFC] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 ml-3">1-on-1 Coaching & Support</p>
                  </div>
                  <div className="flex items-start animate-fade-in-up delay-500">
                    <Check className="h-5 w-5 text-[#208CFC] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 ml-3">Brand Collaboration Assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Section */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 max-w-3xl mx-auto p-6 md:p-8 opacity-0 animate-fade-in-up delay-600">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 relative">
              <div className="flex-1 md:pr-16">
                <h3 className="text-xl font-semibold mb-2 animate-fade-in-up">Need More?</h3>
                <p className="text-gray-600 mb-4 animate-fade-in-up delay-100">
                  Looking for custom features or higher volume? Our team can create<br className="hidden md:block" />
                  a tailored solution that perfectly fits your needs.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block py-2.5 px-6 text-center rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all hover:scale-105 duration-300 whitespace-nowrap hover:shadow-lg animate-fade-in-up delay-200"
                >
                  Contact Us
                </Link>
              </div>
              <img 
                src="/images/Enterprise.png" 
                alt="Enterprise solution" 
                className="absolute -right-12 -top-14 w-40 h-40 hidden md:block transform rotate-6 hover:rotate-12 transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface PricingCardProps {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  highlighted: boolean
}

export function PricingCard({ name, price, period, description, features, buttonText, buttonLink, highlighted }: PricingCardProps) {
  return (
    <div className={`flex flex-col p-6 rounded-lg ${
      highlighted 
        ? 'bg-[#208CFC] text-white scale-105 shadow-lg' 
        : 'bg-white text-black shadow-sm'
    }`}>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          {period && <span className={`ml-1 ${highlighted ? 'text-white/80' : 'text-muted'}`}>{period}</span>}
        </div>
        <p className={`mt-2 ${highlighted ? 'text-white/80' : 'text-muted'}`}>{description}</p>
      </div>
      
      <ul className="mb-8 flex-1 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              highlighted ? 'bg-white text-[#208CFC]' : 'bg-[#208CFC]/10 text-[#208CFC]'
            }`}>
              <Check className="h-3 w-3" />
            </div>
            <span className={highlighted ? 'text-white' : ''}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        to={buttonLink}
        className={`btn ${
          highlighted 
            ? 'bg-white text-[#208CFC] hover:bg-white/90'
            : 'btn-primary'
        } w-full`}
      >
        {buttonText}
      </Link>
    </div>
  )
} 