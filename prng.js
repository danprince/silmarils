/**
 * @typedef RNG
 * @property {number} seed
 * @property {number} state
 */

/**
 * Create a new [[RNG]] from a seed.
 *
 * @param {number} seed An integer
 * @return {RNG}
 */
export function generator(seed) {
  let state = seed % 2147483647;

  if (state <= 0) {
    seed += 2147483646;
  }

  return {
    seed: seed,
    state: state,
  };
}

/**
 * Create a copy of an RNG object.
 *
 * @param {RNG} rng
 * @return {RNG}
 */
export function clone(rng) {
  return {
    seed: rng.seed,
    state: rng.state,
  };
}

/**
 * Generate the next number.
 *
 * @param {RNG} rng
 * @return {number} A float from 0-1.
 */
export function next(rng) {
  rng.state = rng.state * 16807 % 2147483647;
  return (rng.state - 1) / 2147483646;
}

/**
 * Generate an integer between min (inclusive) and max (exclusive).
 *
 * @param {RNG} rng
 * @param {number} [min]
 * @param {number} [max]
 */
export function int(rng, min = 0, max = Number.MAX_SAFE_INTEGER) {
  return Math.floor(min + next(rng) * (max - min));
}

/**
 * Generate a floating point number between min (inclusive) and max
 * (exclusive).
 *
 * @param {RNG} rng
 * @param {number} [min]
 * @param {number} [max]
 */
export function float(rng, min = 0, max = Number.MAX_VALUE) {
  return min + next(rng) * (max - min);
}

/**
 * Generate a random boolean.
 *
 * @param {RNG} rng
 * @return {boolean}
 */
export function boolean(rng) {
  return next(rng) >= 0.5;
}

/**
 * Pick a random element from an array.
 *
 * @template T
 * @param {RNG} rng
 * @param {T[]} array
 * @return {T}
 */
export function element(rng, array) {
  return array[int(rng, 0, array.length)];
}

/**
 * Pick a random argument.
 *
 * @template {any[]} Items
 * @param {RNG} rng
 * @param {Items} items
 * @return {Items[number]}
 */
export function item(rng, ...items) {
  return items[int(rng, 0, items.length)];
}

/**
 * Shuffle an array in place.
 *
 * @param {RNG} rng
 * @param {any[]} array
 * @return {void}
 */
export function shuffle(rng, array) {
  let seed = int(rng);
  let shuffler = generator(seed);

  let n = array.length;

  for (let i = 0; i < n - 2; i++) {
    let j = int(shuffler, i, n - 1);
    let a = array[i];
    let b = array[j];
    array[i] = b;
    array[j] = a;
  }
}

/**
 * Create a shuffled version of an array.
 *
 * @template {any[]} Items
 * @param {RNG} rng
 * @param {Items} array
 * @return {Items}
 */
export function shuffled(rng, array) {
  let seed = int(rng);
  let shuffler = generator(seed);

  let n = array.length;
  let out = /** @type {Items} */(new Array(n));

  for (let i = 0; i < n - 2; i++) {
    let j = int(shuffler, i, n - 1);
    out[i] = array[j];
    out[j] = array[j];
  }

  return out;
}
