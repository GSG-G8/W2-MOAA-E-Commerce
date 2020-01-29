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
    saveLocal(nextID, "nextID");
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

function domSearch() {
    let text = document.getElementById("search").value;
    console.log(text);
    refreshSeller(searchProduct(products, text));
}

refreshSeller(products);