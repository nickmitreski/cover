import { Helmet } from 'react-helmet-async'
import { Users, TrendingUp, BarChart4, Target, Sparkles, BarChart, Clock, ArrowRight, LineChart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NicheResearchPage() {
  return (
    <>
      <Helmet>
        <title>Niche Research | FollowFuseApp</title>
        <meta name="description" content="Discover your perfect Instagram niche with AI-powered research tools. Analyze trends, audience behavior, and competitors to grow your presence." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Center Content */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                <span className="block mb-2">Discover Your Perfect</span>
                <div className="relative h-[1.2em] flex items-center justify-center overflow-visible">
                  <span className="absolute text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent">Instagram Niche</span>
                </div>
              </h1>
              
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Find your most profitable niche with data-driven insights and competitor analysis. Make informed decisions about your content strategy.
              </p>
            </div>

            {/* Floating Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#208CFC]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-[#208CFC]">500+</h3>
                    <p className="text-gray-600">Niches Analyzed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                    <BarChart4 className="w-6 h-6 text-[#208CFC]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-[#208CFC]">98%</h3>
                    <p className="text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#208CFC]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-[#208CFC]">24/7</h3>
                    <p className="text-gray-600">Market Tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid - Market Analysis Dashboard */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#208CFC]/5 to-transparent rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-12 text-center">
            <span>Comprehensive </span><span className="text-[#208CFC]">Market Analysis</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Niche Analysis */}
              <div className="lg:col-span-5">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <BarChart className="w-6 h-6 text-[#208CFC]" />
                    Niche Analysis Report
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Market Size</span>
                        <span className="text-[#208CFC]">Large</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#208CFC] rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Competition Level</span>
                        <span className="text-[#208CFC]">Medium</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#208CFC] rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Growth Potential</span>
                        <span className="text-[#208CFC]">High</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#208CFC] rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Engagement Rate</span>
                        <span className="text-[#208CFC]">4.8%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#208CFC] rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Competitor Analysis */}
              <div className="lg:col-span-7">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-[#208CFC]" />
                    Top Competitors Analysis
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-sm font-medium text-gray-600">Account</div>
                      <div className="text-sm font-medium text-gray-600">Followers</div>
                      <div className="text-sm font-medium text-gray-600">Engagement</div>
                    </div>

                    {[
                      { name: '@lifestyle_guru', followers: '125K', engagement: '4.2%' },
                      { name: '@wellness_daily', followers: '89K', engagement: '5.1%' },
                      { name: '@mindful_living', followers: '234K', engagement: '3.8%' },
                    ].map((competitor) => (
                      <div key={competitor.name} className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="font-medium">{competitor.name}</div>
                        <div>{competitor.followers}</div>
                        <div className="text-[#208CFC]">{competitor.engagement}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h4 className="font-bold mb-2">Popular Content Types</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#208CFC] rounded-full"></div>
                        <span>Reels (45%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Carousels (30%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                        <span>Stories (25%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h4 className="font-bold mb-2">Best Posting Times</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#208CFC]" />
                        <span>8:00 AM - 10:00 AM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#208CFC]" />
                        <span>6:00 PM - 8:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - Market Insights */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
                  Data-Driven <span className="text-[#208CFC]">Insights</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Make informed decisions about your content strategy with real-time market data and competitor analysis.
                </p>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Analytics Overview</h3>
                    <div className="flex gap-2">
                      <button className="p-2 rounded bg-[#208CFC]/10 text-[#208CFC]">
                        <LineChart className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded bg-[#208CFC]/10 text-[#208CFC]">
                        <BarChart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Engagement Rate</span>
                        <span className="text-sm font-medium text-[#208CFC]">4.8%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#208CFC] rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Growth Rate</span>
                        <span className="text-sm font-medium text-[#208CFC]">32%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#208CFC] rounded-full" style={{ width: '32%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Market Share</span>
                        <span className="text-sm font-medium text-[#208CFC]">28%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#208CFC] rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Weekly Performance</span>
                      <span className="text-[#208CFC] font-medium">+24%</span>
                    </div>
                    <div className="mt-4 h-24 flex items-end justify-between">
                      {[35, 45, 30, 65, 40, 50, 45].map((height, i) => (
                        <div key={i} className="w-8 bg-[#208CFC]/20 rounded-t-sm">
                          <div
                            className="w-full bg-[#208CFC] rounded-t-sm transition-all duration-300"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-gray-400">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Trend Analysis</h3>
                    <p className="text-gray-600">Stay ahead of market trends with AI-powered trend detection and analysis.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Audience Insights</h3>
                    <p className="text-gray-600">Understand your target audience's preferences and behavior patterns.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <BarChart4 className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Performance Metrics</h3>
                    <p className="text-gray-600">Track key metrics and measure your content's impact on engagement.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Competitor Research</h3>
                    <p className="text-gray-600">Learn from successful competitors in your niche and identify opportunities.</p>
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
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              Ready to Find Your Perfect <span className="text-[#208CFC]">Niche?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join successful creators who use data-driven insights to grow their Instagram presence.
            </p>
            <Link 
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-[#208CFC] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Start Analyzing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 