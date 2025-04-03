import { Helmet } from 'react-helmet-async'
import { ArrowRight, Sparkles, Target, TrendingUp, Eye, Camera, Layout, Palette, Brush, Wand2, LineChart, ArrowLeftRight, Shuffle, CheckCircle, Heart, MessageCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProfileOptimizationPage() {
  return (
    <>
      <Helmet>
        <title>Profile Optimization | FollowFuseApp</title>
        <meta name="description" content="Transform your Instagram profile with our AI-powered optimization tools. Get a professional makeover that attracts followers and increases engagement." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                  <span className="block">Transform Your</span>
                  <span className="block text-[#208CFC]">Instagram Profile</span>
                </h1>
                
                <p className="mt-4 text-xl text-gray-600">
                  Get a professional profile makeover that attracts followers and increases engagement with our AI-powered optimization tools.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/signup"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#208CFC] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                  >
                    Start Optimization
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Right Content - Before/After Preview */}
              <div className="lg:col-span-1">
                <div className="grid grid-cols-2 gap-8">
                  {/* Before Profile */}
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-sm font-medium text-gray-500 mb-4">BEFORE</div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                          <Camera className="w-6 h-6 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                          <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-sm">
                        <div className="p-2 bg-gray-50 rounded">
                          <div className="font-bold text-gray-700">284</div>
                          <div className="text-gray-500">Posts</div>
                        </div>
                        <div className="p-2 bg-gray-50 rounded">
                          <div className="font-bold text-gray-700">2.1k</div>
                          <div className="text-gray-500">Followers</div>
                        </div>
                        <div className="p-2 bg-gray-50 rounded">
                          <div className="font-bold text-gray-700">890</div>
                          <div className="text-gray-500">Following</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-100 rounded w-full"></div>
                        <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                        <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-square bg-gray-100 rounded"></div>
                        <div className="aspect-square bg-gray-100 rounded"></div>
                        <div className="aspect-square bg-gray-100 rounded"></div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>24 avg</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>3 avg</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>1.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* After Profile */}
                  <div className="bg-white p-6 rounded-xl shadow-lg relative">
                    <div className="text-sm font-medium text-[#208CFC] mb-4">AFTER</div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#208CFC]/10 rounded-full flex items-center justify-center relative">
                          <Camera className="w-6 h-6 text-[#208CFC]" />
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-yellow-500" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="h-4 bg-[#208CFC]/10 rounded w-3/4 mb-2"></div>
                          <div className="h-3 bg-[#208CFC]/10 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-sm">
                        <div className="p-2 bg-[#208CFC]/5 rounded">
                          <div className="font-bold text-[#208CFC]">412</div>
                          <div className="text-gray-500">Posts</div>
                        </div>
                        <div className="p-2 bg-[#208CFC]/5 rounded">
                          <div className="font-bold text-[#208CFC]">7.2k</div>
                          <div className="text-gray-500">Followers</div>
                        </div>
                        <div className="p-2 bg-[#208CFC]/5 rounded">
                          <div className="font-bold text-[#208CFC]">1.2k</div>
                          <div className="text-gray-500">Following</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-[#208CFC]/10 rounded w-full"></div>
                        <div className="h-3 bg-[#208CFC]/10 rounded w-4/5"></div>
                        <div className="h-3 bg-[#208CFC]/10 rounded w-2/3"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-square bg-[#208CFC]/10 rounded relative group">
                          <div className="absolute inset-0 bg-[#208CFC]/20 rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="aspect-square bg-[#208CFC]/10 rounded relative group">
                          <div className="absolute inset-0 bg-[#208CFC]/20 rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="aspect-square bg-[#208CFC]/10 rounded relative group">
                          <div className="absolute inset-0 bg-[#208CFC]/20 rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-[#208CFC] pt-2">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>186 avg</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>24 avg</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>4.5%</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +245% Growth
                    </div>
                  </div>
                </div>
                
                {/* Improvement Metrics */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="w-8 h-8 bg-[#208CFC]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-4 h-4 text-[#208CFC]" />
                    </div>
                    <div className="text-2xl font-bold text-[#208CFC]">+5.1k</div>
                    <div className="text-sm text-gray-600">New Followers</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="w-8 h-8 bg-[#208CFC]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-4 h-4 text-[#208CFC]" />
                    </div>
                    <div className="text-2xl font-bold text-[#208CFC]">3.3x</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="w-8 h-8 bg-[#208CFC]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-4 h-4 text-[#208CFC]" />
                    </div>
                    <div className="text-2xl font-bold text-[#208CFC]">245%</div>
                    <div className="text-sm text-gray-600">Growth Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid - Optimization Tools */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
            <span>Complete </span><span className="text-[#208CFC]">Profile Makeover</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Visual Editor */}
              <div className="lg:col-span-7">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Layout className="w-6 h-6 text-[#208CFC]" />
                    Visual Profile Editor
                  </h3>

                  <div className="space-y-6">
                    {/* Profile Preview */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start gap-6">
                        <div className="w-24 h-24 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                          <Camera className="w-8 h-8 text-[#208CFC]" />
                        </div>
                        <div className="flex-1">
                          <div className="space-y-2 mb-4">
                            <div className="h-6 bg-gray-100 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                              <div className="font-bold text-lg">1.2K</div>
                              <div className="text-sm text-gray-600">Posts</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg">10.5K</div>
                              <div className="text-sm text-gray-600">Followers</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg">8.9K</div>
                              <div className="text-sm text-gray-600">Following</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Edit Tools */}
                    <div className="grid grid-cols-2 gap-4">
                      <button className="p-4 border border-gray-200 rounded-lg hover:border-[#208CFC] transition-colors duration-200">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-[#208CFC]/10 rounded-lg flex items-center justify-center">
                            <Brush className="w-4 h-4 text-[#208CFC]" />
                          </div>
                          <span className="font-medium">Bio Editor</span>
                        </div>
                        <p className="text-sm text-gray-600 text-left">Craft an engaging bio that converts visitors to followers</p>
                      </button>

                      <button className="p-4 border border-gray-200 rounded-lg hover:border-[#208CFC] transition-colors duration-200">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-[#208CFC]/10 rounded-lg flex items-center justify-center">
                            <Palette className="w-4 h-4 text-[#208CFC]" />
                          </div>
                          <span className="font-medium">Theme Designer</span>
                        </div>
                        <p className="text-sm text-gray-600 text-left">Create a cohesive visual style for your profile</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Optimization Score */}
              <div className="lg:col-span-5">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <LineChart className="w-6 h-6 text-[#208CFC]" />
                    Profile Score
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Overall Score</span>
                        <span className="text-[#208CFC]">85/100</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#208CFC] rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Bio Optimization</span>
                          <span className="text-green-500">90%</span>
                        </div>
                        <p className="text-sm text-gray-600">Strong bio with clear value proposition</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Visual Consistency</span>
                          <span className="text-[#208CFC]">80%</span>
                        </div>
                        <p className="text-sm text-gray-600">Good color scheme, needs more theme consistency</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Engagement Rate</span>
                          <span className="text-yellow-500">75%</span>
                        </div>
                        <p className="text-sm text-gray-600">Above average, room for improvement</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#208CFC]/5 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                      <Wand2 className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <div>
                      <h4 className="font-bold">AI Recommendations</h4>
                      <p className="text-sm text-gray-600">Personalized suggestions for improvement</p>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-[#208CFC] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
                    Generate Suggestions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - Transformation Results */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Real <span className="text-[#208CFC]">Transformation</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  See the impact of our profile optimization tools through real success stories and transformations.
                </p>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Success Story</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-green-500 font-medium">+245% Growth</span>
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div className="text-sm font-medium text-gray-500">BEFORE</div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 text-center p-2 bg-gray-50 rounded">
                          <div className="text-sm text-gray-600">Followers</div>
                          <div className="font-bold">2.1K</div>
                        </div>
                        <div className="flex-1 text-center p-2 bg-gray-50 rounded">
                          <div className="text-sm text-gray-600">Engagement</div>
                          <div className="font-bold">1.8%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-sm font-medium text-[#208CFC]">AFTER</div>
                      <div className="space-y-2">
                        <div className="h-4 bg-[#208CFC]/10 rounded w-3/4"></div>
                        <div className="h-4 bg-[#208CFC]/10 rounded w-1/2"></div>
                        <div className="h-4 bg-[#208CFC]/10 rounded w-2/3"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 text-center p-2 bg-[#208CFC]/5 rounded">
                          <div className="text-sm text-gray-600">Followers</div>
                          <div className="font-bold text-[#208CFC]">7.2K</div>
                        </div>
                        <div className="flex-1 text-center p-2 bg-[#208CFC]/5 rounded">
                          <div className="text-sm text-gray-600">Engagement</div>
                          <div className="font-bold text-[#208CFC]">4.5%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Optimized bio with clear value proposition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Enhanced visual consistency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Improved content strategy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Eye className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Enhanced Visibility</h3>
                    <p className="text-gray-600">Optimize your profile to stand out in Instagram searches and recommendations.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Target Audience</h3>
                    <p className="text-gray-600">Attract and retain followers who are genuinely interested in your content.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Growth Analytics</h3>
                    <p className="text-gray-600">Track your profile's performance and growth with detailed metrics.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Shuffle className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">A/B Testing</h3>
                    <p className="text-gray-600">Test different profile elements to find what works best for your audience.</p>
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
              Ready for Your <span className="text-[#208CFC]">Profile Makeover?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Transform your Instagram presence with our AI-powered optimization tools.
            </p>
            <Link 
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-[#208CFC] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Start Optimization
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 