import fetch, { Response } from "node-fetch";

class Stat {
    public titre: string;
    public valeur: string;

    constructor(titre: string, valeur: string) {
        this.titre = titre;
        this.valeur = valeur;
    }

    printStat() {
        console.log(this.titre + " " + this.valeur);
    }
}

type StatServeur = {
    title: string;
    value: string;
}


function recupererStats() : Promise<Stat[]> {
    return fetch("https://stats.naminilamy.fr/").then((res : Response) => {
        return res.json().then(
            function(data) {
                let tabStats : Stat[] = [];
                for (const statServeur of data as StatServeur[]) {
                    tabStats.push(new Stat(statServeur.title, statServeur.value))
                }
                return tabStats;
            }
        );
    });
}

console.log("Début");

recupererStats().then(
    (retour : Stat[]) => {
        console.log(retour);
    }
);

console.log("Fin");
