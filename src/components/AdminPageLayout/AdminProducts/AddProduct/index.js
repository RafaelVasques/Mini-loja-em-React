import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.css";

import { ProductContext } from '../../../contexts/productContext';

import { ProductsImages } from '../../../ProductsImages';
import { Categories } from '../../../Categories';

import Button from "../../../Comps-Buttons/Button";
import ButtonLink from '../../../Comps-Buttons/ButtonLink';

export default function AddProduct (){
    
	const addProductButtonProperties = {
		text: 'Adicionar Produto',
		styles: 'button button__blue add__product-button'
	};

	const closeAddImagePopupProperties = {
		text: 'Fechar',
		styles: 'button__link button__blue close__add-image-popup'
	};

	const {
		saveProduct,
		addProductImage,
		setAddProductImage,
		addProductCategory,
		setAddProductCategory,
		addProductName,
		setAddProductName,
		addProductPrice,
		setAddProductPrice,
		addProductDescription,
		setAddProductDescription
	} = useContext(ProductContext);

	const navigate = useNavigate();
	function handleSaveNewProduct(e) {
		
		if (
			addProductImage !== undefined && addProductCategory !== undefined &&
			addProductName !== undefined &&	addProductPrice !== undefined &&
			addProductDescription !== undefined
		){
			e.preventDefault();
			saveProduct();
			navigate("/admin");
		}
		
	};

	function handleProductImagePopup() {
		const element = document.getElementsByClassName('product__image-popup');
		element[0].style.display = 'flex';
	};

	function handleCloseProductImagePopup() {
		const element = document.getElementsByClassName('product__image-popup');
		element[0].style.display = 'none';
	};

	const productsImages = ProductsImages();
	const categories = Categories();

	return (

        <section className="container add__product-area">
			
			<div className="add__product-wrapper">
				<p>Adicionar novo produto</p>
				<form className="add__product-form" action="/admin" id="add__product-form">
								
					<div className="text__box add__product-input-wrapper">
						<label htmlFor="image__URL">URL da imagem</label>
						<input 
							id="image__URL"
							type="text"
							className="image__URL-input"
							value={addProductImage}
							required
							autoComplete="off"
							onClick={() => {
								handleProductImagePopup();
							}}

						/>

					</div>

					<div className="text__box add__product-input-wrapper">
						<label htmlFor="category">Categoria</label>
						<select 
							name="categories"
							id="category"
							required
							onChange={(event) => {
								setAddProductCategory(event.target.value);
							}}
						>
							<option	value=''></option>					
							{categories.map((item, index) => (
								<option
									key={index}
									value={item.categoryId}
								>
									{item.categoryName}
								</option>
							))}
						</select>
					</div>

					<div className="text__box add__product-input-wrapper">
						<label htmlFor="product__name">Nome do produto</label>
						<input
							id="product__name"
							type="text"
							value={addProductName}
							onChange={(event) => setAddProductName(event.target.value)}
							required
						/>
					</div>

					<div className="text__box add__product-input-wrapper">
						<label htmlFor="product__price">Preço do produto</label>
						<input
							id="product__price"
							type="number"
							value={addProductPrice}
							onChange={(event) => setAddProductPrice(event.target.value)}
							required
						/>
					</div>

					<div className="text__box add__product-textarea-wrapper">
						<label htmlFor="product__description">Descrição do produto</label>
						<textarea
							id="product__description"
							rols="30"
							rows="10"
							value={addProductDescription}
							onChange={(event) => setAddProductDescription(event.target.value)}
							required
						/>
					</div>

					<Button
						properties = {addProductButtonProperties}
						onClick={ (...e)=>{
							handleSaveNewProduct(...e);
						}}
					/>

				</form>
			</div>

			<div className="product__image-popup">
				
				<div className="product__image-popup-header">
					<p>Selecione uma imagem</p>
					<ButtonLink
						properties = {closeAddImagePopupProperties}
						onClick={ ()=>{
							handleCloseProductImagePopup();
						}}
					/>
				</div>

				<div className="product__images-popup-wrapper">
					{productsImages.map((item, index) => (
						<img
							key={index}
							src={item}
							onClick={() => {
								setAddProductImage(item);
								handleCloseProductImagePopup();
							}}
						/>
					))}
				</div>
				
			</div>
		</section>
    );
}