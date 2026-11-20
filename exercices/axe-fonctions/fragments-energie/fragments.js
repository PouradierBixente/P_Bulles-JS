// @ts-check

/**
 * Additionne un nombre variable de fragments d'énergie.
 */
export function sumFragments(...fragments) {
  // TODO
  let number = 0;
  for (let i of fragments) number = number + i;
  return number;
}

/**
 * Compte le nombre de fragments reçus.
 */
export function countFragments(...fragments) {
  // TODO
  return fragments.length;
}

/**
 * Calcule la moyenne des fragments reçus.
 */
export function averageFragments(...fragments) {
  // TODO
  let number = 0;
  for (let i of fragments) number = number + i;
  return number / fragments.length;
}

/**
 * Ajoute la somme des fragments à une valeur de base.
 */
export function totalWithBase(base, ...fragments) {
  // TODO
  let number = 0;
  for (let i of fragments) number = number + i;
  return number + base;
}

/**
 * Construit un libellé indiquant le nombre de valeurs.
 */
export function formulaLabel(name, ...values) {
  // TODO
  return `${name} : ${values.length} valeurs`;
}

/**
 * Prépare un résumé contenant la somme des valeurs.
 */
export function prepareMixture(name, ...values) {
  // TODO
  let total = countFragments(values);
  return `${name} = ${total}`;
}
