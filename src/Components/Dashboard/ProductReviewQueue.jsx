import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const ProductReviewQueue = () => {
    const pendingProducts = useLoaderData();
    const [productStatusNow, setProductStatusNow] = useState(pendingProducts);
    // const pending = productStatusNow.filter(item => item.type === 'pending' || item.type === 'Pending');
    // console.log("review moder", productStatusNow);
    

    const makeFeatured = (id, dataArray) => {
        console.log(id);
        // Use the find method to get the object with the provided ID
        const foundObject = dataArray.find(item => item._id === id);

        
            const productName = foundObject.productName;
            const externalLinks = foundObject.externalLinks;
            const category = "featured";
            const productDetails = foundObject.productDetails;
            const image = foundObject.image;
            const OwnerEmail = foundObject.OwnerEmail;
            const productOwner = foundObject.productOwner;
            const timestamp = new Date();
            const tags = foundObject.tags;

            const updatedProduct = {productName, externalLinks, tags,
                category,timestamp, productDetails, image, OwnerEmail, productOwner}
              console.log(updatedProduct);
           
              fetch(`http://localhost:5000/techProduct/${id}`, {
                  method: 'PUT',
                  headers: {
                      'content-type' : 'application/json'
                  },
                  body: JSON.stringify(updatedProduct)
              })
              .then(res=> res.json())

                    const notify2 = () => toast.success('Featured product now', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
                  notify2();
                  fetch('http://localhost:5000/techProduct')
                  .then((res) => res.json())
                  .then((updatedUserData) => {
                    setProductStatusNow(updatedUserData);
                  })
                  .catch(error => {
                    console.error('Error:', error);
                    // Handle the fetch error
                  });
                  
                  }
// accept button
const makeAccept = (id, dataArray) => {
  console.log(id);
  // Use the find method to get the object with the provided ID
  const foundObject = dataArray.find(item => item._id === id);

  
      const productName = foundObject.productName;
      const externalLinks = foundObject.externalLinks;
      const category = foundObject.category;
      const productDetails = foundObject.productDetails;
      const image = foundObject.image;
      const OwnerEmail = foundObject.OwnerEmail;
      const productOwner = foundObject.productOwner;
      const timestamp = new Date();
      const tags = foundObject.tags;
      const type = "accepted";

      const updatedProduct = {productName, externalLinks, tags,
          category,timestamp,type, productDetails, image, OwnerEmail, productOwner}
        console.log(updatedProduct);
     
        fetch(`http://localhost:5000/techProduct/${id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=> res.json())

              const notify2 = () => toast.success('The product is Accepted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            notify2();
            fetch('http://localhost:5000/techProduct')
            .then((res) => res.json())
            .then((updatedUserData) => {
              setProductStatusNow(updatedUserData);
            })
            .catch(error => {
              console.error('Error:', error);
              // Handle the fetch error
            });
            
            }
                

    
    
    
    return (
        <div><ToastContainer />
        <h2 className=" text-2xl font-bold pb-10 ml-14 py-5">Product to Review</h2>
        <table className="w-[95%] mx-auto">
  <thead className="font-bold">
    <tr>
    <th>SL.</th>
      <th>Product Name</th>
      <th>Status</th>
      <th>View</th>
      <th>Action</th>
      <th>Delete</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>
    {productStatusNow.map((product, index) => (
      <tr key={index} className=" hover:bg-slate-200">
        <td className="text-center">{index + 1}</td>
       
       <td className="text-center">
        <h3 className="text-center font-semibold">{product.productName}
       </h3></td> 

       <td className="text-center">{product.type}</td>
        <td className="text-center">
        <div className="flex justify-center items-center align-middle ">
        <Link to={`/techProduct/${product._id}`}><button className="bg-red-500 hover:bg-red-700 flex justify-center
          items-center align-middle px-4 py-2 rounded-md text-white
           text-sm font-medium w-[98%]">Details</button></Link>
          </div>
            </td>
            <td className="text-center">
          <div className="flex justify-center items-center">
          <button className="bg-red-500 hover:bg-red-700 flex justify-center
          items-center align-middle px-4 py-2 rounded-md text-white
           text-sm font-medium w-[70%]" onClick={() => makeFeatured(product._id, productStatusNow )}>Featured</button>
          </div>
        </td>
        
        <td className="text-center">
          <div className="flex justify-center items-center">
          <button className="bg-red-500 hover:bg-red-700 flex justify-center
          items-center align-middle px-4 py-2 rounded-md text-white
           text-sm font-medium w-[70%]"onClick={() => makeAccept(product._id, productStatusNow )} >Accept</button>
          </div>
        </td>
        <td className="text-center">
          <div className="flex justify-center items-center">
          <Link to={`/dashboard/updateproduct/${(product._id)}`}><button className="bg-orange-500 hover:bg-orange-600 flex justify-center
          items-center align-middle px-4 py-2 rounded-md text-white
           text-sm font-medium w-[95%]">Update</button></Link>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

{
productStatusNow.length == 0 ? <h2 className="pt-20 text-center font-bold">You have no product to review</h2>
: ""
}


    </div>
    );
};

export default ProductReviewQueue;