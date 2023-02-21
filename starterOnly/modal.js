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

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  
}



// Fermeture de la modal
modalX.addEventListener("click", async function(){
  modalbg.style.display = "none";
})


// Ajoute un message d'erreur sur le span choisi
function ajoutSpanError(idElement,text){
  const targetIdElement = "error"+idElement;
  document.getElementById(targetIdElement).innerText = text;
}


// fonction de contrôle de chaine
function checkString(inputID,name){
  const lastID = document.getElementById(inputID).value;
  if(lastID===""){    // controle si la chaine est vide
    ajoutSpanError(inputID,"Votre "+name+" est manquant");
  } else if (lastID.length<=2){   // controle si la chaine a plus de deux caractères
    ajoutSpanError(inputID,"Votre "+name+" doit contenir plus de deux caractères");
  }else{
    ajoutSpanError(inputID,"");
  }
}

// fonction de contrôle de l'email
function checkEmail(){
  const regex = /^([a-zA-Z0-9-.]+)(\@)([a-zA-Z-]+)\.([a-zA-Z]{2,3})$/mg;  // Regex de test
  const emailValue = document.getElementById("email").value;              // Récupération de l'adresse mail entrée par l'utilisateur

  if( /\@/.test(emailValue) === false){                    // Test de la présence de '@'
    ajoutSpanError("email","'@' manquant");
  } else if(/(\@)([a-zA-Z-]+)\.([a-zA-Z]{2,3})$/mg.test(emailValue) === false){     // Test de la présence du nom de domaine complet
      ajoutSpanError("email","Texte après le '@' manquant ou incorrect");
    }else if(regex.test(emailValue)){           // Vérification du reste de l'adresse email (avant le '@')
      ajoutSpanError("email","");               // Efface le message d'erreur quand l'email est correct
    }else{
      ajoutSpanError("email","Texte avant le '@' manquant ou incorrect");
    }
  }
// fonction de contrôle du nombre de concours
function checkNumberOfConcour(){
    const numberOfConcourATester = document.getElementById("quantity").value;
    if (parseInt(numberOfConcourATester) >=0 && parseInt(numberOfConcourATester) <=99 ){  // Test d'une valeur se situant entre 0 et 99.
      ajoutSpanError("quantity","");
    } else{
      ajoutSpanError("quantity","Votre nombre doit être compris entre 0 et 99."); // Si valeur incorrecte ou absente, affichage du message d'erreur.
    }
  }
// fonction de contrôle de la ville choisie
function checkRadioCity(){
  const listOfRadio = document.getElementsByName("location");   // Récupère la liste des boutons radio
  let locationChecked = "";   // initialise la variable qui recevra la ville choisie

  for(let radioButton of listOfRadio){      // Parcour des buttons radio pour trouver lequel a été cochée
    if(radioButton.checked === true){
      locationChecked = radioButton.value;  // Attribution de la ville cochée
      ajoutSpanError("radio","");
    } 
  }
  if(locationChecked===""){
    ajoutSpanError("radio","Veuillez choisir une ville");   // Si aucune ville cochée, affichage du message d'erreur
  }
}

function checkCondition(){
  if(document.getElementById("checkbox1").checked){
    ajoutSpanError("condition","");
  } else {
    ajoutSpanError("condition","Merci de bien vouloir lire et accepter les conditions d'utilisation");
  }
}

function validate(event){

  event.preventDefault();                     // annule le comportement par défaut du formulaire (rechargement de la page)
  
  checkString("first","prénom");              // contrôle le champ prénom
  checkString("last","nom");                  // contrôle le champ nom
  checkEmail();                               // contrôle le champ email
  checkNumberOfConcour();                     // contrôle le champ nombre de concours
  checkRadioCity();                           // contrôle de la ville choisie
  checkCondition();

}




