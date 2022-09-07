import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./style.css";

import { Categories } from "../../../Categories";

import { ProductContext } from "../../../contexts/productContext";

import Product from "../Product";
import Banner from "../Banner";

export default function SeeAllProductsCategory () {

    const navigate = useNavigate();
	function handleBackToHome() {
		navigate("/");
	};  

    const { products } = useContext(ProductContext);
   
    const { categoryId } = useParams();
    const handleProducts = [];
        
    products.map((item, index) => {
        if(categoryId == item.categoryId){
            handleProducts.push(
                <Product
                    key = {index}
                    productImgUrl = {item.productImgUrl}
                    productName = {item.productName}
                    productPrice = {item.productPrice}
                    productId = {item.productId}
                />
            );
        };
    });

    const categories = Categories();
    const category = categories.find(category => category.categoryId == categoryId);
        
    return (
        
        <div>
            <Banner />
            <div className="container products__category">
                <div className="products__category-header">
                    <p className="products__category-name">
                        Todos os produtos para {category.categoryName}
                    </p>
                    <div className="see__more-products-wrapper">
                        <a 
                            className="see__more-products"
                            onClick={ ()=>{
                                handleBackToHome();
                            }}
                        >
                            Voltar para a Home
                        </a>
                        <img src="/images/arrow.svg" alt="ver tudo"/>
                    </div>
                </div>
                <div className="products">
                    
                    {handleProducts}
                    
                </div>
            </div>
        </div>
 
    );
};