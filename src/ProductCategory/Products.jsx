import { useContext } from "react";
import Cards from "../Components/Home/cards";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Components/Services/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import './Products.css';
import { useEffect } from "react";

const Products = () => {
  const {user,loading} = useContext(AuthContext);
  const products = useLoaderData();

const [search,setSearch] = useState('');
const [searchResults, setSearchResults] = useState([]);

// Total number of products
const [productCount, setProductCount] = useState([]);
useEffect(() => {
    fetch('http://localhost:5000/productsCount')
    .then(res => res.json())
    .then(data => setProductCount(data.count))
}, []);
const itemsPerPage = 2;
const numberOfPages = Math.ceil(productCount / itemsPerPage);

const pages = []
for(let i = 0; i <numberOfPages; i++){
 pages.push(i)
}
console.log(pages);
// my search bar

const handleSearch = () => {
    const results = products.filter((product) =>
      product.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
    );


    const notify = () => toast.error('No results found. Please try a different search.', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  if (results.length === 0) {
    // alert(' No results found. Please try a different search.')
    notify();
   
  } 

  setSearchResults(results);
};
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
};

  return (
      <div><ToastContainer/>
          <section className="mb-12">
              <h2 className=" text-center text-3xl font-bold">Products</h2>
              <div>
          <div className="search-content">
          <input
            type="text"
            placeholder="Search here...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress} 
          />
          <button onClick={handleSearch}>Search</button>
          </div>
        </div>
          
          <div className="grid md:grid-cols-4 gap-10 mx-5">
              {/* {
                products.map(item => <Cards
                key={item._id}
                item={item}
                user={user}
                loading={loading}
                ></Cards>)  
              } */}

{searchResults.length === 0
          ? products.map((item) => <Cards 
          key={item._id} user={user}
          loading={loading}
          item={item}></Cards>)
          : searchResults.map((item) => (
              <Cards key={item._id} item={item} user={user}
              loading={loading}></Cards>
            ))}


          </div>
          {/* <div className="mx-auto text-center mt-10">
              <button className="btn btn-outline">See All Products</button></div> */}
          </section>
<div className="pagination">
              {
                pages.map(page => <button key={page}>{page}</button>)
              }
</div>

      </div>
  );
};

export default Products;