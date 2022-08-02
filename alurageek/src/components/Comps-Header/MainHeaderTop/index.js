import React from "react";

import LoginButton from "../LoginButton";
import MenuAdminButton from "../MenuAdminButton";

import "./style.css";

export default function MainHeaderTop (){
    return (
        <div className="container header__top">
            <img src="/images/logo.svg" alt="Alura Geek" className="header__logo" />
            <div className="header__right-elements-container">
                <LoginButton />
                {/* <MenuAdminButton /> */}
                <div className="search__bar-wrapper">
                    <div className="search__bar-background"></div>
                    <form action="">
                        <input type="text" className="search__bar" placeholder="O que deseja encontrar?" />
                        <button className="search__button"><img src="/images/mag_glass.svg" alt="Busque um produto" /></button>
                    </form>
                </div>
            </div>
        </div>
    );
}