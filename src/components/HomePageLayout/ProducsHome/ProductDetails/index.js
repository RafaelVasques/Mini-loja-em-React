import React from "react";
import "./style.css";

import { SimilarProducts } from '../../../SimilarProducts.js';

import ButtonLink from "../../../Comps-Buttons/ButtonLink";
import Product from "../Product";

export default function ProductDetails (){

    const buyButtonLinkProperties = {
		text: 'Comprar',
		link: '/',
		styles: 'button button__blue button__buy'
	};

    const similarProducts = SimilarProducts();
    
    return (
        <div>
            <section className="container product__complete-description">
                <figure className="product__complete-description-wrapper">
                    <div className="product__complete-description-image">
                        <img src="/images/products_imgs/unsplash_6FDXGY9J6y4_produto.png" alt="Produto XYZ" />
                    </div>
                    <div className="product__complete-description-caption">
                        <figcaption>
                            <h1 className="product__complete-description-name">Produto XYZ</h1>
                            <p className="product__complete-description-price">R$ 60,00</p>
                            <p className="product__complete-description-description">
                                Voluptas voluptatum quibusdam similique,
                                className debitis alias maecenas eveniet ridiculus,
                                facilis fusce! Ullam conubia? Sociis,
                                minima malesuada habitasse distinctio sequi aliqua malesuada.
                                Quisque deleniti proin expedita, aliquid litora.
                                Iste recusandae? Commodo, quia ridiculus doloribus vero dictum?
                                Penatibus donec placeat faucibus, dolorum do.
                                Animi porta anim magnam.
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
                        
                        {similarProducts.map((item, index) => (
                            <Product
                                key = {index}
                                productImgUrl = {item.productImgUrl}
                                productName = {item.productName}
                                productPrice = {item.productPrice}
                            />
                        ))}
                        
                    </div>
                </div>
            </section>
        </div>
    );
}