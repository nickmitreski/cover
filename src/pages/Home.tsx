import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, LineChart, Wand2, Target as TargetIcon } from 'lucide-react'
import Features from '@/components/sections/Features'
import FeatureHighlights from '@/components/sections/FeatureHighlights'
import Pricing from '@/components/sections/Pricing'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>FollowFuseApp - Social Media Growth & Management Platform</title>
        <meta name="description" content="Effortlessly optimize and elevate your social media presence with AI-driven tools and tailored services." />
      </Helmet>

      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-white pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                <span className="block opacity-0 animate-[slideIn_0.5s_ease-out_0.2s_forwards]">The Ultimate</span>
                <span className="block text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent opacity-0 animate-[slideIn_0.5s_ease-out_0.4s_forwards]">Social Media Solution</span>
              </h1>

              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-[slideIn_0.5s_ease-out_0.6s_forwards]">
                Effortlessly optimize and elevate your presence with AI-driven tools and tailored services.
              </p>

              <div className="mt-10 opacity-0 animate-[slideIn_0.5s_ease-out_0.8s_forwards]">
                <Link to="/signup" className="w-full sm:w-auto px-8 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block sm:px-24">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Feature Tabs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto opacity-0 animate-[slideIn_0.5s_ease-out_1s_forwards]">
              {/* Analytics Tab */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#208CFC]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LineChart className="w-6 h-6 text-[#208CFC]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Smart Analytics</h3>
                <p className="text-sm text-gray-600 mb-4">Track your growth metrics</p>
                <Link to="/features/analytics" className="text-[#208CFC] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* AI Content Tab */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#208CFC]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Wand2 className="w-6 h-6 text-[#208CFC]" />
                </div>
                <h3 className="font-bold text-lg mb-2">AI Content</h3>
                <p className="text-sm text-gray-600 mb-4">Generate engaging posts</p>
                <Link to="/features/content" className="text-[#208CFC] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Strategy Tab */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#208CFC]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TargetIcon className="w-6 h-6 text-[#208CFC]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Growth Strategy</h3>
                <p className="text-sm text-gray-600 mb-4">Get personalized guidance</p>
                <Link to="/features/strategy" className="text-[#208CFC] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div className="flex-1 flex flex-col">
          <Features />
          <FeatureHighlights />
          <Pricing />
        </div>
      </main>
    </>
  )
} 