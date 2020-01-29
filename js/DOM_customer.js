////////////////////////////////// DOM //////////////////////////////////

function addThisToCart() {
    cart = addToCart(cart, this.proID);
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
    refreshCustomer(searchProduct(products, text));
}

refreshCustomer(products);