let products = loadLocal("products") || [];
let cart = loadLocal("cart") || [];
let nextID = loadLocal("nextID") || 1;

let categories = [
    "fff",
    "asd"
];

refreshSeller(products);

////////////////////////////////// products //////////////////////////////////

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

// filter array based on 'name', 'price', and 'category'
// example : find all products that includs 'car' in name
//  let search = searchProduct(product, 'car')
function searchProduct(arr, text="", price=-1, category=-1) {
    return arr.filter(pro => pro.name.includes(text)
        && (price==-1 || pro.price==price)
        && (category==-1 || pro.category==category)
    );
}


////////////////////////////////// cart //////////////////////////////////

// return new copy of array with the new object
// example : add product with id '2' to cart 'cart'
//  let product = findProduct(products, 2);
//  cart = addToCart(cart, product);
function addToCart(arr, id) {
    return [...arr, id];
}

// return new copy of array with the new object
// example : add product with id '2' to cart 'cart'
//  let product = findProduct(products, 2);
//  cart = addToCart(cart, product);
function removeFromCart(arr, id) {
    return arr.filter(proID => proID!=id);
}

//return total price from an array of IDs of Products
//example : 
//  let total = totalPrice(cart);
function totalPrice(arr, ids) {
    return ids.map(id=>arr.find(pro=>pro.id==id)).reduce((acc,cur)=>acc+(cur?cur.price:0),0);
}

////////////////////////////////// DOM //////////////////////////////////

const addbtn = document.getElementById("add");
addbtn.addEventListener('click', function() {
    domAddProduct();
    console.log(products);
})


function domAddProduct() {
    const name = document.getElementById("name").value;
    const detail = document.getElementById("detail").value;
    const price = document.getElementById("price").value;
    const cat = document.getElementById("cat").value;
    const img = document.getElementById("img").value;

    const pro = makeProduct(nextID++, name, detail, price, img, cat);
    products = addProduct(products, pro);

    saveLocal(products, "products");
    refreshSeller(products);
}

function editThis() {

}
function removeThis() {
    products = deleteProduct(products, this.proID);
    saveLocal(products, "products");
    refreshSeller(products);
}

function refreshSeller(arr) {
    let cont = document.getElementsByClassName("product-contaner")[0];
    cont.innerHTML = "";
    const head = document.createElement("div");
    head.innerHTML = `
        <div class="flex-heder">
        <div>Image</div>
        <div>Product</div>
        <div>Detail</div>
        <div>price</div>
        <div>Catogary</div>
        <div style="flex-shrink:3;" >Edit</div>
        <div style="flex-shrink:3;">Delete</div>
        </div>
    `;
    cont.appendChild(head);

    arr.forEach(pro => {
        let div = document.createElement("div");
        let content = document.createElement("div");
        content.innerHTML = `
            <div><img class="product-img"  src="${pro.image}" alt="proimg"></div>
            <div><p class="product-des">${pro.name}</p></div>
            <div><p class="product-des">${pro.details}</p></div>
            <div><p class="product-des">${pro.price}</p></div>
            <div><p class="product-des">${pro.category}</p></div>`;
        content.className = "flex-content";

        const edit = document.createElement("div");
        const remove = document.createElement("div");
        edit.proID = pro.id;
        remove.proID = pro.id;
        edit.onclick = editThis;
        remove.onclick = removeThis;
        edit.innerHTML = '<a class="button blue-btn" href="#">Edit</a>';
        remove.innerHTML = '<a class="button red-btn" href="#">Delete</a>';
        edit.style.flexShrink = 3;
        remove.style.flexShrink = 3;
        content.appendChild(edit);
        content.appendChild(remove);
        div.appendChild(content);
        cont.appendChild(div);
    });
}

////////////////////////////////// localStorage //////////////////////////////////

function saveLocal(arr, name) {
    localStorage.setItem(name, JSON.stringify(arr));
}
function loadLocal(name) {
    return JSON.parse(localStorage.getItem(name));
}
function removeLocal(name) {
    localStorage.removeItem(name);
}

module.exports = {
    makeProduct,
    addProduct,
    deleteProduct,
    findProduct,
    updateProduct,
    addToCart,
    removeFromCart,
    totalPrice,
    searchProduct,
}
