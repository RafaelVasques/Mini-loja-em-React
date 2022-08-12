import React from "react";
import "./style.css";

export default function AdminProduct (props){
    return (  

        <div className="admin__product">
            <figure>
                <img src= {props.productImgUrl} alt="Imagem do Produto XYZ" className="admin__product-image" />
                <div className="admin__product-controls">
                    <div className="admin__product-controls-wrapper">
                        <a href="#" className="admin__product-control-delete"><img src="/images/trash.svg" alt="Excluir Produto" /></a>
                        <a href="/add-product" className="admin__product-control-edit"><img src="/images/edit.svg" alt="Editar Produto" /></a>
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

