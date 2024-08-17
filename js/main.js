"use strict";

/**
 * retourne un tableau de nombre aleatoire compris entre 1 et valMax
 * @param {number} nbNombre - nombre de chiffres a générer
 * @param {number} valMax - valeur max des chiffres
 * @returns {Array}
 */
function tabNbAlea(nbNombre, valMax) {
  const tabNb = [];
  try {
    // test des arguments
    if (arguments.length != 2) throw "nombre d'arguments insufisante";
    if (isNaN(nbNombre) || isNaN(valMax))
      throw "une des valeurs n'est pas un nombre";
    if (nbNombre > valMax) throw "nombre supperieur à valMax";
    // ---
    while (tabNb.length < nbNombre) {
      const nbAlea = Math.floor(Math.random() * valMax) + 1;
      if (!tabNb.includes(nbAlea)) {
        tabNb.push(nbAlea);
      }
    }
  } catch (e) {
    console.error(e);
  }
  return tabNb;
}

/**
 * incremente la value d'un key/value quand le key est égale a un nombre tiré aleatoirement et retour un tableau de key/value.
 * @param {Array} tabTupleArray - tableau de cles/valeurs
 * @param {Array} tabNbrArray - tableau de nombre aleatoire
 * @returns {Array}
 */
function incrementMatchingValue(tabTupleArray, tabNbrArray) {
  try {
    if (arguments.length != 2) throw "nombre d'arguments insufisante";
    // on creer un objet pour un acce plus rapide
    let keyValueMap = tabTupleArray.reduce((acc, obj) => {
      acc[obj.key] = obj.value;
      return acc;
    }, {});

    // map pour parcourir le tableau de nombre aleatoire
    tabNbrArray.map((nombre) => {
      // si le nombre exite dans ls map ajouté 1 a la valeur
      if (keyValueMap.hasOwnProperty(nombre)) {
        keyValueMap[nombre] += 1;
      }
    });

    //   mise a jour du tableau original avec les nouvelles valeur
    tabTupleArray.map((pair) => {
      if (keyValueMap.hasOwnProperty(pair.key)) {
        pair.value = keyValueMap[pair.key];
      }
    });
  } catch (e) {
    console.error(e);
  }
  return tabTupleArray;
}

/**
 * trie le tableau dans l'ordre croissant selon la valeur de la paire cle/valeur et qui retourn les n plus grandes valeurs
 * @param {Array} keyValueArray - tableau de cle/valeur
 * @param {number} n - nombre de premieres cles/valeur a retourner
 * @returns {Array}
 */
function topnSortByValue(keyValueArray, n) {
  // on verifie que n n'est pas plus grand que le tableau pour eviter les erreurs
  if (n > keyValueArray.length) {
    n = keyValueArray.length;
  }
  let keyValueSorted = keyValueArray.sort((a, b) => b.value - a.value);

  let topSorted = keyValueSorted.slice(0, n);

  return topSorted;
}

/**
 * genere un tableau de n cles/valeur avec value = 0
 * @param {number} n
 * @returns {Array}
 */
function genClesValues(n) {
  let arrayNb = [];
  try {
    if (isNaN(n)) throw "n n'est pas un nombre";
    for (let i = 1; i <= n; i++) {
      const obj = {};
      obj.key = i;
      obj.value = 0;
      arrayNb = [...arrayNb, obj];
    }
  } catch (e) {
    console.error(e);
  }
  return arrayNb;
}

export { tabNbAlea, incrementMatchingValue, topnSortByValue, genClesValues };
