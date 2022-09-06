import React from "react";
import "./style.css";

export default function ButtonLink (props){
    return (
        <a 
            className={props.properties.styles}
            onClick={props.onClick}
        >
            {props.properties.text}
        </a>
    );
}