import { useContext } from "react";
import Cards from "../Components/Home/cards";
import useProductItems from "../hooks/useProductItems";
import { AuthContext } from "../Components/Services/AuthProvider";

const TrendingProduct = () => {

    const {user,loading} = useContext(AuthContext);
    const [products] = useProductItems();
    const trending = products.filter(item => item.category === 'trending' || item.category === 'trending');

    const sortedTrend = trending.slice().sort((a, b) => {
        const upvotesA = a.upvote.length;
        const upvotesB = b.upvote.length;

        // Sort in descending order based on upvote count
        return upvotesB - upvotesA;
    });

    return (
        <div>
            <section className="mb-12">
                <h2 className=" text-center text-3xl font-bold">Trending</h2>
            
            
            <div className="grid md:grid-cols-2 gap-10">
                {
                  sortedTrend.map(item => <Cards
                  key={item._id}
                  item={item}
                  user={user}
                  loading={loading}
                  ></Cards>)  
                }
            </div>
            <div className="mx-auto text-center mt-10">
                <button className="btn btn-outline">See All Products</button></div>
            </section>
        </div>
    );
};

export default TrendingProduct;