import React from "react";
import "./style.css";

import { Url } from '../../../Url';

import Button from "../../../Comps-Buttons/Button";

export default function AddProduct (){
    
	const addProductButtonText = "Adicionar Produto";
    const addProductButtonType = "submit";
	const addProductButtonFormId = "add__product-form";
    const addProductButtonStyles = "button button__blue add__product-button";
	
	return (
        <section className="container add__product-area">
			<div className="add__product-wrapper">
				<p>Adicionar novo produto</p>
				<form className="add__product-form" action={ Url() + '/admin'} id="add__product-form">
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
						buttonText = {addProductButtonText}
						buttonType = {addProductButtonType}
						buttonFormId = {addProductButtonFormId}
						buttonStyles = {addProductButtonStyles}
					/>
				</form>
			</div>
		</section>
    );
}