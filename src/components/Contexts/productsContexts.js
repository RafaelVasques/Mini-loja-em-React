import React, { useState, createContext } from "react";

export const productsContext = createContext();

const productsProvider = (props) => {
    const [products, setProducts] = useState(
        [{
            categoryName: 'Yamandu Magará',
            products: [{
                productImgUrl: '/images/products_imgs/unsplash_6FDXGY9J6y4.png',
                productName: 'Caneca Star Wars',
                productPrice: '60,00',
                productDescription: 'descrição do produto',
                productCode: '#222222'
          },{
                productImgUrl: '/images/products_imgs/unsplash_epRFE_hBNjo.png',
                productName: 'Capacete Darth Vader',
                productPrice: '40,60',
                productDescription: 'descrição do produto',
                productCode: '#111111'
          }]
      },{
            categoryName: 'Chupeta de dinossauro',
            products: [{
                productImgUrl: '/images/products_imgs/unsplash_0POwK6iAiRQ.png',
                productName: 'Controle Xbox',
                productPrice: '390,90',
                productDescription: 'descrição do produto',
                productCode: '#111111'
          }]
      },{
            categoryName: 'Cudeflor',
            products: [{
                productImgUrl: '/images/products_imgs/unsplash_fMP-oCze3AY.png',
                productName: 'Camiseta Atari',
                productPrice: '39,90',
                productDescription: 'descrição do produto',
                productCode: '#111111'
          }]
      }]
    );

    const saveProduct = product => {
        const newProduct = [{
            categoryName: '',
            products: [{
                productImgUrl: '',
                productName: '',
                productPrice: '',
                productDescription: '',
                productCode: ''
            }]
        }];
        setProducts([...products, newProduct]);
    }
}

export default productsProvider;