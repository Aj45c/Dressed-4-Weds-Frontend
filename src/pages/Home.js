import React, { useState, useEffect } from 'react';
import Product from '../components/Products'

const Homepage = () => {
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:4000/products")
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error:', error));

    }, [])
return (
    <div>
        <h1>Dressed4Weds</h1>
        {products.map(product => (
            <Product key={product._id} product={product} />
        ))}
    </div>
)
}

export default Homepage;