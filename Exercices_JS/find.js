//Exemples de recherches avec find et findIndex 

//Je veux chercher le chien Milou 2
function fonctionRecherche(chien) {
    return chien.nom === "Milou 2";
}

let tabChiens = [
    { nom: "Milou 2", race: "Bouledogue"},
    { nom: "Milou 1", race: "Golden" }, 
    { nom: "Milou 2", race: "Malinois" }
];

//Soit retrouver l'index du chien dans mon tableau
let index = tabChiens.findIndex(fonctionRecherche);

//Soit retrouver une référence vers le chien directement
let milou2 = tabChiens.find(fonctionRecherche);

console.log(index, milou2);

//Find comme findIndex me permettent de trouver la première correspondance
//Pour retrouver "tous les milou 2", je peux utiliser Filter
//Filter me renvoie un tableau
let tabMilous2 = tabChiens.filter(fonctionRecherche);

console.log(tabMilous2);


for (const milou of tabMilous2) {
    //Et si à partir de l'objet chien, je voulais sa position dans mon tableau ?
    //là je peux utiliser indexOf, car j'ai la référence de mon objet
    console.log(tabChiens.indexOf(milou));
}

//Une recherche peut se faire sur plusieurs champs 
let milou2Malinois = tabChiens.find(function(unChien) {
    return unChien.nom === "Milou 2" && unChien.race === "Malinois";
});

//Pour pousuivre sur les références... 
//milou2Malinois comme tabChiens[2] sont deux variables qui font référence au même chien
milou2Malinois.nom = "Milou 42";
console.log(tabChiens);

tabChiens[2].nom = "Milou 4242";

console.log(milou2Malinois);