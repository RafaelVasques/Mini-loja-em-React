import React from "react";

import "./style.css";
import "../ProductsCategory/style.css"

export default function Product (){
    return (
        <div>
            <section className="container product__complete-description">
                <figure className="product__complete-description-wrapper">
                    <div className="product__complete-description-image">
                        <img src="./images/products_imgs/unsplash_6FDXGY9J6y4_produto.png" alt="Produto XYZ" />
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
                    </div>
                </figure>
            </section>

            <section className="products__home">
                <div className="container products__category">
                    <div className="products__category-header">
                        <p className="products__category-name">Produtos similares</p>
                    </div>
                    <div className="products">
                        <div className="product">
                            <figure>
                                <img src="./images/products_imgs/unsplash_6FDXGY9J6y4.png" alt="Imagem do Produto XYZ" className="product__image" />
                                <figcaption className="product__informations">
                                    <p className="product__description">Produto XYZ</p>
                                    <p className="product__price">R$ 60,00</p>
                                    <a href="#" className="see__product">Ver produto</a>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="product">
                            <figure>
                                <img src="./images/products_imgs/unsplash_epRFE_hBNjo.png" alt="Imagem do Produto XYZ" className="product__image" />
                                <figcaption className="product__informations">
                                    <p className="product__description">Produto XYZ</p>
                                    <p className="product__price">R$ 60,00</p>
                                    <a href="#" className="see__product">Ver produto</a>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="product">
                            <figure>
                                <img src="./images/products_imgs/unsplash_KeGToDVN0l4.png" alt="Imagem do Produto XYZ" className="product__image" />
                                <figcaption className="product__informations">
                                    <p className="product__description">Produto XYZ</p>
                                    <p className="product__price">R$ 60,00</p>
                                    <a href="#" className="see__product">Ver produto</a>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="product">
                            <figure>
                                <img src="./images/products_imgs/unsplash_4OHkK555s1A.png" alt="Imagem do Produto XYZ" className="product__image" />
                                <figcaption className="product__informations">
                                    <p className="product__description">Produto XYZ</p>
                                    <p className="product__price">R$ 60,00</p>
                                    <a href="#" className="see__product">Ver produto</a>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="product">
                            <figure>
                                <img src="./images/products_imgs/unsplash_6FDXGY9J6y4.png" alt="Imagem do Produto XYZ" className="product__image" />
                                <figcaption className="product__informations">
                                    <p className="product__description">Produto XYZ</p>
                                    <p className="product__price">R$ 60,00</p>
                                    <a href="#" className="see__product">Ver produto</a>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="product">
                            <figure>
                                <img src="./images/products_imgs/unsplash_epRFE_hBNjo.png" alt="Imagem do Produto XYZ" className="product__image" />
                                <figcaption className="product__informations">
                                    <p className="product__description">Produto XYZ</p>
                                    <p className="product__price">R$ 60,00</p>
                                    <a href="#" className="see__product">Ver produto</a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}