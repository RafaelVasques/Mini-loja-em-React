import React from "react";
import "./style.css";

import Product from "../Product";

export default function ProductsCategory (props){
    
    const products = props.products;

    return (

        <div className="container products__category">
            <div className="products__category-header">
                <p className="products__category-name"> {props.categoryName} </p>
                <div className="see__more-products-wrapper">
                    <a href="#top" className="see__more-products">Ver tudo</a>
                    <img src="/images/arrow.svg" alt="ver tudo"/>
                </div>
            </div>
            <div className="products">

                {products.map((item, index) => (

                    <Product
                        key = {index}
                        productImgUrl = {item.productImgUrl}
                        productName = {item.productName}
                        productPrice = {item.productPrice}
                        productDescription = {item.productDescription}
                    />
                
                ))}

            </div>
        </div>
        
    );
}