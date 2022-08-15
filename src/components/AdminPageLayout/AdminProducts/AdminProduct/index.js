import React from "react";
import "./style.css";

import { Url } from '../../../Url';

export default function AdminProduct (props){
    return (  

        <div className="admin__product">
            <figure>
                <img src= { Url() + props.productImgUrl } alt={props.productName} className="admin__product-image" />
                <div className="admin__product-controls">
                    <div className="admin__product-controls-wrapper">
                        <a href="#top" className="admin__product-control-delete"><img src={ Url() + '/images/trash.svg' } alt="Excluir Produto" /></a>
                        <a href={ Url() + '/admin/add-product' } className="admin__product-control-edit"><img src={ Url() + '/images/edit.svg' } alt="Editar Produto" /></a>
                    </div>
                </div>
                <figcaption className="product__informations">
                    <p className="admin__product-description"> {props.productName} </p>
                    <p className="admin__product-price">R$ {props.productPrice} </p>
                    <p className="admin__product-code"> {props.productCode} </p>
                </figcaption>
            </figure>
        </div>

    );
}


