//Démonstration de la propagation d'événements en HTML
//Lorsqu'un utilisateur déclenche un événement, celui ci est d'abord : 
// 1) capturé sur le body, puis sur le bloc inférieur, et ainsi de suite
// 2) jusqu'à arriver sur la balise sur laquelle l'événement se produit (phase de targeting)
// 3) remonte ensuite dans le sens inverse, vers le body (phase de bubling : les "bubulles sous l'eau")

//Capturing div 1
document.getElementById("div1")
    .addEventListener("click", () => console.log("click div 1 capture"), { capture : true }); 

//Capturing div 2
document.getElementById("div2")
    .addEventListener("click", () => console.log("click div 2 capture"), { capture : true }); 

//Targeting
document.getElementById("bouton")
    .addEventListener("click", (evenement) => {
        // evenement.stopPropagation(); //On peut stopper la propagation des "bubules", ie. de la remontée de l'événement
        console.log("click bouton");
    }); 

//Bubling div 1
document.getElementById("div1")
    .addEventListener("click", () => console.log("click div 1 bubling")); 

//Bubling div 2
document.getElementById("div2")
    .addEventListener("click", () => console.log("click div 2 bubling")); 


/*
Ecouter un événement sur la phase de capture n'est plus une pratique courante aujourd'hui.
Historiquement, les navigateurs WEB avaient une gestion différente des évenements.
Certains avaient une phase de capture, d'autre une phase de bubling, et certains avaient déjà les deux.
Pour faire en sorte que notre application soit compatible avec un maximum de navigateurs on devait faire attention à ce point.

Aujourd'hui tous les navigateurs ont ces phases et on écoute par défaut les événements lors de leur phase de "bubling".

On peut toujours s'intéresser à la phase de capturing en précisant à addEventListener une option (voir plus haut).
Néanmoins cela présente peu d'intérêts.

Par contre, stopper la propagation d'un événement est utile : 
Si je souhaite écouter un click sur un div, mais aussi un click sur un bouton dans un div.
Par défaut, le click sur mon bouton déclenchera également un click sur le div.
Je dois utiliser stopPropagation dans l'écouteur d'événement du click sur mon bouton pour éviter que le click remonte également au div.
*/