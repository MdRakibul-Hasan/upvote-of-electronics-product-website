import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import { getStoredProductData, saveProduct } from "../Utility/localStorage";
import Swal from "sweetalert2";
import ScrollToTop from "../ScrollToTop";
import {useNavigate,} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import { useState } from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";

const ProductDetails = () => {
    const product = useLoaderData();
    const {loading, user} = useContext(AuthContext);
    const {_id, productName, productDetails, tags, price, reviews,
        externalLinks, upvote,category,OwnerEmail,
         option, description, image} = product;

         const [currentVote, setCurrentVote] = useState(upvote.length);
         const [votecount, setVoteCount] = useState(upvote);
    // const idInt = parseInt(_id);
    const navigate = useNavigate();

        // testing the review form
        const name = `${user?.displayName}`;
        const photoURL = `${user?.photoURL}`;

    const {_id : id} = product;
    const [username, setUsername] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [currentReview, setCurrentReview] = useState(reviews);

   
    const addReview = event => {
        event.preventDefault();
        const reviewData = {
            username: username,
            comment: comment,
            rating: rating,
            photoURL: photoURL,
          };
        console.log(reviewData);

        fetch(`http://localhost:5000/techProduct/${id}/addReview`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(() => {
                // After successfully adding the review, fetch the updated reviews separately
                fetch(`http://localhost:5000/techProduct/${id}`, {
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
                    console.log('Updated Reviews:', data.reviews);
        
                    // Update the state with the new reviews data
                    setCurrentReview(data.reviews);
        
                    Swal.fire(
                        'Thank you!',
                        'Your Review Added Successfully',
                        'success'
                    );
                })
                .catch(error => {
                    console.error('Error fetching updated reviews:', error);
                });
            })
            .catch(error => {
                console.error('Error adding review:', error);
            });
    };


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
        <div>
<ScrollToTop />
            
            <div className="flex justify-center items-center w-full pb-28 px-10 mt-10 max-md:flex-col max-md:px-3">
<div className="w-1/2 max-md:w-full flex justify-center items-center">
    <img className="w-[80%]" src={image}/>
</div>

<div className="w-1/2 max-md:w-full flex flex-col gap-1">
    <h2 className=" text-2xl font-semibold">{productName}</h2>

                    {/* <div className="flex">
                    {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;

                            return (
                            <label key={index}>
                                <FaStar
                                className="star"
                                color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                                size={16}
                                />
                            </label>
                            );
                        })}
                    </div> */}
                    {/* <p className=" text-sm"><span className="font-bold">Brand: </span>{}</p> */}
                    <p className=" text-sm"><span className="font-bold">Category: </span>{category}</p>
                    {/* <h2 className="font-semibold text-lg text-red-500">${price}</h2> */}
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
                    <p className=" text-sm"><span className="font-bold">Description: </span>{productDetails}</p>
                    <div className="flex gap-2 items-center align-middle">
                   <div className="mt-4">
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
      {currentVote -1}
    </h2>
    </button> : 
    <button
    onClick={handleUpvote}
    >
    <h2 className="bg-green-400 rounded-md px-2 py-1 flex items-center gap-1 w-[50px] justify-center">
      <FaArrowUpFromBracket />
      {currentVote -1}
    </h2>
    </button>
  }
</>
  }
   </>
}
                   </div>
                    <Link to="/"><button className=" bg-red-500 text-white px-2 py-1 rounded-lg mt-4">Back Home</button></Link>
        <button onClick={() => navigate(-1)} className=" bg-red-500 text-white px-2 py-1 rounded-lg w-[100px] mt-4">Report</button>

                    </div>
</div>

            </div>
            {/* Review services */}
            <div className="flex flex-col gap-1 mx-4 mt-2 pb-10 md:mx-10">
                {
                  currentReview.length == 1 ? <p className=" text-sm"><span className="font-bold text-lg">Review (0)</span></p>
                  :
                  <p className=" text-sm"><span className="font-bold text-lg">Review ({currentReview.length})</span></p>
                }
                <hr />
                {
                 currentReview.length > 1  ? <>{currentReview.map((review, index) => (
                    <div key={index}>
                        {
                           (review.photoURL) ? <><img className="bg-white rounded-full w-[8vh]" src={review.photoURL} /> </> 
                           : <> <img className=" bg-white rounded-full w-[8vh]" src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg" alt="" /></>
                        }

                        <p>{review.name}</p>

                        <div className="flex">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;

                                return (
                                    <label key={index}>
                                        <FaStar
                                            className="star"
                                            color={ratingValue <= review.rating ? '#ffc107' : '#e4e5e9'}
                                            size={14}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                        <p>{review.comment}</p>
                        <p>{review.timestamp}</p>

                        <hr />
                    </div>
                ))}</>
                   :
                   <><h2 className=" text-base font-bold">No review yet</h2></>
                }


            </div>

            {/* Review form */}
            <h2 className=" text-center mt-6 font-semibold pb-4 pt-2 
            text-2xl">Leave A Comment & Review Below</h2>
            <div className="max-w-[600px] mx-auto px-10 pb-8">
            <form onSubmit={addReview}>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            value={user?.displayName} className="resize border rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-slate-400 focus:border-transparent
                            w-full px-3 py-2 placeholder-gray-400 text-gray-700
                                bg-white text-sm shadow-md" />

                            {/* <div className="w-[15%] mt-4">
                                <p>Image</p>
                                <img src={user?.photoURL} alt="" />
                            </div> */}
        
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Comment</span>
                        </label>

                        <textarea
                            className="resize border rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-slate-400 focus:border-transparent
                            w-full px-3 py-2 placeholder-gray-400 text-gray-700
                                bg-white text-sm shadow-md"
                            placeholder="Comment" onChange={(e) => setComment(e.target.value) & setUsername(name)}
                            required rows={5}
                        />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                    <input
                        type="number"
                        defaultValue={rating}
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="Rating"
                        className="resize border rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-slate-400 focus:border-transparent
                            w-full px-3 py-2 placeholder-gray-400 text-gray-700
                                bg-white text-sm shadow-md"
                        required
                    />
                    </div>
                    <div className="form-control mt-6 mx-auto">
                    <input className="btn btn-primary btn-block" type="submit" 
                    value="SUBMIT REVIEW" />
                </div>
                </div>
            </form>
            </div>


        </div>
    );
};

export default ProductDetails;