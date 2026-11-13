// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 */
/**
 *
 * @param {number} level
 * @returns {string}
 */
export function accessMessage(level) {
  // TODO
  if (level >= 5) return "Accès autorisé";
  else return "Accès refusé";
}

/**
 * Retourne l'état textuel d'une porte.
 */
/**
 *
 * @param {boolean} isOpen
 * @returns {string}
 */
export function doorStatus(isOpen) {
  // TODO
  if (isOpen) return "Ouverte";
  else return "Fermée";
}

/**
 * Retourne le nom de la zone correspondant à un code.
 */
/**
 *
 * @param {string} code
 * @returns {string}
 */
export function zoneName(code) {
  // TODO
  switch (code) {
    case "N":
      return "Les Fondations";
      break;

    case "E":
      return "Les Archives";
      break;

    case "SE":
      return "La Forge";
      break;

    case "SO":
      return "La Citadelle";
      break;

    case "O":
      return "La Faille";
      break;

    default:
      return "Zone inconnue";
  }
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 */
/**
 *
 * @param {number} energy
 * @returns {string}
 */
export function alertLevel(energy) {
  // TODO
  if (energy < 20) return "CRITIQUE";
  else if (energy >= 20 && energy <= 49) return "FAIBLE";
  else if (energy >= 50 && energy <= 79) return "STABLE";
  else return "OPTIMAL";
}
