import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import "./style.css";

import { ProductContext } from '../../../contexts/productContext';

import ButtonLink from "../../../Comps-Buttons/ButtonLink";

export default function AdminProduct (props){

    const productDeleteConfirmationButtonLinkProperties = {
		text: 'Sim, excluir',
		styles: 'button__link product__delete-confirmation-button-link'
	};

    const declineExcludeProductButtonLinkProperties = {
		text: 'Não excluir',
		styles: 'button__link button__link-blue decline__exclude-product-button-link'
	};

    const productDeleteConfirmationBoxId = "id" + props.productId;
    const productDeleteConfirmationBoxClassName = "product__delete-confirmation-box " + productDeleteConfirmationBoxId;
   
    const navigate = useNavigate();

    function handleOpenProductEditArea(){
        navigate("/admin/edit-product/" + props.productId);
    }
   
    function handleProductDeleteConfirmationBox() {
		const element = document.getElementsByClassName(productDeleteConfirmationBoxId);
		element[0].style.display = 'flex';
	};

    function handledeclineProductDelete() {
		const element = document.getElementsByClassName(productDeleteConfirmationBoxId);
		element[0].style.display = 'none';
	};

    const { products, setProduct } = useContext(ProductContext);
    function handleExcludeProduct() {
		const newProductsArray = products.filter(product => product.productId != props.productId);    
        setProduct(newProductsArray);
        const element = document.getElementsByClassName(productDeleteConfirmationBoxId);
		element[0].style.display = 'none';
	};

    return (  

        <div className="admin__product">
            <figure>
                <img src={props.productImgUrl} alt={props.productName} className="admin__product-image" />
                <div className="admin__product-controls">
                    <div className="admin__product-controls-wrapper">
                        
                        <a 
                            className="admin__product-control-delete"
                            onClick={ () => {
                                handleProductDeleteConfirmationBox();
                            }}
                        >
                            <img src="/images/trash.svg" alt="Excluir Produto" />
                        </a>

                        <a 
                            className="admin__product-control-edit"
                            onClick={ () => {
                                handleOpenProductEditArea();
                            }}
                        >
                            <img src="/images/edit.svg" alt="Editar Produto" />
                        </a>

                    </div>
                </div>
                <figcaption className="product__informations">
                    <p className="admin__product-description"> {props.productName} </p>
                    <p className="admin__product-price">R$ {props.productPrice} </p>
                    <p className="admin__product-code"> {props.productCode} </p>
                </figcaption>
            </figure>

            <div className={productDeleteConfirmationBoxClassName}>
                <p>Deseja excluir <br/> {props.productName}?</p>
                
                <ButtonLink
                    properties = {declineExcludeProductButtonLinkProperties}
                    onClick={ ()=> {
                        handledeclineProductDelete();
                    }}
                />

                <ButtonLink
                    properties = {productDeleteConfirmationButtonLinkProperties}
                    onClick={ ()=> {
                        handleExcludeProduct();
                    }}
                />

            </div>

        </div>

    );
}


