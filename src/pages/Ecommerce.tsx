import { Helmet } from 'react-helmet-async'

export default function EcommercePage() {
  return (
    <>
      <Helmet>
        <title>Ecommerce | FollowFuseApp</title>
        <meta name="description" content="Connect your online store and supercharge your social media presence with our AI-powered tools." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block">Let your</span>
              <span className="block text-[#208CFC] bg-gradient-to-r from-[#208CFC] via-blue-400 to-[#208CFC] bg-clip-text text-transparent">Ecommerce become Social</span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Exhausted from manually creating content for your products?
              Boost conversions for your <span className="font-medium">ecommerce</span> store by visually
              planning your campaigns.
            </p>
            
            <div className="mt-10">
              <button className="btn btn-primary btn-lg hover:scale-105 transition-transform">
                Start Creating
              </button>
            </div>
            
            {/* Three Image Placeholders for Store Connections */}
            <div className="mt-16 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <img 
                    src="/images/shopify.png" 
                    alt="Shopify Integration" 
                    className="h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="font-medium mb-2">Shopify</h3>
                  <p className="text-sm text-gray-600">Connect to import your Shopify products and generate posts.</p>
                  <button className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-4 rounded text-sm">Use</button>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <img 
                    src="/images/woo.png" 
                    alt="WooCommerce Integration" 
                    className="h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="font-medium mb-2">WooCommerce</h3>
                  <p className="text-sm text-gray-600">Connect to import your WooCommerce products and generate posts.</p>
                  <button className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-4 rounded text-sm">Use</button>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <img 
                    src="/images/etsy.png" 
                    alt="Etsy Integration" 
                    className="h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="font-medium mb-2">Etsy</h3>
                  <p className="text-sm text-gray-600">Connect to import your Etsy products and generate posts.</p>
                  <button className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-4 rounded text-sm">Use</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How We Help Section */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#208CFC]/5 to-transparent rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
            <span>How we help with </span><span className="text-[#208CFC]">ecommerce</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-orange-400 mb-6">1</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Easy <span className="text-[#208CFC]">connectivity</span>
              </h3>
              <p className="text-gray-600">
                Integrate your store with our platform in
                seconds and see all your product
                images and details in one place.
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-pink-400 mb-6">2</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Plan in a <span className="text-[#208CFC]">calendar</span>
              </h3>
              <p className="text-gray-600">
                Effortlessly generate captions and
                hashtags surrounding your products
                with the power of AI.
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-purple-400 mb-6">3</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-[#208CFC]">Collaborate</span>
              </h3>
              <p className="text-gray-600">
                Instantly schedule or publish your final
                post to all your social media channels.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seamless Integration Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#208CFC]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Seamless <span className="text-[#208CFC]">integration</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Connect your shop and produce professional graphics in seconds.
              </p>
              <p className="text-xl text-gray-600 mb-10">
                Integrated with:
              </p>
              <div className="flex space-x-8 mb-10">
                <img src="/images/shopify.png" alt="Shopify" className="h-10 object-contain" />
                <img src="/images/woo.png" alt="WooCommerce" className="h-10 object-contain" />
                <img src="/images/etsy.png" alt="Etsy" className="h-10 object-contain" />
              </div>
            </div>
            <div className="md:w-1/2">
              {/* Product Integration Interface */}
              <img 
                src="/images/integration.png" 
                alt="Product Integration Interface" 
                className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Maximize Conversions Section */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#208CFC]/5 to-transparent rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              {/* Product Showcase */}
              <img 
                src="/images/conversions.png" 
                alt="Product Showcase" 
                className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 duration-300"
              />
            </div>
            <div className="md:w-1/2 mb-12 md:mb-0 md:pl-10 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Maximise <span className="text-[#208CFC]">conversions</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Generate a post in seconds showcasing your products.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Eye-catching templates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">AI generated product announcements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Relevant hashtags</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 