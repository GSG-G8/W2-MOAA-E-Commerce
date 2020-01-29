const {
    makeProduct,
    addProduct,
    deleteProduct,
    findProduct,
    searchProduct,
    updateProduct,
    addToCart,
    saveLocal,
    loadLocal,
    removeLocal,
    refresh
  } = require('../js/script.js');


test('Refactor our addOne function so it is pure.', function () {
    let obj = {a:1};
    let  arr = [];
    let  actual = addProduct(arr,obj);
    let expected = [{a:1}];
  expect(actual).toEqual(expected);
})
