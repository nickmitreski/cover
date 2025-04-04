import { Helmet } from 'react-helmet-async'
import { Sparkles, MessageSquare, PenTool, Target, Brain, Zap, Wand2, Settings, RefreshCw, Type, Layout, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AICopywritingPage() {
  return (
    <>
      <Helmet>
        <title>AI Copywriting | FollowFuseApp</title>
        <meta name="description" content="Create engaging Instagram captions and content with AI-powered copywriting tools." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block opacity-0 animate-[slideIn_0.5s_ease-out_0.2s_forwards]">AI-Powered</span>
              <span className="block text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent opacity-0 animate-[slideIn_0.5s_ease-out_0.4s_forwards]">Content Creation</span>
            </h1>

            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-[slideIn_0.5s_ease-out_0.6s_forwards]">
              Generate engaging captions and content for your Instagram posts with our advanced AI copywriting tools.
            </p>

            <div className="mt-10 opacity-0 animate-[slideIn_0.5s_ease-out_0.8s_forwards]">
              <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block">
                Start Writing
              </Link>
            </div>

            {/* AI Writing Preview */}
            <div className="mt-16 max-w-5xl mx-auto opacity-0 animate-[slideIn_0.5s_ease-out_1s_forwards]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* AI Writing Assistant Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#208CFC]/5 p-4 rounded-lg mb-4">
                    <div className="h-40 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-xs bg-white rounded-lg shadow-sm p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Brain className="w-5 h-5 text-[#208CFC]" />
                            <span className="text-sm font-medium">AI Assistant</span>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-100 rounded-full w-3/4 animate-pulse"></div>
                            <div className="h-2 bg-gray-100 rounded-full w-full animate-pulse"></div>
                            <div className="h-2 bg-gray-100 rounded-full w-5/6 animate-pulse"></div>
                          </div>
                          <div className="mt-4 flex gap-2">
                            <div className="h-6 w-16 bg-[#208CFC]/10 rounded animate-pulse"></div>
                            <div className="h-6 w-20 bg-[#208CFC]/10 rounded animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Smart Assistant</h3>
                  <p className="text-sm text-gray-600">AI-powered writing suggestions</p>
                </div>

                {/* Content Generation Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#208CFC]/5 p-4 rounded-lg mb-4">
                    <div className="h-40 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-xs">
                          <div className="grid grid-cols-2 gap-3">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-white p-3 rounded-lg shadow-sm"
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
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Content Templates</h3>
                  <p className="text-sm text-gray-600">Ready-to-use content formats</p>
                </div>

                {/* Writing Progress Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#208CFC]/5 p-4 rounded-lg mb-4">
                    <div className="h-40 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle
                              className="text-gray-200"
                              strokeWidth="8"
                              stroke="currentColor"
                              fill="transparent"
                              r="44"
                              cx="50"
                              cy="50"
                            />
                            <circle
                              className="text-[#208CFC] transform -rotate-90 origin-center"
                              strokeWidth="8"
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="transparent"
                              r="44"
                              cx="50"
                              cy="50"
                              style={{
                                strokeDasharray: '276.46',
                                strokeDashoffset: '69.115',
                                transition: 'stroke-dashoffset 0.5s ease'
                              }}
                            />
                            <text
                              x="50"
                              y="50"
                              textAnchor="middle"
                              dy=".3em"
                              className="text-xl font-bold fill-[#208CFC]"
                            >
                              75%
                            </text>
                          </svg>
                          <div className="absolute -right-1 -top-1 w-8 h-8 bg-[#208CFC] rounded-full flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Writing Progress</h3>
                  <p className="text-sm text-gray-600">Track content optimization</p>
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
            <span>AI Writing </span><span className="text-[#208CFC]">Features</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-[#208CFC] mb-6">
                <Brain className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Writing</h3>
              <p className="text-gray-600">
                AI-powered suggestions for engaging captions and content.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-[#208CFC] mb-6">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Audience Focus</h3>
              <p className="text-gray-600">
                Content tailored to your target audience and niche.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-[#208CFC] mb-6">
                <Layout className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Content Templates</h3>
              <p className="text-gray-600">
                Pre-designed templates for various content types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Process Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Writing <span className="text-[#208CFC]">Process</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Create engaging content in minutes with our AI-powered writing assistant.
                </p>
                {/* Writing Interface Preview */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Writing Assistant</h3>
                    <div className="flex gap-2">
                      <button className="p-1 rounded bg-[#208CFC]/10 text-[#208CFC]">
                        <PenTool className="w-4 h-4" />
                      </button>
                      <button className="p-1 rounded bg-[#208CFC]/10 text-[#208CFC]">
                        <Wand2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#208CFC]/10 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-4 h-4 text-[#208CFC]" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] rounded-lg text-sm font-medium">
                        Regenerate
                      </button>
                      <button className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] rounded-lg text-sm font-medium">
                        Improve
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Content Generation */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Content Generation</h3>
                    <p className="text-gray-600 mb-4">AI-powered content creation.</p>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Type className="w-4 h-4 text-[#208CFC]" />
                          <span className="text-sm font-medium">Caption</span>
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Layout className="w-4 h-4 text-[#208CFC]" />
                          <span className="text-sm font-medium">Story</span>
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Writing Style */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Writing Style</h3>
                    <p className="text-gray-600 mb-4">Customize your tone.</p>
                    <div className="space-y-3">
                      {[
                        { label: 'Professional', value: 85 },
                        { label: 'Friendly', value: 92 },
                        { label: 'Creative', value: 78 },
                      ].map((style, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{style.label}</span>
                            <span className="text-[#208CFC] font-medium">{style.value}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div
                              className="bg-[#208CFC] h-1.5 rounded-full animate-grow-width"
                              style={{ width: `${style.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content Optimization */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Content Optimization</h3>
                    <p className="text-gray-600 mb-4">Enhance engagement.</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'Readability', value: '95%' },
                        { label: 'Engagement', value: '88%' },
                        { label: 'SEO Score', value: '92%' },
                        { label: 'Originality', value: '97%' },
                      ].map((metric, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500">{metric.label}</div>
                          <div className="text-lg font-bold text-[#208CFC]">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Version History */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <RefreshCw className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Version History</h3>
                    <p className="text-gray-600 mb-4">Track your changes.</p>
                    <div className="space-y-3">
                      {[
                        { version: 'Version 3', time: '2 mins ago', status: 'Current' },
                        { version: 'Version 2', time: '15 mins ago', status: 'Saved' },
                        { version: 'Version 1', time: '1 hour ago', status: 'Draft' },
                      ].map((version, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium">{version.version}</div>
                            <div className="text-sm text-gray-500">{version.time}</div>
                          </div>
                          <div className="flex items-center gap-1 text-[#208CFC]">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">{version.status}</span>
                          </div>
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
              Ready to Create <span className="text-[#208CFC]">Better Content?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join creators who are crafting engaging content with AI-powered writing tools.
            </p>
            <Link to="/signup" className="btn btn-primary btn-lg hover:scale-105 transition-transform">
              Start Writing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 