import React, { useState } from 'react';

const PrivacyTermsPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Dash Dynamics Legal Information</h1>
      
      {/* Simple Tab Navigation */}
      <div className="flex mb-4 border-b">
        <button 
          className={`py-2 px-4 ${activeTab === 'privacy' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('privacy')}
        >
          Privacy Policy
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === 'terms' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('terms')}
        >
          Terms & Conditions
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        {activeTab === 'privacy' ? (
          <div id="privacy-policy">
            <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
            
            <p className="mb-4">
              At Dash Dynamics, we respect the privacy of everyone who interacts with our platform. Please read this Privacy Policy carefully to understand how we collect, use, and protect your personal information.
            </p>
            <p className="mb-4">
              By submitting your personal data to us, you agree to the terms outlined in this Privacy Policy and consent to the disclosures mentioned herein.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Scope of this Privacy Policy</h3>
            <p className="mb-4">
              This Privacy Policy applies to the use of personal information collected through or in connection with this website (hereinafter referred to as "this site"). This policy pertains specifically to the Dash Dynamics website and may not necessarily apply to other affiliated sites. If you navigate to any other website linked from this site, please review their respective privacy policies.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Special Notice for Users Under 13 Years Old</h3>
            <p className="mb-4">
              If you are under 13 years old, please do not provide us with your personal information (such as name, address, or email). If you wish to use this site in a way that requires submitting personal information, please ask a parent or guardian to do so on your behalf.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Collection and Use of Personal Information</h3>
            <p className="mb-4">
              We collect and use personal information (such as your name, address, phone number, and email) for the following purposes:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Responding to inquiries or requests submitted by you.</li>
              <li>Processing orders or applications.</li>
              <li>Fulfilling our obligations under agreements with you.</li>
              <li>Resolving technical or service-related issues.</li>
              <li>Developing products or services tailored to your needs.</li>
            </ul>
            <p className="mb-4">
              Except as outlined in this policy, we will not disclose personally identifiable information without your consent unless required by law or necessary to protect our rights, property, or the safety of our users and customers.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Collection of Non-Personal Information</h3>
            <p className="mb-4">
              We may automatically collect non-personal information such as browser type, referring website, or aggregated demographic data. This data helps us improve our website's performance and user experience. From time to time, we may share non-personal, aggregated data with third parties for analytical purposes.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Third-Party Websites</h3>
            <p className="mb-4">
              Our website may contain links to third-party websites. Dash Dynamics is not responsible for the privacy policies or practices of these external sites. Please review their policies before providing any personal information.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Submission of Others' Personal Information</h3>
            <p className="mb-4">
              If you provide personal information about family members or friends (for example, to share service details with them), please ensure that you have obtained their consent beforehand.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Additional Uses of Information</h3>
            <p className="mb-4">
              With your consent, we may use your personal information for:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Market research and analytics.</li>
              <li>Informing you about new products, services, and updates.</li>
              <li>Sharing information with Dash Dynamics' affiliated companies for marketing purposes.</li>
            </ul>
            <p className="mb-4">
              If you wish to opt out of such uses at any time, please contact us, and we will update our records accordingly.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Sharing of Information with Third Parties</h3>
            <p className="mb-4">
              From time to time, we may share your personal data with third parties for:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Market research and tracking of sales data.</li>
              <li>Promotional communications related to products and services.</li>
              <li>Sharing information with affiliated companies for marketing purposes.</li>
            </ul>
            <p className="mb-4">
              If you prefer not to have your data shared, you can opt out by notifying us.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Use of Cookies</h3>
            <p className="mb-4">
              We may store cookies on your device to enhance user experience. Cookies help us analyze website traffic, personalize content, and optimize site performance. You can disable cookies in your browser settings, but doing so may affect the website's functionality.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Online Forums and Public Communications</h3>
            <p className="mb-4">
              If our site offers chat rooms, forums, or message boards, any personal information disclosed in these spaces becomes publicly available. We advise caution when sharing personal details in such environments.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Data Security</h3>
            <p className="mb-4">
              We have implemented security measures to protect your personal data from unauthorized access, misuse, or disclosure. Our policies are updated periodically as new technologies become available.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Changes to This Privacy Policy</h3>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Any substantial changes will be posted on this page, and we will do our best to notify users of significant updates. Please check this policy periodically.
            </p>
            <p className="mb-4">
              For any queries regarding this Privacy Policy, please contact us at -
            </p>
          </div>
        ) : (
          <div id="terms-conditions">
            <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
            
            <p className="mb-4">
              Welcome to Dash Dynamics. This website is owned and operated by Dash Dynamics. Visitors to this website are bound by the following terms and conditions. For the purposes of these terms and conditions, "this website" refers to Dash Dynamics' official website, which may link to other affiliated websites.
            </p>
            <p className="mb-4">
              Other affiliated websites may contain terms and conditions different from those stated here. When navigating through Dash Dynamics' websites, please check the terms and conditions of each website and do not assume that these terms apply universally.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Terms & Conditions</h3>
            <p className="mb-4">
              This website contains material including text, photographs, images, and other media, which are protected by copyright and/or other intellectual property rights. All copyright and intellectual property rights in this material are owned by Dash Dynamics or have been licensed for use on this website.
            </p>
            <p className="mb-4">
              This website also contains trademarks, including the mark "Dash Dynamics" and its emblem. All trademarks included on this website belong to Dash Dynamics or have been licensed for use on this website.
            </p>
            
            <p className="mb-2">You may:</p>
            <ul className="list-disc ml-8 mb-4">
              <li>Access any part of the website.</li>
              <li>Print a single copy of any or all pages for personal reference.</li>
            </ul>
            
            <p className="mb-2">You may not:</p>
            <ul className="list-disc ml-8 mb-4">
              <li>Copy (whether by printing, storing, downloading, or by any other means), distribute, broadcast, alter, or tamper with any material on the website, except as permitted under "You may."</li>
              <li>Remove any copyright, trademark, or other intellectual property notices from any material copied or printed from the website.</li>
              <li>Link to this website without express written consent.</li>
            </ul>
            
            <p className="mb-4">
              If you wish to provide a hypertext or other link to this website, please contact the website administrator with details of:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>The URL(s) of the web page(s) from which you propose to link to this website.</li>
              <li>The URL(s) of the web page(s) on this website to which you propose to link.</li>
            </ul>
            <p className="mb-4">
              We have the sole discretion to accept or reject such requests.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Changes in Terms & Conditions</h3>
            <p className="mb-4">
              Dash Dynamics reserves the right to change the terms and conditions and disclaimers at any time. By browsing this website, you agree to be bound by the latest version of these terms and conditions, and it is your responsibility to check for updates.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Changes in Website Operations</h3>
            <p className="mb-4">
              Dash Dynamics may:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>Modify the format and content of this website at any time.</li>
              <li>Suspend website operation for maintenance, updates, or other reasons.</li>
              <li>Terminate website access at any time without prior notice.</li>
            </ul>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Data Protection</h3>
            <p className="mb-4">
              Personal details provided to Dash Dynamics through this website will only be used in accordance with our Privacy Policy. By submitting your personal details, you consent to their use as outlined in our Privacy Policy.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Complaints</h3>
            <p className="mb-4">
              If you have a question or complaint regarding this website, please contact the Dash Dynamics Administrator.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Jurisdiction</h3>
            <p className="mb-4">
              These terms and conditions are governed by and shall be interpreted in accordance with the relevant laws. Any disputes arising from these terms or the website's use shall be subject to the exclusive jurisdiction of the courts in the applicable location.
            </p>
            
            <h3 className="text-lg font-bold mt-4 mb-2">Disclaimer</h3>
            <p className="mb-4">
              All information or advice provided on this website is general in nature and should not be relied upon for making decisions. Dash Dynamics strives to ensure that all information on this website is accurate at the time of inclusion but does not guarantee its accuracy. Dash Dynamics is not liable for any actions taken based on this information or for any resulting loss or damage.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyTermsPage;
