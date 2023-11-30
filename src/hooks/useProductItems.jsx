import { useEffect, useState } from "react";

const useProductItems = () =>{

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://ass12-crud-server1.vercel.app/techProduct')
        .then(res => res.json ())
        .then(data => {
            setItem(data);
            setLoading(false);

        });
    }, [])
    return [item, loading]
}

export default useProductItems;