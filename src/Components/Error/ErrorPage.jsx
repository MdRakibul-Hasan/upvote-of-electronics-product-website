import { NavLink, useRouteError } from "react-router-dom";
import Helmet from 'react-helmet';
import AOS from "aos";
import { useEffect } from "react";


const ErrorPage = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

    return (
        <div className="overflow-x-hidden" data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><Helmet><title>404</title></Helmet>
            <div className="flex flex-col justify-center items-center align-middle h-[100vh]">
                <img src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg" alt="" />
            
                 <h2 className="font-bold text-2xl flex justify-center mb-4 text-center">Bad user request <br />
                 Page not found </h2>
                 <NavLink to="/">
                    <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Go to Home</button>
                    </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;