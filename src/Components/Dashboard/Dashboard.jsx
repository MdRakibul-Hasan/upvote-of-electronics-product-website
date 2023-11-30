import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";


const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [adminData, setAdminData] = useState(null);
    const [currentUser, setCurrentUser] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/users');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setAdminData(result);
    
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

    const specificUserEmail = user?.email; // Replace this with the email you want to filter by

useEffect(() => {
  if (adminData && adminData.length > 0) {
    const filteredUser = adminData.filter(user => user.email === specificUserEmail);
    setCurrentUser(filteredUser);   
  }
}, [adminData, specificUserEmail]);
console.log("dekhi",currentUser);


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600 max-md:w-36">
            {currentUser.map(user => {
      const { role } = user;
      switch (role) {
        case 'User':
          return (
            <div key={user._id}>
     <ul className="menu text-white font-semibold">
    <li><NavLink to="/dashboard/myprofile">My Profile
        </NavLink></li>
        <li><NavLink to="/dashboard/addproduct">Add Product
        </NavLink></li>
        <li><NavLink to="/dashboard/myproduct">My Product
        </NavLink></li>
        <div className="divider"></div>
        <li><NavLink to="/">Home
        </NavLink></li>
        </ul>        
             
            </div>
          );
        case 'Moderator':
          return (
            <div key={user._id}>
              {/* Moderator-specific menu */}
              {/* Render your Moderator menu options here */}
            </div>
          );
        case 'Admin':
          return (
            <div key={user._id}>
    <ul className="menu text-white font-semibold">
    <li><NavLink to="/dashboard/myprofile">My Profile
        </NavLink></li>
        <li><NavLink to="/dashboard/addproduct">Add Product
        </NavLink></li>
        <li><NavLink to="/dashboard/myproduct">My Product
        </NavLink></li>
        <div className="divider"></div>
        <li><NavLink to="/">Home
        </NavLink></li>

<li><NavLink to="/dashboard/manageusers">Manage Users
        </NavLink></li>
<li><NavLink to="/dashboard/statistics">Statistics
        </NavLink></li>
<li><NavLink to="/dashboard/coupons">Manage Coupons
        </NavLink></li>

        </ul>
            </div>
          );
        default:
          return null;
      }
    })}

            </div>


            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

// {
//     isAdminmia ? <>

//     </> : <>
    
//     </>
// }