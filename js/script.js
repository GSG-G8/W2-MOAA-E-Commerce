
/*
// testing
let products = [
    {id:1, name:"kia sol", details:"medium", price:25000.0, image:"mercedes.jpg", category:1},
    {id:2, name:"HP laptop", details:"black", price:600.0, image:"toshiba-1.png", category:2},
    {id:3, name:"Galaxy S7", details:"samsung", price:200.0, image:"samsung-2.jpg", category:3}
];*/


let products = [];

////////////////////////////////////////////////////////////////////////////////


//make a product as object
//example >>
//  let newProduct = makeProduct(3, "Galaxy S7", "samsung", 200.0, "samsung-2.jpg", 3)
//  return >> {id:3, name:"Galaxy S7", details:"samsung", price:200.0, image:"samsung-2.jpg", category:3}
function makeProduct(id, name, details, price, image, category) {
    return {id, name, details, price, image, category};
}

// return a new copy of the array with the new object
// example :
//  let newProduct = makeProduct(3, "Galaxy S7", "samsung", 200.0, "samsung-2.jpg", 3)
//  products = addProduct(products, newProduct);
function addProduct(arr, obj) {
    return [...arr, obj];
}

// return a new copy of the array without the target object
// example : delete product 'target' from products array
//  products = deleteProduct(products, target);
function deleteProduct(arr, id) {
    return arr.filter(pro => pro.id!=id);
}

module.exports = {
    makeProduct,
    addProduct,
    deleteProduct
  }
  