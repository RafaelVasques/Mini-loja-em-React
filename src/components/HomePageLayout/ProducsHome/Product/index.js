import React from "react";
import { useNavigate } from 'react-router-dom';

import "./style.css";

export default function Product (props){

    const navigate = useNavigate();
	function handleProductDetails() {
		navigate("/product/" + props.productId);
	};

    return (  
        <div className="product">
            <figure>
                <img src={props.productImgUrl} alt={props.productName} className="product__image" />
                <figcaption className="product__informations">
                    <p className="product__description"> {props.productName} </p>
                    <p className="product__price">R$ {props.productPrice} </p>
                    <a 
                        className="see__product"
                        onClick={ ()=>{
							handleProductDetails();
						}}
                    >
                        Ver produto
                    </a>
                </figcaption>
            </figure>
        </div>
    );
}