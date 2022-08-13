import React from "react";
import "./style.css";

import { Url } from '../../Url';

import Button from "../../Comps-Buttons/Button";

export default function ContactUs (){
    
	const contactButtonText = 'Enviar Mensagem';
	const contactButtonType = 'submit';
	const contactButtonFormId = 'contact__us-form';
	const contactButtonStyles = 'button button__blue button__contact';

	return (
        <section className="container contact__us">
			<div className="contact__us-links">
				<a href="#"><img src={ Url() + '/images/logo.svg'} alt="Alura Geek" className="contact__us-logo" /></a>
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
				<form action="" id="contact__us-form">
					<div className="text__box contact__us-name-wrapper">
						<p>Nome</p>
						<input type="text" />
					</div>
					<div className="text__box contact__us-message-wrapper">
						<p>Escreva sua mensagem</p>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
					<Button 
						buttonText = {contactButtonText}
						buttonType = {contactButtonType}
						buttonFormId = {contactButtonFormId}
						buttonStyles = {contactButtonStyles}
					/>
				</form>
			</div>
		</section>
    );
}