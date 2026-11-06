// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 * @param {number} maxEnergy
 * @param {number} currentEnergy
 *
 * @returns {number}
 */
export function missingEnergy(maxEnergy, currentEnergy) {
  // TODO
  return maxEnergy - currentEnergy;
}

/**
 * Calcule le pourcentage d'énergie disponible.
 *
 * @param {number} maxEnergy
 * @param {number} currentEnergy
 *
 * @returns {number}
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  // TODO
  return (currentEnergy / maxEnergy) * 100;
}

/**
 * Calcule l'énergie disponible après une recharge.
 *
 */
/**
 *
 * @param {number} currentEnergy
 * @param {number} recharge
 * @returns {number}
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  // TODO
  currentEnergy += recharge;

  return currentEnergy;
}

/**
 * Indique si le générateur possède au moins 500 unités d'énergie.
 */
/**
 *
 * @param {number} currentEnergy
 * @returns {boolean}
 */
export function isGeneratorReady(currentEnergy) {
  // TODO
  if (currentEnergy >= 500) {
    return true;
  } else return false;
}

/**
 * Construit le message d'état du générateur.
 */
/**
 *
 * @param {string} name
 * @param {number} currentEnergy
 * @returns {string}
 */
export function generatorStatus(name, currentEnergy) {
  // TODO
  return `${name} possède ${currentEnergy} unités d'énergie.`;
}
