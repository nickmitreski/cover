import { Helmet } from 'react-helmet-async'

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - FollowFuseApp</title>
        <meta name="description" content="Terms of Service for FollowFuseApp - Learn about our services, policies, and guidelines." />
      </Helmet>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">1. Services Overview</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">FollowFuseApp provides comprehensive social media services designed to enhance your Instagram presence and achieve your specific goals. Our services include, but are not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Account optimization: Tailoring your profile and content to align with best practices for engagement and visibility.</li>
                    <li>Engagement strategies: Implementing targeted actions to increase interactions with your audience and boost your reach.</li>
                    <li>Audience development: Building and nurturing a relevant and engaged audience through customized approaches.</li>
                    <li>Content strategy and curation: Creating and planning content that resonates with your target audience and supports your brand vision.</li>
                    <li>Analytics and performance tracking: Providing insights and reports on account performance, helping you assess progress and adjust strategies.</li>
                    <li>Community engagement: Actively participating in and managing interactions with followers to foster a loyal community.</li>
                    <li>Brand building: Helping you establish and strengthen your brand identity through focused social media initiatives.</li>
                  </ul>
                  <p className="text-gray-600 mt-4">These services are designed to provide you with a holistic approach to Instagram management, tailored to your specific needs and objectives.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">2. Account Registration and Responsibilities</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>To access our Services, you must create an account by providing accurate and up-to-date information. You agree to keep this information current and accurate throughout the duration of your subscription.</li>
                    <li>You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. If you suspect any unauthorized use of your account, you must notify us immediately.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">3. Subscription and Payment Terms</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Subscription Options</h3>
                  <p className="text-gray-600 mb-4">FollowFuseApp offers various subscription plans. By selecting a subscription, you agree to pay the fees associated with that plan. All payments are processed securely and automatically. Our subscription plans may include:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Trial Period (if applicable): A no-cost trial period where you may evaluate the Services.</li>
                    <li>Recurring Subscriptions: After the trial or initial term, your subscription will automatically renew at the end of each billing cycle.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-4">Payment Authorization</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>By entering your payment information, you authorize FollowFuseApp to charge you for your chosen subscription plan and for any additional charges as outlined in these Terms.</li>
                    <li>Trial Period: If applicable, your subscription may include a trial period at no charge. Once the trial period ends, you will be automatically charged the applicable subscription fee unless you cancel before the trial period expires.</li>
                    <li>Billing Cycle and Renewal: Unless you cancel, your subscription will automatically renew at the end of each billing cycle. Your payment method will be charged automatically unless you have canceled your subscription before the renewal date.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">4. Cancellation and Refund Policy</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">We strive to ensure our customers are satisfied with our services. However, we have a no-refund policy once a charge has been processed. Please read the following carefully:</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-4">Cancellation</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Before the Trial or Subscription Term Ends: You can cancel your subscription at any time before the trial or subscription term ends. To avoid being charged, you must cancel at least 24 hours before your renewal date.</li>
                    <li>After the Trial or Subscription Term Ends: If you cancel after your billing cycle has started, you won't receive a refund for the current period, but you won't be charged for future billing cycles.</li>
                    <li>How to Cancel: To cancel, contact support at contact@followfuseapp.com at least 24 hours before your renewal date.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-4">No Refund Policy</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Once a payment has been processed for a billing cycle (either for a trial or subscription), no refunds will be issued for that cycle.</li>
                    <li>You are responsible for managing your subscription and ensuring that you cancel before your next payment is due to avoid future charges.</li>
                    <li>You can cancel your subscription at any time to stop further payments from being processed, but you will not receive a refund for the current billing period.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">5. Account Termination</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">We reserve the right to suspend, terminate, or limit access to your account or Services at our discretion if we believe that you have violated any of these Terms. In the event of termination, no refunds will be issued, and you will still be responsible for any outstanding charges accrued up to the termination date.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">6. Service Availability</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">FollowFuseApp makes no guarantee that our Services will be available at all times. We strive for minimal downtime, but we cannot guarantee uninterrupted access. We may periodically update, maintain, or improve the Services, which may result in temporary disruptions.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">7. Data Protection and Privacy</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">We take the privacy and protection of your data seriously. Your personal information is processed in accordance with our Privacy Policy. By using our Services, you consent to the collection, use, and storage of your data as described in our Privacy Policy.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">8. Limitation of Liability</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">To the fullest extent permitted by law, FollowFuseApp and its affiliates, employees, agents, or licensors shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from your use or inability to use our Services, including but not limited to data loss, business interruption, or financial loss.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">9. Dispute Resolution and Governing Law</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">Any disputes arising out of or in connection with these Terms of Service shall be governed by and construed in accordance with the laws applicable to the jurisdiction in which FollowFuseApp operates. Any legal action or proceeding related to these Terms shall be brought exclusively in the competent courts located within the jurisdiction where FollowFuseApp operates.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">10. Changes to These Terms</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">We may modify these Terms of Service at any time. When changes are made, the revised Terms will be posted on this page with the updated "Last Updated" date. It is your responsibility to review these Terms periodically. Your continued use of the Services after any such changes constitutes your acceptance of the revised Terms.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
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