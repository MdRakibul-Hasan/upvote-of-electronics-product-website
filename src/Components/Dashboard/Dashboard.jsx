import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";


const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [adminData, setAdminData] = useState(null);
    const [adminInfo, setAdminInfo] = useState("");
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/adminar');
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
const currentUserEmail = user?.email;

    useEffect(() => {
      if (adminData) {
        adminData.forEach(admin => {
          if (admin.email === currentUserEmail) {
            // Do something if the emails match
            console.log('Matching admin email found:', admin);
            setAdminInfo(admin.email)
          }
        });
      }
    }, [adminData, currentUserEmail]);
    
    console.log(adminData);


// const isAdmin = true;


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600 max-md:w-36">
{
    adminInfo === currentUserEmail ? <>
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
    </> : <>
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
    </>
}

            </div>


            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;