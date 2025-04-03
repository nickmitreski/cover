import { Helmet } from 'react-helmet-async'
import { Sparkles, Brain, Zap, Lightbulb, Target, ArrowRight, MessageSquare, Image as ImageIcon, Layout, Type, CheckCircle, Settings, Star, Wand2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContentGeneratorPage() {
  return (
    <>
      <Helmet>
        <title>AI Content Generator | FollowFuseApp</title>
        <meta name="description" content="Generate creative Instagram content ideas, captions, and outlines powered by AI to keep your feed fresh and engaging." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                <span className="block">Fresh Content Ideas &</span>
                <span className="block text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent">Post Concepts, Instantly</span>
              </h1>
              
              <p className="mt-4 text-xl text-gray-600">
                Not sure what to post? Our AI Content Generator delivers new post ideas, content structures, and creative inspiration based on trending topics in your niche.
              </p>
              
              <div className="mt-10">
                <button 
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block"
                  onClick={() => {}}
                >
                  Generate Content Now
                </button>
              </div>

              <div className="mt-2 flex gap-2">
                <button 
                  className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] rounded-lg text-sm font-medium hover:bg-[#208CFC]/20 transition-colors"
                  onClick={() => {}}
                >
                  Use This
                </button>
                <button 
                  className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] rounded-lg text-sm font-medium hover:bg-[#208CFC]/20 transition-colors"
                  onClick={() => {}}
                >
                  Generate More
                </button>
              </div>

              <button 
                className="mt-6 w-full py-3 bg-[#208CFC] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
                onClick={() => {}}
              >
                <Sparkles className="w-5 h-5" />
                Generate More Ideas
              </button>

              <div className="mt-6 flex gap-3">
                <button 
                  className="flex-1 py-3 bg-[#208CFC] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
                  onClick={() => {}}
                >
                  <Sparkles className="w-5 h-5" />
                  Generate
                </button>
                <button 
                  className="px-3 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => {}}
                >
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column - Interactive Interface */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-[#208CFC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">AI Content Generator</h3>
                    <p className="text-gray-600">Generating fresh ideas...</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 transform hover:-translate-y-1 transition-transform duration-200">
                    <div className="flex items-center gap-2 mb-2">
                      <ImageIcon className="w-4 h-4 text-[#208CFC]" />
                      <h4 className="font-medium">Content Idea #1</h4>
                    </div>
                    <p className="text-gray-600">"Share your morning routine and productivity tips 🌅"</p>
                    <div className="mt-2 flex gap-2">
                      <span className="px-2 py-1 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#productivity</span>
                      <span className="px-2 py-1 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#routine</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 transform hover:-translate-y-1 transition-transform duration-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Layout className="w-4 h-4 text-[#208CFC]" />
                      <h4 className="font-medium">Content Idea #2</h4>
                    </div>
                    <p className="text-gray-600">"Behind-the-scenes look at your creative process 🎨"</p>
                    <div className="mt-2 flex gap-2">
                      <span className="px-2 py-1 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#behindthescenes</span>
                      <span className="px-2 py-1 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#creative</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 transform hover:-translate-y-1 transition-transform duration-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Type className="w-4 h-4 text-[#208CFC]" />
                      <h4 className="font-medium">Content Idea #3</h4>
                    </div>
                    <p className="text-gray-600">"Quick tips: Growing your Instagram following 📱"</p>
                    <div className="mt-2 flex gap-2">
                      <span className="px-2 py-1 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#growthtips</span>
                      <span className="px-2 py-1 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#instagram</span>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 bg-[#208CFC] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Generate More Ideas
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#208CFC]/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid - AI Workshop Style */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#208CFC]/5 to-transparent rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
            <span>AI-Powered </span><span className="text-[#208CFC]">Content Workshop</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Feature Cards */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Smart Ideation</h3>
                      <p className="text-gray-600 mb-4">Get AI-powered content suggestions based on trending topics and your audience's interests.</p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-4 h-4 text-[#208CFC]" />
                          <span className="text-sm font-medium">Trending Topics</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-[#208CFC]" />
                            <span className="text-sm text-gray-600">Instagram Growth Strategies</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-[#208CFC]" />
                            <span className="text-sm text-gray-600">Content Creation Tips</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Creative Prompts</h3>
                      <p className="text-gray-600 mb-4">Overcome writer's block with AI-generated prompts and content frameworks.</p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Wand2 className="w-4 h-4 text-[#208CFC]" />
                          <span className="text-sm font-medium">Content Frameworks</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#208CFC]" />
                            <span className="text-sm text-gray-600">Story-Based Posts</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#208CFC]" />
                            <span className="text-sm text-gray-600">How-To Guides</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Interactive Demo */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#208CFC]/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-[#208CFC]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Content Assistant</h3>
                      <p className="text-sm text-gray-500">Interactive demo</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Settings className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-[#208CFC]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-[#208CFC]" />
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600">What type of content would you like to create?</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Type className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Enter your content topic..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#208CFC] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-[#208CFC]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-[#208CFC]" />
                    </div>
                    <div className="flex-1 bg-[#208CFC]/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-[#208CFC]" />
                        <span className="font-medium">Suggested Topic</span>
                      </div>
                      <p className="text-gray-800">"How to Create Viral Reels: Step-by-Step Guide 🎥"</p>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] rounded-lg text-sm font-medium hover:bg-[#208CFC]/20 transition-colors">
                          Use This
                        </button>
                        <button className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] rounded-lg text-sm font-medium hover:bg-[#208CFC]/20 transition-colors">
                          Generate More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  className="mt-6 w-full py-3 bg-[#208CFC] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
                  onClick={() => {}}
                >
                  <Sparkles className="w-5 h-5" />
                  Generate More Variations
                </button>

                <div className="mt-6 flex gap-3">
                  <button 
                    className="flex-1 py-3 bg-[#208CFC] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
                    onClick={() => {}}
                  >
                    <Sparkles className="w-5 h-5" />
                    Generate
                  </button>
                  <button 
                    className="px-3 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    onClick={() => {}}
                  >
                    <Settings className="w-5 h-5" />
                  </button>
                </div>

                <button 
                  className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] rounded-lg text-sm font-medium hover:bg-[#208CFC]/20 transition-colors"
                  onClick={() => {}}
                >
                  Use This
                </button>
                <button 
                  className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] rounded-lg text-sm font-medium hover:bg-[#208CFC]/20 transition-colors"
                  onClick={() => {}}
                >
                  Generate More
                </button>

                {/* Keep the final CTA as a Link */}
                <Link 
                  to="/signup"
                  className="inline-flex items-center px-8 py-4 bg-[#208CFC] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                  Start Creating
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - AI Workflow */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Left Column - AI Process */}
              <div className="md:col-span-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
                  How Our <span className="text-[#208CFC]">AI Works</span>
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-full flex items-center justify-center text-[#208CFC] font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Input Analysis</h3>
                      <p className="text-gray-600">Our AI analyzes your niche, audience, and content goals to understand your needs.</p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-[#208CFC]">
                        <Target className="w-4 h-4" />
                        <span>Audience targeting</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-full flex items-center justify-center text-[#208CFC] font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Content Generation</h3>
                      <p className="text-gray-600">Advanced algorithms create engaging content ideas tailored to your brand.</p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-[#208CFC]">
                        <Brain className="w-4 h-4" />
                        <span>Smart generation</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-full flex items-center justify-center text-[#208CFC] font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Refinement</h3>
                      <p className="text-gray-600">AI fine-tunes content based on performance data and engagement metrics.</p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-[#208CFC]">
                        <Zap className="w-4 h-4" />
                        <span>Performance optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Demo */}
              <div className="md:col-span-7">
                <div className="bg-gradient-to-br from-[#208CFC]/20 to-transparent p-8 rounded-2xl">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-[#208CFC]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">AI Content Assistant</h3>
                        <p className="text-gray-600">Real-time content generation</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 text-sm">AI</div>
                        <div className="flex-1 bg-gray-50 rounded-lg p-4">
                          <p className="text-gray-600">Analyzing your content preferences...</p>
                          <div className="mt-2 w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                            <div className="w-2/3 h-full bg-[#208CFC] rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 bg-[#208CFC]/10 rounded-full flex items-center justify-center text-[#208CFC] text-sm">AI</div>
                        <div className="flex-1 bg-[#208CFC]/5 rounded-lg p-4">
                          <p className="text-gray-800">Here's a trending topic in your niche:</p>
                          <p className="text-[#208CFC] font-medium mt-2">"How to Create Viral Reels: Step-by-Step Guide 🎥"</p>
                          <div className="mt-3 flex gap-2">
                            <span className="px-2 py-1 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#reels</span>
                            <span className="px-2 py-1 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#viral</span>
                            <span className="px-2 py-1 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#tutorial</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 text-sm">You</div>
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Type to customize the content..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#208CFC] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button className="flex-1 py-3 bg-[#208CFC] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Generate
                      </button>
                      <button className="px-3 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                        <Settings className="w-5 h-5" />
                      </button>
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
              Ready to Generate Better <span className="text-[#208CFC]">Content?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join creators who are using AI to generate engaging content ideas that their audience loves.
            </p>
            <Link 
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-[#208CFC] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Start Creating
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}