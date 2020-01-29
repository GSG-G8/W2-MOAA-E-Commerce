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

let products = loadLocal("products") || [];
let cart = loadLocal("cart") || [];
let nextID = loadLocal("nextID") || 1;

let categories = [
    "fff",
    "asd"
];