import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title>Content Plan & Strategy | FollowFuseApp</title>
        <meta name="description" content="Stay consistent with a personalised Instagram content plan designed for your niche and audience." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block">Stay Consistent with a</span>
              <span className="block text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent">Personalised Instagram Plan</span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A clear content strategy keeps your Instagram growing. We provide a customised content plan designed for your niche and audience—so you always know what to post and when.
            </p>
            
            <div className="mt-10">
              <Link to="/signup" className="btn btn-primary btn-lg hover:scale-105 transition-transform">
                Get Your Strategy
              </Link>
            </div>
            
            {/* Content Calendar placeholder */}
            <div className="mt-16 max-w-5xl mx-auto">
              <img 
                src="/images/dash1.png" 
                alt="Content Calendar Dashboard" 
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden features-section">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#208CFC]/5 to-transparent rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
            <span>What You </span><span className="text-[#208CFC]">Get</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="text-blue-600 text-5xl mb-6">📅</div>
              <h3 className="text-xl font-bold mb-4">Personalised Monthly Plans</h3>
              <p className="text-gray-600">
                Get customised content plans based on your specific niche, audience preferences, and business goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="text-blue-600 text-5xl mb-6">⏱️</div>
              <h3 className="text-xl font-bold mb-4">Strategic Post Timing</h3>
              <p className="text-gray-600">
                Learn the optimal times to post based on when your audience is most active and engaged.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="text-blue-600 text-5xl mb-6">🎯</div>
              <h3 className="text-xl font-bold mb-4">Theme & Campaign Ideas</h3>
              <p className="text-gray-600">
                Get fresh theme concepts and campaign ideas to keep your content cohesive and interesting.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-center">
            <span>Our Strategy Development </span><span className="text-[#208CFC]">Process</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                <div className="bg-blue-100 text-[#208CFC] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold shadow-md">1</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Understand Your Brand</h3>
                <p className="text-lg text-gray-600">
                  We analyse your current Instagram profile, audience demographics, and content performance to understand what's working and what can be improved.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                <div className="bg-blue-100 text-[#208CFC] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold shadow-md">2</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Create Your Strategy</h3>
                <p className="text-lg text-gray-600">
                  We develop a tailored content strategy that outlines the types of content, posting schedule, and themes that will best engage your audience.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                <div className="bg-blue-100 text-[#208CFC] rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold shadow-md">3</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Implement & Refine</h3>
                <p className="text-lg text-gray-600">
                  We provide you with a visual content calendar and ongoing support to help you implement the strategy and refine it based on performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 