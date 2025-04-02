import { Helmet } from 'react-helmet-async'
import { FormEvent } from 'react'

export default function ContactPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // This is just a dummy handler - we'll implement actual form submission later
    alert('Thanks for your message! This is a dummy form for now.')
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | FollowFuseApp</title>
        <meta name="description" content="Get in touch with our team for custom solutions, support, or any questions about our social media growth platform." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#208CFC]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                Chat with our team
              </h1>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#208CFC] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#208CFC] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone and Company row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#208CFC] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#208CFC] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#208CFC] focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-[#208CFC] text-white rounded-lg font-semibold hover:bg-[#208CFC]/90 transition-all hover:scale-105 duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 