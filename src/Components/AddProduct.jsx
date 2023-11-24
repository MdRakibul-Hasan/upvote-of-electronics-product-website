import Swal from "sweetalert2";

const AddProduct = () => {

const handleAddProduct = event => {
    event.preventDefault();

const form = event.target;

const name = form.name.value;
const brand = form.brand.value;
const price = form.price.value;
const rating = form.rating.value;
const option = form.option.value;
const description = form.description.value;
const image = form.image.value;



const newProduct = {name, brand, price, rating, option, description, image}
console.log(newProduct);

fetch('https://ass10server2.vercel.app/product', {
    method: 'POST',
    headers: {
        'content-type' : 'application/json'
    },
    body: JSON.stringify(newProduct)
})
.then(res=> res.json())
.then(data =>{
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Product Added Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
    }
})

} 

  return (
        <div className="px-20 py-14">
            <h2 className=" text-center font-bold text-2xl pb-10">Add product</h2>

<form onSubmit={handleAddProduct}>
{/* product name and brand name */}
<div className="md:flex">
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Product Name</span>
  </label>
  <label className="input-group ">
    <input type="text" placeholder="Product Name" name="name" 
    className="input input-bordered w-full" required />
  </label>
</div>
<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Brand Name</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Brand Name" name="brand"
    className="input input-bordered w-full" />
  </label>
</div>

</div>
{/* price and rating */}

<div className="md:flex">
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Price</span>
  </label>
  <label className="input-group ">
    <input type="text" placeholder="Price" name="price" 
    className="input input-bordered w-full" required />
  </label>
</div>
<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Rating</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Rating (0-5)" name="rating"
    className="input input-bordered w-full" required />
  </label>
</div>

</div>

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
                value="Phone"
              />
              <span className="ml-2">Phone</span>
            </label>
          </div>
          <div className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="option"
                value="Computer"

              />
              <span className="ml-2">Computer</span>
            </label>
          </div>
          <div className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="option"
                value="HeadPhone"

              />
              <span className="ml-2">HeadPhone</span>
            </label>
          </div>
        </div>
{/* Short description */}

<div className="md:flex">
<div className="form-control md:w-full">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Short Description</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Short Description" name="description"
    className="input input-bordered w-full" required />
  </label>
</div>
</div>

{/* image link */}
<div className="md:flex">
<div className="form-control md:w-full">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Image</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Image link" name="image"
    className="input input-bordered w-full" required />
  </label>
</div>
</div>

<input type="submit" value="Add Product" className="btn btn-block bg-slate-300 mt-4" />



</form>


        </div>
    );
};

export default AddProduct;