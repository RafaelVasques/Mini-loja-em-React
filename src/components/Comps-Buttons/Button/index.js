import React from "react";
import "./style.css";

export default function Button (props){
    return (
        <button className={props.buttonStyles} type={props.buttonType} form={props.buttonFormId}> {props.buttonText} </button>
    );
}