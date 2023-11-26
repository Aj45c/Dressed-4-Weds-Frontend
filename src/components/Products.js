import React from "react";

const Product = ({ product }) => {
    return (
        <div>
            <h1> {product.name}</h1>
            <p> {product.description} </p>\
            <p> {product.price}</p>

            <button type = "button"> Add to Cart </button>
        </div>
    )
}

export default Product;
