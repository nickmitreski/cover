import { Helmet } from 'react-helmet-async'
import { Rss, Zap, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const UNSPLASH_BASE_URL = "https://images.unsplash.com/";

const automationImages = {
  rssAutomation: `${UNSPLASH_BASE_URL}photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&h=300&q=80`,
  actionLinks: `${UNSPLASH_BASE_URL}photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&h=300&q=80`,
  analyticsTools: `${UNSPLASH_BASE_URL}photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=300&q=80`,
  rssAiPosting: `${UNSPLASH_BASE_URL}photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=500&q=80`,
  actionLinksInterface: `${UNSPLASH_BASE_URL}photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=500&q=80`,
  scheduledPosting: `${UNSPLASH_BASE_URL}photo-1553484771-371a605b060b?auto=format&fit=crop&w=300&h=300&q=80`,
  contentRecycling: `${UNSPLASH_BASE_URL}photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=300&h=300&q=80`,
  analyticsIntegration: `${UNSPLASH_BASE_URL}photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&h=300&q=80`,
};

export default function AutomationPage() {
  return (
    <>
      <Helmet>
        <title>Automation | FollowFuseApp</title>
        <meta name="description" content="Automate your social media tasks with our AI-powered tools." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block">Automate</span>
              <span className="block text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent">Social Media with AI</span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Automate repetitive tasks and save time with our AI-
              powered social media automation. Streamline your social
              media with RSS posting, action links and much more
            </p>
            
            <div className="mt-10">
              <Link to="/signup" className="btn btn-primary btn-lg hover:scale-105 transition-transform">
                Try Now
              </Link>
            </div>
            
            {/* Three Image Grid */}
            <div className="mt-16 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img 
                  src={automationImages.rssAutomation}
                  alt="RSS Automation - Social media content automation through RSS feeds" 
                  className="w-full rounded-xl shadow-xl object-cover h-[300px]"
                />
                <img 
                  src={automationImages.actionLinks}
                  alt="Action Links - Automated social media actions and triggers" 
                  className="w-full rounded-xl shadow-xl object-cover h-[300px]"
                />
                <img 
                  src={automationImages.analyticsTools}
                  alt="Analytics Tools - Social media performance tracking and insights" 
                  className="w-full rounded-xl shadow-xl object-cover h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* RSS Posting Section */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#208CFC]/5 to-transparent rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#208CFC]/10 p-3 rounded-full">
                  <Rss className="w-6 h-6 text-[#208CFC]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Hands off with RSS <span className="text-[#208CFC]">AI</span><br />posting
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-10">
                Elevate your social media presence with automated RSS posting. Our
                technology creates optimised posts from your RSS feeds with AI,
                including your captions, images and hashtags. Maximise social media
                impact without sacrificing time or resources.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={automationImages.rssAiPosting}
                alt="RSS AI Posting Interface showing automated content curation" 
                className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Action Links Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <img 
                src={automationImages.actionLinksInterface}
                alt="Action Links Interface showing automated workflow triggers" 
                className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 object-cover h-[500px]"
              />
            </div>
            <div className="md:w-1/2 mb-12 md:mb-0 md:pl-10 order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#208CFC]/10 p-3 rounded-full">
                  <LinkIcon className="w-6 h-6 text-[#208CFC]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Bulk publishing with Action <span className="text-[#208CFC]">Links</span><br />and AI
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-10">
                Plan your content ahead, automate post actions with One-Click Post Triggers, and
                quickly generate captions using our AI prompt feature. Connect with your audience and
                grow your following without the extra work. Start using our go-to automation tool today.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features Section */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#208CFC]/5 to-transparent rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Zap className="w-6 h-6 text-[#208CFC]" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
              <span>Advanced </span><span className="text-[#208CFC]">automation</span><span> features</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src={automationImages.scheduledPosting}
                  alt="Scheduled Posting - Calendar and content scheduling interface" 
                  className="w-full rounded-xl shadow-md mx-auto object-cover h-[300px]"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-[#208CFC]">Scheduled</span> Posting
              </h3>
              <p className="text-gray-600">
                Set up posts to automatically publish
                at optimal times for maximum engagement.
                Plan your content calendar weeks in advance.
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src={automationImages.contentRecycling}
                  alt="Content Recycling - Automated content repurposing" 
                  className="w-full rounded-xl shadow-md mx-auto object-cover h-[300px]"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Content <span className="text-[#208CFC]">Recycling</span>
              </h3>
              <p className="text-gray-600">
                Automatically repurpose your best-performing
                content with fresh angles and captions
                to maintain consistent engagement.
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src={automationImages.analyticsIntegration}
                  alt="Analytics Integration - Performance tracking dashboard" 
                  className="w-full rounded-xl shadow-md mx-auto object-cover h-[300px]"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-[#208CFC]">Analytics</span> Integration
              </h3>
              <p className="text-gray-600">
                Track performance metrics and use AI to
                optimise your automation strategy
                based on real engagement data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 