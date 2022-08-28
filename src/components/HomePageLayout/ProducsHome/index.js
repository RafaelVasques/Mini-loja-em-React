import React from "react";

import "./style.css";

import { AllProducts } from '../../AllProducts';
import { Categories } from '../../Categories';

import ProductsCategory from './ProductsCategory';
import Product from "../ProducsHome/Product";
import Banner from "./Banner";


const listOfProducts = AllProducts();
const listOfCategories = Categories();

let categoryId
let products = []
let renderProducts = []

listOfCategories.map((item, index) => {
    categoryId = item.categoryId

    listOfProducts.map((item, index) => {
        if(categoryId == item.categoryId){
            products.push(
                <Product
                    key = {index}
                    productImgUrl = {item.productImgUrl}
                    productName = {item.productName}
                    productPrice = {item.productPrice}
                    productDescription = {item.productDescription}
                />
            )
        }
    })
    
    renderProducts.push(
        <ProductsCategory
            key = {index}
            categoryName = {item.categoryName}
        >
            {products}
        </ProductsCategory>
    )

    products = []
})  

export default function ProductsHome (){

    return (
        <div>
            <Banner />
            <section className="products__home">
                
                {renderProducts}

            </section>
        </div>
    );
}