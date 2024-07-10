// On dabord recupérer notre formulaire
let formulaire = document.getElementById("formulaire");

// Ensuite on va venir ajouter un écouteur d'événement
// @ts-ignore
formulaire.addEventListener("submit", function (e) {
  e.preventDefault();

  document
    .querySelectorAll(".error")
    .forEach((span) => (span.textContent = ""));

  let estValid = true;

  // Validation du prénom
  let prenom = document.getElementById("prenom").value;
  let monRegex = /^[a-zA-Z\s]+$/;
  if (prenom.length < 3 || prenom.length > 15) {
    document.getElementById("errorPrenom").textContent =
      "Le prénom doit comporter entre 3 et 15 caractères.";
    estValid = false;
  } else if (!monRegex.test(prenom)) {
    document.getElementById("errorPrenom").textContent =
      "Le champs prenom ne doit comporter que des lettres.";
    estValid = false;
  }

  // Validation du nom
  let nom = document.getElementById("nom").value;
  if (nom.length < 3 || nom.length > 15) {
    document.getElementById("errorNom").textContent =
      "Le nom doit comporter entre 3 et 15 caractères.";
    estValid = false;
  } else if (!monRegex.test(nom)) {
    document.getElementById("errorNom").textContent =
      "Le champs nom ne doit comporter que des lettres.";
    estValid = false;
  }

  // Validation de l'adresse email
  let email = document.getElementById("email").value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("errorEmail").textContent =
      "L'adresse email n'est pas valide.";
    estValid = false;
  }

  // Validation du mot de passe
  let motDePasse = document.getElementById("mot_de_passe").value;
  if (motDePasse.length < 8) {
    document.getElementById("errorMotDePasse").textContent =
      "Le mot de passe doit comporter au moins 8 caractères.";
    estValid = false;
  }

  // Si toutes les validations passent,on soumet le formulaire
  if (estValid) {
    document.getElementById("formulaire").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
  }
});
