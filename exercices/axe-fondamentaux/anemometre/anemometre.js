// @ts-check

// TODO : déclarer la constante de conversion entre les km/h et les m/s
const conversion = 3.6;
/**
 * Convertit une vitesse de km/h en m/s.
 */
/**
 *
 * @param {number} speedKmh
 * @returns {number}
 */
export function kmhToMs(speedKmh) {
  // TODO
  return speedKmh / conversion;
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 */
/**
 *
 * @param {number} gustKmh
 * @param {number} averageKmh
 * @returns {number}
 */
export function gustGap(gustKmh, averageKmh) {
  // TODO
  return gustKmh - averageKmh;
}

/**
 * Calcule la moyenne de trois mesures.
 */
/**
 *
 * @param {Number} speed1
 * @param {number} speed2
 * @param {number} speed3
 * @returns {number}
 */
export function averageOfThree(speed1, speed2, speed3) {
  // TODO
  return (speed1 + speed2 + speed3) / 3;
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 */
/**
 *
 * @param {number} speedKmh
 * @returns {boolean}
 */
export function isStormAlert(speedKmh) {
  // TODO
  return speedKmh >= 75;
}

/**
 * Construit le bulletin météo d'une station.
 */
/**
 *
 * @param {string} station
 * @param {number} speedKmh
 * @returns {string}
 */
export function windReport(station, speedKmh) {
  // TODO
  return `${station} : vent de ${speedKmh} km/h (${speedKmh / conversion} m/s).`;
}
