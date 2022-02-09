
//Comment récupérer les valeurs saisies sur un formulaire ? 
//Voici quelques méthodes 

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let prenomSaisiMethode1 = document.querySelector("input[name=prenom]").value;

    console.log(prenomSaisiMethode1);

    let prenomSaisiMethode2 = e.target.prenom.value;

    console.log(prenomSaisiMethode2);

    let prenomSaisiMethode3 = this.prenom.value;

    console.log(prenomSaisiMethode3);

    let personne = {
        prenom :  this.prenom.value,
        nom: this.nom.value
    }

    console.log(personne);
});