import React, {useState, createContext} from "react";

export const AddProductContext = createContext();

export const AddProductProvider = ({children}) => {

    const [addProductImage, setAddProductImage] = useState();
    const [addProductCategory, setAddProductCategory] = useState();
    const [addProductName, setAddProductName] = useState();
    const [addProductPrice, setAddProductPrice] = useState();
    const [addProductDescription, setAddProductDescription] = useState();

    return(
        <AddProductContext.Provider value={{
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
        }}>
            {children}
        </AddProductContext.Provider>
    );

};