import * as PRNG from "./prng.js";

/**
 * The generator that this module uses internally. It can be re-seeded
 * with the [[seed]] function.
 */
let gen = PRNG.generator(
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
);

/**
 * Set the seed for the internal random number generator.
 *
 * @param {number} seed An integer seed
 * @return {void}
 */
export function seed(seed) {
  gen = PRNG.generator(seed);
}

/**
 * Produce an integer using [[PRNG.next]].
 *
 * @return {number}
 */
export function next() {
  return PRNG.next(gen);
}

/**
 * Produce an integer in a range using [[PRNG.int]].
 *
 * @param {number} [min]
 * @param {number} [max]
 * @return {number}
 */
export function int(min = 0, max = Number.MAX_SAFE_INTEGER) {
  return PRNG.int(gen, min, max);
}

/**
 * Produce a float in a range using [[PRNG.float]].
 *
 * @param {number} [min]
 * @param {number} [max]
 * @return {number}
 */
export function float(min = 0, max = Number.MAX_VALUE) {
  return PRNG.float(gen, min, max);
}

/**
 * Produce a boolean using [[PRNG.boolean]].
 *
 * @return {boolean}
 */
export function boolean() {
  return PRNG.boolean(gen);
}

/**
 * Pick a random element from an array using [[PRNG.element]].
 *
 * @template T
 * @param {T[]} array
 * @return {T}
 */
export function element(array) {
  return PRNG.element(gen, array);
}

/**
 * Pick a random argument using [[PRNG.item]].
 *
 * @template {any[]} Items
 * @param {Items} items
 * @return {Items[number]}
 */
export function item(...items) {
  return PRNG.item(gen, ...items);
}

/**
 * Shuffle an array in-place using [[PRNG.shuffle]].
 *
 * If you want to create a new array, use [[RNG.shuffled]].
 *
 * @param {any[]} array
 * @return {void}
 */
export function shuffle(array) {
  PRNG.shuffle(gen, array);
}

/**
 * Create a shuffled version of an array using [[PRNG.shuffled]].
 *
 * If you want to modify the array in place, use [[RNG.shuffle]].
 *
 * @template {any[]} Items
 * @param {Items} array
 * @return {Items}
 */
export function shuffled(array) {
  return PRNG.shuffled(gen, array);
}
