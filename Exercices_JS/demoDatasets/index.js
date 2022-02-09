
//Exemple de manipulation d'attributs personnalisés sur une balise HTML
//On fixe un attribut data-idpersonne côté HTML, voici le code permettant de récupérer la valeur de ce champ : 

let monDiv = document.querySelector("div");

let idPersonne = monDiv.dataset.idpersonne;

console.log(idPersonne);

//On peut aussi ajouter un attribut directement en JS avec cette méthode 
monDiv.setAttribute("data-monbeaudata", "unevaleur");