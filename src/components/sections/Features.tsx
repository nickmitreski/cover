import { useEffect } from 'react'

export default function Features() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    // Make elements visible immediately when the section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealElements.forEach(el => {
            el.classList.add('is-visible');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const featuresSection = document.querySelector('.features-section');
    if (featuresSection) {
      observer.observe(featuresSection);
    }
    
    return () => {
      if (featuresSection) {
        observer.unobserve(featuresSection);
      }
    };
  }, []);
  
  return (
    <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden features-section -mt-1">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#208CFC]/5 to-transparent rounded-tr-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 reveal-up">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 opacity-0 animate-fade-in-up">
            <span>Transform Your Social Media</span> <span className="text-[#208CFC]">Today</span>.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <span className="block mb-1">Skip the trial and error. Get the tools and strategy you need to grow—effortlessly.</span>
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all reveal-left">
                  <h3 className="text-2xl font-bold mb-6 uppercase relative">
                    Smarter Social Content, Powered by AI
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#208CFC] rounded"></span>
                  </h3>
                  
                  <p className="text-gray-600 mb-6">Effortlessly create high-performing content with AI-driven tools and expert strategies.</p>
                  
                  <h4 className="text-lg font-semibold mb-4">What We Offer:</h4>
                  <div className="space-y-4">
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-gray-600">📝 AI Copywriting – Engaging captions and descriptions tailored to your niche.</p>
                    </div>
                    
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-gray-600">🤖 Content Generation – Fresh post ideas and outlines based on trends.</p>
                    </div>
                    
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-gray-600">📅 Content Strategy – Personalized monthly plans for consistency and growth.</p>
                    </div>
                    
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-gray-600">🔍 Niche Research – Data-backed insights to maximize engagement.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all reveal-right">
                  <h3 className="text-2xl font-bold mb-6 uppercase relative">
                    Optimize & Elevate Your Presence
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#208CFC] rounded"></span>
                  </h3>
                  
                  <p className="text-gray-600 mb-6">Enhance your social media presence with personalized support and efficient tools.</p>
                  
                  <div className="space-y-4">
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-gray-600">🚀 Profile Optimization – Perfect your profile, visuals & branding.</p>
                    </div>
                    
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-gray-600">🎓 1-on-1 Coaching – Get expert advice on growth, engagement & monetization.</p>
                    </div>
                    
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-gray-600">🤝 Brand Collaborations – Connect with brands that align with your niche.</p>
                    </div>
                    
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-gray-600">📅 Scheduling & Performance – Plan posts and track metrics to refine your strategy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-5 flex justify-center items-center reveal-up">
              <div className="relative">
                {/* Phone mockup */}
                <div className="w-[280px] h-[580px] bg-black rounded-[40px] p-3 shadow-xl relative hover:scale-105 transition-transform duration-500">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[30px] bg-black rounded-b-[16px] z-10"></div>
                  <div className="w-full h-full rounded-[32px] overflow-hidden border-[8px] border-black relative bg-gray-50">
                    {/* App Interface */}
                    <div className="h-full flex flex-col">
                      {/* Status Bar */}
                      <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500"></div>
                          <div className="text-sm font-medium">Create Post</div>
                        </div>
                        <button className="px-4 py-1.5 bg-[#208CFC] text-white rounded-lg text-sm font-medium">
                          Share
                        </button>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 overflow-auto">
                        {/* Image Upload Area */}
                        <div className="p-4">
                          <div className="aspect-square bg-white rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#208CFC]/5 to-purple-50"></div>
                            <div className="relative z-10 text-center">
                              <div className="w-12 h-12 rounded-full bg-[#208CFC]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-[#208CFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                              </div>
                              <p className="text-sm text-gray-500">Drop your image here</p>
                            </div>
                          </div>
                        </div>

                        {/* Caption Area */}
                        <div className="px-4 space-y-4">
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                              <svg className="w-4 h-4 text-[#208CFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                              </svg>
                              <span className="text-sm font-medium">Caption</span>
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 bg-gray-100 rounded-full w-3/4 animate-pulse"></div>
                              <div className="h-2 bg-gray-100 rounded-full w-full animate-pulse"></div>
                              <div className="h-2 bg-gray-100 rounded-full w-5/6 animate-pulse"></div>
                            </div>
                          </div>

                          {/* Hashtags */}
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#instagram</span>
                            <span className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#growth</span>
                            <span className="px-3 py-1.5 bg-[#208CFC]/10 text-[#208CFC] text-xs rounded-full">#content</span>
                          </div>

                          {/* Tools Bar */}
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <button className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  </svg>
                                </button>
                                <button className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                  </svg>
                                </button>
                                <button className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                                  </svg>
                                </button>
                              </div>
                              <button className="w-8 h-8 rounded-lg bg-[#208CFC]/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#208CFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center reveal-up">
            <a href="/signup" className="btn btn-primary btn-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
      
      <style>
        {`
        :root {
          --primary: #208CFC;
        }
        
        .shimmer-text {
          background: linear-gradient(to right, #208CFC, #6574cd, #208CFC);
          background-size: 200% 100%;
          background-clip: text;
          color: transparent;
          animation: shimmer 2s infinite linear;
        }
        
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        .reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.4s ease-out;
        }
        
        .reveal-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.4s ease-out;
        }
        
        .reveal-right {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.4s ease-out;
        }
        
        .reveal-up.is-visible,
        .reveal-left.is-visible,
        .reveal-right.is-visible {
          opacity: 1;
          transform: translate(0, 0);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse-slow {
          0% { background-color: rgba(240, 255, 244, 0.7); }
          50% { background-color: rgba(240, 255, 244, 1); }
          100% { background-color: rgba(240, 255, 244, 0.7); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .text-primary {
          color: #208CFC;
        }
        
        .from-primary {
          --tw-gradient-from: #208CFC;
        }
        
        .bg-primary\/10 {
          background-color: rgba(32, 140, 252, 0.1);
        }
        
        .from-primary\/5 {
          --tw-gradient-from: rgba(32, 140, 252, 0.05);
        }
        `}
      </style>
    </section>
  )
} 