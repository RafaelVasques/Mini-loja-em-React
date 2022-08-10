import React from "react";
import "./style.css";

import Button from "../../Comps-Buttons/Button";

export default function AdminLogin (){
    
	const enterAdminButtonText = "Entrar";
    const enterAdminButtonLink = "#";
    const enterAdminButtonStyles = "button button__blue login__section-button";
	
	return (
        <section className="login__area">
			<div className="login__wrapper">
				<p>Iniciar Seção</p>
				<form className="login__form" action="./admin_products.html">
					<input type="text" className="text__box login__input" placeholder="Escreva seu email" />
					<input type="text" className="text__box login__input" placeholder="Escreva sua senha" />
					<Button
						buttonText = {enterAdminButtonText}
						buttonLink = {enterAdminButtonLink}
						buttonStyles = {enterAdminButtonStyles}
					/>
				</form>
			</div>
		</section>
    );
}