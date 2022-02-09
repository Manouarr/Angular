export class Jeu {
    public nom: string;
    public genre: string;
    public editeur: string;
    public pegi: number;
    public anneeSortie: number;
    public multiJoueurs: boolean;
    public enLigne: boolean;
    public image: URL; 
    public id: number;

    constructor(id: number = -1, nom: string, genre: string, editeur: string, pegi: number, anneeSortie: number, multi: boolean, enligne: boolean, img: string) {
        this.id = id;
        this.nom = nom;
        this.genre = genre;
        this.editeur = editeur;
        this.pegi = pegi;
        this.anneeSortie = anneeSortie;
        this.multiJoueurs = multi;
        this.enLigne = enligne;
        this.image = new URL(img);
    }
}