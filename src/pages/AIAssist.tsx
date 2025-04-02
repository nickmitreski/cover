import { Helmet } from 'react-helmet-async'

export default function AIAssistPage() {
  return (
    <>
      <Helmet>
        <title>AI Content Generator | CoverSite</title>
        <meta name="description" content="Get fresh content ideas and post concepts instantly with our AI-powered Instagram content generator." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block">Fresh Content Ideas &</span>
              <span className="block text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent">Post Concepts, Instantly</span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Not sure what to post? Our AI Content Generator delivers new post ideas, content structures, and creative inspiration based on trending topics in your niche.
            </p>
            
            <div className="mt-10">
              <button className="btn btn-primary btn-lg hover:scale-105 transition-transform">
                Generate Content Now
              </button>
            </div>
            
            {/* Content Generator Dashboard */}
            <div className="mt-16 max-w-5xl mx-auto">
              <img 
                src="https://via.placeholder.com/1200x600/EEEEFF/333333?text=AI+Content+Generator" 
                alt="AI Content Generator" 
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#208CFC]/5 to-transparent rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
            <span>How Our AI Content Generator </span><span className="text-[#208CFC]">Helps You</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#208CFC] text-5xl mb-6">🔹</div>
              <h3 className="text-xl font-bold mb-4">Generate Post Ideas</h3>
              <p className="text-gray-600">
                Get full post ideas, captions, and content outlines based on trending topics in your niche.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#208CFC] text-5xl mb-6">🔹</div>
              <h3 className="text-xl font-bold mb-4">AI-Driven Suggestions</h3>
              <p className="text-gray-600">
                AI-driven suggestions ensure your content stays fresh and engaging for your audience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#208CFC] text-5xl mb-6">🔹</div>
              <h3 className="text-xl font-bold mb-4">Save Time</h3>
              <p className="text-gray-600">
                Save valuable time by automating the brainstorming and drafting process for your content.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
            <span>How It </span><span className="text-[#208CFC]">Works</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start mb-16">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="bg-[#208CFC] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-md">1</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-4">Enter Your Niche & Preferences</h3>
                <p className="text-lg text-gray-600">
                  Provide the details of your target audience and content preferences to help our AI understand your goals.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start mb-16">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="bg-[#208CFC] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-md">2</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-4">Generate Content</h3>
                <p className="text-lg text-gray-600">
                  Get full post ideas, captions, and content outlines instantly created by AI based on your inputs.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="bg-[#208CFC] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-md">3</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-4">Customise & Publish</h3>
                <p className="text-lg text-gray-600">
                  Edit any content if needed to match your brand voice and post it directly to Instagram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 