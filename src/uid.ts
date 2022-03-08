let counter = 1;

/**
 * Generates an autoincrementing unique id.
 */
export function sequential() {
  return counter++;
}

/**
 * Generates a random unique id.
 */
export function random() {
  return Math.random().toString(36).slice(2);
}
