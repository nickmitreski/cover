import { useEffect, useRef } from 'react'
import { Sparkles, Send, Layout, MessageSquare, PenTool, Hash, TrendingUp, Users, Eye, BarChart, Target } from 'lucide-react'

export default function Benefits() {
  const countersInitialized = useRef(false);
  
  useEffect(() => {
    if (countersInitialized.current) return;
    
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target') || '0');
      const increment = target / speed;
      let current = 0;
      
      const updateCount = () => {
        if (current < target) {
          current += increment;
          counter.textContent = current.toFixed(0);
          setTimeout(updateCount, 1);
        } else {
          counter.textContent = target.toString();
        }
      };
      
      updateCount();
    });
    
    countersInitialized.current = true;

    // Set up scroll animations
    const animateElements = document.querySelectorAll('.fade-in-section, .stagger-item, .slide-in-left, .slide-in-right, .bounce-in, .title-underline');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // For staggered items, add staggered animations to children
          if (entry.target.classList.contains('stagger-parent')) {
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('is-visible');
              }, 150 * index);
            });
          }
        }
      });
    }, { threshold: 0.15 });
    
    animateElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animateElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          How It <span className="text-[#208CFC]">Works</span>
        </h2>
        
        {/* Analytics Dashboard Preview */}
        <div className="mb-16 relative">
          <div className="max-w-6xl mx-auto bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Real-Time Analytics Dashboard</h3>
                <p className="text-gray-600">Track your hashtag performance and engagement metrics in real-time with our comprehensive analytics dashboard.</p>
                <div className="flex gap-4">
                  <div className="bg-[#208CFC]/10 p-4 rounded-xl">
                    <BarChart className="w-6 h-6 text-[#208CFC] mb-2" />
                    <div className="text-sm font-medium">Performance</div>
                  </div>
                  <div className="bg-[#208CFC]/10 p-4 rounded-xl">
                    <Target className="w-6 h-6 text-[#208CFC] mb-2" />
                    <div className="text-sm font-medium">Targeting</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/images/dash1.png" alt="Analytics Dashboard" className="rounded-xl shadow-lg" />
                <img src="/images/2.png" alt="Performance Metrics" className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg shadow-lg border-4 border-white" />
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-[#208CFC]/10 rounded-2xl rotate-3 absolute top-0 left-1/2 -translate-x-1/2"></div>
              <div className="w-32 h-32 mx-auto bg-white shadow-lg rounded-2xl -rotate-3 relative flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#208CFC] rounded-full flex items-center justify-center">
                    <Layout className="w-3 h-3 text-white" />
                  </div>
                  <PenTool className="w-12 h-12 text-[#208CFC]" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Choose Your Content Type</h3>
            <p className="text-gray-600">
              Select from captions, bios, product descriptions, or custom content formats.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-[#208CFC]/10 rounded-2xl rotate-3 absolute top-0 left-1/2 -translate-x-1/2"></div>
              <div className="w-32 h-32 mx-auto bg-white shadow-lg rounded-2xl -rotate-3 relative flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#208CFC] rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <MessageSquare className="w-12 h-12 text-[#208CFC]" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Describe Your Needs</h3>
            <p className="text-gray-600">
              Provide basic information about your topic, tone, and target audience.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-[#208CFC]/10 rounded-2xl rotate-3 absolute top-0 left-1/2 -translate-x-1/2"></div>
              <div className="w-32 h-32 mx-auto bg-white shadow-lg rounded-2xl -rotate-3 relative flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="relative">
                  <Send className="w-12 h-12 text-[#208CFC] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Generate & Customize</h3>
            <p className="text-gray-600">
              Get AI-generated content instantly and customize it to match your style perfectly.
            </p>
          </div>

          {/* Connecting Lines */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-0.5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#208CFC] to-transparent"></div>
          </div>
        </div>

        {/* Social Media Integration */}
        <div className="mt-24 mb-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img src="/images/8.png" alt="Social Media Interface" className="rounded-xl shadow-lg" />
              <div className="absolute -bottom-4 -right-4 flex gap-4">
                <img src="/images/11.png" alt="Analytics" className="w-24 h-24 rounded-lg shadow-lg border-4 border-white" />
                <img src="/images/13.png" alt="Engagement" className="w-24 h-24 rounded-lg shadow-lg border-4 border-white" />
              </div>
            </div>
            <div className="space-y-6 p-6">
              <h3 className="text-2xl font-bold">Comprehensive Social Media Analysis</h3>
              <p className="text-gray-600">Get detailed insights into your social media performance with our advanced analytics tools.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold mb-2">Engagement Tracking</h4>
                  <p className="text-sm text-gray-600">Monitor likes, comments, and shares in real-time</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold mb-2">Growth Analytics</h4>
                  <p className="text-sm text-gray-600">Track follower growth and engagement rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 mb-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#208CFC]/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Hash className="w-8 h-8 text-[#208CFC]" />
              </div>
              <h4 className="counter text-4xl font-bold text-[#208CFC] mb-2" data-target="1000">0</h4>
              <p className="text-gray-600">Hashtags Analyzed Daily</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#208CFC]/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-[#208CFC]" />
              </div>
              <h4 className="counter text-4xl font-bold text-[#208CFC] mb-2" data-target="85">0</h4>
              <p className="text-gray-600">Average Engagement Increase</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#208CFC]/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-[#208CFC]" />
              </div>
              <h4 className="counter text-4xl font-bold text-[#208CFC] mb-2" data-target="50000">0</h4>
              <p className="text-gray-600">Active Users</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#208CFC]/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Eye className="w-8 h-8 text-[#208CFC]" />
              </div>
              <h4 className="counter text-4xl font-bold text-[#208CFC] mb-2" data-target="95">0</h4>
              <p className="text-gray-600">Reach Improvement</p>
            </div>
          </div>
        </div>

        {/* Example Hashtag Cards */}
        <div className="mb-24 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Trending Hashtag Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#208CFC]/5 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#208CFC] rounded-xl flex items-center justify-center text-white">
                  <Hash className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Photography</h4>
              </div>
              <div className="space-y-2">
                <div className="bg-white/80 p-2 rounded-lg group-hover:bg-white transition-colors">
                  <p className="text-gray-600">#photooftheday <span className="text-[#208CFC] float-right">2.5M posts</span></p>
                </div>
                <div className="bg-white/80 p-2 rounded-lg group-hover:bg-white transition-colors">
                  <p className="text-gray-600">#naturephotography <span className="text-[#208CFC] float-right">1.8M posts</span></p>
                </div>
                <div className="bg-white/80 p-2 rounded-lg group-hover:bg-white transition-colors">
                  <p className="text-gray-600">#photographylovers <span className="text-[#208CFC] float-right">950K posts</span></p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#208CFC]/5 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#208CFC] rounded-xl flex items-center justify-center text-white">
                  <Hash className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Fashion</h4>
              </div>
              <div className="space-y-2">
                <div className="bg-white/80 p-2 rounded-lg group-hover:bg-white transition-colors">
                  <p className="text-gray-600">#fashionblogger <span className="text-[#208CFC] float-right">3.1M posts</span></p>
                </div>
                <div className="bg-white/80 p-2 rounded-lg group-hover:bg-white transition-colors">
                  <p className="text-gray-600">#ootd <span className="text-[#208CFC] float-right">2.9M posts</span></p>
                </div>
                <div className="bg-white/80 p-2 rounded-lg group-hover:bg-white transition-colors">
                  <p className="text-gray-600">#streetstyle <span className="text-[#208CFC] float-right">1.2M posts</span></p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#208CFC]/5 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#208CFC] rounded-xl flex items-center justify-center text-white">
                  <Hash className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Food</h4>
              </div>
              <div className="space-y-2">
                <div className="bg-white/80 p-2 rounded-lg group-hover:bg-white transition-colors">
                  <p className="text-gray-600">#foodphotography <span className="text-[#208CFC] float-right">1.9M posts</span></p>
                </div>
                <div className="bg-white/80 p-2 rounded-lg group-hover:bg-white transition-colors">
                  <p className="text-gray-600">#foodblogger <span className="text-[#208CFC] float-right">1.5M posts</span></p>
                </div>
                <div className="bg-white/80 p-2 rounded-lg group-hover:bg-white transition-colors">
                  <p className="text-gray-600">#foodie <span className="text-[#208CFC] float-right">1.1M posts</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#208CFC]/5 to-blue-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Track Your Success</h3>
                <p className="text-gray-600">Monitor your hashtag performance and engagement metrics with our comprehensive analytics dashboard.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl">
                    <img src="/images/3.png" alt="Performance Chart" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h4 className="font-bold">Performance</h4>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <img src="/images/4.png" alt="Engagement Chart" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h4 className="font-bold">Engagement</h4>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/images/9.png" alt="Analytics Overview" className="rounded-xl shadow-lg" />
                <img src="/images/15.png" alt="Metrics" className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg shadow-lg border-4 border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 