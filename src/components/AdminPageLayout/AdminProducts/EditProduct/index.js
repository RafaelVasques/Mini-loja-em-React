import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import "./style.css";

import { ProductContext } from '../../../contexts/productContext';

import { ProductsImages } from '../../../ProductsImages';
import { Categories } from '../../../Categories';

import Button from "../../../Comps-Buttons/Button";
import ButtonLink from '../../../Comps-Buttons/ButtonLink';

export default function EditProduct (){

	const navigate = useNavigate();

	const saveEditedProductButtonProperties = {
		text: 'Salvar Edição',
		styles: 'button button__blue edit__product-button'
	};

	const cancelEditedProductButtonProperties = {
		text: 'Cancelar Edição',
		styles: 'button button__blue edit__product-button'
	};

	const closeAddImagePopupProperties = {
		text: 'Fechar',
		styles: 'button__link button__blue close__add-image-popup'
	};
	
	const {
		products,
		saveEditedProduct,
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

	const { productId } = useParams();
	const product = products.find(product => product.productId == productId);
	
	if(
		addProductImage == undefined && addProductCategory == undefined &&
		addProductName == undefined &&	addProductPrice == undefined &&
		addProductDescription == undefined
	){
		setAddProductImage(product.productImgUrl);
		setAddProductCategory(product.categoryId);
		setAddProductName(product.productName);
		setAddProductPrice(product.productPrice);
		setAddProductDescription(product.productDescription);
	}

	function handleSaveEditedProduct(e) {
		
		if (
			addProductImage !== undefined && addProductCategory !== undefined &&
			addProductName !== undefined &&	addProductPrice !== undefined &&
			addProductDescription !== undefined
		){
			e.preventDefault();
			saveEditedProduct(productId);

			setAddProductImage(undefined);
			setAddProductCategory(undefined);
			setAddProductName(undefined);
			setAddProductPrice(undefined);
			setAddProductDescription(undefined);

			navigate("/admin");
		};
		
	};

	function handleCancelEditProduct(e) {	
		e.preventDefault();
		navigate("/admin");
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

        <section className="container edit__product-area">
			
			<div className="edit__product-wrapper">
				<p>Editar {product.productName}</p>
				<form
					className="edit__product-form"
					id="edit__product-form"
					onSubmit={ (...e) => {
						handleSaveEditedProduct(...e);
					}}
				>
								
					<div className="text__box edit__product-input-wrapper">
						<label htmlFor="image__URL">URL da imagem</label>
						<input 
							id="image__URL"
							type="text"
							className="image__URL-input"
							defaultValue={addProductImage}
							required
							autoComplete="off"
							onClick={() => {
								handleProductImagePopup();
							}}
						/>
					</div>

					<div className="text__box edit__product-input-wrapper">
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
									selected={item.categoryId == product.categoryId ? 'selected' : ''}
								>
									{item.categoryName}
								</option>
							))}
						</select>
					</div>

					<div className="text__box edit__product-input-wrapper">
						<label htmlFor="product__name">Nome do produto</label>
						<input
							id="product__name"
							type="text"
							defaultValue={product.productName}
							value={addProductName}
							onChange={(event) => setAddProductName(event.target.value)}
							required
						/>
					</div>

					<div className="text__box edit__product-input-wrapper">
						<label htmlFor="product__price">Preço do produto</label>
						<input
							id="product__price"
							type="number"
							defaultValue={parseFloat(product.productPrice)}
							onChange={(event) => setAddProductPrice(event.target.value)}
							required
						/>
					</div>

					<div className="text__box edit__product-textarea-wrapper">
						<label htmlFor="product__description">Descrição do produto</label>
						<textarea
							id="product__description"
							rols="30"
							rows="10"
							defaultValue={product.productDescription}
							value={addProductDescription}
							onChange={(event) => setAddProductDescription(event.target.value)}
							required
						/>
					</div>

					<Button
						properties = {saveEditedProductButtonProperties}
					/>

				</form>

				<br/>

				<Button
					properties = {cancelEditedProductButtonProperties}
					onClick={ (...e) => {
						handleCancelEditProduct(...e);
					}}
				/>
			</div>

			<div className="product__image-popup">
				
				<div className="product__image-popup-header">
					<p>Selecione uma imagem</p>
					<ButtonLink
						properties = {closeAddImagePopupProperties}
						onClick={ () => {
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