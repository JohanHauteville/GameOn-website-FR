function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalX = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fermeture de la modal
modalX.addEventListener("click", function(){
  // modalbg.style.opacity = "0";
  // modalbg.style.transition = "opacity .5s";
  modalbg.style.display = "none";
  
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  
}

