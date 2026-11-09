
const produit = { nom: "Clavier", prix: 25, quantite: 10 };
console.log(`Valeur du stock de ${produit.nom} : ${produit.prix * produit.quantite} DA`);

const catalogue = [
  { nom: "Clavier", prix: 25, quantite: 10 },
  { nom: "Souris", prix: 15, quantite: 20 },
  { nom: "Écran", prix: 150, quantite: 5 },
  { nom: "Casque", prix: 60, quantite: 8 },
  { nom: "Webcam", prix: 40, quantite: 12 },
];

const prixMoyen =
  catalogue.reduce((somme, p) => somme + p.prix, 0) / catalogue.length;
console.log(`Prix moyen du catalogue : ${prixMoyen}`);

const produitsChers = catalogue.filter((p) => p.prix > prixMoyen);
console.log("Produits dont le prix dépasse la moyenne :");
produitsChers.forEach((p) => console.log(`- ${p.nom} (${p.prix})`));

const totalArticles = catalogue.reduce((total, p) => total + p.quantite, 0);
const valeurGlobale = catalogue.reduce((total, p) => total + p.prix * p.quantite, 0);
console.log(`Nombre total d'articles : ${totalArticles}`);
console.log(`Valeur globale du stock : ${valeurGlobale}`);


function valeurStock(produit) {
  return produit.prix * produit.quantite;
}


catalogue.forEach((p) => {
  console.log(`Valeur du stock de ${p.nom} : ${valeurStock(p)}`);
});


function appliquerTraitement(catalogue, callback) {
  for (const produit of catalogue) {
    callback(produit);
  }
}

console.log("Noms des produits :");
appliquerTraitement(catalogue, (p) => console.log(p.nom));

console.log("Prix des produits :");
appliquerTraitement(catalogue, (p) => console.log(p.prix));