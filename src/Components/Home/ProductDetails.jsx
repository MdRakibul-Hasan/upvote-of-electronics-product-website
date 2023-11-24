import { useLoaderData } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import { getStoredProductData, saveProduct } from "../Utility/localStorage";
import Swal from "sweetalert2";
import ScrollToTop from "../ScrollToTop";
import {useNavigate,} from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    const {_id, name, brand, price, rating, option, description, image} = product;

    // const idInt = parseInt(_id);
    const navigate = useNavigate();
    const handleClickOnAddToCart = () => {
    const storedProductIds = getStoredProductData();

    const myObject = product;
    const idArray = storedProductIds;

    if(idArray.includes(myObject._id)){
        Swal.fire({
            title: 'Error!',
            text: 'You have already added this Product to cart',
            icon: 'error',
            confirmButtonText: 'Back'
          })
    } else{
        saveProduct(_id);
        Swal.fire(
            'Good job!',
            'Product added Successful',
            'success'
          )
    }

    }

    return (
        <div>
<ScrollToTop />
            
            <div className="flex justify-center items-center w-full pb-28 px-10 mt-10 max-md:flex-col max-md:px-3">
<div className="w-1/2 max-md:w-full flex justify-center items-center">
    <img className="w-[80%]" src={image}/>
</div>

<div className="w-1/2 max-md:w-full flex flex-col gap-1">
    <h2 className=" text-2xl font-semibold">{name}</h2>

                    <div className="flex">
                    {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;

                            return (
                            <label key={index}>
                                <FaStar
                                className="star"
                                color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                                size={16}
                                />
                            </label>
                            );
                        })}
                    </div>
                    <p className=" text-sm"><span className="font-bold">Brand: </span>{brand}</p>
                    <p className=" text-sm"><span className="font-bold">Category: </span>{option}</p>
                    <h2 className="font-semibold text-lg text-red-500">${price}</h2>
                    <p className=" text-sm"><span className="font-bold">Description: </span>{description}</p>
                    <div className="flex gap-2">
                    <button onClick={handleClickOnAddToCart} className=" bg-red-500 text-white px-2 py-1 rounded-lg w-[30%] mt-4">Add to Cart</button>
        <button onClick={() => navigate(-1)} className=" bg-red-500 text-white px-2 py-1 rounded-lg w-[30%] mt-4">Buy More</button>

                    </div>
</div>

            </div>
        </div>
    );
};

export default ProductDetails;