// @ts-check

export const UNIVERSITIES = [
  "Académie Babbage",
  "Institut Lovelace",
  "Université Hopper",
  "École Dijkstra",
  "Collège Von Neumann",
];

export const MASTER_REQUIRED = ["Institut Lovelace", "École Dijkstra"];

/**
 * Indique si une université est connue.
 */
/**
 *
 * @param {string} university
 * @returns {boolean}
 */
export function isKnownUniversity(university) {
  // TODO
  for (let i = 0; UNIVERSITIES.length >= i; i++) {
    if (university == UNIVERSITIES[i]) return true;
  }
  return false;
}

/**
 * Convertit un titre en niveau numérique.
 */
/**
 *
 * @param {string} title
 * @returns {number}
 */
export function titleLevel(title) {
  // TODO
  switch (title) {
    case "Master":
      return 2;

    case "Bachelor":
      return 1;

    default:
      return 0;
  }
}

/**
 * Indique si une université exige un Master.
 */
/**
 *
 * @param {string} university
 * @returns {boolean}
 */
export function requiresMaster(university) {
  // TODO
  for (let j of MASTER_REQUIRED) {
    if (university == j) {
      return true;
    }
  }
  return false;
}

/**
 * Indique si un visiteur est considéré comme fiable.
 */
/**
 *
 * @param {string} university
 * @param {string} title
 * @returns {boolean}
 */
export function isTrusted(university, title) {
  // TODO
  if (
    isKnownUniversity(university) &&
    ((!requiresMaster(university) && titleLevel(title) >= 1) ||
      (requiresMaster(university) && titleLevel(title) >= 2))
  )
    return true;
  return false;
}

/**
 * Construit le message d'accueil selon l'université et le titre.
 */
/**
 *
 * @param {string} university
 * @param {string} title
 * @returns {string}
 */
export function welcomeMessage(university, title) {
  // TODO
  if (!isKnownUniversity(university)) return "Université inconnue";
  else if (titleLevel(title) <= 0) return "Titre inconnu";
  else if (requiresMaster(university) && titleLevel(title) < 2)
    return "Master requis";
  return "Bienvenue dans la Citadelle";
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 */
/**
 *
 * @param {string} universities
 * @param {string} titles
 * @returns {boolean}
 */
export function allTrusted(universities, titles) {
  // TODO
  let number = 0;
  for (let i = 0; i <= universities.length; i++) {
    if (isTrusted(universities[i], titles[i])) number++;
  }
  if (number == universities.length) return true;
  else return false;
}
