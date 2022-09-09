import React from "react";
import "./style.css";

import ButtonLink from "../../../Comps-Buttons/ButtonLink";

export default function Banner (){

    const bannerButtonLinkProperties = {
		text: 'Ver Consoles',
		link: '#',
		styles: 'button__link button__link-blue button__banner'
	};

    return (
        <section className="banner__container">
            <figure>
                <img src="/images/banner-image2.png" alt="Dezembro Promocional" className="banner__image" />
                <div className="container banner__content-wrapper">
                    <figcaption>
                        <h1 className="banner__title">Dezembro Promocional</h1>
                        <p className="banner__text">Produtos selecionados com 33% de desconto</p>
                    </figcaption>
                    <ButtonLink
                        properties = {bannerButtonLinkProperties}
                    />
                </div>
            </figure>
        </section>
    );
    
}