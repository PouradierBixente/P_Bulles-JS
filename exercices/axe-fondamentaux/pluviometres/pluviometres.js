// @ts-check

/**
 * Convertit un relevé en nombre.
 */
/**
 *
 * @param {string} value
 * @returns {number}
 */
export function readRainfall(value) {
  // TODO
  return Number(value);
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 */
/**
 *
 * @param {string} morning
 * @param {string} evening
 * @returns {number}
 */
export function totalRainfall(morning, evening) {
  // TODO
  return Number(morning) + Number(evening);
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 */
/**
 *
 * @param {Number} hour
 * @returns {boolean}
 */
export function isScheduledHour(hour) {
  // TODO
  return hour % 3 == 0;
}

/**
 * Indique si la conversion du relevé produit NaN.
 */
/**
 *
 * @param {Number} value
 * @returns {boolean}
 */
export function isFaultyReading(value) {
  // TODO
  return isNaN(Number(value));
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 */
/**
 *
 * @param {string} manual
 * @param {string} automatic
 * @returns {boolean}
 */
export function isConfirmedReading(manual, automatic) {
  // TODO
  return Number(manual) == Number(automatic);
}
