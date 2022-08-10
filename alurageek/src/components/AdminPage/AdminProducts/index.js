import React from 'react';
import './style.css';

import ButtonLink from '../../Comps-Buttons/ButtonLink';
import AdminProduct from './AdminProduct';
import { AllProducts } from '../../AllProducts.js';
import { UnstructureArrayProducts } from './UnstructureArrayProducts';

export default function AdminProducts () {
    
	const addProductButtonText = 'Adicionar Produto';
	const addProductButtonLink = '#';
	const addProductButtonStyles = 'button button__blue';

	const allProducts = AllProducts();
	const newArrayProducts = UnstructureArrayProducts(allProducts);

	return (
        <section className="container admin__products-wrapper">
			<div className="all__products">
				<div className="all__products-header">
					<p>Todos os produtos</p>
					<ButtonLink 
						buttonText = {addProductButtonText}
						buttonLink = {addProductButtonLink}
						buttonStyles = {addProductButtonStyles}
					/>
				</div>
				<div className="admin__products">

					{newArrayProducts.map((item, index) => (
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