import { Jeu } from "./jeu";

let ageofempire = new Jeu(
    1,
    "Age of Empire", 
    "Stratégie en temps réel",
    "Microsoft",
    13,
    1995,
    true,
    false,
    "http://localhost:8080/images/ageofempire.jpg"
);


let ageOfEmpire2 = new Jeu(
    2,
    "Age of Empire 2", 
    "Stratégie en temps réel",
    "Microsoft",
    13,
    2000,
    true,
    false,
    "http://localhost:8080/images/ageofempire.jpg"
);

export let tableauJeux : Jeu[] = [ageofempire, ageOfEmpire2];
