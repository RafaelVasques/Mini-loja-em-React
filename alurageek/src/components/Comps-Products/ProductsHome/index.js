import React from "react";

import ProductsCategory from '../ProductsCategory';

import "./style.css";

export default function ProductsHome (){
    return (  
        <section className="products__home">
            <ProductsCategory />
        </section>
    );
}