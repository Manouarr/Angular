
function insererFilms(films) {
    for (const film of films) {
        insererUnFilm(film);
    }
}

function insererUnFilm(film) {
    let divFilms = document.getElementById("mesFilms");
    let divNouveauFilm = document.createElement("div");

    divNouveauFilm.innerHTML = `
        <h3>Titre : ${film.nom}</h3>
        <h4>Année de sortie : ${film.anneeSortie}</h4>
    `;

    /* on crée notre bouton à l'aide de createElement
       pour avoir directement une référence dessus 
       (ce qui évite de faire une insertion puis une requête dans le DOM type queryselector)
       et donc on ajoute directement notre écouteur d'événement pour le film que l'on est en train d'insérer
    */
    let boutonSuppr = document.createElement("button");
    boutonSuppr.innerText = "Supprimer";

    boutonSuppr.addEventListener("click", function() {
        //Je peux accéder à mes variables film, divNouveauFilm :)
        divNouveauFilm.remove();
        let indexFilm = tabFilms.indexOf(film);
        if (indexFilm != -1) tabFilms.splice(indexFilm, 1);
    });

    divNouveauFilm.append(boutonSuppr);

    divFilms.append(divNouveauFilm);
}

let tabFilms = [
    { id: 675432, nom: "Matrix 4", anneeSortie: 2021},
    { id: 123456, nom: "OSS 117", anneeSortie: 2021},
    { id: 9087654312, nom: "Bienvenue à Gattaca", anneeSortie: 1990 }
];

insererFilms(tabFilms);
