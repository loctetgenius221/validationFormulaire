// @ts-nocheck
// On d'abord récupérer notre formulaire
let formulaire = document.getElementById("formulaire");

// Validation progressive des champs
// Dès que le champs perd le focus on appelle la fonction
document.getElementById("prenom").addEventListener("blur", validatePrenom);
document.getElementById("nom").addEventListener("blur", validateNom);
document.getElementById("email").addEventListener("blur", validateEmail);
document
  .getElementById("mot_de_passe")
  .addEventListener("blur", validateMotDePasse);

function validatePrenom() {
  let prenom = document.getElementById("prenom").value.trim();
  let monRegex = /^[a-zA-Z\s]+$/;
  if (prenom.length < 3 || prenom.length > 15) {
    document.getElementById("errorPrenom").textContent =
      "Le prénom doit comporter entre 3 et 15 caractères.";
    return false;
  } else if (!monRegex.test(prenom)) {
    document.getElementById("errorPrenom").textContent =
      "Le prénom ne doit comporter que des lettres.";
    return false;
  } else {
    document.getElementById("errorPrenom").textContent = "";
    return true;
  }
}

function validateNom() {
  let nom = document.getElementById("nom").value.trim();
  let monRegex = /^[a-zA-Z\s]+$/;
  if (nom.length < 3 || nom.length > 15) {
    document.getElementById("errorNom").textContent =
      "Le nom doit comporter entre 3 et 15 caractères.";
    return false;
  } else if (!monRegex.test(nom)) {
    document.getElementById("errorNom").textContent =
      "Le nom ne doit comporter que des lettres.";
    return false;
  } else {
    document.getElementById("errorNom").textContent = "";
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("email").value.trim();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("errorEmail").textContent =
      "L'adresse email n'est pas valide.";
    return false;
  } else {
    document.getElementById("errorEmail").textContent = "";
    return true;
  }
}

function validateMotDePasse() {
  let motDePasse = document.getElementById("mot_de_passe").value.trim();
  if (motDePasse.length < 8) {
    document.getElementById("errorMotDePasse").textContent =
      "Le mot de passe doit comporter au moins 8 caractères.";
    return false;
  } else {
    document.getElementById("errorMotDePasse").textContent = "";
    return true;
  }
}

// Ensuite on va venir ajouter un écouteur d'événement
formulaire.addEventListener("submit", function (e) {
  e.preventDefault();

  document
    .querySelectorAll(".error")
    .forEach((span) => (span.textContent = ""));

  let estValid =
    validatePrenom() &&
    validateNom() &&
    validateEmail() &&
    validateMotDePasse();

  // Si toutes les validations passent, on soumet le formulaire
  if (estValid) {
    document.getElementById("formulaire").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
  }
});
