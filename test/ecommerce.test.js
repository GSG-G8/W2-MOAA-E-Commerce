const {
  makeProduct,
  addProduct,
} = require('../js/script.js');


test('makeProduct should return an object.', function () {
  let actual = makeProduct(3, "Galaxy S7", "samsung", 200.0, "samsung-2.jpg", 3);
  let expected = {id:3, name:"Galaxy S7", detail:"samsung", price:200.0, image:"samsung-2.jpg", category:3}

  expect(actual).toEqual(expected);
});

test('addProduct() should not changing the origional array.', function () {
  let currentProducts = [];
  let oldProducts = [...currentProducts];
  addProduct(currentProducts, {a:1, b:2, c:3});

  expect(oldProducts).toEqual(currentProducts);
});



// let obj = {a:1};
// let  arr = [];
// let  actual = addProduct(arr,obj);
// let expected = [{a:1}];