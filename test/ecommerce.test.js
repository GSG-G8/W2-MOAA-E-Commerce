const {
  makeProduct,
  addProduct,
  deleteProduct,
  findProduct,
  updateProduct,
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

////////////////////////////  delete ///////////////////////////////////

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