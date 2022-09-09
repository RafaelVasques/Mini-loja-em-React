import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

import { ProductContext } from "../../../contexts/productContext";

import ButtonLink from "../../../Comps-Buttons/ButtonLink";
import Product from "../Product";

export default function ProductDetails (){

    const buyButtonLinkProperties = {
		text: 'Comprar',
		styles: 'button button__blue button__buy'
	};

    const productId = useParams();
    const { products } = useContext(ProductContext);
    const product = products.find(product => product.productId == productId.productId);
    
    const similarProductsHandler = [];
    products.map((item, index) =>{

        if(item.categoryId == product.categoryId){
            similarProductsHandler.push(
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

    return (
        <div>
            <section className="container product__complete-description">
                <figure className="product__complete-description-wrapper">
                    <div className="product__complete-description-image">
                        <img src={product.productImgUrl} alt={product.productName} />
                    </div>
                    <div className="product__complete-description-caption">
                        <figcaption>
                            <h1 className="product__complete-description-name">{product.productName}</h1>
                            <p className="product__complete-description-price">R$ {product.productPrice}</p>
                            <p className="product__complete-description-description">
                                {product.productDescription}
                            </p>
                        </figcaption>
                        <ButtonLink
                            properties = {buyButtonLinkProperties}
                        />
                    </div>
                </figure>
            </section>

            <section className="products__home">
                <div className="container products__category">
                    <div className="products__category-header">
                        <p className="products__category-name">Produtos similares</p>
                    </div>
                    <div className="products">
                        
                        {similarProductsHandler}
                        
                    </div>
                </div>
            </section>
        </div>
    );
}