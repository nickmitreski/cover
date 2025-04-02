import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const UNSPLASH_BASE_URL = "https://images.unsplash.com/";

const copywritingImages = {
  hero: `${UNSPLASH_BASE_URL}photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&h=600&q=80`,
  features: [
    {
      image: `${UNSPLASH_BASE_URL}photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=600&h=400&q=80`,
      title: "AI-Powered Writing",
      description: "Let our AI help you create engaging copy that converts"
    },
    {
      image: `${UNSPLASH_BASE_URL}photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&h=400&q=80`,
      title: "Brand Voice Customization",
      description: "Maintain your unique brand voice across all content"
    },
    {
      image: `${UNSPLASH_BASE_URL}photo-1553484771-371a605b060b?auto=format&fit=crop&w=600&h=400&q=80`,
      title: "Multi-Platform Support",
      description: "Optimize your copy for different social platforms"
    }
  ]
};

export default function CopywritingPage() {
  return (
    <>
      <Helmet>
        <title>AI Copywriting | FollowFuseApp</title>
        <meta name="description" content="Create engaging copy in real-time with our smart copywriting tools for social media." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={copywritingImages.hero}
            alt="Writer working on content"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block">AI-Powered</span>
              <span className="block text-[#208CFC]">Copywriting</span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Create engaging social media copy in seconds with our
              AI-powered writing tools. Perfect for busy social media
              managers and content creators.
            </p>
            
            <div className="mt-10">
              <Link to="/signup" className="btn btn-primary btn-lg hover:scale-105 transition-transform">
                Start Writing
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copywritingImages.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
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
            <span>Our </span><span className="text-[#208CFC]">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#208CFC] mb-4 text-5xl">🔹</div>
              <h3 className="text-xl font-bold mb-4">
                High-Quality Content
              </h3>
              <p className="text-gray-600">
                Get high-quality captions, bios, and post descriptions tailored to your niche.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#208CFC] mb-4 text-5xl">🔹</div>
              <h3 className="text-xl font-bold mb-4">
                AI-Powered Tools
              </h3>
              <p className="text-gray-600">
                AI-powered tools help maintain consistency and engagement across your content.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#208CFC] mb-4 text-5xl">🔹</div>
              <h3 className="text-xl font-bold mb-4">
                Customisable Content
              </h3>
              <p className="text-gray-600">
                Option to customise AI-generated content for a human touch that matches your brand voice.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
            <span>Create Engaging Captions & Bios in </span><span className="text-[#208CFC]">3 Simple Steps</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-[#208CFC] mb-6">1️⃣</div>
              <h3 className="text-2xl font-bold mb-4">
                Enter Your Topic
              </h3>
              <p className="text-gray-600">
                Provide details about your post or niche to help our AI understand your needs.
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-[#208CFC] mb-6">2️⃣</div>
              <h3 className="text-2xl font-bold mb-4">
                Generate AI Copy
              </h3>
              <p className="text-gray-600">
                Get instant, high-quality captions and bios that resonate with your audience.
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-[#208CFC] mb-6">3️⃣</div>
              <h3 className="text-2xl font-bold mb-4">
                Customise & Post
              </h3>
              <p className="text-gray-600">
                Edit as needed to match your style and publish with confidence on Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 