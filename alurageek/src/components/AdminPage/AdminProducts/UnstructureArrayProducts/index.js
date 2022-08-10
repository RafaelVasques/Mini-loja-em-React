export function UnstructureArrayProducts(allArraysProducts) {
  
    const arrayProducts = allArraysProducts.map(function(item){
        return item.products
    });

    let newArray = new Array();
    for(var i = 0; i < arrayProducts.length; i++) {
    
        newArray = newArray.concat(arrayProducts[i])

    };

    return newArray
}