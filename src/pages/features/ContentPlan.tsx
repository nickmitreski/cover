import { Helmet } from 'react-helmet-async'
import { Calendar, BarChart4, Target, Clock, Users, Zap, ChevronLeft, ChevronRight, Bell, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContentPlanPage() {
  return (
    <>
      <Helmet>
        <title>Content Plan & Strategy | FollowFuseApp</title>
        <meta name="description" content="Get personalized content plans and strategies for your Instagram growth. AI-powered planning tools to keep your content consistent and engaging." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Calendar Interface */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Content Calendar</h3>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg cursor-default">
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="font-medium">March 2024</span>
                    <button className="p-2 rounded-lg cursor-default">
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {/* Calendar Header */}
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                      {day}
                    </div>
                  ))}
                  
                  {/* Calendar Days */}
                  {Array.from({ length: 35 }).map((_, i) => {
                    const day = i - 4; // Start from last days of previous month
                    return (
                      <div
                        key={i}
                        className={`aspect-square p-2 rounded-lg border ${
                          day > 0 && day <= 31
                            ? 'border-gray-200 cursor-default'
                            : 'border-transparent text-gray-400'
                        } ${day === 15 ? 'bg-[#208CFC]/10 border-[#208CFC]' : ''}`}
                      >
                        <div className="text-sm font-medium">{day > 0 && day <= 31 ? day : ''}</div>
                        {day === 15 && (
                          <div className="mt-1">
                            <div className="text-xs bg-[#208CFC] text-white px-1 py-0.5 rounded">2 Posts</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="lg:col-span-5">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                <span className="block">Strategic Content</span>
                <span className="block text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent">Planning Made Easy</span>
              </h1>
              
              <p className="mt-4 text-xl text-gray-600">
                Plan, schedule, and organize your Instagram content with our intuitive calendar interface. Stay ahead of your content strategy with smart planning tools.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#208CFC]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Visual Calendar</h3>
                    <p className="text-sm text-gray-600">See your content schedule at a glance</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#208CFC]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Auto-Scheduling</h3>
                    <p className="text-sm text-gray-600">Find the best times to post</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5 text-[#208CFC]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Smart Reminders</h3>
                    <p className="text-sm text-gray-600">Never miss a post deadline</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/signup"
                  className="inline-flex items-center px-6 py-3 bg-[#208CFC] text-white rounded-lg font-semibold cursor-default"
                >
                  Start Planning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#208CFC]/5 to-transparent rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
            <span>Strategic </span><span className="text-[#208CFC]">Planning Tools</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-[#208CFC] mb-6">
                <Calendar className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Content Calendar
              </h3>
              <p className="text-gray-600">
                Visual content calendar with AI-powered post scheduling and content mix recommendations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-[#208CFC] mb-6">
                <BarChart4 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Performance Analytics
              </h3>
              <p className="text-gray-600">
                Track content performance and get AI insights to optimize your strategy.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-[#208CFC] mb-6">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Strategic Planning
              </h3>
              <p className="text-gray-600">
                Get personalized content strategies based on your goals and audience insights.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Why Choose Our <span className="text-[#208CFC]">Planning Tools</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[#208CFC]">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Save Time</h3>
                      <p className="text-gray-600">Plan weeks of content in minutes with AI-powered suggestions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-[#208CFC]">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Grow Your Audience</h3>
                      <p className="text-gray-600">Data-driven strategies to increase engagement and followers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-[#208CFC]">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Stay Consistent</h3>
                      <p className="text-gray-600">Never miss a post with our scheduling and reminder tools.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-[#208CFC]/20 to-transparent p-8 rounded-2xl">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="font-bold mb-4">Weekly Content Mix</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Educational Content</span>
                        <span className="text-[#208CFC] font-medium">40%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Engagement Posts</span>
                        <span className="text-[#208CFC] font-medium">30%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Behind the Scenes</span>
                        <span className="text-[#208CFC] font-medium">20%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Promotional</span>
                        <span className="text-[#208CFC] font-medium">10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Plan Your <span className="text-[#208CFC]">Content Strategy?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join creators who are growing their Instagram presence with strategic content planning.
            </p>
            <Link to="/signup" className="btn btn-primary btn-lg hover:scale-105 transition-transform">
              Start Planning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 