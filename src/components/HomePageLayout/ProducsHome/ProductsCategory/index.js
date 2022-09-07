import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

export default function ProductsCategory (props){

    const navigate = useNavigate();
	function handleSeeAllProductsCategory() {
		navigate("/see-all/" + props.categoryId);
	};  
  
    return (

        <div className="container products__category">
            <div className="products__category-header">
                <p className="products__category-name">
                    {props.categoryName}
                </p>
                <div className="see__more-products-wrapper">
                    <a 
                        className="see__more-products"
                        onClick={ ()=>{
                            handleSeeAllProductsCategory();
                        }}
                    >
                        Ver tudo
                    </a>
                    <img src="/images/arrow.svg" alt="ver tudo"/>
                </div>
            </div>
            <div className="products">
                {props.children}
            </div>
        </div>
        
    );
}