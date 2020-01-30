

const table = document.querySelector(".form-sec");


function showForm() {
  document.body.style.backgroundColor = "#666";
  document.querySelector('.visible').className = "invisable";
  document.querySelector('.form-sec').style.display = "block";

  document.getElementById("add").style.display = "inline-block";
  document.getElementById("btn-update").style.display = "none";
}

function hideForm() {
  document.body.style.backgroundColor = "#fff";
  document.querySelector('.form-sec').style.display = "none";
  document.querySelector('.invisable').className = "visible";
}


function showUpdate() {
  showForm();

  document.getElementById("add").style.display = "none";
  document.getElementById("btn-update").style.display = "inline-block";
}