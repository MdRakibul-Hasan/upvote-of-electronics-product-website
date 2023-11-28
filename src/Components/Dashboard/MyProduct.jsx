import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";
import Swal from "sweetalert2";



const MyProduct = () => {
    const myproducts = useLoaderData();
    const { user } = useContext(AuthContext);
    const [storedProducts, setStoredProducts] = useState([]);
    
    useEffect(() => {
      const email = user?.email;
      if (myproducts.length > 0 && email) {
        const filteredProducts = myproducts.filter((product) => product.OwnerEmail === email);
        setStoredProducts(filteredProducts);
        console.log(filteredProducts);
      }
    }, [myproducts, user]);


    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
    
              fetch(`http://localhost:5000/techProduct/${id}`,{
                method: 'DELETE'
              })
              .then(res=> res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Product has been deleted.",
                        icon: "success"
                      });
                    console.log(data);
                    const remaining = storedProducts.filter(product => product._id !== id);
                    setStoredProducts(remaining);
                }
    
              })
    
            }
          });
    }



    return (
        <div>
            <h2 className=" text-2xl font-bold pb-10 ml-14 py-5">My Product</h2>
            <table className="w-full px-5 max-md:px-2">
      <thead className="font-bold">
        <tr>
          <th>Product Name</th>
          <th>Number of Votes</th>
          <th>Status</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {storedProducts.map((product, index) => (
          <tr key={index} className=" hover:bg-slate-200">
            <td className="text-center">{product.productName}</td>
            <td className="text-center">{product.upvote.length -1}</td>
            <td className="text-center">{product.type}</td>
            <td className="text-center">
              <button onClick={() => handleDelete(product._id)}>Delete</button>
            </td>
            <td className="text-center">
              <button>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>




        </div>

        
    );
};

export default MyProduct;