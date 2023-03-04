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
const modalBtnSubmit = document.querySelector(".btn-submit");
const formData = document.querySelectorAll(".formData");
const modalX = document.querySelector(".close");
const modalBdy = document.querySelector(".modal-body");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

}

// close modal event
modalX.addEventListener("click", closeModal);

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}



// fonction d'affichage / désaffichage d'un champs incorrect
function affichageErreur(inputNumber = 0, text = "") {
  if (text === "") {    // Si la chaine est vide alors on supprime l'affichage de l'erreur
    formData[inputNumber].removeAttribute("data-error-visible");
    formData[inputNumber].removeAttribute("data-error");

  } else {   // Sinon on affiche l'erreur avece le texte entré
    formData[inputNumber].setAttribute("data-error-visible", "true");
    formData[inputNumber].setAttribute("data-error", text);

  }
}

// fonction de contrôle d'une chaîne (si elle est vide et si elle a moins de 2 caractères)
function checkString(elementID,numberOfFormData,label) {
  const lastID = document.getElementById(elementID).value;
  if (lastID === "") {    // controle si la chaîne est vide
    affichageErreur(numberOfFormData, `Votre ${label} est manquant`);
  } else if (lastID.length <= 2) {   // controle si la chaîne a plus de deux caractères
    affichageErreur(numberOfFormData, `Votre ${label} doit contenir plus de deux caractères`);
  } else {
    affichageErreur(numberOfFormData, "");
    return true;
  }
  return false;
}

// fonction de contrôle de l'email
function checkEmail() {
  const regex = /^([a-zA-Z0-9-.]+)(\@)([a-zA-Z-]+)\.([a-zA-Z]{2,})$/mg;  // Regex de test
  const emailValue = document.getElementById("email").value;              // Récupération de l'adresse mail entrée par l'utilisateur
  if (/\@/.test(emailValue) === false) {                    // Test de la présence de '@'
    affichageErreur(2, "Le '@' est manquant");
  } else if (/(\@)([a-zA-Z-]+)\.([a-zA-Z]{2,})$/mg.test(emailValue) === false) {     // Test de la présence du nom de domaine complet
    affichageErreur(2, "Texte après le '@' manquant ou incorrect");
  } else if (regex.test(emailValue)) {           // Vérification du reste de l'adresse email (avant le '@')
    affichageErreur(2, "");
    return true;
  } else {
    affichageErreur(2, "Texte avant le '@' manquant ou incorrect");
  }
  return false;
}

function checkBirthDate(){
  const birthDate = document.getElementById("birthdate").value;
  if(birthDate===""){
    affichageErreur(3, "Date d'anniversaire manquante");
    return false
  }else{
    affichageErreur(3, "");
    return true;
  }

}

// fonction de contrôle du nombre de concours
function checkNumberOfConcour() {
  const numberOfConcourATester = document.getElementById("quantity").value;
  if (parseInt(numberOfConcourATester, 10) >= 0 && parseInt(numberOfConcourATester, 10) <= 99) {  // Test d'une valeur se situant entre 0 et 99.
    affichageErreur(4, "");
    return true;
  } else {
    affichageErreur(4, "Votre nombre doit être compris entre 0 et 99."); // Si valeur incorrecte ou absente, affichage du message d'erreur.
  }
  return false;
}

// fonction de contrôle de la ville choisie
function checkRadioCity() {
  const listOfRadio = document.getElementsByName("location");   // Récupère la liste des boutons radio
  let locationChecked = "";   // initialise la variable qui recevra la ville choisie
  for (let radioButton of listOfRadio) {      // Parcour des buttons radio pour trouver lequel a été cochée
    if (radioButton.checked === true) {
      locationChecked = radioButton.value;  // Attribution de la ville cochée
      affichageErreur(5, "");
      return true;
    }
  }
  if (locationChecked === "") {
    affichageErreur(5, "Veuillez choisir une ville"); // Si aucune ville cochée, affichage du message d'erreur
  }
  return false;
}

// fonction de contrôle des conditions d'utilisation
function checkCondition() {
  if (document.getElementById("checkbox1").checked) {
    affichageErreur(6, "");
    return true;
  } else {
    affichageErreur(6, "Merci de bien vouloir lire et accepter les conditions d'utilisation");
  }
  return false;
}




// fonction de validation du formulaire
function validate(event) {
  event.preventDefault(); //désactive le comportement classique du formulaire
  if (
    checkString("first",0,"prénom") &
    checkString("last",1,"nom") &
    checkEmail() &
    checkBirthDate() &
    checkNumberOfConcour() &
    checkRadioCity() &
    checkCondition()
  ){
    // on remplace tout le formulaire par notre code HTML contenant le message de validation ainsi que le boutton "fermer"
    modalBdy.innerHTML = ` 
    <div class="form-validated">
      <span class="form-validated-span">Merci pour<br>votre inscription<span>
    </div>
    <a class="btn-close" onclick="closeModal()">Fermer</a>
    `;
    
  }
}




