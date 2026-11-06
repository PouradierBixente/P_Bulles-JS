// @ts-check

/**
 * Convertit une valeur en nombre.
 */
/**
 *
 * @param {string} value
 * @returns {number}
 */
export function convertCode(value) {
  // TODO
  let valuenum = Number(value);
  return valuenum;
}

/**
 * Compare deux valeurs avec l'égalité souple.
 */
/**
 *
 * @param {number} value1
 * @param {number} value2
 * @returns {boolean}
 */
export function sameCodeLoose(value1, value2) {
  // TODO
  return value1 == value2;
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 */
/**
 *
 * @param {number} value1
 * @param {number} value2
 * @returns {boolean}
 */
export function sameCodeStrict(value1, value2) {
  // TODO
  return value1 === value2;
}

/**
 * Indique si un code est pair.
 */
/**
 *
 * @param {number} code
 * @returns {boolean}
 */
export function isEvenCode(code) {
  // TODO
  return code % 2 == 0;
}

/**
 * Indique si la conversion de la valeur produit NaN.
 */
/**
 *
 * @param {string} value
 * @returns {number}
 */
export function isInvalidCode(value) {
  // TODO
  return isNaN(Number(value));
}
