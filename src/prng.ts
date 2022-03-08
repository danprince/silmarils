/**
 * # Pseudo Random Number Generator
 *
 * Utilities for generating deterministic sequences of random numbers.
 *
 * ```typescript
 * import { PRNG } from "silmarils";
 * // or
 * import * as PRNG from "silmarils/prng";
 *
 * // seed a pseudo random number generator
 * let gen = PRNG.generator(123);
 *
 * PRNG.int(gen, 0, 10)          // random int between 0 and 10
 * PRNG.float(gen, -1.0, 1.0)    // random float between -1 and 1
 * PRNG.boolean(gen)             // random boolean
 * PRNG.element(gen, [1, 2, 3])  // random element from array
 * PRNG.item(gen, 1, 2, 3)       // random argument
 * PRNG.shuffle(gen, [1, 2, 3])  // shuffle in place
 * PRNG.shuffled(gen, [1, 2, 3]) // return a shuffled copy
 * ```
 *
 * __Note__: If you don't need multiple generators, then it's simpler
 * to use `silmarils/rng` instead.
 *
 * @packageDocumentation
 */

/**
 * A seeded [pseudo-random number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator).
 */
export interface RNG {
  /**
   * The seed the generator was initially defined with.
   */
  seed: number,

  /**
   * The current state of the generator.
   *
   * _Don't rely on this number_. Its format might change in future
   * revisions to this module.
   */
  state: number,
}

/**
 * Create a new [[RNG]] from a seed.
 */
export function generator(seed: number): RNG {
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
 * Creates a copy of `rng`.
 */
export function clone(rng: RNG): RNG {
  return {
    seed: rng.seed,
    state: rng.state,
  };
}

/**
 * Generate the next number and update the state of `rng`.
 *
 * __Note__: This function is a building block for the other functions
 * in this module and you should generally use those instead.
 *
 * @return A number between 0-1
 */
export function next(rng: RNG): number {
  rng.state = rng.state * 16807 % 2147483647;
  return (rng.state - 1) / 2147483646;
}

/**
 * Generates an integer between `min` (inclusive) and `max` (exclusive).
 */
export function int(rng: RNG, min = 0, max = Number.MAX_SAFE_INTEGER): number {
  return Math.floor(min + next(rng) * (max - min));
}

/**
 * Generates a floating point number between `min` (inclusive) and `max`
 * (exclusive).
 */
export function float(rng: RNG, min = 0, max = Number.MAX_VALUE): number {
  return min + next(rng) * (max - min);
}

/**
 * Generates a random boolean.
 */
export function boolean(rng: RNG): boolean {
  return next(rng) >= 0.5;
}

/**
 * Selects a random element from `array`.
 */
export function element<Items extends any[]>(rng: RNG, array: Items): Items[number] {
  return array[int(rng, 0, array.length)];
}

/**
 * Selects a random element from `items`.
 */
export function item<Items extends any[]>(rng: RNG, ...items: Items): Items[number] {
  return items[int(rng, 0, items.length)];
}

/**
 * Shuffles `array` in place with [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).
 *
 * This function modifies `array`. Use [[shuffled]] to return a new
 * shuffled array instead.
 */
export function shuffle(rng: RNG, array: any[]): void {
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
 * Creates a shuffled version of an array.
 *
 * This function returns a new array. Use [[shuffle]] to modify `array`
 * in place instead.
 */
export function shuffled<T>(rng: RNG, array: T[]): T[] {
  let out = Array.from(array);
  shuffle(rng, out);
  return out;
}

export type WeightedItem<T> = {
  weight: number,
  value: T,
}

/**
 * Select a value from a list of weighted items. A higher weight means
 * an item is more likely to be selected.
 *
 * ```typescript
 * let item = PRNG.weighted(rng, [
 *   { weight: 1, value: "foo" },
 *   { weight: 2, value: "bar" },
 *   { weight: 3, value: "baz" },
 * ])
 * ```
 */
export function weighted<T>(rng: RNG, items: WeightedItem<T>[]): T {
  let bag = [];

  for (let item of items) {
    let weight = Math.max(0, item.weight);

    for (let i = 0; i < weight; i++) {
      bag.push(item.value);
    }
  }

  return element(rng, bag);
}

/**
 * Return a boolean based on a probability.
 *
 * @param probability A number between 0 and 1 representing the
 * likelihood that true will be returned. A probability of 0 will
 * always return false and a probability of 1 will always return true.
 */
export function chance(rng: RNG, probability: number) {
  return next(rng) <= probability;
}
