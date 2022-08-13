import React from 'react';
import './style.css';

import { Url } from '../../Url';
import { AllProducts } from '../../AllProducts.js';
import { UnstructureArrayProducts } from './UnstructureArrayProducts';

import ButtonLink from '../../Comps-Buttons/ButtonLink';
import AdminProduct from './AdminProduct';

export default function AdminProducts () {
    
	const addProductButtonText = 'Adicionar Produto';
	const addProductButtonLink = '/admin/add-product';
	const addProductButtonStyles = 'button button__blue';

	const allProducts = AllProducts();
	const UnstructuredArrayProducts = UnstructureArrayProducts(allProducts);

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

					{UnstructuredArrayProducts.map((item, index) => (
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