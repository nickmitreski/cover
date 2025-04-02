import { Helmet } from 'react-helmet-async'

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - FollowFuseApp</title>
        <meta name="description" content="Privacy Policy for FollowFuseApp - Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">1. Information We Collect</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Account Information: When you create an account with FollowFuseApp, we collect personal information such as your name and email address.</li>
                    <li>Payment Information: We collect payment details (credit card numbers) for billing purposes when you subscribe to our services. This data is processed securely by a third-party payment processor and is never stored on our servers.</li>
                    <li>Usage Data: We automatically collect information about your interactions with our website and Services, including your IP address, browser type, pages visited, timestamps, and device information. This helps us analyze trends, administer the Site, and improve user experience.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-4">Non-Personal Information</h3>
                  <p className="text-gray-600">We may collect non-identifiable information such as demographic data, general location (such as city or country), and information related to your activities on our Site and Services.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">2. How We Use Your Information</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">We use the information we collect for various purposes, including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Providing Services: To operate and deliver the Services you've requested, including account management, billing, and customer support.</li>
                    <li>Personalization: To tailor our Services, content, and offers based on your preferences and usage behavior.</li>
                    <li>Communication: To send you account-related updates, newsletters, promotional offers, and other information you've agreed to receive. You can opt-out of marketing communications at any time.</li>
                    <li>Security: To protect the integrity of our Site and Services, including detecting and preventing fraud or unauthorized access.</li>
                    <li>Legal Obligations: To comply with applicable laws and regulations, including any requests for information from law enforcement or regulatory bodies.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">3. How We Share Your Information</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">We do not sell, rent, or trade your personal information to third parties. However, we may share your information under the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Service Providers: We may share your information with third-party vendors and service providers who assist us in operating our Site and providing the Services (e.g., payment processors, hosting services, marketing platforms). These parties are bound by confidentiality agreements and are only allowed to use your information to perform services on our behalf.</li>
                    <li>Legal Requirements: We may disclose your information if required to do so by law or in response to valid legal requests, such as a subpoena, court order, or government inquiry.</li>
                    <li>Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our business, your information may be transferred as part of that transaction. You will be notified of any such change in ownership or control.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">4. Data Retention</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements. After that period, we will securely delete or anonymize your personal information.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">5. GDPR Compliance (For Users in the European Economic Area - EEA)</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">If you are located in the European Economic Area (EEA), we process your personal data in accordance with the General Data Protection Regulation (GDPR). This means you have specific rights regarding your personal data, which are outlined below.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-4">Legal Basis for Processing Personal Data</h3>
                  <p className="text-gray-600 mb-4">We process your personal data based on the following legal grounds:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Contractual Necessity – To provide and operate our Services.</li>
                    <li>Legitimate Interests – To improve our Site and Services, prevent fraud, and ensure security.</li>
                    <li>Legal Obligation – To comply with financial and regulatory requirements.</li>
                    <li>Consent – For marketing communications, cookies, and tracking technologies (you can withdraw consent at any time).</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-4">Your GDPR Rights</h3>
                  <p className="text-gray-600 mb-4">Under GDPR, you have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Right to Access – You can request a copy of the personal data we hold about you.</li>
                    <li>Right to Rectification – You can request corrections to inaccurate or incomplete data.</li>
                    <li>Right to Erasure (Right to Be Forgotten) – You can ask us to delete your personal data, subject to legal or contractual obligations.</li>
                    <li>Right to Restrict Processing – You can request a temporary restriction on processing your data under certain circumstances.</li>
                    <li>Right to Object – You can object to the processing of your data for marketing or profiling purposes.</li>
                    <li>Right to Data Portability – You can request a copy of your personal data in a structured, machine-readable format.</li>
                    <li>Right to Lodge a Complaint – If you believe we have not handled your personal data correctly, you have the right to file a complaint with your local Data Protection Authority (DPA).</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">6. Security of Your Information</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">We use commercially reasonable technical and organizational measures to protect the personal information we collect. While no method of transmission over the internet or electronic storage is 100% secure, we strive to use robust security technologies and procedures to protect your information. Payment information is processed by a third-party payment processor who adheres to strict security standards (e.g., encryption and PCI compliance).</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">7. Children's Privacy</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">Our Services are not intended for individuals under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected personal information from a child under the age of 13, we will take steps to delete that information as soon as possible.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">8. International Data Transfers</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">Your personal information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. By using our Services, you consent to the transfer of your information to jurisdictions outside of your country, subject to the provisions of this Privacy Policy.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">9. Updates to This Privacy Policy</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600">We may update this Privacy Policy from time to time. Any changes to the Privacy Policy will be posted on this page, and the "Last Updated" date at the top of the page will be revised accordingly. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">10. Contact Information</h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at:
                  </p>
                  <a 
                    href="mailto:contact@followfuseapp.com" 
                    className="text-[#208CFC] hover:text-[#208CFC]/80 font-medium"
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