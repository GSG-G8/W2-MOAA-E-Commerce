
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

// find object by id from array of objects;
//example : find object with id '2' from array 'products;
//  let product = findProduct(products, 2);
function findProduct(arr, id) {
    return arr.find(pro => pro.id==id);
}

// update one object from array based on id
// example : update product with id '3' from 'products'
//  let newProduct = makeProduct(3, "Galaxy S7", "samsung", 200.0, "samsung-2.jpg", 3)
//  products = updateProduct(products, newProduct);
function updateProduct(arr, obj) {
    return arr.map(pro => pro.id==obj.id ? obj : pro);
}

///////////////////////

// return new copy of array with the new object
// example : add product with id '2' to cart 'cart'
//  let product = findProduct(products, 2);
//  cart = addToCart(cart, product);
function addToCart(arr, product) {
    
}

// return new copy of array with the new object
// example : add product with id '2' to cart 'cart'
//  let product = findProduct(products, 2);
//  cart = addToCart(cart, product);
function removeFromCart(arr, id) {

}

function totalPrice(arr) {
    
}
////////////////////////

module.exports = {
    makeProduct,
    addProduct,
    deleteProduct,
    findProduct,
    updateProduct,
}
