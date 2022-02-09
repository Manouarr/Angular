import './style.css';

import { Jeu } from "./jeu";
import { tableauJeux } from './listeJeuxInit';

let modeEdition = false;
let jeuEnCoursDeModif: Jeu;

//Fonction appelée lorsque l'on clique sur un bouton "supprimer"
function supprimerJeu(baliseJeu: HTMLDivElement, jeu: Jeu) {
    //1. Mise à jour de l'affichage
    baliseJeu.remove();

    //2. Mise à jour du tableau
    let indexJeu = tableauJeux.indexOf(jeu);
    if (indexJeu != -1) {
        tableauJeux.splice(indexJeu, 1);
    }
}

//Fonction appelée lorsque l'on clique sur un bouton "modifier"
function modifierJeu(jeu: Jeu) {
    //Pré-saisie du formulaire selon le jeu à modifier 

    (document.querySelector("input[name=image]") as HTMLInputElement).value = jeu.image.href;
    (document.querySelector("input[name=nom]") as HTMLInputElement).value = jeu.nom;
    (document.querySelector("input[name=genre]") as HTMLInputElement).value = jeu.genre;
    (document.querySelector("input[name=editeur]") as HTMLInputElement).value = jeu.editeur;
    (document.querySelector("input[name=pegi]") as HTMLInputElement).valueAsNumber = jeu.pegi;
    (document.querySelector("input[name=anneeSortie]") as HTMLInputElement).valueAsNumber = jeu.anneeSortie;
    (document.querySelector("input[name=multiJoueurs]") as HTMLInputElement).checked = jeu.multiJoueurs;
    (document.querySelector("input[name=enLigne]") as HTMLInputElement).checked = jeu.enLigne;

    //Passage en mode édition
    modeEdition = true;
    jeuEnCoursDeModif = jeu;

}

/* Fonction permettant d'insérer un jeu dans le DOM, 
   et de prévoir toutes les actions possibles dessus */
function afficherJeu(unJeu : Jeu) {
    let divJeu = document.createElement("div");

    divJeu.setAttribute("id", `jeu-${unJeu.id}`);

    divJeu.classList.add("jeu");

    divJeu.innerHTML = `
        <img class="miniatureJeu" src=${unJeu.image.href}/>
        <div class="infosJeu">
            <span>${unJeu.nom}</span>
        </div>
    `;

    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerText = "Supprimer";
    divJeu.append(boutonSupprimer);

    boutonSupprimer.addEventListener("click", function() {
        supprimerJeu(divJeu, unJeu);
    });

    let boutonModifier = document.createElement("button");
    boutonModifier.innerText = "Modifier";
    divJeu.append(boutonModifier);

    boutonModifier.addEventListener("click", function() {
        modifierJeu(unJeu);
    });

    document.getElementById("listeJeux")!.append(divJeu);
}

//Fonction permettant d'afficher tous les jeux dans le DOM
function afficherTousLesJeux() {
    for (const jeu of tableauJeux) {
        afficherJeu(jeu);
    }

}

//Fonction appelée lorsque le formulaire est validé et que l'on est en mode création
function creerNouveauJeu() {
    let nouveauJeu = recupererValeursFormulaire();
    nouveauJeu.id = tableauJeux.length + 1;
    tableauJeux.push(nouveauJeu);
    afficherJeu(nouveauJeu);
}

//Fonction appelée lorsque le formulaire est validé et que l'on est en mode édition
function validerModificationJeu() {
    //Récupération valeurs mises à jour
    let jeuModifie = recupererValeursFormulaire();

    //Sauvegarde de la mise à jour dans mon tableau
    let indexJeu = tableauJeux.indexOf(jeuEnCoursDeModif);
    if (indexJeu != -1) {
        tableauJeux[indexJeu].image = jeuModifie.image;
        tableauJeux[indexJeu].nom = jeuModifie.nom;
        tableauJeux[indexJeu].anneeSortie = jeuModifie.anneeSortie;
        tableauJeux[indexJeu].editeur = jeuModifie.editeur;
        tableauJeux[indexJeu].enLigne = jeuModifie.enLigne;
        tableauJeux[indexJeu].genre = jeuModifie.genre;
        tableauJeux[indexJeu].multiJoueurs = jeuModifie.multiJoueurs;
        tableauJeux[indexJeu].pegi = jeuModifie.pegi;
    }

    //Mise à jour de l'interface
    let divJeu = document.getElementById("jeu-" + jeuEnCoursDeModif.id);

    divJeu?.querySelector(".miniatureJeu")?.setAttribute("src", jeuModifie.image.href);
    divJeu!.querySelector(".infosJeu")!.innerHTML = `
        <span>${jeuModifie.nom}</span>
    `;

}

/* 
   Fonction utilitaire permettant de récupérer 
   toutes les valeurs saisies dans le formulaire
*/
function recupererValeursFormulaire() : Jeu {
    let imageSaisie = (document.querySelector("input[name=image]") as HTMLInputElement).value;
    let nomSaisi = (document.querySelector("input[name=nom]") as HTMLInputElement).value;
    let genreSaisi = (document.querySelector("input[name=genre]") as HTMLInputElement).value;
    let editeurSaisi = (document.querySelector("input[name=editeur]") as HTMLInputElement).value;
    let pegiSaisi = (document.querySelector("input[name=pegi]") as HTMLInputElement).valueAsNumber;
    let anneeSaisie = (document.querySelector("input[name=anneeSortie]") as HTMLInputElement).valueAsNumber;
    let multiSaisi = (document.querySelector("input[name=multiJoueurs]") as HTMLInputElement).checked;
    let enligneSaisi = (document.querySelector("input[name=enLigne]") as HTMLInputElement).checked;

    //J'ai tout sauf un identifiant, je ne le transmets pas à ma fonction constructrice
    return new Jeu(undefined, nomSaisi, genreSaisi, editeurSaisi, pegiSaisi, anneeSaisie, multiSaisi, enligneSaisi, imageSaisie);

}

/* 
   Fonction gérant la validation du formulaire 
   Selon le mode dans lequel on est (création ou édition) l'action appropriée sera réalisée
   Lorsque l'on valide une modification, on repasse en mode création
   Après une création ou une modification, on réinitialisera également le formulaire
*/
function initTraitementFormulaire() {
    document.querySelector("form")!.addEventListener("submit", function(e: Event) {
        e.preventDefault();

        if (modeEdition) {
            validerModificationJeu();
            modeEdition = false;
        } else {
            creerNouveauJeu();
        }

        this.reset();
    });
}

/* ------------------- */
/* Programme principal */
/* ------------------- */

afficherTousLesJeux();

initTraitementFormulaire();


