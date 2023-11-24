import { useLoaderData } from "react-router-dom";
import Products from "../Home/Products";
import SliderAds from "../Home/SliderAds";
import ScrollToTop from "../ScrollToTop";

const Intel = () => {
    const products = useLoaderData();
    const filteredProducts = products.filter(product => product.brand === 'Intel' ||  product.brand === 'intel');
    
    return (
        <div><ScrollToTop />
            <SliderAds></SliderAds>
<div className="grid md:grid-cols-2 gap-6 mx-10 py-16">

{filteredProducts.map(product => (
      <Products key={product._id} product={product} />
    ))}
</div>
        </div>
    );
};

export default Intel;