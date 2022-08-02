import React from "react";
import "./style.css";

export default function AdminProducts () {
    return (
        <section className="container admin__products-wrapper">
			<div className="all__products">
				<div className="all__products-header">
					<p>Todos os produtos</p>
					<a href="./add_product.html" className="button button__blue button__add-product">Adicionar produto</a>
				</div>
				<div className="admin__products">
					<div className="admin__product">
						<figure>
							<img src="./images/products_imgs/unsplash_6FDXGY9J6y4.png" alt="Imagem do Produto XYZ" className="admin__product-image" />
							<div className="admin__product-controls">
								<div className="admin__product-controls-wrapper">
									<a href="#" className="admin__product-control-delete"><img src="./images/trash.svg" alt="Excluir Produto" /></a>
									<a href="./add_product.html" className="admin__product-control-edit"><img src="./images/edit.svg" alt="Editar Produto" /></a>
								</div>
							</div>
							<figcaption className="product__informations">
								<p className="admin__product-description">Produto XYZ</p>
								<p className="admin__product-price">R$ 60,00</p>
								<p className="admin__product-code">#1111111</p>
							</figcaption>
						</figure>
					</div>

					<div className="admin__product">
						<figure>
							<img src="./images/products_imgs/unsplash_epRFE_hBNjo.png" alt="Imagem do Produto XYZ" className="admin__product-image" />
							<div className="admin__product-controls">
								<div className="admin__product-controls-wrapper">
									<a href="#" className="admin__product-control-delete"><img src="./images/trash.svg" alt="Excluir Produto" /></a>
									<a href="./add_product.html" className="admin__product-control-edit"><img src="./images/edit.svg" alt="Editar Produto" /></a>
								</div>
							</div>
							<figcaption className="product__informations">
								<p className="admin__product-description">Produto XYZ</p>
								<p className="admin__product-price">R$ 60,00</p>
								<p className="admin__product-code">#1111111</p>
							</figcaption>
						</figure>
					</div>

					<div className="admin__product">
						<figure>
							<img src="./images/products_imgs/unsplash_KeGToDVN0l4.png" alt="Imagem do Produto XYZ" className="admin__product-image" />
							<div className="admin__product-controls">
								<div className="admin__product-controls-wrapper">
									<a href="#" className="admin__product-control-delete"><img src="./images/trash.svg" alt="Excluir Produto" /></a>
									<a href="./add_product.html" className="admin__product-control-edit"><img src="./images/edit.svg" alt="Editar Produto" /></a>
								</div>
							</div>
							<figcaption className="product__informations">
								<p className="admin__product-description">Produto XYZ</p>
								<p className="admin__product-price">R$ 60,00</p>
								<p className="admin__product-code">#1111111</p>
							</figcaption>
						</figure>
					</div>

					<div className="admin__product">
						<figure>
							<img src="./images/products_imgs/unsplash_4OHkK555s1A.png" alt="Imagem do Produto XYZ" className="admin__product-image" />
							<div className="admin__product-controls">
								<div className="admin__product-controls-wrapper">
									<a href="#" className="admin__product-control-delete"><img src="./images/trash.svg" alt="Excluir Produto" /></a>
									<a href="./add_product.html" className="admin__product-control-edit"><img src="./images/edit.svg" alt="Editar Produto" /></a>
								</div>
							</div>
							<figcaption className="product__informations">
								<p className="admin__product-description">Produto XYZ</p>
								<p className="admin__product-price">R$ 60,00</p>
								<p className="admin__product-code">#1111111</p>
							</figcaption>
						</figure>
					</div>

					<div className="admin__product">
						<figure>
							<img src="./images/products_imgs/unsplash_6FDXGY9J6y4.png" alt="Imagem do Produto XYZ" className="admin__product-image" />
							<div className="admin__product-controls">
								<div className="admin__product-controls-wrapper">
									<a href="#" className="admin__product-control-delete"><img src="./images/trash.svg" alt="Excluir Produto" /></a>
									<a href="./add_product.html" className="admin__product-control-edit"><img src="./images/edit.svg" alt="Editar Produto" /></a>
								</div>
							</div>
							<figcaption className="product__informations">
								<p className="admin__product-description">Produto XYZ</p>
								<p className="admin__product-price">R$ 60,00</p>
								<p className="admin__product-code">#1111111</p>
							</figcaption>
						</figure>
					</div>

					<div className="admin__product">
						<figure>
							<img src="./images/products_imgs/unsplash_epRFE_hBNjo.png" alt="Imagem do Produto XYZ" className="admin__product-image" />
							<div className="admin__product-controls">
								<div className="admin__product-controls-wrapper">
									<a href="#" className="admin__product-control-delete"><img src="./images/trash.svg" alt="Excluir Produto" /></a>
									<a href="./add_product.html" className="admin__product-control-edit"><img src="./images/edit.svg" alt="Editar Produto" /></a>
								</div>
							</div>
							<figcaption className="product__informations">
								<p className="admin__product-description">Produto XYZ</p>
								<p className="admin__product-price">R$ 60,00</p>
								<p className="admin__product-code">#1111111</p>
							</figcaption>
						</figure>
					</div>

					<div className="admin__product">
						<figure>
							<img src="./images/products_imgs/unsplash_KeGToDVN0l4.png" alt="Imagem do Produto XYZ" className="admin__product-image" />
							<div className="admin__product-controls">
								<div className="admin__product-controls-wrapper">
									<a href="#" className="admin__product-control-delete"><img src="./images/trash.svg" alt="Excluir Produto" /></a>
									<a href="./add_product.html" className="admin__product-control-edit"><img src="./images/edit.svg" alt="Editar Produto" /></a>
								</div>
							</div>
							<figcaption className="product__informations">
								<p className="admin__product-description">Produto XYZ</p>
								<p className="admin__product-price">R$ 60,00</p>
								<p className="admin__product-code">#1111111</p>
							</figcaption>
						</figure>
					</div>

					<div className="admin__product">
						<figure>
							<img src="./images/products_imgs/unsplash_4OHkK555s1A.png" alt="Imagem do Produto XYZ" className="admin__product-image" />
							<div className="admin__product-controls">
								<div className="admin__product-controls-wrapper">
									<a href="#" className="admin__product-control-delete"><img src="./images/trash.svg" alt="Excluir Produto" /></a>
									<a href="./add_product.html" className="admin__product-control-edit"><img src="./images/edit.svg" alt="Editar Produto" /></a>
								</div>
							</div>
							<figcaption className="product__informations">
								<p className="admin__product-description">Produto XYZ</p>
								<p className="admin__product-price">R$ 60,00</p>
								<p className="admin__product-code">#1111111</p>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</section>
    );
}