"use strict";
class Commune {
    constructor(nom) {
        this.nom = nom;
    }
}
function initTraitementForm() {
    var _a;
    (_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
        e.preventDefault();
        let communeRecherchee = document.querySelector("input[name=nomCommune]").value;
        rechercherCommunes(communeRecherchee).then(function (tabCommunes) {
            afficherCommunes(tabCommunes);
        });
    });
}
function rechercherCommunes(commune) {
    return fetch("https://geo.api.gouv.fr/communes?nom=" + commune).then(function (res) {
        return res.json().then(function (data) {
            let tabCommunes = [];
            for (const uneCommune of data) {
                tabCommunes.push(new Commune(uneCommune.nom));
            }
            return tabCommunes;
        });
    });
}
function afficherCommunes(listeCommunes) {
    let divResultat = document.getElementById("resultatRecherche");
    let ul = document.createElement("ul");
    for (const commune of listeCommunes) {
        let li = document.createElement("li");
        li.innerText = commune.nom;
        ul.append(li);
    }
    divResultat.append(ul);
}
initTraitementForm();
