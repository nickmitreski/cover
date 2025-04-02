import { Helmet } from 'react-helmet-async'

export default function RefundPage() {
  return (
    <>
      <Helmet>
        <title>Cancellation and Refund Policy - FollowFuseApp</title>
        <meta name="description" content="Cancellation and Refund Policy for FollowFuseApp - Learn about our subscription cancellation and refund terms." />
      </Helmet>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Cancellation and Refund Policy</h1>
            <p className="text-gray-600 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">1. Overview</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">At FollowFuseApp, we strive to ensure our customers are satisfied with our services. This policy outlines our terms regarding subscription cancellation and refunds. Please read this policy carefully before making a purchase.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">2. Subscription Cancellation</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Before the Trial or Subscription Term Ends</h3>
                  <p className="text-gray-600 mb-4">You can cancel your subscription at any time before the trial or subscription term ends. To avoid being charged, you must cancel at least 24 hours before your renewal date.</p>

                  <h3 className="text-xl font-semibold mt-6 mb-4">After the Trial or Subscription Term Ends</h3>
                  <p className="text-gray-600 mb-4">If you cancel after your billing cycle has started, you won't receive a refund for the current period, but you won't be charged for future billing cycles.</p>

                  <h3 className="text-xl font-semibold mt-6 mb-4">How to Cancel</h3>
                  <p className="text-gray-600 mb-4">To cancel your subscription, please contact our support team at contact@followfuseapp.com at least 24 hours before your renewal date. Include your account details and reason for cancellation.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">3. No Refund Policy</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">We have a no-refund policy once a charge has been processed. This means:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Once a payment has been processed for a billing cycle (either for a trial or subscription), no refunds will be issued for that cycle.</li>
                    <li>You are responsible for managing your subscription and ensuring that you cancel before your next payment is due to avoid future charges.</li>
                    <li>You can cancel your subscription at any time to stop further payments from being processed, but you will not receive a refund for the current billing period.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">4. Account Termination</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">We reserve the right to suspend, terminate, or limit access to your account or Services at our discretion if we believe that you have violated any of our Terms of Service. In the event of termination, no refunds will be issued, and you will still be responsible for any outstanding charges accrued up to the termination date.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">5. Service Availability</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">FollowFuseApp makes no guarantee that our Services will be available at all times. We strive for minimal downtime, but we cannot guarantee uninterrupted access. We may periodically update, maintain, or improve the Services, which may result in temporary disruptions.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">6. Changes to This Policy</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">We may modify this Cancellation and Refund Policy at any time. When changes are made, the revised Policy will be posted on this page with the updated "Last Updated" date. It is your responsibility to review this Policy periodically. Your continued use of the Services after any such changes constitutes your acceptance of the revised Policy.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">7. Contact Us</h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about our Cancellation and Refund Policy, please contact us at:
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