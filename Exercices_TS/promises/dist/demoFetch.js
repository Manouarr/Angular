import fetch from "node-fetch";
class Stat {
    constructor(titre, valeur) {
        this.titre = titre;
        this.valeur = valeur;
    }
    printStat() {
        console.log(this.titre + " " + this.valeur);
    }
}
function recupererStats() {
    return fetch("https://stats.naminilamy.fr/").then((res) => {
        return res.json().then(function (data) {
            let tabStats = [];
            for (const statServeur of data) {
                tabStats.push(new Stat(statServeur.title, statServeur.value));
            }
            return tabStats;
        });
    });
}
console.log("Début");
recupererStats().then((retour) => {
    console.log(retour);
});
console.log("Fin");
