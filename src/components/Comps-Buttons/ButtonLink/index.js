import React from "react";
import "./style.css";

import { Url } from '../../Url';

export default function ButtonLink (props){
    return (
        <a className={props.buttonStyles} href={ Url() + props.buttonLink }> {props.buttonText} </a>
    );
}