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
modalX.addEventListener("click", async function(){
  // modalbg.style.opacity = "0";
  // modalbg.style.transition = await "opacity .5s";
  modalbg.style.display = "none";
  // modalbg.style.opacity = "1";
  
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  
}

function ajoutSpanError(idElement,text){
  document.getElementById(idElement).innerText = text;
}



function checkString(inputID,name){
  const lastID = document.getElementById(inputID).value;
  if(lastID===""){    
    ajoutSpanError("error"+inputID,"Votre "+name+" est manquant");
  } else if (lastID.length<=2){
    ajoutSpanError("error"+inputID,"Votre "+name+" doit contenir plus de deux caractères");
  }else{
    ajoutSpanError("error"+inputID,"");
  }
}




function validate(){
  event.preventDefault();
  checkString("first","prénom");
  checkString("last","nom");
  console.log("validate");
}




