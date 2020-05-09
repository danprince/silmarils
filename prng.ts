/**
 *
 */
export interface RNG {
  seed: number,
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
 * Create a copy of an RNG object.
 */
export function clone(rng: RNG): RNG {
  return {
    seed: rng.seed,
    state: rng.state,
  };
}

/**
 * Generate the next number.
 */
export function next(rng: RNG): number {
  rng.state = rng.state * 16807 % 2147483647;
  return (rng.state - 1) / 2147483646;
}

/**
 * Generate an integer between min (inclusive) and max (exclusive).
 */
export function int(rng: RNG, min = 0, max = Number.MAX_SAFE_INTEGER): number {
  return Math.floor(min + next(rng) * (max - min));
}

/**
 * Generate a floating point number between min (inclusive) and max
 * (exclusive).
 */
export function float(rng: RNG, min = 0, max = Number.MAX_VALUE): number {
  return min + next(rng) * (max - min);
}

/**
 * Generate a random boolean.
 */
export function boolean(rng: RNG): boolean {
  return next(rng) >= 0.5;
}

/**
 * Pick a random element from an array.
 */
export function element<Items extends any[]>(rng: RNG, array: Items): Items[number] {
  return array[int(rng, 0, array.length)];
}

/**
 * Pick a random argument.
 */
export function item<Items extends any[]>(rng: RNG, ...items: Items): Items[number] {
  return items[int(rng, 0, items.length)];
}

/**
 * Shuffle an array in place.
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
 * Create a shuffled version of an array.
 */
export function shuffled<T>(rng: RNG, array: T[]): T[] {
  let seed = int(rng);
  let shuffler = generator(seed);

  let n = array.length;
  let out: T[] = new Array(n);

  for (let i = 0; i < n - 2; i++) {
    let j = int(shuffler, i, n - 1);
    out[i] = array[j];
    out[j] = array[j];
  }

  return out;
}
