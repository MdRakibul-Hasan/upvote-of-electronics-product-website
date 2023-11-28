import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";


const MyProfile = () => {
    const {loading, user} = useContext(AuthContext);
    return (
        <div>
            <h2 className=" text-2xl mx-7 font-semibold pt-3 pb-2">My Profile</h2>

            <div className=" bg-slate-200 p-2">
                <h2 className="px-5"><span className=" font-semibold">User&apos;s Name : </span>{user?.displayName}</h2>
                
            </div>
            <div className=" bg-slate-100 p-2">
                <h2 className="px-5"><span className=" font-semibold">User&apos;s Email : </span>{user?.email}</h2>
            </div>
            <div className=" bg-slate-200 p-2">
                <h2 className="px-5"><span className=" font-semibold">User&apos;s Image :</span></h2>
                <div className="flex justify-center">
                    <img className="w-[25%] mx-5" src={user?.photoURL}/>
                    </div>
            </div>
            <h2 className=" text-lg font-bold text-center mt-6">Subscribe for Our Premium Membership Plan</h2>
            <div className="flex justify-center mb-5">
                 <button className="py-2 px-4 rounded-md bg-orange-600 text-white font-bold
                text-lg hover:bg-orange-700
                ">Subscribe at $100</button>
            </div>
            <div className=" bg-slate-100 p-2">
                <h2 className="px-5"><span className=" font-semibold">Subscription Status : </span>{}</h2>
            </div>
        </div>
        
    );
};

export default MyProfile;