import React from "react";
import "./style.css";

import { Url } from '../../Url';

import ButtonLink from "../../Comps-Buttons/ButtonLink";

export default function AdminHeader (){
    
	const menuAdminButtonText = "Menu Admin";
    const menuAdminButtonLink = "/admin";
    const menuAdminButtonStyles = "button__link button__link-white menu__admin-button";
	
	return (
        <header>
			<div className="container admin__header-top">
				<a href={ Url() + '/admin'}><img src={ Url() + '/images/logo.svg'} alt="Alura Geek" className="admin__header-logo" /></a>
				<div className="admin__header-right-elements-container">
					<ButtonLink 
						buttonText = {menuAdminButtonText}
						buttonLink = {menuAdminButtonLink}
						buttonStyles = {menuAdminButtonStyles}
                	/>
					<div className="admin__search-bar-wrapper">
						<div className="admin__search-bar-background"></div>
						<form action="">
							<input type="text" className="admin__search-bar" placeholder="O que deseja encontrar?" />
							<button className="admin__search-button"><img src={ Url() + '/images/mag_glass.svg'} alt="Busque um produto" /></button>
						</form>
					</div>
				</div>
			</div>
		</header>
    );
}