import * as PRNG from "./prng";

const SAMPLES = 100;
const SEED = 1234;

describe("PRNG", () => {
  it("should generate the same numbers given the same seed", () => {
    let rng1 = PRNG.generator(SEED);
    let rng2 = PRNG.generator(SEED);

    for (let i = 0; i < SAMPLES; i++) {
      expect(PRNG.next(rng1)).toBe(PRNG.next(rng2));
    }
  });

  it("should generate different numbers given different seeds", () => {
    let rng1 = PRNG.generator(1234);
    let rng2 = PRNG.generator(4321);
    expect(PRNG.next(rng1)).not.toBe(PRNG.next(rng2));
  });

  it("should clone an rng object", () => {
    let rng1 = PRNG.generator(SEED);
    let rng2 = PRNG.clone(rng1);
    expect(rng2).toEqual(rng1);
    expect(rng2).not.toBe(rng1);
  });

  it("should generate integers", () => {
    let rng = PRNG.generator(SEED);

    for (let i = 0; i < SAMPLES; i++) {
      let value = PRNG.int(rng, 0, 100);
      expect(value).toBe(Math.floor(value));
      expect(value).toBeLessThan(100);
      expect(value).toBeGreaterThanOrEqual(0);
    }
  });

  it("should generate floats", () => {
    let rng = PRNG.generator(SEED);

    for (let i = 0; i < SAMPLES; i++) {
      let value = PRNG.float(rng, 0, 100);
      expect(value).toBeLessThan(100);
      expect(value).toBeGreaterThanOrEqual(0);
    }
  });

  it("should generate booleans", () => {
    let rng = PRNG.generator(SEED);

    for (let i = 0; i < SAMPLES; i++) {
      let value = PRNG.boolean(rng);
      expect(value === true || value === false).toBe(true);
    }
  });

  it("should pick element from array", () => {
    let rng = PRNG.generator(SEED);
    let array = [1, 2, 3, 4];

    for (let i = 0; i < SAMPLES; i++) {
      let value = PRNG.element(rng, array);
      expect(array).toContain(value);
    }
  });

  it("should work with readonly arrays", () => {
    let rng = PRNG.generator(SEED);
    let array = [1, 2, 3, 4] as const;

    for (let i = 0; i < SAMPLES; i++) {
      let value = PRNG.element(rng, array);
      expect(array).toContain(value);
    }
  });

  it("should pick item from arguments", () => {
    let rng = PRNG.generator(SEED);
    let items = [1, 2, 3, 4];

    for (let i = 0; i < SAMPLES; i++) {
      let value = PRNG.item(rng, 1, 2, 3, 4);
      expect(items).toContain(value);
    }
  });

  it("should shuffle an array in place", () => {
    let rng = PRNG.generator(SEED);

    for (let i = 0; i < SAMPLES; i++) {
      let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      PRNG.shuffle(rng, array);
      expect(array).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  });

  it("should create a shuffled array", () => {
    let rng = PRNG.generator(SEED);
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < SAMPLES; i++) {
      let shuffled = PRNG.shuffled(rng, array);
      expect(shuffled).not.toEqual(array);

      for (let n of array) {
        expect(shuffled).toContain(n);
      }
    }
  });

  it("should pick a weighted item", () => {
    let rng = PRNG.generator(SEED);

    let items = [
      { value: 0, weight: 10 },
      { value: 1, weight: 20 },
      { value: 2, weight: 30 },
      { value: 3, weight: 40 },
      { value: 4, weight: 50 },
    ];

    let values = items.map(item => item.value);

    for (let i = 0; i < SAMPLES; i++) {
      let value = PRNG.weighted(rng, items);
      expect(values).toContain(value);
    }
  });

  it("should return probability based chance", () => {
    let rng = PRNG.generator(SEED);
    expect(PRNG.chance(rng, 0)).toBe(false);
    expect(PRNG.chance(rng, 1)).toBe(true);
  });
});
