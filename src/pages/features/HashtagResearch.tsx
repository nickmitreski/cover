import { Helmet } from 'react-helmet-async'
import { Hash, TrendingUp, Target, Users, Search, LineChart, Activity, BarChart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HashtagResearchPage() {
  return (
    <>
      <Helmet>
        <title>Hashtag Research | FollowFuseApp</title>
        <meta name="description" content="Discover the most effective hashtags for your Instagram content with AI-powered research tools. Boost your reach and engagement." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 animate-[slideIn_0.5s_ease-out]">
              <span className="block opacity-0 animate-[slideIn_0.5s_ease-out_0.2s_forwards]">Smart Hashtag</span>
              <span className="block text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent opacity-0 animate-[slideIn_0.5s_ease-out_0.4s_forwards]">Research & Strategy</span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-[slideIn_0.5s_ease-out_0.6s_forwards]">
              Find the perfect hashtags to boost your reach and engagement. Our AI analyzes trends and suggests the most effective hashtags for your content.
            </p>
            
            <div className="mt-10 opacity-0 animate-[slideIn_0.5s_ease-out_0.8s_forwards]">
              <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block">
                Research Hashtags
              </Link>
            </div>
            
            {/* Hashtag Grid */}
            <div className="mt-16 max-w-5xl mx-auto opacity-0 animate-[slideIn_0.5s_ease-out_1s_forwards]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="bg-[#208CFC]/5 p-4 rounded-lg mb-4">
                    <div className="h-40 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-end justify-around p-2">
                        <div className="w-1/6 bg-[#208CFC] rounded-t-lg animate-grow-up" style={{ height: '60%' }}></div>
                        <div className="w-1/6 bg-[#208CFC] rounded-t-lg animate-grow-up" style={{ height: '80%', animationDelay: '0.1s' }}></div>
                        <div className="w-1/6 bg-[#208CFC] rounded-t-lg animate-grow-up" style={{ height: '40%', animationDelay: '0.2s' }}></div>
                        <div className="w-1/6 bg-[#208CFC] rounded-t-lg animate-grow-up" style={{ height: '90%', animationDelay: '0.3s' }}></div>
                        <div className="w-1/6 bg-[#208CFC] rounded-t-lg animate-grow-up" style={{ height: '70%', animationDelay: '0.4s' }}></div>
                        <div className="w-1/6 bg-[#208CFC] rounded-t-lg animate-grow-up" style={{ height: '85%', animationDelay: '0.5s' }}></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Trending Analytics</h3>
                  <p className="text-sm text-gray-600">Real-time hashtag performance tracking</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="bg-[#208CFC]/5 p-4 rounded-lg mb-4">
                    <div className="h-40 relative">
                      <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">Engagement</div>
                          <div className="text-lg font-bold text-[#208CFC]">85%</div>
                          <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                            <div className="w-[85%] h-full bg-[#208CFC] rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">Reach</div>
                          <div className="text-lg font-bold text-[#208CFC]">92%</div>
                          <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                            <div className="w-[92%] h-full bg-[#208CFC] rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">Growth</div>
                          <div className="text-lg font-bold text-[#208CFC]">78%</div>
                          <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                            <div className="w-[78%] h-full bg-[#208CFC] rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-gray-500 mb-1">Impact</div>
                          <div className="text-lg font-bold text-[#208CFC]">88%</div>
                          <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                            <div className="w-[88%] h-full bg-[#208CFC] rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Performance Metrics</h3>
                  <p className="text-sm text-gray-600">Track engagement and reach</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="bg-[#208CFC]/5 p-4 rounded-lg mb-4">
                    <div className="h-40 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <svg className="transform -rotate-90 w-full h-full">
                            <circle
                              className="text-gray-200"
                              strokeWidth="8"
                              stroke="currentColor"
                              fill="transparent"
                              r="58"
                              cx="64"
                              cy="64"
                            />
                            <circle
                              className="text-[#208CFC] progress-ring"
                              strokeWidth="8"
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="transparent"
                              r="58"
                              cx="64"
                              cy="64"
                              style={{
                                strokeDasharray: '364.425',
                                strokeDashoffset: '91.106', // 25% progress
                              }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-[#208CFC]">75%</div>
                              <div className="text-xs text-gray-500">Engagement</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Audience Insights</h3>
                  <p className="text-sm text-gray-600">Understand your audience better</p>
                </div>
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
            <span>Hashtag </span><span className="text-[#208CFC]">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#208CFC] mb-6">
                <Hash className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Smart Suggestions
              </h3>
              <p className="text-gray-600">
                Get AI-powered hashtag recommendations based on your content and audience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#208CFC] mb-6">
                <TrendingUp className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Performance Tracking
              </h3>
              <p className="text-gray-600">
                Monitor hashtag performance and optimize your strategy with real-time data.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#208CFC] mb-6">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Niche Targeting
              </h3>
              <p className="text-gray-600">
                Find the most effective hashtags for your specific niche and audience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data-Driven Insights Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Data-Driven <span className="text-[#208CFC]">Insights</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Make informed decisions about your content strategy with real-time market data and competitor analysis.
                </p>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Dashboard Overview</h3>
                    <div className="flex gap-2">
                      <button className="p-1 rounded bg-[#208CFC]/10 text-[#208CFC]">
                        <LineChart className="w-4 h-4" />
                      </button>
                      <button className="p-1 rounded bg-[#208CFC]/10 text-[#208CFC]">
                        <BarChart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">#photography</span>
                        <span className="text-xs text-[#208CFC]">↑ 24%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-[#208CFC] h-1.5 rounded-full animate-grow-width" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">#lifestyle</span>
                        <span className="text-xs text-[#208CFC]">↑ 18%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-[#208CFC] h-1.5 rounded-full animate-grow-width" style={{ width: '72%' }}></div>
                      </div>
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
                    <p className="text-gray-600 mb-4">Stay ahead of market trends with AI-powered trend detection.</p>
                    <div className="h-32 relative">
                      <div className="absolute inset-0 flex items-end space-x-2">
                        {[45, 75, 35, 85, 55, 90, 40].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-[#208CFC]/20 rounded-t-sm animate-grow-up"
                            style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                          >
                            <div
                              className="w-full bg-[#208CFC] rounded-t-sm animate-grow-up"
                              style={{ height: `${height * 0.7}%`, animationDelay: `${i * 0.2}s` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Audience Insights</h3>
                    <p className="text-gray-600 mb-4">Understand your audience preferences.</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'Engagement', value: '85%' },
                        { label: 'Growth', value: '32%' },
                        { label: 'Reach', value: '78%' },
                        { label: 'Retention', value: '91%' },
                      ].map((stat, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500">{stat.label}</div>
                          <div className="text-lg font-bold text-[#208CFC]">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Performance Metrics</h3>
                    <p className="text-gray-600 mb-4">Track your content's impact.</p>
                    <div className="space-y-3">
                      {[
                        { label: 'Impressions', value: 85 },
                        { label: 'Engagement', value: 92 },
                        { label: 'Click Rate', value: 78 },
                      ].map((metric, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{metric.label}</span>
                            <span className="text-[#208CFC] font-medium">{metric.value}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div
                              className="bg-[#208CFC] h-1.5 rounded-full animate-grow-width"
                              style={{ width: `${metric.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Search className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Competitor Research</h3>
                    <p className="text-gray-600 mb-4">Learn from successful competitors.</p>
                    <div className="space-y-3">
                      {[
                        { name: 'Competitor A', followers: '12.5K', engagement: '4.8%' },
                        { name: 'Competitor B', followers: '8.2K', engagement: '5.2%' },
                        { name: 'Competitor C', followers: '15.1K', engagement: '3.9%' },
                      ].map((competitor, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium">{competitor.name}</div>
                            <div className="text-sm text-gray-500">{competitor.followers} followers</div>
                          </div>
                          <div className="text-[#208CFC] font-medium">{competitor.engagement}</div>
                        </div>
                      ))}
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
              Ready to Boost Your <span className="text-[#208CFC]">Reach?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join creators who are growing their Instagram presence with smart hashtag strategies.
            </p>
            <Link to="/signup" className="btn btn-primary btn-lg hover:scale-105 transition-transform">
              Start Researching
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 