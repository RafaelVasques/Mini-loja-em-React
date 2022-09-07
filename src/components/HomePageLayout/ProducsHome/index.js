import React, { useContext } from "react";

import "./style.css";

import { Categories } from '../../Categories';

import { ProductContext } from "../../contexts/productContext";

import ProductsCategory from './ProductsCategory';
import Product from "../ProducsHome/Product";
import Banner from "./Banner";

export default function ProductsHome (){
    
    const { products } = useContext(ProductContext);

    const categories = Categories();
    
    let categoryId;
    let handleProducts = [];
    let renderProducts = [];
    
    categories.map((item, index) => {

        categoryId = item.categoryId;
    
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
        
        renderProducts.push(
            <ProductsCategory
                key = {index}
                categoryName = {item.categoryName}
                categoryId = {item.categoryId}
            >
                {handleProducts}
            </ProductsCategory>
        );
    
        handleProducts = [];
    });

    return (
        <div>
            <Banner />
            <section className="products__home">
    
                    {renderProducts}

            </section>
        </div>
    );
};