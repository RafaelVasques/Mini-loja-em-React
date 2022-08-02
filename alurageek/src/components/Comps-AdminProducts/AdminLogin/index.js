import React from "react";
import "./style.css";

export default function AdminLogin (){
    return (
        <section className="login__area">
			<div className="login__wrapper">
				<p>Iniciar Seção</p>
				<form className="login__form" action="./admin_products.html">
					<input type="text" className="text__box login__input" placeholder="Escreva seu email" />
					<input type="text" className="text__box login__input" placeholder="Escreva sua senha" />
					<button className="button__blue login__section-button">Entrar</button>
				</form>
			</div>
		</section>
    );
}