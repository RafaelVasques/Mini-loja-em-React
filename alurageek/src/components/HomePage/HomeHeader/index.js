import React from "react";
import "./style.css";

import HomeHeaderTop from '../HomeHeader/HomeHeaderTop';
import Banner from '../HomeHeader/Banner';

export default function HomeHeader (){
    return (
        <header>
            <HomeHeaderTop />
            <Banner />
        </header>
    );
}