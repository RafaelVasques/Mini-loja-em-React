import React from "react";
import "./style.css";

export default function AddProduct (){
    return (
        <section className="container add__product-area">
			<div className="add__product-wrapper">
				<p>Adicionar novo produto</p>
				<form className="add__product-form" action="./admin_products.html">
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
					<button className="button__blue add__product-button">Adicionar produto</button>
				</form>
			</div>
		</section>
    );
}