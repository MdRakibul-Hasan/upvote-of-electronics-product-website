import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredProductData, removeProduct } from "./Utility/localStorage";
import Swal from "sweetalert2";
import ScrollToTop from "./ScrollToTop";

const MyCart = () => {
  const mycarts = useLoaderData();
  const [storedProducts, setStoredProducts] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const storedProductIds = getStoredProductData();
    if (mycarts.length > 0) {
      const productDone = [];
      for (const _id of storedProductIds) {
        const product = mycarts.find((product) => product._id === _id);
        if (product) {
          productDone.push(product);
        }
      }
      setStoredProducts(productDone);
    }
  }, [mycarts]);

  const handleClickDelete = (_id) => {
    const storedProductIds = getStoredProductData();
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            if (storedProductIds.includes(_id)) {
                removeProduct(_id);

                Swal.fire(
                    'Deleted!',
                    'Your Product has been deleted.',
                    'success'
                  )
          
                const updatedProducts = storedProducts.filter((product) => product._id !== _id);
                setStoredProducts(updatedProducts);
              }

        }
      })

  };

  return (
    <div><ScrollToTop />
      <h2 className="text-xl font-semibold text-center pt-12">Total Product: {storedProducts.length}</h2>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 px-16 mt-10 max-md:px-2">
        {storedProducts.slice(0, dataLength).map((product) => (

<div  key={product._id} className="flex gap-2 max-md:flex-col max-md:h-[80%] bg-base-100 shadow-xl h-[40vh] border-2 rounded-lg border-slate-500 ">
  <div className="flex flex-col justify-center items-center"><img className="h-[35vh]" src={product.image} /></div>
  <div className="flex flex-col justify-center max-md:items-center">
    <h2 className="text-xl font-bold">{product.name}</h2>
    <p>{product.brand}</p>
    <p className="text-lg text-red-500 font-semibold">${product.price}</p>
   <div className="flex justify-start">
   <div className="flex justify-center gap-2 max-md:pb-5">
        <Link to={`/productDetails/${product._id}`}>
        <button className=" bg-orange-500 hover:bg-orange-700 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-md">View Details</button>          
            </Link>
            
        <button onClick={() => handleClickDelete(product._id)} className=" bg-red-500 hover:bg-red-700 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-md">Delete</button>          
            
        </div>
  </div>
  </div>
</div>
 ))}
      </div>
      <div className={storedProducts.length <= 4 ? "hidden" : "active"}>
    <div className={dataLength === storedProducts.length && "hidden"}>
        <div className="flex justify-center align-middle items-center py-14 pb-28">
          <button onClick={() => setDataLength(storedProducts.length)} className="bg-red-500 text-white py-1 px-4 rounded-md">
              See All Product
            </button>
        </div>
     </div>
    </div>
      <div className="pb-28"></div>
    </div>
  );
};

export default MyCart;


































// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { getStoredProductData } from "./Utility/localStorage";
// import CardOfMyCart from "./CardOfMyCart";



// const MyCart = () => {

//     const mycarts = useLoaderData();
//     const [storedProducts, setStoredProducts] = useState([])
//     const [dataLength, setDataLength] = useState(4);

//     useEffect( () => {
//         const storedProductIds = getStoredProductData();
//         if(mycarts.length > 0) {
//             const productDone = [];

//             for (const _id of storedProductIds) {
//                 const product = mycarts.find(product => product._id === _id);

//                 if (product){
//                     productDone.push(product)
//                 }
//             }
//             setStoredProducts(productDone);  
//         }
//     },[mycarts])



//     return (
//         <div>
//             <h2 className="text-xl font-semibold text-center pt-20">Total Product: {storedProducts.length}</h2>
// <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 px-16 mt-10 max-md:px-2">
//     {storedProducts.slice(0, dataLength).map(cardOfMyCart => <CardOfMyCart key={cardOfMyCart._id} cardOfMyCart={cardOfMyCart}></CardOfMyCart>)

//     }

// </div>

// <div className={storedProducts.length <= 4 ? 'hidden' : 'active'}>
//     <div className={dataLength === storedProducts.length && 'hidden'}>
// <div className="flex justify-center align-middle items-center py-14 pb-28">
// <button
// onClick={() => setDataLength(storedProducts.length)}
// className=" bg-red-500 text-white py-1 px-4 rounded-md">See All Product</button>
// </div>
//     </div>
// </div>


// <div className="pb-28"></div>


//         </div>
//     );
// };


// export default MyCart;