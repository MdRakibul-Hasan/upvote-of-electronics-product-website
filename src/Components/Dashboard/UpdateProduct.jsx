import React, { useContext, useState } from "react";
import { AuthContext } from "../Services/AuthProvider";
import Swal from "sweetalert2";
import { WithContext as ReactTags } from 'react-tag-input';
import './AddProduct.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useNavigate } from "react-router-dom";

const mySuggestion = [
  { id: 'electronics', text: 'electronics' },
  { id: 'tech', text: 'tech' },
  { id: 'gadgets', text: 'gadgets' }
]


const suggestions = mySuggestion.map(country => {
  return {
    id: country,
    text: country
  };
});
const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


const UpdateProduct = () => {
    const product = useLoaderData();
    const {_id, productName, category, tags, type,
        productDetails, image, OwnerEmail, upvote,
        externalLinks} = product;


    const {loading, user} = useContext(AuthContext);
    // const [descriptionFrom, setDescriptionFrom] = useState("");
    const navigate = useNavigate();
    
    const [tags2, setTags2] = React.useState([
      { id: 'electronics', text: 'electronics' },
      { id: 'tech', text: 'tech' },
      { id: 'gadgets', text: 'gadgets' }
      ]);
    console.log(tags2);
      const handleDelete = i => {
        setTags2(tags2.filter((tag, index) => index !== i));
      };
    
      const handleAddition = tag => {
        setTags2([...tags2, tag]);
      };
    
      const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags2.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags2(newTags);
      };
    
      const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
        
      };
    
  
  
  const handleUpdateProduct = event => {
      event.preventDefault();
  
  
  const form = event.target;
  
  const productName = form.productName.value;
  const externalLinks = form.link.value;
  const category = form.option.value;
  const productDetails = form.productDetails.value;
  const image = form.image.value;
  const OwnerEmail = form.OwnerEmail.value;
  const productOwner = user?.displayName;
  const timestamp = new Date();
  const type = "pending"
  console.log("tager value",tags2);
  
  const tagsStringArray = tags2.map(tag => tag.text);
  
  
  const updatedProduct = {productName, externalLinks, tags: tagsStringArray, 
    category, productDetails, image, OwnerEmail, type,
    timestamp, productOwner}
  console.log(updatedProduct);
  
  fetch(`http://localhost:5000/techProduct/${_id}`, {
      method: 'PUT',
      headers: {
          'content-type' : 'application/json'
      },
      body: JSON.stringify(updatedProduct)
  })
  .then(res=> res.json())
  .then(data =>{
      
    if(data.modifiedCount > 0){
        const notify2 = () => toast.success('Product successfully updated', {
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
  
      setTimeout(() => {
        navigate('/dashboard/myproduct');
      }, 3500);
      
      }
    
  })
  
  }
    return (
        <div className="px-20 py-14"><ToastContainer />
            <h2 className=" text-center font-bold text-2xl pb-10">Update product</h2>

<form onSubmit={handleUpdateProduct}>
{/* product name and brand name */}
<div className="md:flex">
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Product Name</span>
  </label>
  <label className="input-group ">
    <input type="text" placeholder="Product Name"
    defaultValue={productName}
    name="productName" 
    className="input input-bordered w-full" required />
  </label>
</div>
<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">External Link</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="External Link"
    defaultValue={externalLinks}
    name="link"
    className="input input-bordered w-full" />
  </label>
</div>

</div>
{/* price and rating */}


{/* Product type */}

{/* ================================= */}
<div className="mb-1 mt-4 flex gap-2 max-md:flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Type:
          </label>
          <div className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="option"
                value="featured"
                defaultChecked
              />
              <span className="ml-2">Featured</span>
            </label>
          </div>
          <div className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="option"
                value="trending"

              />
              <span className="ml-2">Trending</span>
            </label>
          </div>

        </div>
{/* Product description */}

<div className="md:flex">
<div className="form-control md:w-full">
  {/* <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Short Description</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Short Description" name="description"
    className="input input-bordered w-full" required />
  </label> */}
<label className="label">
                            <span className="label-text">Product Description</span>
                        </label>

                        <textarea
                            className="input input-bordered w-full"
                            defaultValue={productDetails}
                            placeholder="Description"
                            name="productDetails"
                            required rows={5}
                        />


</div>
</div>

{/* image link */}
<div className="md:flex">
<div className="form-control md:w-full">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Image</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Image link" 
    defaultValue={image}
    name="image"
    className="input input-bordered w-full" required />
  </label>
</div>
</div>


{/* tags field */}
<div className="form-control md:w-full">
<label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Tags</span>
  </label>
<div className="pt-1">
        <ReactTags
          tags={tags2}
          // suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
          classNames={{
            tags: 'custom-tags',
            tag: 'custom-tag',
            remove: 'custom-tag-remove'
        
          }} required
        />
      </div>
      </div>

      {/* owner name */}
      <div className="md:flex">
<div className="form-control md:w-full">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Owner Name</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Owner Name" name="OwnerName"
    value={user?.displayName}
    className="input input-bordered w-full" required />
  </label>
</div>
</div>
{/* owner email */}
<div className="md:flex">
<div className="form-control md:w-full">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Owner Email</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Owner Email" name="OwnerEmail"
    value={user?.email}
    className="input input-bordered w-full" required />
  </label>
</div>
</div>
{/* owner image */}
<div className=" bg-white p-2">
                <h2><span className=" font-semibold">User&apos;s Image :</span></h2>
                <div className="flex justify-center">
                    <img className="w-[25%] mx-5" src={user?.photoURL}/>
                    </div>
            </div>


<input type="submit" value="Update Product" className="btn btn-block bg-slate-300 mt-4" />



</form>


        </div>
    );
};

export default UpdateProduct;