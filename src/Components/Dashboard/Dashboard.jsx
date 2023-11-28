import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600 max-md:w-36">
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
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;