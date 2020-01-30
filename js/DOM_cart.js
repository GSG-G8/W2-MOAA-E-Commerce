//section__cart-container

function removeThisFromCart() {
    cart = removeFromCart(cart, this.proID);
    refreshCart(cart);
    saveLocal(cart, "cart");
}

function refreshCart(arr) {
    let cont = document.getElementsByClassName("section__cart")[0];
    cont.innerHTML = "";
    arr.forEach(proID => {
        const product = findProduct(products, proID);
        if (!product) return;
        
        const div = document.createElement("div");
        div.className = "section__cart-container";
        div.innerHTML = `
        <img class="section__img" src="${product.image}">
        <div class="section__info">
            <p>name : ${product.name}</p>
        </div>
        <div class="section__info">
            <p>detailes : ${product.details}</p>
        </div>
        <div class="section__info">
            <p>price : ${product.price}$</p>
        </div>
        <div class="section__info">
            <label>quantity :</label>
            <select id="eee" onchange= price(${product.price})>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div id='total' class="section__info">
            <p>total price : ${product.price}$</p>
        </div>`;
      
        let remove = document.createElement("div");
        let rembtn = document.createElement("button");

        remove.className = "section__info";
        rembtn.className = "remove_btn";
        rembtn.proID = product.id;
        rembtn.textContent = "remove";

        rembtn.onclick = removeThisFromCart;
        remove.appendChild(rembtn);
        div.appendChild(remove);
        cont.appendChild(div);
    });
}
refreshCart(cart);
function price(a){
    const qu=document.getElementById('eee').value
    document.getElementById('total').textContent=a*qu+"$"
    
 }