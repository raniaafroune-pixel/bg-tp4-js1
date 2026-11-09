"use strict";
// Déclaration du tableau d'objets Students (Slide 41)
const Students = [
        [1000, "JOHN", "DOE", 14, 5],
        [2000, "BOB", "CARLTON", 7, 1],
        [3000, "RAYANE", "SMITH", 13, 3]
    ];

function B(note) {
    // Retourne true si la note est >= 10, sinon false (Slide 42)
    return note >= 10;
}
// Fonction A : Parcourt les étudiants et appelle la fonction B pour la délibération (Slides 43 45 et 47)
function A() {

    for (let i = 0; i < Students.length; i++) {
        let etudiant = Students[i];

        let resultat = B(Students[i][3]);

        if (resultat) {
            console.log(Students[i][0] + ": ADMIS");
        } else {
            console.log(Students[i][0] + ": AJOURNÉ");
        }
    }
}