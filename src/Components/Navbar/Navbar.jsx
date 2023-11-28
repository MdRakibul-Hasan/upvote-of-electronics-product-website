import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu, MenuItem } from '@mui/material';


const Navbar = () => {
    const [myDropDown, setMyDropDown] = useState(null);
    const {user, logOut} = useContext(AuthContext);

    const handleClick = (event) => {
      setMyDropDown(event.currentTarget);
    };
    const handleClose = () => {
      setMyDropDown(null);
    };

const handleSignOut = () => {
  logOut()
  .then(result => {
    const notify2 = () => toast.success('Your Log Out is Successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  console.log(result.user);
  notify2();
  })
  .catch()

  // akahne task baki amar optional
}

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };




    return (
<div>
<ToastContainer />

<nav className="bg-orange-100 bg-opacity-100 sticky w-full z-20">
      <div className="container mx-auto py-2">
        <div className="flex items-center justify-between">
         
          <div> <Link to="/"><img className="w-[30%]" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/hitech-logo-1.png" alt="" /></Link> </div>

         
          <div className="hidden md:flex space-x-4">

          <NavLink to="/" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-orange-600 font-bold" : "text-black"}>Home</NavLink>
          <NavLink to="/products" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-orange-600 font-bold" : "text-black"}>Products</NavLink>

            {/* <NavLink to="/addProduct" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-orange-600 font-bold" : "text-black"}>Add Product</NavLink>
                        
            <NavLink to="/myCart" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-orange-600 font-bold" : "text-black"}>My Cart</NavLink> */}

          </div>

 

<div className="flex justify-center items-center mx-1 max-md:hidden">

{/* my referencer */}
 {/* <img className=" bg-white rounded-full w-[6vh] mx-1" src={user.photoURL}/> */} 

 {/* <Avatar alt="Profile" src={user.photoURL} onClick={handleClick} /> */}

{
 user ? 
<img onClick={handleClick}  className=" bg-white rounded-full w-[6vh] mx-1" src={user.photoURL}/>
    :
 ""

 }

{/* {
 user ? 
<img onClick={handleClick}  className=" bg-white rounded-full w-[6vh] mx-1" src={user.photoURL}/>
    :
 <img className=" bg-white rounded-full w-[6vh] mx-1" src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg" alt="" />

 } */}



{/* 
{
 user ? 
 <h2 className="text-black text-xs">{user.displayName}</h2>
    :
    <h2 className="text-black text-xs">No User</h2>

 } */}

<Menu
        anchorEl={myDropDown}
        open={Boolean(myDropDown)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {
 user ? 
 <h2 className="text-black text-sm text-center">{user.displayName}</h2>
    :
    <h2 className="text-black text-sm text-center">No User</h2>

 } 
        <Link to="/dashboard"><MenuItem onClick={handleClose}>Dashboard</MenuItem></Link>
        <MenuItem onClick={handleClose}>
        {
 user ? 
<Link onClick={handleSignOut} to="/" className="hidden md:block bg-orange-600 text-white py-1 px-3 rounded-lg mt-1 hover:bg-orange-700">Log Out</Link>
    :
 ""
 }
        </MenuItem>
      </Menu>




</div>


         
          {/* {
 user ? 
<Link onClick={handleSignOut} to="/" className="hidden md:block bg-orange-600 text-white py-1 px-3 rounded-lg mt-1 hover:bg-orange-700">Log Out</Link>
    :
 <Link to="/login" className="hidden md:block bg-orange-600 text-white py-1 px-3 rounded-lg mt-1 hover:bg-orange-700">Login</Link>

 } */}
           {
 user ? 
""
    :
 <Link to="/login" className="hidden md:block bg-orange-600 text-white py-1 px-3 rounded-lg mt-1 hover:bg-orange-700">Login</Link>

 }

         
  <div className="md:hidden mr-3">
    <button
      onClick={toggleMobileMenu}
      className="text-black focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"
      >
        <path
          strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</div>


        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="max-md:mx-3">

        <NavLink to="/" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-orange-600 font-bold" : "text-black"}>Home</NavLink>
<br />
            <NavLink to="/products" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-orange-600 font-bold" : "text-black"}>Products</NavLink>
   <br />                     
            {/* <NavLink to="/myCart" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-orange-600 font-bold" : "text-black"}>My Cart</NavLink>

<br /> */}

<div className="flex my-2">
{
 user ? 
 <img className=" bg-white rounded-full w-[6vh] mx-1" src={user.photoURL} alt="" />
 
    :
 ""

 }

{/* {
 user ? 
 <img className=" bg-white rounded-full w-[6vh] mx-1" src={user.photoURL} alt="" />
 
    :
 <img className=" bg-white rounded-full w-[6vh] mx-1" src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg" />

 } */}


{
 user ? 
 <h2 className="text-black text-xs">{user.displayName}</h2>
    :
    ""

 }
{/* {
 user ? 
 <h2 className="text-black text-xs">{user.displayName}</h2>
    :
    <h2 className="text-black text-xs">No User</h2>

 } */}


</div>

{
  user?
  <Link to="/dashboard"><button onClick={toggleMobileMenu}><h2 className="pb-2">Dashboard</h2></button></Link>
  : ""
}
<br />
          {
 user ? 
<Link onClick={handleSignOut} to="/login" className="bg-black text-white py-1 px-4 rounded-lg mt-2 hover:bg-slate-700">Log Out</Link>
    :
 <Link onClick={toggleMobileMenu} to="/login" className="bg-black text-white py-1 px-4 rounded-lg mt-2 hover:bg-slate-700">Login</Link>

 }



        </div>


        </div>
      </div>
    </nav>




</div>




    )};
 

export default Navbar;