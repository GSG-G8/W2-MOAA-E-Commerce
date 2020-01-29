const add = document.querySelector('.cart')
var span = document.querySelector(".close-btn");
const table = document.querySelector(".form-sec");
 add.addEventListener('click', () => {
  document.body.style.cssText = "background-color:gray"
   document.querySelector('.visible').classList = "invisable"
   document.querySelector('.form-sec').style.cssText = "display:block;"
 })
span.onclick = function() {
    document.body.style.cssText = "background-color:white"
    document.querySelector('.form-sec').style.cssText = "display:none;"
    document.querySelector('.invisable').classList = "visible"
    
    }