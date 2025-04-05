import { Helmet } from 'react-helmet-async'
import { Users, MessageSquare, Calendar, CheckCircle, Clock, ArrowRight, UserPlus, FolderKanban, FileText, Settings, Bell, BarChart, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CollaborationServicesPage() {
  return (
    <>
      <Helmet>
        <title>Collaboration Services | FollowFuseApp</title>
        <meta name="description" content="Streamline your Instagram content creation with our collaborative workspace and project management tools." />
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
                  <span className="block">Streamline Your</span>
                  <span className="block text-[#208CFC]">Content Collaboration</span>
                </h1>
                
                <p className="mt-4 text-xl text-gray-600">
                  Manage your Instagram content creation process with our collaborative workspace and project management tools.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/signup"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#208CFC] text-white rounded-lg font-semibold cursor-default"
                  >
                    Start Collaborating
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Right Content - Project Dashboard Preview */}
              <div className="relative">
                <div className="bg-white rounded-xl shadow-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Content Calendar</h3>
                    <div className="flex items-center gap-4">
                      <button className="p-2 rounded-lg cursor-default">
                        <Bell className="w-5 h-5 text-gray-500" />
                      </button>
                      <button className="p-2 rounded-lg cursor-default">
                        <Settings className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Project Cards */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Summer Campaign</span>
                        <span className="text-sm text-[#208CFC]">In Progress</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>Due in 3 days</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Product Launch</span>
                        <span className="text-sm text-green-500">Completed</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>5/5 tasks completed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-[#208CFC]" />
                    </div>
                    <span className="font-medium">12 Team Members</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="font-medium">85% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid - Project Management */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
            <span>Powerful </span><span className="text-[#208CFC]">Collaboration Tools</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Project Board */}
              <div className="lg:col-span-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <FolderKanban className="w-6 h-6 text-[#208CFC]" />
                    Project Board
                  </h3>

                  <div className="grid grid-cols-3 gap-4">
                    {/* To Do Column */}
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <h4 className="font-medium text-gray-600">To Do</h4>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">3</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Create Story Templates</h5>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>High Priority</span>
                            <div className="flex -space-x-2">
                              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                              <div className="w-6 h-6 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Schedule Photoshoot</h5>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Medium Priority</span>
                            <div className="flex -space-x-2">
                              <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* In Progress Column */}
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <h4 className="font-medium text-gray-600">In Progress</h4>
                        <span className="text-sm bg-[#208CFC]/10 px-2 py-1 rounded text-[#208CFC]">2</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#208CFC]">
                          <h5 className="font-medium mb-2">Content Calendar</h5>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>75% Complete</span>
                            <div className="flex -space-x-2">
                              <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                              <div className="w-6 h-6 rounded-full bg-red-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Completed Column */}
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <h4 className="font-medium text-gray-600">Completed</h4>
                        <span className="text-sm bg-green-100 px-2 py-1 rounded text-green-600">4</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded-lg opacity-75">
                          <h5 className="font-medium mb-2">Brand Guidelines</h5>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Completed</span>
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Team & Activity */}
              <div className="lg:col-span-4">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-[#208CFC]" />
                    Team Members
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#208CFC]/10 rounded-full"></div>
                        <div>
                          <h4 className="font-medium">Sarah Johnson</h4>
                          <p className="text-sm text-gray-600">Content Manager</p>
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
                        <div>
                          <h4 className="font-medium">Mike Chen</h4>
                          <p className="text-sm text-gray-600">Designer</p>
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>

                    <button className="w-full py-2 border-2 border-dashed border-gray-200 rounded-lg text-gray-600 hover:border-[#208CFC] hover:text-[#208CFC] transition-colors duration-200 flex items-center justify-center gap-2">
                      <UserPlus className="w-5 h-5" />
                      Add Team Member
                    </button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <BarChart className="w-6 h-6 text-[#208CFC]" />
                    Project Stats
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Tasks Completed</span>
                        <span className="text-[#208CFC]">24/30</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#208CFC] rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Time Spent</span>
                        <span className="text-[#208CFC]">45h</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-[#208CFC] rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section - Collaboration Features */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Seamless <span className="text-[#208CFC]">Team Collaboration</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Work together efficiently with your team using our integrated collaboration tools and real-time updates.
                </p>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Team Activity</h3>
                    <div className="flex gap-2">
                      <span className="text-sm text-[#208CFC] font-medium">Live Updates</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { user: 'Sarah J.', action: 'Created new post', time: '2m ago', icon: FileText },
                      { user: 'Mike C.', action: 'Updated schedule', time: '5m ago', icon: Calendar },
                      { user: 'Alex R.', action: 'Added comments', time: '12m ago', icon: MessageSquare },
                      { user: 'Emma L.', action: 'Shared assets', time: '15m ago', icon: Users }
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="w-8 h-8 bg-[#208CFC]/10 rounded-full flex items-center justify-center">
                          <activity.icon className="w-4 h-4 text-[#208CFC]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{activity.user}</span>
                            <span className="text-sm text-gray-500">{activity.time}</span>
                          </div>
                          <span className="text-sm text-gray-600">{activity.action}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Team Performance</span>
                      <span className="text-[#208CFC] font-medium">+32% this week</span>
                    </div>
                    <div className="mt-4 h-16 flex items-end justify-between">
                      {[65, 85, 55, 90, 75, 95, 70].map((height, i) => (
                        <div key={i} className="w-8 bg-[#208CFC]/20 rounded-t-sm">
                          <div
                            className="w-full bg-[#208CFC] rounded-t-sm transition-all duration-300"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Real-time Chat</h3>
                    <p className="text-gray-600">Communicate instantly with team members about content and strategy.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Content Library</h3>
                    <p className="text-gray-600">Centralized storage for all your content assets and resources.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Smart Scheduling</h3>
                    <p className="text-gray-600">Coordinate content publishing with automated scheduling tools.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Workflow Automation</h3>
                    <p className="text-gray-600">Automate repetitive tasks and approval processes.</p>
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
              Ready to <span className="text-[#208CFC]">Collaborate?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join teams who use our platform to streamline their Instagram content creation process.
            </p>
            <Link 
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-[#208CFC] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Start Collaborating
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 