import React from "react";
import "./style.css";

import { Url } from '../../../Url';

import Product from "../Product";

export default function ProductsCategory (props){
    
    const products = props.products;

    return (

        <div className="container products__category">
            <div className="products__category-header">
                <p className="products__category-name"> {props.categoryName} </p>
                <div className="see__more-products-wrapper">
                    <a className="see__more-products">Ver tudo</a>
                    <img src={ Url() + '/images/arrow.svg'} alt="ver tudo"/>
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