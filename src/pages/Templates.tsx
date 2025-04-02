import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Image, Layout, Grid, Copy, Clock, ThumbsUp, Sparkles, Type, Target, BarChart } from 'lucide-react'

export default function TemplatesPage() {
  return (
    <>
      <Helmet>
        <title>Social Media Templates | FollowFuseApp</title>
        <meta name="description" content="Professional social media templates to help you create stunning content. Download and customize templates for posts, stories, and reels." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Social Media Templates
            </h1>
            <p className="text-lg text-gray-600">
              Download and customize beautiful templates for your social media content.
              Perfect for posts, stories, and reels across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/signup" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/demo" className="btn btn-outline">
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Template Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post Templates */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-[#208CFC]/5 to-blue-50 p-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    <div className="grid grid-cols-2 gap-3">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#208CFC]/10 flex items-center justify-center mb-2">
                            <Type className="w-4 h-4 text-[#208CFC]" />
                          </div>
                          <div className="space-y-1">
                            <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                            <div className="h-2 bg-gray-100 rounded-full w-2/3"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-[#208CFC]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Post Templates</h3>
                <p className="text-gray-600 mb-4">Professional layouts for your social media posts</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Image size={16} />
                    50+ Templates
                  </span>
                  <span className="flex items-center gap-1">
                    <Copy size={16} />
                    Easy to Edit
                  </span>
                </div>
              </div>
            </div>

            {/* Story Templates */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 p-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-1"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                              <Clock className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-100 rounded-full w-full mb-1"></div>
                              <div className="h-2 bg-gray-100 rounded-full w-2/3"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Target className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Story Templates</h3>
                <p className="text-gray-600 mb-4">Engaging layouts for your social media stories</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Image size={16} />
                    30+ Templates
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    Quick to Use
                  </span>
                </div>
              </div>
            </div>

            {/* Reel Templates */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 p-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center">
                              <BarChart className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-100 rounded-full w-full mb-1"></div>
                              <div className="h-2 bg-gray-100 rounded-full w-2/3"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <ThumbsUp className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Reel Templates</h3>
                <p className="text-gray-600 mb-4">Trendy layouts for your social media reels</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Image size={16} />
                    40+ Templates
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp size={16} />
                    Popular Designs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Templates?</h2>
            <p className="text-gray-600">
              Our templates are designed to help you create professional social media content quickly and easily.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Grid className="w-6 h-6 text-[#208CFC]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy to Customize</h3>
              <p className="text-gray-600">Modify colors, text, and layouts to match your brand</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Copy className="w-6 h-6 text-[#208CFC]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ready to Use</h3>
              <p className="text-gray-600">Download and start using templates immediately</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layout className="w-6 h-6 text-[#208CFC]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Design</h3>
              <p className="text-gray-600">Created by expert designers for maximum impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Content?</h2>
            <p className="text-gray-600 mb-8">
              Get access to our full collection of social media templates and start creating professional content today.
            </p>
            <Link to="/signup" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 