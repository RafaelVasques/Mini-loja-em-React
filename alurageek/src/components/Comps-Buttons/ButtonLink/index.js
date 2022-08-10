import React from "react";
import "./style.css";

export default function ButtonLink (props){
    return (
        <a className={props.buttonStyles} href={props.buttonLink}> {props.buttonText} </a>
    );
}