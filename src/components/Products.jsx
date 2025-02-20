import { useEffect, useState } from "react"


const Products =() => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData =async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data =await response.json();
            setProducts([...data]);
        };

        fetchData();
    }, []);

    return(
        <div>
            <h1>Products Page</h1>
            {Products.map((product)=> ( 
                <p key={product.id}>{product.title}</p>
            ))}
        </div>
    );
};