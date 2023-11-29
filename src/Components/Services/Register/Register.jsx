
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Helmet from 'react-helmet';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);





const handleRegister = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;




if (password.length < 6){
    const notify3 = () => toast.error('The password is less than 6 characters', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    notify3();
    return;
}

else if(!/[A-Z]/.test(password)){
    const notify5 = () => toast.error("The password don't have a capital letter", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    notify5();
    return;
}
else if(!/[@!#$%*&]/.test(password)){
  const notify5 = () => toast.error("The password don't have a special character", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  notify5();
  return;
}



// console.log(email, password, name, image);
createUser(email, password, name, image)
    .then(result => {
        const notify2 = () => toast.success('Congratulation, Your registration is Successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        console.log(result);
        notify2();
        const UserEmail = result?.email;
        const UserName = name;
        const role = "User";
        const sendEmailAsUser = {name:UserName, email : UserEmail, role}
     
        // test
fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
        'content-type' : 'application/json'
    },
    body: JSON.stringify(sendEmailAsUser)
})
.then(res=> res.json())
.then(data =>{
  console.log(data);
})





// test end



        navigate(location?.state ? location.state : '/login');

    })
    .catch( error => {
        const notify = () => toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        console.log(error);
        notify();
        
    })

}


    return (
      <div
      className="bg-cover min-h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url(https://ebook.projectbd.com/wp-content/uploads/2023/10/register-bg-iage.jpg)' }}>
        <Helmet><title>Register</title></Helmet>
      <ToastContainer />
      <div className="bg-black bg-opacity-50 p-4 my-24 sm:p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-3xl text-white font-semibold mb-4 mt-2 text-center">Register</h2>
        <form onSubmit={handleRegister}>


        <div className="mb-4">
    <label className="block text-white">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      className="border border-gray-300 p-2 w-full rounded"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>

  <div className="mb-4">
    <label className="block text-white">Profile Picture</label>
    <input
    className="border border-gray-300 p-2 w-full rounded bg-white"
      type="file"
      id="image" name="image"
      onChange={(e) => setImage(e.target.files[0])}
      required
    />
  </div>
          
          <div className="mb-4">
            <label className="block text-white">
              Email
            </label>
            <input
              type="email" id="email" name="email"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="email" required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">
              Password
            </label>
            <input
              type="password" id="password" name="password"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="password" required />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 text-white w-full px-4 py-2 rounded hover:bg-orange-700"
            >Register </button>
            
          <p className="text-center m-1 text-white ">Already have an account, <Link to="/login" className="text-orange-500 font-bold">
      Login</Link></p>
         

          </div>
        </form>
      </div>

 
 </div>
        
    );
};

export default Register;