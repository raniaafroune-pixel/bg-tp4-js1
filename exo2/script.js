"use strict";
//Déclaration d'un tableau simple (Slide 39)
const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

//Déclaration d'un objet littéral (Slide 40)
const objetEtudiant = {
    nom: 'John',
    prenom: 'DOE',
    age: 30
};

//Déclaration d'un tableau d'objets (Slide 41)
const tableauObjetsEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// Fonction f1 : Parcourt le tableau simple avec une boucle (Slide 45)
function f1() {
    for (let i = 0; i < tableauEtudiants.length; i++) {
        console.log(tableauEtudiants[i]); // Affichage console (Slide 34)
    }
}

// Fonction f2 : Affiche directement l'objet étudiant (Slide 40)
function f2() {
    console.log(objetEtudiant); // Affichage console (Slide 34)
}

// Fonction f3 : Parcourt le tableau d'objets et concatène nom-prenom-age (Slides 41 et 45)
function f3() {
    for (let i = 0; i < tableauObjetsEtudiants.length; i++) {
        const etudiant = tableauObjetsEtudiants[i];
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age); // Affichage console (Slide 34)
    }
}