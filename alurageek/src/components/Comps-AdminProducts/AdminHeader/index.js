import React from "react";
import "./style.css";

export default function AdminHeader (){
    return (
        <header>
			<div class="container admin__header-top">
				<img src="./images/logo.svg" alt="Alura Geek" class="admin__header-logo" />
				<div class="admin__header-right-elements-container">
					<div class="admin__search-bar-wrapper">
						<div class="admin__search-bar-background"></div>
						<form action="">
							<input type="text" class="admin__search-bar" placeholder="O que deseja encontrar?" />
							<button class="admin__search-button"><img src="./images/mag_glass.svg" alt="Busque um produto" /></button>
						</form>
					</div>
				</div>
			</div>
		</header>
    );
}