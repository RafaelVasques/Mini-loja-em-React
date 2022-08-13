import React from "react";
import "./style.css";

import { Url } from '../../../Url';

import ButtonLink from "../../../Comps-Buttons/ButtonLink";

export default function Banner (){
    
    const bannerButtonText = "Ver Consoles";
    const bannerButtonLink = "#"
    const bannerButtonStyles = "button__link button__link-blue button__banner";

    return (
        <section className="banner__container">
            <figure>
                <img src={ Url() + '/images/banner-image2.png'} alt="Dezembro Promocional" className="banner__image" />
                <div className="container banner__content-wrapper">
                    <figcaption>
                        <h1 className="banner__title">Dezembro Promocional</h1>
                        <p className="banner__text">Produtos selecionados com 33% de desconto</p>
                    </figcaption>
                    <ButtonLink
                        buttonText = {bannerButtonText}
                        buttonLink = {bannerButtonLink}
                        buttonStyles = {bannerButtonStyles}
                    />
                </div>
            </figure>
        </section>
    );
}