import React from "react";
import "./style.css";

export default function ButtonLink (props){
    return (
        <a className={props.properties.styles} href={props.properties.link}> {props.properties.text} </a>
    );
}