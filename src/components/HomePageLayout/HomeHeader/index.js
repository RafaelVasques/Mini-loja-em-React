import React from "react";
import "./style.css";

import ButtonLink from "../../Comps-Buttons/ButtonLink";

export default function HomeHeader (){

    const loginButtonLinkProperties = {
		text: 'Login',
		link: '/admin-login',
		styles: 'button button__white login__button'
	};
  
    return (
        <header id="top">
            <div className="container header__top">
                <a href="/" ><img src="/images/logo.svg" alt="Alura Geek" className="header__logo" /></a>
                <div className="header__right-elements-container">
                    <ButtonLink 
                        properties = {loginButtonLinkProperties}
                    />
                    <div className="search__bar-wrapper">
                        <div className="search__bar-background"></div>
                        <form action="">
                            <input type="text" className="search__bar" placeholder="O que deseja encontrar?" />
                            <button className="search__button"><img src="/images/mag_glass.svg" alt="Busque um produto" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}