const {
  makeProduct,
  addProduct,
  deleteProduct,
  findProduct,
  updateProduct,
  searchProduct,
  addToCart,
  removeFromCart,
  totalPrice,
} = require('../js/script.js');

////////////////////////////  makeProduct ///////////////////////////////////

test('makeProduct() should create an object.', function () {
  let actual = makeProduct(3, "Galaxy S7", "samsung", 200.0, "samsung-2.jpg", 3);
  let expected = {id:3, name:"Galaxy S7", details:"samsung", price:200.0, image:"samsung-2.jpg", category:3}

  expect(actual).toEqual(expected);
});

////////////////////////////  addProduct ///////////////////////////////////

test('addProduct() should not mutate the origional array', function () {
  let currentProducts = [{id:1, val:'hello'}, {id:2, val:'world'}];
  let oldProducts = [...currentProducts];
  
  addProduct(currentProducts, {id:3, val:'hi'});
  expect(oldProducts).toEqual(currentProducts);
});

test('addProduct() should add the object to the array', function () {
  let oldProducts = [{id:1, val:'hello'}];
  let newProducts = addProduct(oldProducts, {id:2, val:'world'});
  
  expect(newProducts).toEqual([{id:1, val:'hello'}, {id:2, val:'world'}]);
});

////////////////////////////  deleteProduct ///////////////////////////////////

test('deleteProduct() should not mutate the origional array', function () {
  let currentProducts = [{id:1, val:'hello'}, {id:2, val:'world'}];
  
  let oldProducts = [...currentProducts];
  deleteProduct(currentProducts, 1);
  expect(oldProducts).toEqual(currentProducts);
  deleteProduct(currentProducts, 2);
  expect(oldProducts).toEqual(currentProducts);
  deleteProduct(currentProducts, 3);
  expect(oldProducts).toEqual(currentProducts);
});

test('deleteProduct() should remove the object from the array', function () {
  let currentProducts = [{id:1, val:'hello'}, {id:2, val:'world'}];
  
  let del1 = deleteProduct(currentProducts, 1);
  let del2 = deleteProduct(currentProducts, 2);
  let del3 = deleteProduct(currentProducts, 3);

  expect(del1).toEqual([{id:2, val:'world'}]);
  expect(del2).toEqual([{id:1, val:'hello'}]);
  expect(del3).toEqual([{id:1, val:'hello'}, {id:2, val:'world'}]);
});

////////////////////////////  findProduct ///////////////////////////////////

test('findProduct() should find the object.', function () {
  let currentProducts = [{id:1, val:'hello'}, {id:2, val:'world'}];

  let pro1 = findProduct(currentProducts, 1);
  let pro2 = findProduct(currentProducts, 2);
  let pro3 = findProduct(currentProducts, 3);

  expect(pro1).toEqual({id:1, val:'hello'});
  expect(pro2).toEqual({id:2, val:'world'});
  expect(pro3).toEqual(undefined);
});

////////////////////////////  updateProduct ///////////////////////////////////

test('updateProduct() should not mutate the origional array', function () {
  let currentProducts = [{id:1, val:'hello'}, {id:2, val:'world'}];
  let oldProducts = [...currentProducts];

  updateProduct(currentProducts, {id:1, val:'hi'});
  expect(oldProducts).toEqual(currentProducts);

  updateProduct(currentProducts, {id:2, val:'hi'});
  expect(oldProducts).toEqual(currentProducts);

  updateProduct(currentProducts, {id:3, val:'hi'});
  expect(oldProducts).toEqual(currentProducts);
});

test('updateProduct() should update the object.', function () {
  let currentProducts = [{id:1, val:'hello'}, {id:2, val:'world'}];

  let pro1 = updateProduct(currentProducts, {id:1, val:'hi'});
  let pro2 = updateProduct(currentProducts, {id:2, val:'hi'});
  let pro3 = updateProduct(currentProducts, {id:3, val:'hi'});

  expect(pro1).toEqual([{id:1, val:'hi'}, {id:2, val:'world'}]);
  expect(pro2).toEqual([{id:1, val:'hello'}, {id:2, val:'hi'}]);
  expect(pro3).toEqual([{id:1, val:'hello'}, {id:2, val:'world'}]);
});

////////////////////////////  updateProduct ///////////////////////////////////

test('searchProduct() search based on name, price and category', function () {
  let products = [
    {id:1, name:'car', price:1200, category:1},
    {id:2, name:'mobile1', price:300, category:1},
    {id:3, name:'hat', price:20, category:2},
    {id:4, name:'tv', price:300, category:2},
    {id:5, name:'mobile2', price:400, category:3},
    {id:6, name:'t-shirt', price:70, category:3},
  ];

  let actual1 = searchProduct(products, "mobile")
  let expected1 = [{id:2, name:'mobile1', price:300, category:1}, {id:5, name:'mobile2', price:400, category:3}]
  expect(actual1).toEqual(expected1);

});

////////////////////////////  addToCart ///////////////////////////////////
test('addToCart() should not mutate the origional array', function () {
  let currentProducts = [{id:1, val:'hello'}, {id:2, val:'world'}];
  let oldProducts = [...currentProducts];
  
  addToCart(currentProducts, {id:3, val:'hi'});
  expect(oldProducts).toEqual(currentProducts);
});

test('addToCart() should add the object to the array', function () {
  let oldProducts = [{id:1, val:'hello'}];
  let newProducts = addToCart(oldProducts, {id:2, val:'world'});
  
  expect(newProducts).toEqual([{id:1, val:'hello'}, {id:2, val:'world'}]);
});

////////////////////////////  removeFromCart ///////////////////////////////////

test('removeFromCart() should not mutate the origional array', function () {
  let currentProducts = [1, 2, 3, 4];
  let oldProducts = [...currentProducts];

  removeFromCart(currentProducts, 1);
  expect(oldProducts).toEqual(currentProducts);

  removeFromCart(currentProducts, 2);
  expect(oldProducts).toEqual(currentProducts);

  removeFromCart(currentProducts, 3);
  expect(oldProducts).toEqual(currentProducts);
});

test('removeFromCart() should remove the object from the array', function () {
  let currentProducts = [1, 2, 3, 4];
  
  let del1 = removeFromCart(currentProducts, 1);
  let del2 = removeFromCart(currentProducts, 2);
  let del3 = removeFromCart(currentProducts, 4);
  let del4 = removeFromCart(currentProducts, -1);

  expect(del1).toEqual([2, 3, 4]);
  expect(del2).toEqual([1, 3, 4]);
  expect(del3).toEqual([1, 2, 3]);
  expect(del4).toEqual([1, 2, 3, 4]);
});

////////////////////////////  totalPrice ///////////////////////////////////

test('totalPrice() should not mutate the origional array', function () {
  let currentProducts = [{id:1, price:12}, {id:2, price:33}, {id:3, price:50}];
  let oldProducts = [...currentProducts];

  totalPrice(currentProducts, [1, 2, 3]);
  expect(oldProducts).toEqual(currentProducts);

  totalPrice(currentProducts, [2]);
  expect(oldProducts).toEqual(currentProducts);

  totalPrice(currentProducts, [-1]);
  expect(oldProducts).toEqual(currentProducts);

  totalPrice(currentProducts, []);
  expect(oldProducts).toEqual(currentProducts);
});

test('totalPrice() should return the total price', function () {
  let products = [{id:1, price:12}, {id:2, price:33}, {id:3, price:50}];
  
  let price1 = totalPrice(products, [1, 2, 3]);
  let price2 = totalPrice(products, [2]);
  let price3 = totalPrice(products, [-1]);
  let price4 = totalPrice(products, []);

  expect(price1).toEqual(95);
  expect(price2).toEqual(33);
  expect(price3).toEqual(0);
  expect(price4).toEqual(0);
});

