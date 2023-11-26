import { useContext } from "react";
import Cards from "../Components/Home/cards";
import useProductItems from "../hooks/useProductItems";
import { AuthContext } from "../Components/Services/AuthProvider";


const FeaturedProduct = () => {
    const {user,loading} = useContext(AuthContext);
    const [products] = useProductItems();
    const featured = products.filter(item => item.category === 'featured' || item.category === 'Featured');
    const sortedFeatured = featured.slice().sort((a, b) => {
        const timestampA = new Date(a.timestamp).getTime();
        const timestampB = new Date(b.timestamp).getTime();

        // Sort in descending order based on timestamp
        return timestampB - timestampA;
    });

    return (
        <div>
            <section className="mb-12">
                <h2 className=" text-center text-3xl font-bold">Featured</h2>
            
            
            <div className="grid md:grid-cols-3 gap-8">
                {
                  sortedFeatured.map(item => <Cards
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

export default FeaturedProduct;