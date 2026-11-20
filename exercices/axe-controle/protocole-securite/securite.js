// @ts-check

/**
 * Valide une quantité d'énergie.
 */
/**
 *
 * @param {number} energy
 * @returns {number}
 */
export function validateEnergy(energy) {
  // TODO
  if (energy >= 0) return energy;
  else throw new Error("Énergie invalide");
}

/**
 * Vérifie une énergie sans propager l'exception.
 */
/**
 *
 * @param {number} energy
 * @returns {string}
 */
export function safeEnergyCheck(energy) {
  // TODO
  try {
    validateEnergy(energy);
    return "Énergie valide";
  } catch {
    return "Énergie invalide";
  }
}

/**
 * Valide un code de porte autorisé.
 */
/**
 *
 * @param {string} code
 * @returns {string}
 */
export function validateGateCode(code) {
  // TODO
  switch (code) {
    case "ALPHA":
      return "ALPHA";
      break;

    case "BETA":
      return "BETA";
      break;

    case "OMEGA":
      return "OMEGA";
      break;

    default:
      throw new Error("Code inconnu");
      break;
  }
}

/**
 * Vérifie un code de porte sans propager l'exception.
 */
/**
 *
 * @param {string} code
 * @returns {string}
 */
export function safeGateCheck(code) {
  // TODO
  try {
    validateGateCode(code);
    return "Code accepté";
  } catch {
    return "Code refusé";
  }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 */
/**
 *
 * @param {string} text
 * @returns {number}
 */
export function countValidAttempts(text) {
  // TODO
  let number = 0;
  for (let i of text) {
    if (i == "A" || i == "B") number++;
  }
  return number;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 */
/**
 *
 * @param {string} sequence
 * @returns {number}
 */
export function attemptsBeforeLock(sequence) {
  // TODO
  let number = 0;
  let numbererreur = 0;

  for (let i of sequence) {
    if (i == "X") numbererreur++;
    number++;
    if (numbererreur >= 3) break;
  }
  return number;
}
