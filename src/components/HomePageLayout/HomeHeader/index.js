import React from "react";
import { useNavigate } from 'react-router-dom';

import "./style.css";

import ButtonLink from "../../Comps-Buttons/ButtonLink";

export default function HomeHeader (){

    const loginButtonLinkProperties = {
		text: 'Login',
		styles: 'button__link button__white login__button'
	};

    const navigate = useNavigate();
	function handleLoginArea() {
		navigate("/admin-login");
	};

    function handleLogoLink() {
		navigate("/");
	};

    function handleSearch(e) {
        e.preventDefault();
		navigate("/");
	};
  
    return (
        <header id="top">
            <div className="container header__top">
                
                <a onClick={ ()=>{
					handleLogoLink();
				}} >
                    <img src="/images/logo.svg" alt="Alura Geek" className="header__logo" />
                </a>

                <div className="header__right-elements-container">
                    <ButtonLink 
                        properties = {loginButtonLinkProperties}
                        onClick={ ()=>{
							handleLoginArea();
						}}
                    />
                    <div className="search__bar-wrapper">
                        <div className="search__bar-background"></div>
                        <form action="">
                            <input type="text" className="search__bar" placeholder="O que deseja encontrar?" />
                            <button
                                onClick={ (...e)=>{
							        handleSearch(...e);
						        }}
                                className="search__button"
                            >
                                <img className='mag__glass' src="/images/mag_glass.svg" alt="Busque um produto" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}