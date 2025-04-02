export default function Hero() {
  return (
    <section className="relative bg-white pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#208CFC]/10 rounded-full blur-xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="block animate-slide-up-1">The Ultimate</span>
            <span className="block text-[#208CFC] animate-slide-up-2">Social Media Solution</span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up-3">
            Effortlessly optimize and elevate your presence with AI-driven tools and tailored services.
          </p>
          
          <div className="mt-10 animate-slide-up-4">
            <button className="px-8 py-4 bg-[#208CFC] text-white rounded-lg font-semibold hover:bg-[#208CFC]/90 transition-colors duration-200">
              Get Started Free
            </button>
          </div>
          
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <img 
              src="/images/hero2.png" 
              alt="Social media likes" 
              className="w-full max-w-[300px] mx-auto transform hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-in animate-slide-up-5"
            />
            <img 
              src="/images/hero1.png" 
              alt="Social media engagement metrics" 
              className="w-full max-w-[300px] mx-auto transform hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-in animate-slide-up-6"
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="italic text-gray-600 opacity-0 animate-fade-in animate-slide-up-8">"From AI copywriting to personalized coaching, this platform revolutionized our social media strategy and tripled our engagement"</p>
          </div>
        </div>
      </div>
      
      <style>
        {`
        :root {
          --primary: #208CFC;
        }
        
        .text-primary {
          color: #208CFC;
        }
        
        .from-primary {
          --tw-gradient-from: #208CFC;
        }
        
        .via-blue-400 {
          --tw-gradient-stops: var(--tw-gradient-from), #208CFC, var(--tw-gradient-to, rgba(32, 140, 252, 0));
        }
        
        .to-primary {
          --tw-gradient-to: #208CFC;
        }
        
        .bg-primary\/10 {
          background-color: rgba(32, 140, 252, 0.1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slide-up-1 {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-slide-up-2 {
          animation: slideUp 0.6s ease-out 0.2s forwards;
        }

        .animate-slide-up-3 {
          animation: slideUp 0.6s ease-out 0.4s forwards;
        }

        .animate-slide-up-4 {
          animation: slideUp 0.6s ease-out 0.6s forwards;
        }

        .animate-slide-up-5 {
          animation: slideUp 0.6s ease-out 0.8s forwards;
        }

        .animate-slide-up-6 {
          animation: slideUp 0.6s ease-out 1s forwards;
        }

        .animate-slide-up-7 {
          animation: slideUp 0.6s ease-out 1.2s forwards;
        }

        .animate-slide-up-8 {
          animation: slideUp 0.6s ease-out 1.4s forwards;
        }
        `}
      </style>
    </section>
  )
} 