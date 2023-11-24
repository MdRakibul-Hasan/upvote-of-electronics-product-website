import Helmet from 'react-helmet';
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <div className="pb-8 pt-6 my-4 px-12">
        <h2 className="text-3xl font-semibold mb-4">Privacy Policy</h2>
        <p>
          At www.hitech.com, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit or make use of our website and services.
        </p>
        <h3 className="text-xl font-semibold mt-4">Information Collection</h3>
        <p>
          We may collect personal information when you create an account, place an order, or interact with our website. This information may include your name, email address, shipping address, and payment details.
        </p>
        <h3 className="text-xl font-semibold mt-4">How We Use Your Information</h3>
        <p>
          We use your information to process your orders, provide customer support, and keep you updated about promotions and product updates. Your data is used solely for these purposes and is not shared with third parties without your consent.
        </p>
        <h3 className="text-xl font-semibold mt-4">Security</h3>
        <p>
          We take appropriate measures to secure your data. Your payment information is encrypted, and we employ industry-standard security protocols to protect your information.
        </p>
        <h3 className="text-xl font-semibold mt-4">Cookies</h3>
        <p>
          Our website may use cookies to enhance your browsing experience. These cookies do not contain personal information and can be disabled in your browser settings.
        </p>
        <h3 className="text-xl font-semibold mt-4">Contact Us</h3>
        <p>
          If you have any questions or concerns regarding your privacy or data security, please contact us at{' '}
          <a href="mailto:privacy@hitech.com" className="text-blue-500 hover:underline">
            privacy@hitech.com
          </a>
          .
        </p>
        <p>
          We are committed to maintaining your trust and providing transparency in how your data is handled. Your privacy is important to us.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
