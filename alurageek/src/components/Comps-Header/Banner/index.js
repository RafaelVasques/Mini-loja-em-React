import React from "react";
import "./style.css";

export default function Banner (){
    return (
        <div className="banner__container">
            <figure>
                <img src="./images/banner-image2.png" alt="Dezembro Promocional" className="banner__image" />
                <div className="container banner__content-wrapper">
                    <figcaption>
                        <h1 className="banner__title">Dezembro Promocional</h1>
                        <p className="banner__text">Produtos selecionados com 33% de desconto</p>
                    </figcaption>
                    <a href="#" className="button button__blue button__banner">Ver Consoles</a>
                </div>
            </figure>
        </div>
    );
}