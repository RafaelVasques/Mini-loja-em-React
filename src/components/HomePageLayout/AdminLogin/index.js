import React from "react";
import "./style.css";

import Button from "../../Comps-Buttons/Button";

export default function AdminLogin (){
    
	const enterAdminButtonProperties = {
		text: 'Entrar',
		type: 'submit',
		formId: 'login-form',
		styles: 'button button__blue login__section-button'
	};
	
	return (
        <section className="login__area">
			<div className="login__wrapper">
				<p>Iniciar Seção</p>
				<form className="login__form" action="/admin" id="login-form">
					<input type="text" className="text__box login__input" placeholder="Escreva seu email" />
					<input type="text" className="text__box login__input" placeholder="Escreva sua senha" />
					<Button
						properties = {enterAdminButtonProperties}
					/>
				</form>
			</div>
		</section>
    );
}