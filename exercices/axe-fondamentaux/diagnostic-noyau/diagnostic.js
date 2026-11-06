// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 */
/**
 *
 * @param {string} value
 * @returns {*}
 */
export function valueType(value) {
  // TODO
  return typeof value;
}

/**
 * Indique si la valeur est undefined.
 */
/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isUndefined(value) {
  // TODO
  if (value === undefined) return true;
  else return false;
}

/**
 * Indique si la valeur est null.
 */
/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isNull(value) {
  // TODO
  if (value === null) return true;
  else return false;
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 */
/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function hasKnownValue(value) {
  // TODO
  if (!(value === null || value === undefined)) return true;
  else return false;
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 */
/**
 *
 * @param {number} energy
 * @param {number} minimumEnergy
 * @returns {boolean}
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  // TODO
  energy = Number(energy);
  minimumEnergy = Number(minimumEnergy);
  return energy >= minimumEnergy;
}

/**
 * Compare strictement le nom de la zone attendue.
 */
/**
 *
 * @param {string} zone
 * @param {string} expectedZone
 * @returns {boolean}
 */
export function isCorrectZone(zone, expectedZone) {
  // TODO
  return zone === expectedZone;
}
