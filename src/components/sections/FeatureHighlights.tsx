import { Link } from 'react-router-dom'
import { ArrowRight, Target, MessageSquare, Zap, PenLine, Layout, Search, Hash, Users2, Users } from 'lucide-react'

export default function FeatureHighlights() {
  return (
    <section className="py-16 md:py-24 bg-white -mt-1">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#208CFC] text-white rounded-full px-4 py-1 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 opacity-0 animate-fade-in-up">
            Transform your <span className="text-[#208CFC]">Social Media</span> presence
          </h2>
          
          <p className="text-lg text-gray-600">
            Our platform combines AI technology with strategic expertise to help you create engaging content and grow your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div 
            className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#208CFC] hover:shadow-lg transition-all duration-300"
          >
            <div className="text-[#208CFC] mb-6">
              <PenLine className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Copywriting</h3>
            <p className="text-gray-600 mb-4">Generate engaging captions and content that resonates with your audience.</p>
            <Link to="/features/ai-copywriting" className="text-[#208CFC] font-medium inline-flex items-center group">
              Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>

          <div 
            className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#208CFC] hover:shadow-lg transition-all duration-300"
          >
            <div className="text-[#208CFC] mb-6">
              <MessageSquare className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Content Generator</h3>
            <p className="text-gray-600 mb-4">Create diverse content types with our advanced AI generation tools.</p>
            <Link to="/features/ai-content-generator" className="text-[#208CFC] font-medium inline-flex items-center group">
              Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>

          <div 
            className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#208CFC] hover:shadow-lg transition-all duration-300"
          >
            <div className="text-[#208CFC] mb-6">
              <Layout className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-3">Content Plan & Strategy</h3>
            <p className="text-gray-600 mb-4">Develop effective content strategies tailored to your goals.</p>
            <Link to="/features/content-plan-strategy" className="text-[#208CFC] font-medium inline-flex items-center group">
              Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>

          <div 
            className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#208CFC] hover:shadow-lg transition-all duration-300"
          >
            <div className="text-[#208CFC] mb-6">
              <Search className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-3">Niche Research</h3>
            <p className="text-gray-600 mb-4">Discover and analyze your perfect market niche and audience.</p>
            <Link to="/features/niche-research" className="text-[#208CFC] font-medium inline-flex items-center group">
              Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>

          <div 
            className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#208CFC] hover:shadow-lg transition-all duration-300"
          >
            <div className="text-[#208CFC] mb-6">
              <Hash className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-3">Hashtag Research</h3>
            <p className="text-gray-600 mb-4">Find the most effective hashtags to increase your content reach.</p>
            <Link to="/features/hashtag-research" className="text-[#208CFC] font-medium inline-flex items-center group">
              Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>

          <div 
            className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#208CFC] hover:shadow-lg transition-all duration-300"
          >
            <div className="text-[#208CFC] mb-6">
              <Users2 className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-3">1-on-1 Social Media Coaching</h3>
            <p className="text-gray-600 mb-4">Get personalized guidance from experienced social media experts.</p>
            <Link to="/features/instagram-coaching" className="text-[#208CFC] font-medium inline-flex items-center group">
              Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>

          <div 
            className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#208CFC] hover:shadow-lg transition-all duration-300"
          >
            <div className="text-[#208CFC] mb-6">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-3">Collaboration Services</h3>
            <p className="text-gray-600 mb-4">Connect with other creators and brands for meaningful collaborations.</p>
            <Link to="/features/collaboration-services" className="text-[#208CFC] font-medium inline-flex items-center group">
              Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>

          <div 
            className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#208CFC] hover:shadow-lg transition-all duration-300"
          >
            <div className="text-[#208CFC] mb-6">
              <Target className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-3">Profile Optimization</h3>
            <p className="text-gray-600 mb-4">Optimize your profile for maximum visibility and engagement.</p>
            <Link to="/features/profile-optimization" className="text-[#208CFC] font-medium inline-flex items-center group">
              Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 