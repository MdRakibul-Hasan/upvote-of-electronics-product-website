import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";


const Allusers = () => {
    const allUsers = useLoaderData();
    const [currentUsers, setCurrentUsers] = useState(allUsers);
    const [selectedRole, setSelectedRole] = useState('Moderator');

    const handleUpdateClick = (user) => {
console.log('Selected Role:', selectedRole);

const role = selectedRole;

const updatedUser = {role}

fetch(`http://localhost:5000/users/${user._id}`, {
    method: 'PUT',
    headers: {
        'content-type' : 'application/json'
    },
    body: JSON.stringify(updatedUser)
})
.then(res=> res.json())
.then(data =>{
    console.log(data);
  if(data.modifiedCount > 0){
      const notify2 = () => toast.success('User role successfully updated', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    notify2();
    
    fetch('http://localhost:5000/users')
    .then((res) => res.json())
    .then((updatedUserData) => {
      // Set the fetched updated user data to the state
      setCurrentUsers(updatedUserData);

    })




    }
  
})


     
    };

    const handleDeleteUser = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
    
              fetch(`http://localhost:5000/users/${id}`,{
                method: 'DELETE'
              })
              .then(res=> res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "user has been deleted.",
                        icon: "success"
                      });
                    
                    const remaining = allUsers.filter(user => user._id !== id);
                    setCurrentUsers(remaining);
                }
    
              })
    
            }
          });
    }



    return (
        <div><ToastContainer />
            <div>
                <h2 className=" text-center text-2xl font-bold py-5">Manage Users</h2>
<h2 className=" text-base font-semibold ml-5">All Users: {currentUsers.length}</h2>
</div>
{
  currentUsers.length === 0 ? (
    <p className="text-center text-lg font-bold mt-5">No users available</p>
  ) : (
    <table className="w-[95%] mx-auto">
      <thead className="font-bold">
        <tr>
          <th>SL.</th>
          <th>User Name</th>
          <th>User Email</th>
          <th>Role</th>
          <th>Change</th>
          <th>Update</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>
        {currentUsers.map((user, index) => (
          <tr key={index} className="hover:bg-slate-200">
            <td className="text-center">{index + 1}</td>
            <td className="text-center">
              <h3 className="text-center font-semibold">{user?.name}</h3>
            </td>
            <td className="text-center">{user?.email}</td>
            <td className="text-center">{user?.role}</td>
            <td className="text-center">
            <select
              className="select select-xs w-[98px]"
              
              onChange={(e) => setSelectedRole(e.target.value)}
            //   disabled={user?.role === 'admin'}
            >
              <option selected value="Moderator">Moderator</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            </td>
            <td className="text-center">
              <div className="flex justify-center items-center">
              <button className={`${
                    user?.role === 'adminsdg'
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  } bg-red-500 hover:bg-red-700 flex justify-center items-center align-middle px-4 py-2 rounded-md text-white text-sm font-medium w-[70%]`}
                  onClick={() => handleUpdateClick(user, user._id)}
                //   disabled={user?.role === 'admin'}
                 > Update
                </button>
              </div>
            </td>
            <td className="text-center">
              <div className="flex justify-center items-center">
                

                <button
                  className={`${
                    user?.role === 'admindfgs'
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  } bg-red-500 hover:bg-red-700 flex justify-center items-center align-middle px-4 py-2 rounded-md text-white text-sm font-medium w-[70%]`}
                  onClick={() => handleDeleteUser(user._id)}
                  disabled={user?.role === 'admin'}
                >
                  Delete
                </button>


              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

        </div>
    );
};

export default Allusers;