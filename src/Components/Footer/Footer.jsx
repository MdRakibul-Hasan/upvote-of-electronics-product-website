import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-orange-100 text-base-content">
  <aside>
    <img className="w-[30%]" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/hitech-logo.png" alt="" />
    <p className=" text-black ">HiTech Ltd &copy;2023 <br/>Unlock the Power of Next-Generation Tech</p>
  </aside> 
  <nav>
    <header className="footer-title text-black">Services</header> 

    
    <Link to="/login"><a className="link link-hover text-black">Login</a></Link> 
    <Link to="/register"><a className="link link-hover text-black">Register</a></Link> 
    {/* <Link to="/myCart"><a className="link link-hover text-black">My Cart</a></Link>  */}
    
  </nav> 
  <nav>
    <header className="footer-title text-black">Company</header> 
    <Link to="/about-us"><a className="link link-hover text-black">About us</a></Link> 
    {/* <Link to="/login"><a className="link link-hover text-white">Contact</a></Link>  */}
    {/* <Link to="/addProduct"><a className="link link-hover text-black">Add Product</a></Link>  */}
    
  </nav> 
  <nav>
    <header className="footer-title text-black">Legal</header> 
    <Link to="/terms"><a className="link link-hover text-black">Terms of use</a></Link> 
    <Link to="/privacy"><a className="link link-hover text-black">Privacy policy</a></Link> 
    
  </nav>
</footer>
    );
};

export default Footer;