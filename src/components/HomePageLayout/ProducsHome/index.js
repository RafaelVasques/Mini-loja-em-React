import React from "react";
import "./style.css";

import ProductsCategory from './ProductsCategory';
import Banner from "./Banner";

import { AllProducts } from '../../AllProducts';

export default function ProductsHome (){

    const listOfProducts = AllProducts()

    return (
        <div>
            <Banner />
            <section className="products__home">
                
                {listOfProducts.map((item, index) => (
                    
                    <ProductsCategory
                        key = {index}
                        categoryName = {item.categoryName}
                        products = {item.products}
                    />
                    
                ))}

            </section>
        </div>
    );
}