export function UnstructureArrayProducts(allArraysProducts) {
  
    const arrayProducts = allArraysProducts.map(function(item){
        return item.products
    });

    let UnstructuredArray = [];
    for(var i = 0; i < arrayProducts.length; i++) {
    
        UnstructuredArray = UnstructuredArray.concat(arrayProducts[i])

    };

    return UnstructuredArray
}