// @ts-check

export const MAX_DRONES_PER_CORRIDOR = 5;

/**
 * Valide une altitude autorisée.
 */
/**
 *
 * @param {number} altitude
 * @returns {number}
 */
export function validateAltitude(altitude) {
  // TODO
  switch (altitude) {
    case 50:
      return altitude;

    case 100:
      return altitude;

    case 150:
      return altitude;

    default:
      throw new Error(`Altitude interdite : ${altitude} m`);
  }
}

/**
 * Compte les drones présents à une altitude.
 */
/**
 *
 * @param {*} altitudes
 * @param {number} altitude
 * @returns {number}
 */
export function countAtAltitude(altitudes, altitude) {
  // TODO
  let number = 0;
  for (let i of altitudes) {
    if (i === altitude) number++;
  }
  return number;
}

/**
 * Vérifie qu'un couloir ne dépasse pas sa capacité.
 */
/**
 *
 * @param {*} altitudes
 * @param {number} altitude
 * @returns {number}
 */
export function checkCorridor(altitudes, altitude) {
  // TODO
  let number = 0;
  for (let i of altitudes) {
    if (i === altitude) number++;

    if (number > MAX_DRONES_PER_CORRIDOR)
      throw new Error(`Collision à ${altitude} m`);
  }
  return number;
}

/**
 * Vérifie les altitudes et la capacité de tous les couloirs.
 */
/**
 *
 * @param {*} altitudes
 * @returns {string}
 */
export function checkAirspace(altitudes) {
  // TODO
  for (let i of altitudes) {
    validateAltitude(i);
  }
  for (let i of altitudes) {
    checkCorridor(altitudes, validateAltitude(i));
  }
  return "Espace aérien sûr";
}

/**
 * Produit un rapport sans propager les erreurs de validation.
 */
/**
 *
 * @param {*} altitudes
 * @returns {string}
 */
export function airspaceReport(altitudes) {
  // TODO
  try {
    return checkAirspace(altitudes);
  } catch (error) {
    return `Alerte : ${error.message}`;
  }
}
