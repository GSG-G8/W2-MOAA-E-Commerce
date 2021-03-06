////////////////////////////////// DOM //////////////////////////////////
const name = document.getElementById("name");
const detail = document.getElementById("detail");
const price = document.getElementById("price");
const cat = document.getElementById("cat");
const img = document.getElementById("img");


const addbtn = document.getElementById("add");
addbtn.addEventListener('click', function() {
    domAddProduct();
})


function domAddProduct() {
    const pro = makeProduct(nextID++, name.value, detail.value, price.value, img.value, cat.value);
    products = addProduct(products, pro);

    saveLocal(products, "products");
    saveLocal(nextID, "nextID");
    refreshSeller(products);
    hideForm();

    name.value = "";
    detail.value = "";
    price.value = "";
    img.value = "";
    cat.value = "";
}

function editThis() {
    showUpdate();
    let product = findProduct(products, this.proID);
    document.getElementById("btn-update").proID = this.proID;

    name.value = product.name;
    detail.value = product.details;
    price.value = product.price;
    img.value = product.image;
    cat.value = product.category;
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
    let type = document.getElementsByClassName("search__option")[0].value; 
    if (type=="name") refreshSeller(searchProduct(products, text)); else
    if (type=="price") refreshSeller(searchProduct(products, "", text)); else
    if (type=="cat") refreshSeller(searchProduct(products, "", "", text));
}

function updateForm(id) {
    products = updateProduct(products, {
        id: document.getElementById("btn-update").proID,
        name: name.value,
        details: detail.value,
        price: price.value,
        image:  img.value,
        category: cat.value,
    });
    saveLocal(products, "products");
    refreshSeller(products);
    hideForm();
}


refreshSeller(products);