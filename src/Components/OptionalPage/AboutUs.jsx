import Helmet from 'react-helmet';
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    
    <div><Helmet><title>About Us</title></Helmet>
      <div className="pb-8 pt-6 my-4 px-12">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p>
          Welcome to{' '}
          <Link to="/">
            <a href="#" className="text-blue-500 hover:underline">
              www.hitech.com
            </a>
          </Link>
          , your one-stop shop for the latest gadgets, electronics, and cutting-edge technology devices. We are dedicated to providing our customers with top-quality products from leading brands in the electronics industry.
        </p>
        <p>
          At www.hitech.com, we understand the importance of staying ahead in the digital era. Our mission is to offer a comprehensive selection of products ranging from smartphones, laptops, smartwatches, cameras, and much more, all at competitive prices.
        </p>
        <h3 className="text-xl font-semibold mt-4">Our Products</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <strong>Smartphones:</strong> Discover the latest smartphone models from renowned brands, each equipped with state-of-the-art features and cutting-edge technology.
          </li>
          <li>
            <strong>Laptops and Computers:</strong> Explore a diverse range of laptops and computers designed to meet various computing needs, from sleek ultrabooks to powerful gaming rigs.
          </li>
          <li>
            <strong>Wearable Devices:</strong> Stay connected and monitor your health with our collection of smartwatches, fitness trackers, and other wearable gadgets.
          </li>
          <li>
            <strong>Cameras and Accessories:</strong> Capture every moment with high-quality cameras and photography accessories that cater to both amateur and professional photographers.
          </li>
          <li>
            <strong>Home Electronics:</strong> Enhance your living space with our selection of smart home devices, entertainment systems, and other home electronics for a more connected lifestyle.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contact Us</h3>
        <p>
          Do you have any questions or need assistance with your purchase? Contact our dedicated support team at{' '}
          <a href="mailto:info@hitech.com" className="text-blue-500 hover:underline">
            info@hitech.com
          </a>
          . We are here to ensure you have a seamless shopping experience and find the perfect electronics that suit your needs.
        </p>
        <p>
          Let www.hitech.com be your trusted source for all your tech needs, and embark on a journey of innovation and discovery with our range of cutting-edge products.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
