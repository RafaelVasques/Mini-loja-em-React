import React from "react";
import "./style.css";

export default function ProductsCategory (props){
    
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
                {props.children}
            </div>
        </div>
        
    );
}