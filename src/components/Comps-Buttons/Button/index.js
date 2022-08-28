import React from "react";
import "./style.css";

export default function Button (props){
    
    return (
        <button
            className={props.properties.styles}
            type={props.properties.type}
            form={props.properties.formId}
        >
            {props.properties.text}
        </button>
    );
}