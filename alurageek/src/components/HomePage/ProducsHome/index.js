import React from "react";
import "./style.css";

import ProductsCategory from '../ProductsCategory';
import { AllProducts } from '../../AllProducts.js';

export default function ProductsHome (){

    const listOfProducts = AllProducts()

    return (
        <section className="products__home">
            
            {listOfProducts.map((item, index) => (
                
                <ProductsCategory
                    key = {index}
                    categoryName = {item.categoryName}
                    products = {item.products}
                />
                
            ))}

        </section>
    );
}