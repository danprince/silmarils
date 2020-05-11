/**
 * # Random Number Generator
 *
 * ```typescript
 * import { RNG } from "silmarils";
 * // or
 * import * as RNG from "silmarils/rng";
 *
 * RNG.int(0, 10)          // random int between 0 and 10
 * RNG.float(-1.0, 1.0)    // random float between -1 and 1
 * RNG.boolean()           // random boolean
 * RNG.element([1, 2, 3])  // random element from array
 * RNG.item(1, 2, 3)       // random argument
 * RNG.shuffle([1, 2, 3])  // shuffle in place
 * RNG.shuffled([1, 2, 3]) // return a shuffled copy
 * ```
 *
 * @packageDocumentation
 */

import * as PRNG from "./prng";

/**
 * The generator that this module uses internally. It can be re-seeded
 * with the [[seed]] function.
 */
let gen = PRNG.generator(
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
);

/**
 * Sets the seed for the internal random number generator.
 */
export function seed(seed: number) {
  gen = PRNG.generator(seed);
}

/**
 * Generates the next random number. Comparable to `Math.random`.
 *
 * @return A number between 0-1
 */
export function next() {
  return PRNG.next(gen);
}

/**
 * Generates a random integer between `min` (inclusive) and `max` (exlusive).
 */
export function int(min = 0, max = Number.MAX_SAFE_INTEGER) {
  return PRNG.int(gen, min, max);
}

/**
 * Generates a random float between `min` (inclusive) and `max` (exlusive).
 */
export function float(min = 0, max = Number.MAX_VALUE) {
  return PRNG.float(gen, min, max);
}

/**
 * Generates a random boolean.
 */
export function boolean() {
  return PRNG.boolean(gen);
}

/**
 * Selects a random element from `array`.
 */
export function element<Items extends any[]>(array: Items): Items[number] {
  return PRNG.element(gen, array);
}

/**
 * Selects a random element from `items`.
 */
export function item<Items extends any[]>(...items: Items): Items[number] {
  return PRNG.item(gen, ...items);
}

/**
 * Shuffles an array in place.
 *
 * If you want to return a new array, use [[`shuffled`]].
 */
export function shuffle(array: any[]) {
  PRNG.shuffle(gen, array);
}

/**
 * Creates a shuffled copy of an array.
 *
 * If you want to shuffle the array in place, use [[`shuffle`]].
 */
export function shuffled<T>(array: T[]): T[] {
  return PRNG.shuffled(gen, array);
}

/**
 * Select a value from a list of weighted items. A higher weight means
 * an item is more likely to be selected.
 *
 * ```typescript
 * let item = RNG.weighted([
 *   { weight: 1, value: "foo" },
 *   { weight: 2, value: "bar" },
 *   { weight: 3, value: "baz" },
 * ])
 * ```
 */
export function weighted<T>(items: PRNG.WeightedItem<T>[]): T {
  return PRNG.weighted(gen, items);
}
