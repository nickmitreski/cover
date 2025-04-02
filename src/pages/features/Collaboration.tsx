import { Helmet } from 'react-helmet-async'
import { MessageSquare, Calendar, Bell, CheckCircle, Clock, UserPlus, BarChart } from 'lucide-react'

export default function CollaborationPage() {
  return (
    <>
      <Helmet>
        <title>Team Collaboration - FollowFuseApp</title>
        <meta name="description" content="Work together efficiently with your team using our integrated collaboration tools and real-time updates." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Seamless <span className="text-[#208CFC]">Team Collaboration</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Work together efficiently with your team using our integrated collaboration tools and real-time updates.
          </p>
        </div>

        {/* Collaboration Interface Mockup */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Top Navigation */}
          <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  { color: 'bg-pink-400' },
                  { color: 'bg-purple-400' },
                  { color: 'bg-blue-400' },
                  { color: 'bg-green-400' },
                ].map((avatar, i) => (
                  <div key={i} className={`w-8 h-8 ${avatar.color} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <button className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center">
                  <UserPlus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="h-6 border-l border-gray-200"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">4 online</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-5 divide-x divide-gray-100 h-[400px]">
            {/* Team Activity */}
            <div className="col-span-3 p-6">
              <h3 className="text-lg font-semibold mb-4">Team Activity</h3>
              <div className="space-y-6">
                {[
                  { user: 'Alex', action: 'created a new post', time: '2m ago', icon: MessageSquare, color: 'text-blue-500' },
                  { user: 'Sarah', action: 'scheduled content', time: '15m ago', icon: Calendar, color: 'text-purple-500' },
                  { user: 'Mike', action: 'updated analytics', time: '1h ago', icon: BarChart, color: 'text-green-500' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-lg bg-${activity.color.split('-')[1]}-100 flex items-center justify-center flex-shrink-0`}>
                      <activity.icon className={`w-4 h-4 ${activity.color}`} />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>
                        <span className="text-gray-600"> {activity.action}</span>
                      </p>
                      <span className="text-xs text-gray-400">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-600 mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <MessageSquare className="w-4 h-4 text-[#208CFC]" />
                    <span className="text-sm">New Post</span>
                  </button>
                  <button className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Calendar className="w-4 h-4 text-[#208CFC]" />
                    <span className="text-sm">Schedule</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Team Tasks */}
            <div className="col-span-2 p-6 bg-gray-50">
              <h3 className="text-lg font-semibold mb-4">Team Tasks</h3>
              <div className="space-y-3">
                {[
                  { task: 'Review content calendar', status: 'In Progress' },
                  { task: 'Update hashtag strategy', status: 'Completed' },
                  { task: 'Analyze weekly metrics', status: 'Pending' },
                ].map((task, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 ${task.status === 'Completed' ? 'text-green-500' : 'text-gray-400'}`} />
                        <span className="text-sm">{task.task}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        task.status === 'Completed' ? 'bg-green-100 text-green-600' :
                        task.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {task.status}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Today</span>
                      </div>
                      <div className="flex -space-x-1">
                        {[...Array(2)].map((_, i) => (
                          <div key={i} className="w-4 h-4 rounded-full bg-gray-200"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 