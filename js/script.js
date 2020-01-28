
/*
// testing
let products = [
    {id:1, name:"kia sol", detail:"medium", price:25000.0, image:"mercedes.jpg", category:1},
    {id:2, name:"HP laptop", detail:"black", price:600.0, image:"toshiba-1.png", category:2},
    {id:3, name:"Galaxy S7", detail:"samsung", price:200.0, image:"samsung-2.jpg", category:3}
];*/


let products = [];


////////////////////////////////////////////////////////////////////////////////


//make a product as object
//example >>
//  let newProduct = makeProduct(3, "Galaxy S7", "samsung", 200.0, "samsung-2.jpg", 3)
//  return >> {id:3, name:"Galaxy S7", detail:"samsung", price:200.0, image:"samsung-2.jpg", category:3}
function makeProduct(id, name, detail, price, image, category) {
    return {id, name, detail, price, image, category};
}

// return new copy of array with the new object
// example :
//  let newProduct = makeProduct(3, "Galaxy S7", "samsung", 200.0, "samsung-2.jpg", 3)
//  products = addProduct(products, newProduct);
function addProduct(arr, obj) {
    return [...arr, obj];
}

module.exports = {
    makeProduct,
    addProduct,
  }
  