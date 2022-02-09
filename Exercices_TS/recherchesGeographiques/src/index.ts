type CommuneServeur = {
    nom: string,
    code: string,
    codeDepartement: string,
    codeRegion: string,
    codesPostaux: string[],
    population: number,
    _score: number
}

class Commune {
    public nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }
}

function initTraitementForm() {
    document.querySelector("form")?.addEventListener("submit", function(e: Event) {
        e.preventDefault();
        let communeRecherchee = (document.querySelector("input[name=nomCommune]") as HTMLInputElement).value;
        rechercherCommunes(communeRecherchee).then(
            function(tabCommunes: Commune[]) {
                afficherCommunes(tabCommunes);
            }
        )
    });
}

function rechercherCommunes(commune: string) : Promise<Commune[]> {
    return fetch("https://geo.api.gouv.fr/communes?nom=" + commune).then(
        function(res: Response) {
            return res.json().then(
                function(data) {
                    let tabCommunes : Commune[] = [];
                    for (const uneCommune of data as CommuneServeur[]) {
                        tabCommunes.push(new Commune(uneCommune.nom));
                    }

                    return tabCommunes;
                }
            )
        }
    )
}

function afficherCommunes(listeCommunes: Commune[]) {
    let divResultat = document.getElementById("resultatRecherche");

    let ul = document.createElement("ul");

    for (const commune of listeCommunes) {
        let li = document.createElement("li");
        li.innerText = commune.nom;
        ul.append(li);
    }

    divResultat!.append(ul);
}

initTraitementForm();