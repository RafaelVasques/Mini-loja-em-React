import React from "react";
import "./style.css";

import { Url } from '../../../Url';

export default function Product (props){

    return (  
        <div className="product">
            <figure>
                <img src= { Url() + props.productImgUrl } alt={props.productName} className="product__image" />
                <figcaption className="product__informations">
                    <p className="product__description"> {props.productName} </p>
                    <p className="product__price">R$ {props.productPrice} </p>
                    <a href={ Url() + '/product'} className="see__product">Ver produto</a>
                </figcaption>
            </figure>
        </div>
    );
}