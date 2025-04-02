import { Helmet } from 'react-helmet-async'

const UNSPLASH_BASE_URL = "https://images.unsplash.com/";

const schedulingImages = {
  hero: `${UNSPLASH_BASE_URL}photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&h=600&q=80`,
  calendar: `${UNSPLASH_BASE_URL}photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&h=600&q=80`,
  features: [
    {
      image: `${UNSPLASH_BASE_URL}photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=400&q=80`,
      title: "Smart Scheduling",
      description: "AI-powered timing suggestions for maximum engagement"
    },
    {
      image: `${UNSPLASH_BASE_URL}photo-1553484771-371a605b060b?auto=format&fit=crop&w=600&h=400&q=80`,
      title: "Visual Calendar",
      description: "Intuitive drag-and-drop content calendar"
    },
    {
      image: `${UNSPLASH_BASE_URL}photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=400&q=80`,
      title: "Analytics Integration",
      description: "Track performance and optimize posting times"
    }
  ],
  interface: `${UNSPLASH_BASE_URL}photo-1611162616305-c69b3037f77d?auto=format&fit=crop&w=1200&h=600&q=80`
};

export default function SchedulingPage() {
  return (
    <>
      <Helmet>
        <title>Content Scheduling | FollowFuseApp</title>
        <meta name="description" content="Plan and schedule content across all your social media platforms efficiently." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={schedulingImages.hero}
            alt="Content calendar and scheduling interface"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block">Smart Content</span>
              <span className="block text-[#208CFC]">Scheduling</span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Plan and schedule your social media content with our
              intelligent scheduling system. Post at the perfect time,
              every time.
            </p>
            
            <div className="mt-10">
              <button className="btn btn-primary btn-lg hover:scale-105 transition-transform">
                Start Scheduling
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calendar Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visual Content Calendar
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                See your entire content strategy at a glance. Our visual calendar
                makes it easy to plan, organize, and schedule your social media
                content across all platforms.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Drag-and-drop interface
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Multi-platform scheduling
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Content preview
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={schedulingImages.calendar}
                alt="Content calendar interface"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Scheduling Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schedulingImages.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
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
      
      {/* Interface Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <img
              src={schedulingImages.interface}
              alt="Scheduling interface"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
} 