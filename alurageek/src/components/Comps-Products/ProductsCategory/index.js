import React from "react";
import "./style.css";

export default function ProductsCategory (){
    
    const productsCategory = [{
        Name: 'Star Wars'
    },{
        Name: 'Console'
    },{
        Name: 'Diversos'
    }]

    return (
        <div>
            
            {productsCategory.map((item, index) => (
            
                <div className="container products__category">
                    <div className="products__category-header">
                        <p className="products__category-name"> {item.Name} </p>
                        <div className="see__more-products-wrapper">
                            <a href="#" className="see__more-products">Ver tudo</a>
                            <img src="./images/arrow.svg" />
                        </div>
                    </div>
                    <div className="products">
                        <div className="product">
                            <figure>
                                <img src="./images/products_imgs/unsplash_1VV1MRafd7A.png" alt="Imagem do Produto XYZ" className="product__image" />
                                <figcaption className="product__informations">
                                    <p className="product__description">Produto XYZ</p>
                                    <p className="product__price">R$ 60,00</p>
                                    <a href="./product.html" className="see__product">Ver produto</a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            
            ))}

            {/* <div className="container products__category">
                <div className="products__category-header">
                    <p className="products__category-name">Star Wars</p>
                    <div className="see__more-products-wrapper">
                        <a href="#" className="see__more-products">Ver tudo</a>
                        <img src="./images/arrow.svg" />
                    </div>
                </div>
                <div className="products">
                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_6FDXGY9J6y4.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Produto XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_epRFE_hBNjo.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Produto XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_KeGToDVN0l4.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Produto XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_4OHkK555s1A.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Produto XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_R8L1l9RN198.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Produto XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_1VV1MRafd7A.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Produto XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="container products__category">
                <div className="products__category-header">
                    <p className="products__category-name">Console</p>
                    <div className="see__more-products-wrapper">
                        <a href="#" className="see__more-products">Ver tudo</a>
                        <img src="./images/arrow.svg" />
                    </div>
                </div>
                <div className="products">
                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_0POwK6iAiRQ.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Controle XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_caNzzoxls8Q.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Controle e console XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_ZV7lnfyQLmA.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Console XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_caNzzoxls8Q.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Console XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_Zjn4dT993-g.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Console XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_k-xYhI3-gJM.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Console XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="container products__category">
                <div className="products__category-header">
                    <p className="products__category-name">Diversos</p>
                    <div className="see__more-products-wrapper">
                        <a href="#" className="see__more-products">Ver tudo</a>
                        <img src="./images/arrow.svg" />
                    </div>
                </div>
                <div className="products">
                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_fMP-oCze3AY.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Camisa Atari</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_bUgaIaZysH0.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Camisa NES</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_sYVY_ZKwaxU.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Controle e console XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_jMT6BrgBuXU.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Controle e console XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_MxVkWPiJALs.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Controle e console XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="product">
                        <figure>
                            <img src="./images/products_imgs/unsplash_r27umXAelDc.png" alt="Imagem do Produto XYZ" className="product__image" />
                            <figcaption className="product__informations">
                                <p className="product__description">Controle e console XYZ</p>
                                <p className="product__price">R$ 60,00</p>
                                <a href="./product.html" className="see__product">Ver produto</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div> */}
        </div>
    );
}