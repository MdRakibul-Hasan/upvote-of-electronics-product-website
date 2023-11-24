import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";


const ProtectedRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
if(loading){
    return <div className="flex justify-center py-28">
        <span className="loading loading-dots loading-lg">
            </span></div> 
}
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProtectedRoute;