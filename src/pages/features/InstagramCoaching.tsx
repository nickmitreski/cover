import { Helmet } from 'react-helmet-async'
import { BookOpen, Users, Target, Star, Calendar, TrendingUp, Award, CheckCircle, Clock, Play, Trophy, MessageSquare, Video, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function InstagramCoachingPage() {
  return (
    <>
      <Helmet>
        <title>1-on-1 Instagram Growth Coaching | FollowFuseApp</title>
        <meta name="description" content="Get personalized Instagram growth coaching from industry experts. Learn proven strategies to grow your following and engagement." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block opacity-0 animate-[slideIn_0.5s_ease-out_0.2s_forwards]">1-on-1 Instagram</span>
              <span className="block text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent opacity-0 animate-[slideIn_0.5s_ease-out_0.4s_forwards]">Growth Coaching</span>
            </h1>

            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-[slideIn_0.5s_ease-out_0.6s_forwards]">
              Get personalized guidance from industry experts to accelerate your Instagram growth and engagement.
            </p>

            <div className="mt-10 opacity-0 animate-[slideIn_0.5s_ease-out_0.8s_forwards]">
              <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block">
                Start Your Journey
              </Link>
            </div>

            {/* Coaching Preview */}
            <div className="mt-16 max-w-5xl mx-auto opacity-0 animate-[slideIn_0.5s_ease-out_1s_forwards]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Course Progress Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#208CFC]/5 p-4 rounded-lg mb-4">
                    <div className="h-40 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-xs">
                          <div className="space-y-4">
                            {[
                              { title: 'Growth Strategy', progress: 85 },
                              { title: 'Content Creation', progress: 65 },
                              { title: 'Engagement', progress: 92 },
                            ].map((module, i) => (
                              <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm font-medium">{module.title}</span>
                                  <span className="text-xs text-[#208CFC]">{module.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-1.5">
                                  <div
                                    className="bg-[#208CFC] h-1.5 rounded-full animate-grow-width"
                                    style={{ width: `${module.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Course Progress</h3>
                  <p className="text-sm text-gray-600">Track your learning journey</p>
                </div>

                {/* Live Session Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#208CFC]/5 p-4 rounded-lg mb-4">
                    <div className="h-40 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-xs bg-white rounded-lg shadow-sm p-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <Video className="w-5 h-5 text-[#208CFC]" />
                              <span className="text-sm font-medium">Live Session</span>
                            </div>
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Live Now</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">45:00 mins</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">12 Participants</span>
                            </div>
                          </div>
                          <button className="mt-4 w-full bg-[#208CFC] text-white rounded-lg py-2 text-sm font-medium flex items-center justify-center gap-2">
                            <Play className="w-4 h-4" />
                            Join Session
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Live Sessions</h3>
                  <p className="text-sm text-gray-600">Interactive coaching calls</p>
                </div>

                {/* Growth Metrics Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#208CFC]/5 p-4 rounded-lg mb-4">
                    <div className="h-40 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-xs">
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: 'Followers', value: '+2.5K', icon: Users },
                              { label: 'Engagement', value: '+85%', icon: TrendingUp },
                              { label: 'Reach', value: '+12K', icon: Target },
                              { label: 'Growth', value: '+95%', icon: Trophy },
                            ].map((stat, i) => (
                              <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-[#208CFC]/10 flex items-center justify-center mb-2">
                                  <stat.icon className="w-4 h-4 text-[#208CFC]" />
                                </div>
                                <div className="text-lg font-bold text-[#208CFC]">{stat.value}</div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Growth Metrics</h3>
                  <p className="text-sm text-gray-600">Track your progress</p>
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
            <span>Coaching </span><span className="text-[#208CFC]">Features</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-[#208CFC] mb-6">
                <BookOpen className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Strategy</h3>
              <p className="text-gray-600">
                Personalized growth plan tailored to your goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-[#208CFC] mb-6">
                <Video className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Live Sessions</h3>
              <p className="text-gray-600">
                Weekly 1-on-1 coaching calls with experts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-[#208CFC] mb-6">
                <MessageSquare className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Direct Support</h3>
              <p className="text-gray-600">
                24/7 access to your personal coach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Process Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Coaching <span className="text-[#208CFC]">Process</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Our structured approach to help you achieve your Instagram growth goals.
                </p>
                {/* Next Session Preview */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Next Session</h3>
                    <div className="flex gap-2">
                      <button className="p-1 rounded bg-[#208CFC]/10 text-[#208CFC]">
                        <Calendar className="w-4 h-4" />
                      </button>
                      <button className="p-1 rounded bg-[#208CFC]/10 text-[#208CFC]">
                        <Clock className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#208CFC]/10 flex items-center justify-center flex-shrink-0">
                          <Video className="w-4 h-4 text-[#208CFC]" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Content Strategy Review</div>
                          <div className="text-sm text-gray-500">Tomorrow at 2:00 PM</div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-[#208CFC] text-white rounded-lg py-2 text-sm font-medium flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Growth Strategy */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Growth Strategy</h3>
                    <p className="text-gray-600 mb-4">Custom growth plan.</p>
                    <div className="space-y-3">
                      {[
                        { label: 'Goal Setting', value: 100 },
                        { label: 'Audience Analysis', value: 85 },
                        { label: 'Content Strategy', value: 75 },
                      ].map((item, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.label}</span>
                            <span className="text-[#208CFC] font-medium">{item.value}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div
                              className="bg-[#208CFC] h-1.5 rounded-full animate-grow-width"
                              style={{ width: `${item.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Tracking */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
                    <p className="text-gray-600 mb-4">Monitor your growth.</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'Weekly Growth', value: '+25%' },
                        { label: 'Engagement', value: '+45%' },
                        { label: 'Reach', value: '+60%' },
                        { label: 'Followers', value: '+2.5K' },
                      ].map((metric, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500">{metric.label}</div>
                          <div className="text-lg font-bold text-[#208CFC]">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Achievements</h3>
                    <p className="text-gray-600 mb-4">Your milestones.</p>
                    <div className="space-y-3">
                      {[
                        { title: '1K Followers', time: 'Achieved', icon: Star },
                        { title: '5K Reach', time: 'Achieved', icon: Target },
                        { title: '10K Followers', time: 'In Progress', icon: Trophy },
                      ].map((achievement, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <achievement.icon className="w-4 h-4 text-[#208CFC]" />
                            <div>
                              <div className="font-medium">{achievement.title}</div>
                              <div className="text-sm text-gray-500">{achievement.time}</div>
                            </div>
                          </div>
                          <CheckCircle className="w-4 h-4 text-[#208CFC]" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Session History */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-[#208CFC]/10 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-[#208CFC]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Session History</h3>
                    <p className="text-gray-600 mb-4">Past coaching calls.</p>
                    <div className="space-y-3">
                      {[
                        { title: 'Content Strategy', date: '2 days ago', duration: '45 mins' },
                        { title: 'Growth Review', date: '1 week ago', duration: '60 mins' },
                        { title: 'Engagement Tactics', date: '2 weeks ago', duration: '45 mins' },
                      ].map((session, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium">{session.title}</div>
                            <div className="text-sm text-gray-500">{session.date}</div>
                          </div>
                          <div className="text-sm text-[#208CFC]">{session.duration}</div>
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
              Ready to <span className="text-[#208CFC]">Accelerate</span> Your Growth?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join successful creators who transformed their Instagram presence with our coaching.
            </p>
            <Link 
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-[#208CFC] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 