// 'use client';
import { Link } from "react-router-dom";
import "./Cards.css"
// import { Card } from 'flowbite-react';

const Cards = ({card}) => {

const {id, image, brand,} = card || {}

    return (
        <div>
{/* try my own style cards
 */}
<Link to={`/${brand}`}><div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-[60%]" src={image} alt="Shoes" /></figure>
  <div className="card-body flex-col justify-end flex-grow">
    <h2 className="text-center text-2xl font-bold">{brand}</h2>
    
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div></Link>

        
 


        </div>
    );
};

export default Cards;