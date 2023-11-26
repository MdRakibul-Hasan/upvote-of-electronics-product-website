import { useLoaderData } from "react-router-dom";
import Cards from "./cards";
import Offer from "../Offer/Offer";
import ImageGallery from "./ImageGallery";
'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Sponser from "./Sponser";
import Helmet from 'react-helmet';
import ScrollToTop from "../ScrollToTop";
import SliderAdsForHome from "./SliderAdsForHome";
import FeaturedProduct from "../../ProductCategory/FeaturedProduct";
import TrendingProduct from "../../ProductCategory/TrendingProduct";


const Home = () => {

const cards = useLoaderData();
useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div><ScrollToTop />
<Helmet><title>Home</title></Helmet>

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://ebook.projectbd.com/wp-content/uploads/2023/10/home-hero.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Welcome To Hitech</h1>
      <p className="mb-5 text-lg font-medium">Take your best-branded products from us at the best prices.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>


{/* Carosel end here */}

<div className="flex justify-center">
<div className=" bg-white py-6 w-[50%] mx-auto rounded-full shadow-xl -mt-14 z-10 absolute max-md:w-[83%]">
        <h2 className=" text-orange-600 text-center font-bold text-xl max-md:text-base">Tech Zone:  <br /> Your Ultimate Electronics Hub</h2>
    </div>
</div>
    


{/* count down offers */}
<Offer></Offer>


{/* service card start here */}

<div>
  <FeaturedProduct></FeaturedProduct>
</div>

{/* <div><h2 className="text-center font-bold text-3xl my-12">Discover the Latest in High-Tech Gadgets and Devices</h2></div>
            <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="grid grid-cols-2 gap-8 px-16 pb-10 max-md:grid-cols-1 max-md:px-8 overflow-x-hidden">
                {cards.map((card) => <Cards key={card.id} card={card}></Cards>)}
            </div> */}
            
            <div>
  <TrendingProduct></TrendingProduct>
</div>

{/* <div className="overflow-x-hidden flex justify-between px-6 gap-6 items-center h-[80vh] max-md:flex-col max-md:h-[95vh] max-md:py-10 bg-[url('https://ebook.projectbd.com/wp-content/uploads/2023/10/home-2.jpg')] bg-cover">
<img data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="w-[40%] rounded-md" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/events-bg.png" alt="" />
<div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="px-4">
    <h2 className=" text-white text-2xl font-bold max-md:text-xl">Crafting Unforgettable Moments: <br />Your Premier Event Planner</h2>
    <p className=" text-white pb-4">At www.event.com, we are dedicated to turning your special moments into unforgettable memories. As your premier event planner, we bring creativity, precision, and a touch of magic to every celebration.</p>
</div>

</div> */}
<div className="pt-24 pb-14 max-md:pt-14"><SliderAdsForHome></SliderAdsForHome></div>




{/* image gallery starts */}
<div><h2 className="text-center font-bold text-3xl mt-12 mb-10">Find Your Perfect Tech Match with Our Top-Notch Selection </h2></div>
<div className="py-12"><ImageGallery></ImageGallery></div>


{/* our sponser */}

<div className=" bg-white">
<h2 className="text-center font-bold text-2xl mt-12 mb-4">Our Sponsors </h2>
    <Sponser></Sponser>
</div>

        </div>
    );
};

export default Home;