

const table = document.querySelector(".form-sec");


function showForm() {
  document.body.style.cssText = "background-color:gray"
  document.querySelector('.visible').classList = "invisable"
  document.querySelector('.form-sec').style.cssText = "display:block;"

  document.getElementById("add").style.display = "inline-block";
  document.getElementById("btn-update").style.display = "none";
}

function hideForm() {
  document.body.style.cssText = "background-color:white"
  document.querySelector('.form-sec').style.cssText = "display:none;"
  document.querySelector('.invisable').classList = "visible"
}


function showUpdate() {
  showForm();

  document.getElementById("add").style.display = "none";
  document.getElementById("btn-update").style.display = "inline-block";
}