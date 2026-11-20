// @ts-check

/**
 * Double une charge.
 */
/**
 *
 * @param {number} charge
 * @returns {number}
 */
export function doubleCharge(charge) {
  // TODO
  return charge * 2;
}

/**
 * Calcule une puissance à partir d'une base et d'un multiplicateur.
 */
/**
 *
 * @param {number} base
 * @param {number} multiplier
 * @returns {number}
 */
export function forgePower(base, multiplier) {
  // TODO
  return base * multiplier;
}

/**
 * Stabilise une énergie avec un facteur, égal à 2 par défaut.
 */
/**
 *
 * @param {number} energy
 * @param {number} factor
 * @returns {number}
 */
export function stabilizeEnergy(energy, factor = 2) {
  // TODO
  return energy * factor;
}

/**
 * Construit un message de la Forge.
 */
/**
 *
 * @param {string} element
 * @param {string} prefix
 * @returns {string}
 */
export function forgeMessage(element, prefix = "Forge") {
  // TODO
  return `${prefix} : ${element}`;
}

/**
 * Calcule l'énergie restante après une perte.
 */
/**
 *
 * @param {number} energy
 * @param {number} loss
 * @returns {number}
 */
export function calculateOutput(energy, loss) {
  // TODO
  let remainingEnergy = 0;
  return (remainingEnergy = energy - loss);
}

/**
 * Calcule puis amplifie l'énergie restante.
 */
/**
 *
 * @param {number} energy
 * @param {number} loss
 * @param {number} factor
 * @returns {number}
 */
export function boostedOutput(energy, loss, factor = 2) {
  // TODO
  return stabilizeEnergy(calculateOutput(energy, loss), factor);
}
