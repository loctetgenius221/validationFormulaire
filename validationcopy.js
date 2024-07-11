// @ts-nocheck
// On d'abord récupérer notre formulaire
let formulaire = document.getElementById("formulaire");

// Validation progressive des champs
// Dès que le champ est modifié, on appelle la fonction
document.getElementById("prenom").addEventListener("input", validatePrenom);
document.getElementById("nom").addEventListener("input", validateNom);
document.getElementById("email").addEventListener("input", validateEmail);
document
  .getElementById("mot_de_passe")
  .addEventListener("input", validateMotDePasse);

function validatePrenom() {
  let prenom = document.getElementById("prenom").value.trim();
  let monRegex = /^[a-zA-Z\s]+$/;
  if (prenom.length < 3 || prenom.length > 15) {
    document.getElementById("errorPrenom").textContent =
      "Le prénom doit comporter entre 3 et 15 caractères.";
    document.getElementById("prenom").classList.remove("valid");
    return false;
  } else if (!monRegex.test(prenom)) {
    document.getElementById("errorPrenom").textContent =
      "Le prénom ne doit comporter que des lettres.";
    document.getElementById("prenom").classList.remove("valid");
    return false;
  } else {
    document.getElementById("errorPrenom").textContent = "";
    document.getElementById("prenom").classList.add("valid");
    document.getElementById("nomBox").classList.remove("hidden");
    return true;
  }
}

function validateNom() {
  let nom = document.getElementById("nom").value.trim();
  let monRegex = /^[a-zA-Z\s]+$/;
  if (nom.length < 3 || nom.length > 15) {
    document.getElementById("errorNom").textContent =
      "Le nom doit comporter entre 3 et 15 caractères.";
    document.getElementById("nom").classList.remove("valid");
    return false;
  } else if (!monRegex.test(nom)) {
    document.getElementById("errorNom").textContent =
      "Le nom ne doit comporter que des lettres.";
    document.getElementById("nom").classList.remove("valid");
    return false;
  } else {
    document.getElementById("errorNom").textContent = "";
    document.getElementById("nom").classList.add("valid");
    document.getElementById("emailBox").classList.remove("hidden");
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("email").value.trim();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("errorEmail").textContent =
      "L'adresse email n'est pas valide.";
    document.getElementById("email").classList.remove("valid");
    return false;
  } else {
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("email").classList.add("valid");
    document.getElementById("motDePasseBox").classList.remove("hidden");
    return true;
  }
}

function validateMotDePasse() {
  let motDePasse = document.getElementById("mot_de_passe").value.trim();
  if (motDePasse.length < 8) {
    document.getElementById("errorMotDePasse").textContent =
      "Le mot de passe doit comporter au moins 8 caractères.";
    document.getElementById("mot_de_passe").classList.remove("valid");
    return false;
  } else {
    document.getElementById("errorMotDePasse").textContent = "";
    document.getElementById("mot_de_passe").classList.add("valid");
    document.getElementById("boutonBox").classList.remove("hidden");
    document.getElementById("bouton").disabled = false;
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
