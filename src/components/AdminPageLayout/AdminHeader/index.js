import React from "react";
import { useNavigate } from 'react-router-dom';

import "./style.css";

import ButtonLink from "../../Comps-Buttons/ButtonLink";

export default function AdminHeader (){
    
	const menuAdminButtonLinkProperties = {
		text: 'Sair',
		styles: 'button__link button__link-white menu__admin-button'
	};

	const navigate = useNavigate();
	function handleLogoLink() {
		navigate("/admin");
	};

	function handleLogOut() {
		navigate("/");
	};
	
	return (
        <header id="top">
			<div className="container admin__header-top">
				<a onClick={ ()=>{
					handleLogoLink();
				}}>
					<img src="/images/logo.svg" alt="Alura Geek" className="admin__header-logo header__logo" />
				</a>
				<div className="admin__header-right-elements-container">
					<ButtonLink 
						properties = {menuAdminButtonLinkProperties}
						onClick={ ()=>{
							handleLogOut();
						}}
                	/>
					<div className="admin__search-bar-wrapper">
						<div className="admin__search-bar-background"></div>
						<form action="">
							<input type="text" className="admin__search-bar" placeholder="O que deseja encontrar?" />
							<button className="admin__search-button"><img src="/images/mag_glass.svg" className='mag__glass' alt="Busque um produto" /></button>
						</form>
					</div>
				</div>
			</div>
		</header>
    );
}