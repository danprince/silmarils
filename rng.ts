import * as PRNG from "./prng";

/**
 * The generator that this module uses internally. It can be re-seeded
 * with the [[seed]] function.
 */
let gen = PRNG.generator(
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
);

/**
 * Set the seed for the internal random number generator.
 */
export function seed(seed: number) {
  gen = PRNG.generator(seed);
}

/**
 * Produce an integer using [[PRNG.next]].
 */
export function next() {
  return PRNG.next(gen);
}

/**
 * Produce an integer in a range using [[PRNG.int]].
 */
export function int(min = 0, max = Number.MAX_SAFE_INTEGER) {
  return PRNG.int(gen, min, max);
}

/**
 * Produce a float in a range using [[PRNG.float]].
 */
export function float(min = 0, max = Number.MAX_VALUE) {
  return PRNG.float(gen, min, max);
}

/**
 * Produce a boolean using [[PRNG.boolean]].
 */
export function boolean() {
  return PRNG.boolean(gen);
}

/**
 * Pick a random element from an array using [[PRNG.element]].
 */
export function element<Items extends any[]>(array: Items): Items[number] {
  return PRNG.element(gen, array);
}

/**
 * Pick a random argument using [[PRNG.item]].
 */
export function item<Items extends any[]>(...items: Items): Items[number] {
  return PRNG.item(gen, ...items);
}

/**
 * Shuffle an array in-place using [[PRNG.shuffle]].
 *
 * If you want to create a new array, use [[RNG.shuffled]].
 */
export function shuffle(array: any[]) {
  PRNG.shuffle(gen, array);
}

/**
 * Create a shuffled version of an array using [[PRNG.shuffled]].
 *
 * If you want to modify the array in place, use [[RNG.shuffle]].
 */
export function shuffled<T>(array: T[]): T[] {
  return PRNG.shuffled(gen, array);
}
