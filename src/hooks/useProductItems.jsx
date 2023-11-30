import { useEffect, useState } from "react";

const useProductItems = () =>{

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/techProduct')
        .then(res => res.json ())
        .then(data => {
            setItem(data);
            setLoading(false);

        });
    }, [])
    return [item, loading]
}

export default useProductItems;