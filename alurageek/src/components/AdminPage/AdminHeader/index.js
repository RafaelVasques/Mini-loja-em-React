import React from "react";
import "./style.css";

import ButtonLink from "../../Comps-Buttons/ButtonLink";

export default function AdminHeader (){
    
	const menuAdminButtonText = "Menu Admin";
    const menuAdminButtonLink = "#";
    const menuAdminButtonStyles = "button__link button__link-white menu__admin-button";
	
	return (
        <header>
			<div className="container admin__header-top">
				<img src="./images/logo.svg" alt="Alura Geek" className="admin__header-logo" />
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
							<button className="admin__search-button"><img src="./images/mag_glass.svg" alt="Busque um produto" /></button>
						</form>
					</div>
				</div>
			</div>
		</header>
    );
}