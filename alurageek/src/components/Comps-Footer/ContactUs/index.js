import React from "react";
import "./style.css";

import Button from "../../Comps-Buttons/Button";

export default function ContactUs (){
    
	const buttonContactText = 'Enviar Mensagem';
	const buttonContactLink = '#';
	const buttonContactStyles = 'button button__blue button__contact';

	return (
        <section className="container contact__us">
			<div className="contact__us-links">
				<img src="./images/logo.svg" alt="Alura Geek" className="contact__us-logo" />
				<ul>
					<li><a href="#">Quem somos nós</a></li>
					<li><a href="#">Política de privacidade</a></li>
					<li><a href="#">Programa fidelidade</a></li>
					<li><a href="#">Nossas lojas</a></li>
					<li><a href="#">Quero ser franqueado</a></li>
					<li><a href="#">Anuncie aqui</a></li>
				</ul>
			</div>
			<div className="contact__us-form">
				<p className="contact__us-title">Fale conosco</p>
				<form action="">
					<div className="text__box contact__us-name-wrapper">
						<p>Nome</p>
						<input type="text" />
					</div>
					<div className="text__box contact__us-message-wrapper">
						<p>Escreva sua mensagem</p>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
					<Button 
						buttonText = {buttonContactText}
						buttonLink = {buttonContactLink}
						buttonStyles = {buttonContactStyles}
					/>
				</form>
			</div>
		</section>
    );
}