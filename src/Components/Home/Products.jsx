import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Products = ({product}) => {

    const {_id, name, brand, price, rating, option, description, image} = product;

    return (

<div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
<div className="flex justify-center max-h-[45vh]">
<img
  className="w-[60%] "
  src={image}
  alt="Apple Watch Series 7 in colors pink, silver, and black"
/>
</div>
<div className="px-4 py-4">
  <div className="font-bold text-xl mb-2">
    <h2 className="text-gray-900 dark:text-white">
    {name}
    </h2>
  </div>
  <div className="mb-5 mt-2 flex items-center">
   
    <span className=" flex items-center gap-1 ml-3 mr-2 rounded bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-600 dark:bg-orange-200 dark:text-orange-600">
    <FaStar /> {rating}
    </span>
    <p className="border-gray-500 border-2 rounded-lg px-1 mr-2">{brand}</p> 
    <p className="border-gray-500 border-2 rounded-lg px-1">{option}</p>
  </div>
  <div className="flex items-center justify-between">
    <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>
<div className="flex justify-center gap-2">
<Link to={`/updateProduct/${_id}`}
      className="rounded-lg bg-orange-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-orange-700 "
    >
      Update
    </Link> 
    <Link to={`/productDetails/${_id}`}
      className="rounded-lg bg-orange-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-orange-700 "
    >
      Details
      </Link> 
</div>

  </div>
</div>
</div>



    );
};

export default Products;