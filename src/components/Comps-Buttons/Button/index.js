import React from "react";
import "./style.css";

export default function Button (props){
    
    return (
        <button
            className={props.properties.styles}
            onClick={props.onClick}
        >
            {props.properties.text}
        </button>
    );
}