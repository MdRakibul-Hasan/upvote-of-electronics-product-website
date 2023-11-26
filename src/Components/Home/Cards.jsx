// 'use client';
import { Link } from "react-router-dom";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { useState } from "react";
import Swal from "sweetalert2";



const Cards = ({item, user, loading}) => {

const {_id, image, productName, upvote, tags, OwnerEmail} = item


const [currentVote, setCurrentVote] = useState(upvote.length);
const [votecount, setVoteCount] = useState(upvote);


const handleUpvote = () => {
  const hasUpvoted = votecount.some((vote) => vote.email === user.email);

  if (!hasUpvoted) {
    const updatedUpvotes = { user: user?.displayName, email: user?.email };

    fetch(`http://localhost:5000/techProduct/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUpvotes)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network Response Was not ok');
        }
        return response.json();
      })
      .then(upvoteData => {
        console.log("Upvote added", upvoteData);

        setCurrentVote(currentVote + 1);
         // Update with the fetched upvote data
         Swal.fire('Thank you', 'Upvote Successfully done', 'success');
        // Fetch the latest upvote data separately
        fetch(`http://localhost:5000/techProduct/${_id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Updated Upvotes:', data.upvote);
  
            // Update the state with the new upvote data
            setVoteCount([...data.upvote]);

            
          })
          .catch(error => {
            console.error('Error fetching updated upvotes:', error);
          });
      })
      .catch(error => {
        console.error('Error adding upvote:', error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong"
        });
      });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You already Upvoted once"
    });
  }
};

    return (
        <div className="mx-auto">
{/* try my own style cards
 */}
<div className="card w-96 bg-base-100 shadow-xl md:w-[50vh]">
  <div className="w-full md:h-[50vh] overflow-hidden rounded-xl">
    <img className="w-full object-cover" src={image} alt="Shoes" /></div>
  <div className="card-body flex-col justify-end flex-grow">
  <Link to={`/techProduct/${_id}`}>
  <h2 className="text-2xl font-bold">
    {productName.length > 17 ? `${productName.substring(0, 17)}...` : productName}
  </h2>
</Link>
    {tags && tags.length > 0 && (
        <div className="flex">
          <h4>Tags:</h4>
          <ul className="flex">
            {tags.map((tag, index) => (
              <li className=" text-xs font-medium bg-slate-200
               rounded-md p-1 m-1" key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      )}

{
  loading ? <></> 
  :
  <>
  {
    (!user) ? 
      <Link to="/login"><button
      >
      <h2 className="bg-green-400 rounded-md px-2 py-1 flex items-center gap-1 w-[50px] justify-center">
        <FaArrowUpFromBracket />
        {currentVote}
      </h2>
      </button></Link> :

<>
{
    (user?.email === OwnerEmail) ?       <button
    className="opacity-50 cursor-not-allowed" disabled
    >
    <h2 className="bg-green-400 rounded-md px-2 py-1 flex items-center gap-1 w-[50px] justify-center">
      <FaArrowUpFromBracket />
      {currentVote}
    </h2>
    </button> : 
    <button
    onClick={handleUpvote}
    >
    <h2 className="bg-green-400 rounded-md px-2 py-1 flex items-center gap-1 w-[50px] justify-center">
      <FaArrowUpFromBracket />
      {currentVote}
    </h2>
    </button>

  }

</>

  }
 </>
}

    {/* <div className="card-actions justify-end">
    
    </div> */}
  </div>
</div>


        </div>
    );
};

export default Cards;


