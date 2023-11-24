import { Link } from "react-router-dom";
import Helmet from 'react-helmet';

const TermsAndConditions = () => {
    return (
   <div>
      <Helmet>
      <title>Terms and Conditions</title>
       </Helmet>
    <div className="py-8 mt-14 px-12">
         <h2 className="text-3xl font-semibold mb-4">Terms and Conditions</h2>
    <p>
       Welcome to{' '}
      <Link to="/"><a href="#" className="text-blue-500 hover:underline">
www.hitech.com
</a></Link>
. These terms and conditions outline the rules and regulations for the use of our website and our services. By accessing this website and using our services, you accept these terms and conditions in full.
 </p>
<p>
We reserve the right to modify these terms and conditions at any time. You should, therefore, check this page regularly to ensure you are familiar with the current version.
</p>
<h3 className="text-xl font-semibold mt-4">Intellectual Property Rights</h3>
 <p>
   Other than the content you own, under these terms,{' '}
     <Link to="/"><a href="#" className="text-blue-500 hover:underline">
     www.hitech.com
    </a></Link>{' '}
 and/or its licensors own all the intellectual property rights and materials contained on this website.
 </p>
<h3 className="text-xl font-semibold mt-4">Contact Information</h3>
  <p> If you have any questions or concerns regarding these terms and conditions, please contact us at{' '}
      <a href="mailto:info@hitech.com" className="text-blue-500 hover:underline">
       info@hitech.com.
  </a>We appreciate your trust in our services, and we look forward to providing you with the best experience.
</p>
</div>
  </div>
    );
};

export default TermsAndConditions;
