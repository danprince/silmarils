import * as RNG from "./rng";

const SAMPLES = 100;

describe("RNG", () => {
  it("should be possible to re-seed the generator", () => {
    RNG.seed(1234);
    let a = RNG.next();
    RNG.seed(1234);
    let b = RNG.next();
    RNG.seed(4321);
    let c = RNG.next();
    expect(a).toBe(b);
    expect(a).not.toBe(c);
  });

  it("should generate integers", () => {
    for (let i = 0; i < SAMPLES; i++) {
      let value = RNG.int(0, 100);
      expect(value).toBe(Math.floor(value));
      expect(value).toBeLessThan(100);
      expect(value).toBeGreaterThanOrEqual(0);
    }
  });

  it("should generate floats", () => {
    for (let i = 0; i < SAMPLES; i++) {
      let value = RNG.float(0, 100);
      expect(value).toBeLessThan(100);
      expect(value).toBeGreaterThanOrEqual(0);
    }
  });

  it("should generate booleans", () => {
    for (let i = 0; i < SAMPLES; i++) {
      let value = RNG.boolean();
      expect(value === true || value === false).toBe(true);
    }
  });

  it("should pick element from array", () => {
    let array = [1, 2, 3, 4];

    for (let i = 0; i < SAMPLES; i++) {
      let value = RNG.element(array);
      expect(array).toContain(value);
    }
  });

  it("should pick element from readonly array", () => {
    let array = [1, 2, 3, 4] as const;

    for (let i = 0; i < SAMPLES; i++) {
      let value = RNG.element(array);
      expect(array).toContain(value);
    }
  });

  it("should pick item from arguments", () => {
    let items = [1, 2, 3, 4];

    for (let i = 0; i < SAMPLES; i++) {
      let value = RNG.item(1, 2, 3, 4);
      expect(items).toContain(value);
    }
  });

  it("should shuffle an array in place", () => {
    for (let i = 0; i < SAMPLES; i++) {
      let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      RNG.shuffle(array);
      expect(array).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  });

  it("should create a shuffled array", () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < SAMPLES; i++) {
      let shuffled = RNG.shuffled(array);
      expect(shuffled).not.toEqual(array);
    }
  });

  it("should pick a weighted item", () => {
    let items = [
      { value: 0, weight: 10 },
      { value: 1, weight: 20 },
      { value: 2, weight: 30 },
      { value: 3, weight: 40 },
      { value: 4, weight: 50 },
    ];

    let values = items.map(item => item.value);

    for (let i = 0; i < SAMPLES; i++) {
      let value = RNG.weighted(items);
      expect(values).toContain(value);
    }
  });

  it("should return probability based chance", () => {
    expect(RNG.chance(0)).toBe(false);
    expect(RNG.chance(1)).toBe(true);
  });
});
