// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 */
/**
 *
 * @param {number} numberOfRounds
 * @returns {number}
 */
export function sumRounds(numberOfRounds) {
  // TODO
  let total = 0;
  for (let i = 1; i <= numberOfRounds; i++) {
    total += i;
  }
  return total;
}

/**
 * Compte le nombre de caractères d'un code.
 */
/**
 *
 * @param {string} code
 * @returns {number}
 */
export function countSymbols(code) {
  // TODO
  let number = 0;
  for (const i of code) number++;
  return number;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 */
/**
 *
 * @param {string} code
 * @returns {number}
 */
export function countX(code) {
  // TODO
  let number = 0;
  for (let i of code) if (i == `X`) number++;
  return number;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 */
export function turnsBeforeEmpty(energy, consumption) {
  // TODO
  let number = 0;
  while (energy >= consumption) {
    number++;
    energy -= consumption;
  }
  return number;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 */
export function firstRoundAbove(limit) {
  // TODO
  let total = 0;
  let i = 1;
  while (limit > total) {
    i += i;
    total += i;
  }
  return total;
}
