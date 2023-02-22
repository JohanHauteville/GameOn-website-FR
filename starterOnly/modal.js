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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  
}

// close modal event
modalX.addEventListener("click", closeModal);

//close modal form
function closeModal(){
  modalbg.style.display = "none";
}



// fonction d'affichage d'un champs incorrect
function affichageErreur(inputNumber=0,text=""){
  if(text===""){    // Si la chaine est vide alors on supprime l'affichage de l'erreur
    formData[inputNumber].removeAttribute("data-error-visible");
    formData[inputNumber].removeAttribute("data-error");

  } else {   // Sinon on affiche l'erreur avece le texte entré
    formData[inputNumber].setAttribute("data-error-visible","true");
    formData[inputNumber].setAttribute("data-error",text);

  }

}

// fonction de contrôle du prénom
function checkFirst(){
  const lastID = document.getElementById("first").value;
  if(lastID===""){    // controle si la chaine est vide
    affichageErreur(0,"Votre prénom est manquant");
  } else if (lastID.length<=2){   // controle si la chaine a plus de deux caractères
    affichageErreur(0,"Votre prénom doit contenir plus de deux caractères");
  }else{
    affichageErreur(0,"");
    return true;
  }
}

// fonction de contrôle du nom
function checkLast(){
  const lastID = document.getElementById("last").value;
  if(lastID===""){    // controle si la chaine est vide
    affichageErreur(1,"Votre nom est manquant");
  } else if (lastID.length<=2){   // controle si la chaine a plus de deux caractères
    affichageErreur(1,"Votre nom doit contenir plus de deux caractères");
  }else{
    affichageErreur(1,"");
    return true;
  }
}

// fonction de contrôle de l'email
function checkEmail(){
  const regex = /^([a-zA-Z0-9-.]+)(\@)([a-zA-Z-]+)\.([a-zA-Z]{2,3})$/mg;  // Regex de test
  const emailValue = document.getElementById("email").value;              // Récupération de l'adresse mail entrée par l'utilisateur

  if( /\@/.test(emailValue) === false){                    // Test de la présence de '@'
    affichageErreur(2,"Le '@' est manquant");
  } else if(/(\@)([a-zA-Z-]+)\.([a-zA-Z]{2,3})$/mg.test(emailValue) === false){     // Test de la présence du nom de domaine complet
      affichageErreur(2,"Texte après le '@' manquant ou incorrect");
    }else if(regex.test(emailValue)){           // Vérification du reste de l'adresse email (avant le '@')
      affichageErreur(2,"");
      return true;
    }else{
      affichageErreur(2,"Texte avant le '@' manquant ou incorrect");
    }
  }

// fonction de contrôle du nombre de concours
function checkNumberOfConcour(){
    const numberOfConcourATester = document.getElementById("quantity").value;
    if (parseInt(numberOfConcourATester) >=0 && parseInt(numberOfConcourATester) <=99 ){  // Test d'une valeur se situant entre 0 et 99.
      affichageErreur(4,"");
      return true;
    } else{
      affichageErreur(4,"Votre nombre doit être compris entre 0 et 99."); // Si valeur incorrecte ou absente, affichage du message d'erreur.
    }
  }

// fonction de contrôle de la ville choisie
function checkRadioCity(){
  const listOfRadio = document.getElementsByName("location");   // Récupère la liste des boutons radio
  let locationChecked = "";   // initialise la variable qui recevra la ville choisie
  for(let radioButton of listOfRadio){      // Parcour des buttons radio pour trouver lequel a été cochée
    if(radioButton.checked === true){
      locationChecked = radioButton.value;  // Attribution de la ville cochée
      affichageErreur(5,"");
      return true;
    } 
  }
  if(locationChecked===""){
    affichageErreur(5,"Veuillez choisir une ville"); // Si aucune ville cochée, affichage du message d'erreur
  }
}

// fonction de contrôle des conditions d'utilisation
function checkCondition(){
  if(document.getElementById("checkbox1").checked){
    affichageErreur(6,"");
    return true;
  } else {
    affichageErreur(6,"Merci de bien vouloir lire et accepter les conditions d'utilisation");
  }
}




// fonction de validation du formulaire
function validate(event){
  event.preventDefault(); //désactive le comportement classique du formulaire
  if(
    checkFirst() &
    checkLast() &
    checkEmail() &
    checkNumberOfConcour() &
    checkRadioCity() &
    checkCondition()
  ){
    for(let data of formData){
      data.innerHTML="";
    }
    modalBtnSubmit.style.display="none";
    formData[0].insertAdjacentHTML("beforebegin"," <div class=\"form-validated\"> <span class=\"form-validated-span\">Merci pour<br>votre inscription<span></div>");
    formData[0].insertAdjacentHTML("beforebegin"," <a class=\"btn-close\" onclick=\"closeModal()\">Fermer</a>");
    
  } else {

    
  }
}




