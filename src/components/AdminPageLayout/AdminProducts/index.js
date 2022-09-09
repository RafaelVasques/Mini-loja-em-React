import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

import { ProductContext } from '../../contexts/productContext';

import ButtonLink from '../../Comps-Buttons/ButtonLink';
import AdminProduct from './AdminProduct';

export default function AdminProducts () {
	
	const addProductButtonLinkProperties = {
		text: 'Adicionar Produto',
		styles: 'button__link button__blue'
	};

	const { products } = useContext(ProductContext);
		
	const navigate = useNavigate();
	function handleAddProductClick() {
		navigate("add-product");
	};

	return (
        <section className="container admin__products-wrapper">
			<div className="all__products">
				<div className="all__products-header">
					<p>Todos os produtos</p>
					<ButtonLink 
						properties = {addProductButtonLinkProperties}
						onClick={ ()=>{
							handleAddProductClick();
						}}
					/>
				</div>
				<div className="admin__products">

					{products.map((item, index) => (
						<AdminProduct 
							key = {index}
							productImgUrl = {item.productImgUrl}
							productName = {item.productName}
							productPrice = {item.productPrice}
							productCode = {item.productCode}
							productId = {item.productId}
						/>
					))}

				</div>
			</div>
		</section>
    );
}