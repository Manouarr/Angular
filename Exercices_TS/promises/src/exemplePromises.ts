
/* 
Principe de la programmation asynchrone : 
Un traitement prend du temps, on ne veut pas attendre sa fin pour passer à la suite
Exemples : 
  - capture d'événement sur un bouton 
  - requête vers une base de données 
  - appel d'une fonction après un délai 
  - envoi d'une requête auprès d'un serveur
*/

/* On peut gérer la programmation asynchrone en jouant sur nos paramètres de fonctions */
function lancerBouteilleV1(callbackSucces: () => void) {
    console.log("Bouteille envoyée");

    setTimeout(() => {
        /*
        Il me faut 4 secondes pour que ma bouteille soit envoyée, arrivée à destination
        trouvée par quelqu'un, lue, qu'on m'envoie une réponse
        Au bout de ces 4 secondes, j'ai un "écouteur d'événement" matérialisé par la fonction callbackSucces
        */
        callbackSucces();
    }, 4000);
    
}

/* 
Dans l'ordre d'exécution : 
Début 
Fin
Réponse reçue 
*/
console.log("Début");
lancerBouteilleV1(() => console.log("Réponse reçue"));
console.log("Fin");


/* La gestion de nos fonctions de callback peut être adressée avec des objets Promise 
 Une promise est un objet ES6 qui permet d'inscrire une fonction 
 de callback de succès et/ou d'échec sur un traitement asynchrone

 Au lieu de passer nos fonctions de callback en paramètres, nos traitements asynchrones
 retournent des objets de type Promise.

 Sur ces objets, on peut appeler une méthode "then" qui réalise l'inscription
 de nos fonctions de callback, autrement dit nos "écouteurs d'événements"
*/
function lancerBouteilleV2() : Promise<void> {
    console.log("Bouteille envoyée");

    /* Création d'une promise : 
      Une promise est construite grâce à new Promise() 
      Le constructor de Promise prend en paramètre une fonction
      Dans cette fonction, nous devons réaliser notre traitement
      Lorsque nous avons terminé notre traitement, nous devons indiquer s'il s'est bien passé ou non.
      Pour cela, nous disposons en paramètre de notre fonction de deux variables :
        - resolve : référence vers un "écouteur d'événement en cas de succès" 
        - reject : référence vers un "écouteur d'événement en cas d'échec"
      Resolve et Reject sont donc deux références vers des fonctions
      Ces fonctions peuvent (ou non) être inscrites sur la promise retournée
    */
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
    
}

//Début 
//Yes j'ai reçu une réponse
//Fin
console.log("Début");
lancerBouteilleV2().then(
    () => console.log("Yes j'ai reçu une réponse"), //correspondra au "resolve" l62
    () => console.log("Il y a eu un problème") //correspondra au "reject" l62
);
console.log("Fin");

/*
 Si, à la ligne 64, j'avais appelé reject() à la place de resolve()
 Le console log "Il y a eu un problème aurait été appelé"
*/