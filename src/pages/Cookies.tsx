import { Helmet } from 'react-helmet-async'

export default function CookiesPage() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - FollowFuseApp</title>
        <meta name="description" content="Cookie Policy for FollowFuseApp - Learn about how we use cookies and similar technologies." />
      </Helmet>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
            <p className="text-gray-600 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">1. What Are Cookies</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience. Cookies can help us understand how you use our website and services, remember your preferences, and improve your experience.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">2. Types of Cookies We Use</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Essential Cookies</h3>
                  <p className="text-gray-600 mb-4">These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.</p>

                  <h3 className="text-xl font-semibold mt-6 mb-4">Analytics Cookies</h3>
                  <p className="text-gray-600 mb-4">We use analytics cookies to help us understand how visitors interact with our website. This information helps us improve our website and services. These cookies collect information in an anonymous form.</p>

                  <h3 className="text-xl font-semibold mt-6 mb-4">Functionality Cookies</h3>
                  <p className="text-gray-600 mb-4">These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>

                  <h3 className="text-xl font-semibold mt-6 mb-4">Marketing Cookies</h3>
                  <p className="text-gray-600">These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. They are usually placed by advertising networks with our permission.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">3. How We Use Cookies</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">We use cookies for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>To maintain and improve our website's functionality and performance</li>
                    <li>To remember your preferences and settings</li>
                    <li>To analyze how you use our website and services</li>
                    <li>To personalize your experience</li>
                    <li>To provide targeted advertising</li>
                    <li>To ensure the security of our website and services</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">4. Third-Party Cookies</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">We use services from third parties that may also set cookies on your device. These include:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Google Analytics - to analyze website usage</li>
                    <li>Payment processors - to handle secure payments</li>
                    <li>Social media platforms - for social sharing functionality</li>
                    <li>Advertising networks - to deliver targeted advertising</li>
                  </ul>
                  <p className="text-gray-600 mt-4">These third parties have their own privacy policies and may collect and process your data in accordance with their own terms.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">5. Managing Cookies</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-4">How to Manage Cookies in Your Browser</h3>
                  <p className="text-gray-600 mb-4">Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.</p>
                  <p className="text-gray-600">To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                    <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#208CFC] hover:text-[#208CFC]/80">All About Cookies</a></li>
                    <li><a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#208CFC] hover:text-[#208CFC]/80">About Cookies</a></li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">6. Updates to This Policy</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any changes will be posted on this page with an updated revision date.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">7. Contact Us</h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about our use of cookies, please contact us at:
                  </p>
                  <a
                    href="mailto:contact@followfuseapp.com"
                    className="text-[#208CFC] hover:text-[#208CFC]/80"
                  >
                    contact@followfuseapp.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 