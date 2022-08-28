import React, { useState } from 'react';
import "./style.css";

import Button from "../../../Comps-Buttons/Button";

export default function AddProduct (){
    
	const addProductButtonProperties = {
		text: 'Adicionar Produto',
		type: 'submit',
		formId: 'add__product-form',
		styles: 'button button__blue add__product-button'
	};

	return (
        <section className="container add__product-area">
			<div className="add__product-wrapper">
				<p>Adicionar novo produto</p>
				<form className="add__product-form" action="/admin" id="add__product-form">
					<div className="text__box add__product-input-wrapper">
						<p>URL da imagem</p>
						<input type="text" className="" />
					</div>
					<div className="text__box add__product-input-wrapper">
						<p>Categoria</p>
						<input type="text" className="" />
					</div>
					<div className="text__box add__product-input-wrapper">
						<p>Nome do produto</p>
						<input type="text" className="" />
					</div>
					<div className="text__box add__product-input-wrapper">
						<p>Preço do produto</p>
						<input type="text" className="" />
					</div>
					<div className="text__box add__product-textarea-wrapper">
						<p>Descrição do produto</p>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
					<Button
						properties = {addProductButtonProperties}
					/>
				</form>
			</div>
		</section>
    );
}