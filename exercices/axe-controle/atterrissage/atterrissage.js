// @ts-check

export const DESCENT_SPEED = -10;
export const MAX_WIND = 3;

/**
 * Calcule la vitesse verticale en tenant compte du vent.
 */
/**
 *
 * @param {number} wind
 * @returns {number}
 */
export function verticalSpeed(wind) {
  // TODO
  return DESCENT_SPEED + wind;
}

/**
 * Calcule l'altitude suivante du drone.
 */
/**
 *
 * @param {number} altitude
 * @param {number} wind
 * @returns {number}
 */
export function nextAltitude(altitude, wind) {
  // TODO
  if (altitude + verticalSpeed(wind) < 0) return (altitude = 0);
  return altitude + verticalSpeed(wind);
}

/**
 * Génère une valeur aléatoire de vent.
 */
/**
 *
 * @returns {number}
 */
export function randomWind() {
  // TODO

  return Math.random() * MAX_WIND;
}

/**
 * Simule un atterrissage et compte sa durée.
 */
/**
 *
 * @param {number} startAltitude
 * @returns {number}
 */
export function landingDuration(startAltitude) {
  // TODO
  let number = 0;
  while (startAltitude > 0) {
    startAltitude = nextAltitude(startAltitude, randomWind());
    number++;
  }
  return number;
}

/**
 * Indique si le drone atterrit avant l'épuisement de sa batterie.
 */
/**
 *
 * @param {number} startAltitude
 * @param {number} battery
 * @returns {boolean}
 */
export function hasGracefullyLanded(startAltitude, battery) {
  // TODO
  while (startAltitude > 0 && battery > 0) {
    startAltitude = nextAltitude(startAltitude, randomWind());
    battery--;
  }
  return !(startAltitude > 0 && battery >= 0);
}
