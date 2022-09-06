import React, {useState, createContext} from "react";

import { AllProducts } from '../AllProducts';
import { Categories } from "../Categories";

export const ProductContext = createContext();

export const ProductsProvider = ({children}) => {

    const [addProductImage, setAddProductImage] = useState();
    const [addProductCategory, setAddProductCategory] = useState();
    const [addProductName, setAddProductName] = useState('42342');
    const [addProductPrice, setAddProductPrice] = useState('423423');
    const [addProductDescription, setAddProductDescription] = useState('423423');

    const [products, setProduct] = useState(AllProducts);

    const categories = Categories()
    
    const saveProduct = () => {
        
        let category = categories.find(categoryId => categoryId.categoryId == addProductCategory);

        return(
            setProduct(
                [
                    ...products,
                    { 
                        productId: products.length,
                        productName: addProductName,
                        productImgUrl: addProductImage,
                        productPrice: addProductPrice,
                        productDescription: addProductDescription,
                        productCode: '#222222',
                        categoryId: addProductCategory,
                        productCategory: category.categoryName
                    }
                ]
            )
        )
    }

    return(
        <ProductContext.Provider value={
            {
                products,
                saveProduct,
                addProductImage,
                setAddProductImage,
                addProductCategory,
                setAddProductCategory,
                addProductName,
                setAddProductName,
                addProductPrice,
                setAddProductPrice,
                addProductDescription,
                setAddProductDescription
            }
        }>
            {children}
        </ProductContext.Provider>
    );
};