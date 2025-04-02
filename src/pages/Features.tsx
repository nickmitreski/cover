import { Helmet } from 'react-helmet-async'

export default function FeaturesPage() {
  return (
    <>
      <Helmet>
        <title>Instagram Growth Features | CoverSite</title>
        <meta name="description" content="Discover our suite of Instagram growth tools including AI content generation, personalized strategy, and profile optimization." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Complete <span className="text-blue-600">Instagram</span> Growth Solution
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Everything you need to optimize your Instagram presence and grow your account—from AI-powered content creation to personalized coaching.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-lg shadow-lg transition-all">
            Explore Features
          </button>
          
          {/* Instagram Dashboard placeholder */}
          <div className="mt-16 max-w-5xl mx-auto">
            <img 
              src="https://via.placeholder.com/1200x600/EEEEFF/333333?text=Instagram+Growth+Dashboard" 
              alt="Instagram Growth Dashboard" 
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://via.placeholder.com/300x300/F5F5FF/333333?text=AI+Content+Creation" 
                  alt="AI Content Creation" 
                  className="w-full rounded-xl shadow-md mx-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                AI-Powered <span className="text-blue-600">Content</span>
              </h3>
              <p className="text-gray-600">
                Generate high-quality captions, post ideas, and 
                hashtags that resonate with your audience and 
                boost engagement.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://via.placeholder.com/300x300/EEFFEE/333333?text=Strategy+Planning" 
                  alt="Strategy Planning" 
                  className="w-full rounded-xl shadow-md mx-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Personalized <span className="text-blue-600">Strategy</span>
              </h3>
              <p className="text-gray-600">
                Get a customized content plan designed for your 
                niche and audience. Know exactly what to post
                and when for maximum impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://via.placeholder.com/300x300/FFEEEE/333333?text=Growth+Analytics" 
                  alt="Growth Analytics" 
                  className="w-full rounded-xl shadow-md mx-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-blue-600">Expert</span> Support
              </h3>
              <p className="text-gray-600">
                Get 1-on-1 coaching sessions, profile optimization,
                and guidance on brand collaborations from our
                Instagram growth experts.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Optimization Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Optimize for <span className="text-blue-600">Growth</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Our tools help you refine every aspect of your Instagram
                presence - from your profile and content to your posting
                schedule and engagement strategy. Make data-driven decisions
                that lead to real growth.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2">
              {/* Analytics dashboard placeholder */}
              <img 
                src="https://via.placeholder.com/600x500/F0F8FF/333333?text=Instagram+Analytics" 
                alt="Instagram Analytics" 
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 