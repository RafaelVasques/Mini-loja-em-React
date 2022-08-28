import React, { useState } from 'react';
import './style.css';

import { AllProducts } from '../../AllProducts.js';

import ButtonLink from '../../Comps-Buttons/ButtonLink';
import AdminProduct from './AdminProduct';

const listOfProducts = AllProducts();

export default function AdminProducts () {
	
	const addProductButtonLinkProperties = {
		text: 'Adicionar Produto',
		link: '/admin/add-product',
		styles: 'button button__blue'
	};
	
	return (
        <section className="container admin__products-wrapper">
			<div className="all__products">
				<div className="all__products-header">
					<p>Todos os produtos</p>
					<ButtonLink 
						properties = {addProductButtonLinkProperties}
					/>
				</div>
				<div className="admin__products">

					{listOfProducts.map((item, index) => (
						<AdminProduct 
							key = {index}
							productImgUrl = {item.productImgUrl}
							productName = {item.productName}
							productPrice = {item.productPrice}
							productCode = {item.productCode}
						/>
					))}

				</div>
			</div>
		</section>
    );
}