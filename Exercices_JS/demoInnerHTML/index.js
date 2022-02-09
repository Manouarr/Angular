//Illustration de l'effet de bord du innerHTML : 
//les écouteurs d'événements sur les balises déjà présentes dans la balise modifiée sont effacés
document.getElementById("monBeauBouton").addEventListener("click", function() {
    console.log("click");
});

//Le fait de modifier le contenu de "monBeauDiv" à travers la propriété innerHTML
//a pour effet d'effacer les écouteurs d'événements positionnés sur les balises qui étaient déjà contenues
//dans la div "monBeauDiv", donc après cette instruction notre bouton "monBeauBouton" ne réagit plus au click
document.getElementById("monBeauDiv").innerHTML += `<p>Mon beau paragraphe</p>`;


//En utilisant les méthodes suivantes pour modifier le contenu du div
//On n'est plus exposé à cette difficulté (c'est un effet de bord du innerHTML)
let p = document.createElement("p");
p.innerText = "Mon beau paragraphe";
document.getElementById("monBeauDiv").append(p);

document.getElementById("monBeauDiv").insertAdjacentHTML('beforeend', `<p>Mon beau paragraphe</p>`);