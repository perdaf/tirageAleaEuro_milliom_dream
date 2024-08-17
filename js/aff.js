"use strict";
import {
  tabNbAlea,
  incrementMatchingValue,
  topnSortByValue,
  genClesValues,
} from "./main.js";

const btnMillion = document.getElementById("million");
const btnDream = document.getElementById("dream");
const afficheResult = document.getElementById("result");

// Euromillion: chiffres: 50 - etoiles: 12
// tirage : 5 numero - 2 etoiles
//------
// Eurodream : chiffres: 40 - etoiles: 5
// tirage : 6 numero - 1 etoile

function tirage(
  nbChiffre,
  nbstar,
  tirageNbChiffre,
  tirageNbStar,
  nbIncrement = 10000000
) {
  const newTabNbr = genClesValues(nbChiffre);
  const newTabStar = genClesValues(nbstar);

  for (let j = 0; j < nbIncrement; j++) {
    const arrayNbAlea = tabNbAlea(tirageNbChiffre, nbChiffre);
    const arrayStartAlea = tabNbAlea(tirageNbStar, nbstar);
    incrementMatchingValue(newTabNbr, arrayNbAlea);
    incrementMatchingValue(newTabStar, arrayStartAlea);
  }
  const topNbr = topnSortByValue(newTabNbr, tirageNbChiffre);
  const topStar = topnSortByValue(newTabStar, tirageNbStar);

  const nbr = [];
  topNbr.map((e) => nbr.push(e.key));

  const etoiles = [];
  topStar.map((e) => etoiles.push(e.key));

  return { nbr, etoiles };
}

// affichage des resultats
// EUROMILLION
btnMillion.onclick = function () {
  afficheResult.innerHTML = "";
  // afficheResult.innerHTML += "🔢";
  afficheResult.innerHTML += "<br>";
  const res = tirage(50, 12, 5, 2);
  console.log(res.nbr, res.etoiles);
  res.nbr.map((e) => {
    afficheResult.innerHTML += e;
    afficheResult.innerHTML += " ";
  });
  afficheResult.innerHTML += "<br>";
  afficheResult.innerHTML += "⭐️ ⭐️";
  afficheResult.innerHTML += "<br>";
  res.etoiles.map((e) => {
    afficheResult.innerHTML += e;
    afficheResult.innerHTML += " ";
  });
};

// EURODREAM
btnDream.onclick = function () {
  afficheResult.innerHTML = "";
  afficheResult.innerHTML += "🔢";
  afficheResult.innerHTML += "<br>";
  const res = tirage(40, 5, 6, 1);
  console.log(res.nbr, res.etoiles);
  res.nbr.map((e) => {
    afficheResult.innerHTML += e;
    afficheResult.innerHTML += " ";
  });
  afficheResult.innerHTML += "<br>";
  afficheResult.innerHTML += "⭐️";
  afficheResult.innerHTML += "<br>";
  res.etoiles.map((e) => {
    afficheResult.innerHTML += e;
    afficheResult.innerHTML += " ";
  });
};
