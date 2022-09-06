import React from "react";

import "./style.css";

import Button from "../../Comps-Buttons/Button";

export default function ContactUs (){

	const contactButtonProperties = {
		text: 'Enviar Mensagem',
		styles: 'button button__blue button__contact'
	};

	function handleSendMessage(e) {
		e.preventDefault();
	};

	return (
        <section className="container contact__us">
			<div className="contact__us-links">
				<a href="#top"><img src="/images/logo.svg" alt="Alura Geek" className="contact__us-logo" /></a>
				<ul>
					<li><a href="#top">Quem somos nós</a></li>
					<li><a href="#top">Política de privacidade</a></li>
					<li><a href="#top">Programa fidelidade</a></li>
					<li><a href="#top">Nossas lojas</a></li>
					<li><a href="#top">Quero ser franqueado</a></li>
					<li><a href="#top">Anuncie aqui</a></li>
				</ul>
			</div>
			<div className="contact__us-form">
				<p className="contact__us-title">Fale conosco</p>
				<form action="" id="contact__us-form">
					<div className="text__box contact__us-name-wrapper">
						<label>Nome</label>
						<input type="text" />
					</div>
					<div className="text__box contact__us-message-wrapper">
						<label>Escreva sua mensagem</label>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
					<Button 
						properties = {contactButtonProperties}
						onClick={(...e)=>{
							handleSendMessage(...e);
						}}
					/>
				</form>
			</div>
		</section>
    );
}