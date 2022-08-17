import React from "react";
import "./style.css";

export default function Product (props){

    return (  
        <div className="product">
            <figure>
                <img src={props.productImgUrl} alt={props.productName} className="product__image" />
                <figcaption className="product__informations">
                    <p className="product__description"> {props.productName} </p>
                    <p className="product__price">R$ {props.productPrice} </p>
                    <a href="/product" className="see__product">Ver produto</a>
                </figcaption>
            </figure>
        </div>
    );
}