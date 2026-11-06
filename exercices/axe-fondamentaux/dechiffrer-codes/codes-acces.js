// @ts-check

/**
 * Convertit une valeur en nombre.
 */
/**
 *
 * @param {*} value
 * @returns
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
 * @param {*} value1
 * @param {*} value2
 * @returns
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
 * @param {*} value1
 * @param {*} value2
 * @returns
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
 * @param {*} code
 * @returns
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
 * @param {*} value
 * @returns
 */
export function isInvalidCode(value) {
  // TODO
  return isNaN(Number(value));
}
