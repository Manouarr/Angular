
function insererFilms(films) {
    for (const film of films) {
        insererUnFilm(film);
    }
}

function insererUnFilm(film) {
    let divFilms = document.getElementById("mesFilms");
    let divNouveauFilm = document.createElement("div");

    //On ajoute un identifiant unique par div de film
    divNouveauFilm.setAttribute("id", "blocFilm-" + film.id);

    divNouveauFilm.innerHTML = `
        <h3>Titre : ${film.nom}</h3>
        <h4>Année de sortie : ${film.anneeSortie}</h4>
        <button data-id='${film.id}'>Supprimer</button>
    `;

    divFilms.append(divNouveauFilm);
}

let tabFilms = [
    { id: 675432, nom: "Matrix 4", anneeSortie: 2021},
    { id: 123456, nom: "OSS 117", anneeSortie: 2021},
    { id: 9087654312, nom: "Bienvenue à Gattaca", anneeSortie: 1990 }
];

insererFilms(tabFilms);

let tabBoutons = document.querySelectorAll("button");

//Pour chaque bouton 
for (const bouton of tabBoutons) {
    //Ecoute de l'événement click 
    bouton.addEventListener("click", function(e) {
        let index = tabFilms.findIndex(function(film) {
            /* On retrouve l'id du film sur lequel on a cliqué à l'aide
            de l'attribut data-id fixé lors de l'insertion (ligne 18) */
            return film.id == bouton.dataset.id;
        });
        
        if (index != -1) {
            //1. Retrait du dom
            document.getElementById("blocFilm-" + tabFilms[index].id).remove();
            
            //2. Retrait du tableau JS
            tabFilms.splice(index, 1);

        }
    });
}