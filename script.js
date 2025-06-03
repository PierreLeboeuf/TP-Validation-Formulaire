
let formulaire = document.querySelector("#form");

let nom = document.querySelector("#nom");
let nomErreur = document.querySelector("#nomErreur");

let prenom = document.querySelector("#prenom");
let prenomErreur = document.querySelector("#prenomErreur");

let email = document.querySelector("#email");
let emailErreur = document.querySelector("#emailErreur");

let password = document.querySelector("#password");
let passwordErreur = document.querySelector("#passwordErreur");

let age = document.querySelector("#age");
let ageErreur = document.querySelector("#ageErreur");

formulaire.addEventListener('submit', function (event) {
    // Empêche l'envoi du formulaire par défaut
    event.preventDefault();

    // Réinitialise les messages d'erreur précédents
    nomErreur.textContent = '';
    nom.classList.remove('error-border'); // Optionnel: pour un style visuel d'erreur
    prenomErreur.textContent = '';
    prenom.classList.remove('error-border'); // Optionnel: pour un style visuel d'erreur
    emailErreur.textContent = '';
    email.classList.remove('error-border'); // Optionnel: pour un style visuel d'erreur
    passwordErreur.textContent = '';
    password.classList.remove('error-border'); // Optionnel: pour un style visuel d'erreur
    ageErreur.textContent = '';
    age.classList.remove('error-border'); // Optionnel: pour un style visuel d'erreur

    let isValid = true;

    // Validation du champ "Nom"
    const nomValue = nom.value.trim(); // .trim() supprime les espaces blancs inutiles au début et à la fin

    if (nomValue === '') {
        nomErreur.textContent = 'Le nom est obligatoire.';
        nom.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    } else if (nomValue.length < 3) {
        nomErreur.textContent = 'Le nom doit contenir au moins 3 caractères.';
        nom.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    }

    // Validation du champ "Prénom"
    const prenomValue = prenom.value.trim(); // .trim() supprime les espaces blancs inutiles au début et à la fin

    if (prenomValue === '') {
        prenomErreur.textContent = 'Le prénom est obligatoire.';
        prenom.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    } else if (prenomValue.length < 3) {
        prenomErreur.textContent = 'Le prénom doit contenir au moins 2 caractères.';
        prenom.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    }

    // Validation du champ "Email"
    const emailValue = email.value.trim(); // .trim() supprime les espaces blancs inutiles au début et à la fin
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        emailErreur.textContent = "L'email est obligatoire.";
        email.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    } else if (!emailRegex.test(emailValue)) {
        emailErreur.textContent = "Veuillez entrer une adresse e-mail valide.";
        email.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    }

   // Validation du champ "Mot de passe"
    const passwordValue = password.value.trim(); // .trim() supprime les espaces blancs inutiles au début et à la fin
    const majuscule = /[A-Z]/; // Au moins une majuscule
    const miniscule= /[a-z]/; // Au moins une minuscule
    const chiffre = /[0-9]/; // Au moins un chiffre
// ou  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


    if (passwordValue === '') {
        passwordErreur.textContent = "Le mot de passe est obligatoire.";
        password.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    } else if ((passwordValue.length < 8)||(!majuscule.test(passwordValue))||(!miniscule.test(passwordValue))||(!chiffre.test(passwordValue))) {
        passwordErreur.textContent = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une miniscule et un chiffre.";
        password.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    }



    // Validation du champ "Age"
    const ageValue = age.value.trim(); // .trim() supprime les espaces blancs inutiles au début et à la fin

    if (ageValue === '') {
        ageErreur.textContent = "L'age est obligatoire.";
        age.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    } else if (ageValue < 18) {
        ageErreur.textContent = "L'âge doit être un nombre entre 18 et 99.";
        age.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    }else if (ageValue >99) {
         ageErreur.textContent = "L'âge doit être un nombre entre 18 et 99.";
        age.classList.add('error-border'); // Optionnel: ajoute une bordure rouge
        isValid = false;
    }
// ou if(age.value < 18 || age.value > 99 || isNaN(age.value)) isNaN pour vérifier que ce n'est pas un nombre


    // Si le formulaire est valide, vous pouvez le soumettre ou effectuer d'autres actions
    if (isValid) {
        alert('Formulaire soumis avec succès ! Nom : ' + nomValue + " " + prenomValue + " " + ageValue + "ans");
        formulaire.submit(); // Décommentez cette ligne pour soumettre réellement le formulaire
    }
});

// Optionnel: Vous pouvez aussi valider en temps réel pendant que l'utilisateur tape
//   nameInput.addEventListener('input', function() {
//     nameError.textContent = ''; // Efface le message d'erreur dès que l'utilisateur commence à taper
//     nameInput.classList.remove('error-border');
//   });
