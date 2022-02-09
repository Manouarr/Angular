
type Film = { nom: string};

function simulerRequetteHttp(url: string) : Promise<Film[]> {
    return new Promise(function(resolve, reject) {
        console.log("Envoi de la requête vers " + url);
        setTimeout(() => {
            let tabFilms : Film[] = [
                { nom: "Oss 117"}, { nom: "Dune"}
            ];

            // resolve(tabFilms);
            reject("Serveur injoignable");
        }, 2000);
    })
}

console.log("Début du programme");
simulerRequetteHttp("mesfilms.com").then(
    (tabFilms : Film[]) => console.log(tabFilms),
    (err: string) => console.log("Il y a eu une erreur : " + err)
);
console.log("Fin du programme");
