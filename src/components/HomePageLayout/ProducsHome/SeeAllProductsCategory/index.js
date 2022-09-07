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
            <section className="see__all-products-category-area">
          
                <div className="container see__all-products-category">
                    <div className="see__all-products-category-header">
                        <p className="see__all-products-category-name">
                            Todos os produtos <br/> para {category.categoryName}
                        </p>
                        <div className="back__to-home-wrapper">
                            <a 
                                className="back__to-home"
                                onClick={ ()=>{
                                    handleBackToHome();
                                }}
                            >
                                Voltar
                            </a>
                            <img src="/images/arrow.svg" alt="ver tudo"/>
                        </div>
                    </div>
                    <div className="products">
                        
                        {handleProducts}
                        
                    </div>
                </div>

            </section>
        </div>
 
    );
};