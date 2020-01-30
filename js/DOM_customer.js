////////////////////////////////// DOM //////////////////////////////////

function addThisToCart() {
    cart = addToCart(cart, this.proID);
    document.getElementById("cart-count").textContent = cart.length+"";
    saveLocal(cart, "cart");
}

function refreshCustomer(arr) {
    let cont = document.getElementsByClassName("section_product_container")[0];
    cont.innerHTML = "";

    arr.forEach(pro => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img class="img-product" src="${pro.image}"><br>
            <p>title : ${pro.name}</p>
            <p>price : ${pro.price}$</p>`;
        
        const btnAdd = document.createElement("button");
        btnAdd.className = "section-product-btn";
        btnAdd.textContent = "add to cart";
        btnAdd.proID = pro.id;
        btnAdd.onclick = addThisToCart;

        div.appendChild(btnAdd);
        cont.appendChild(div);
    });
}

function domSearchCustomer() {
    let text = document.getElementById("search").value;
    let type = document.getElementsByClassName("search__option")[0].value;
    if (type=="name") refreshCustomer(searchProduct(products, text)); else
    if (type=="price") refreshCustomer(searchProduct(products, "", text)); else
    if (type=="cat") refreshCustomer(searchProduct(products, "", "", text));
}


refreshCustomer(products);
document.getElementById("cart-count").textContent = cart.length+"";

