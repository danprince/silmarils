import * as Array2D from "./array-2d";

describe("Array2D", () => {
  it("should guard against bad values", () => {
    expect(Array2D.is(Array2D.create(2, 2))).toBe(true);
    expect(Array2D.is(null)).toBe(false);
    expect(Array2D.is({ width: "a", height: 2, data: [] })).toBe(false);
    expect(Array2D.is({ width: 2, height: "2", data: [] })).toBe(false);
    expect(Array2D.is({ width: 2, height: 2, data: false })).toBe(false);
    expect(Array2D.is({ width: 2, height: 2, data: [] })).toBe(false);

    function isNumber(value: any): value is number {
      return typeof value === "number";
    }

    expect(Array2D.is(Array2D.create(3, 3, 0), isNumber)).toBe(true);
    expect(Array2D.is(Array2D.create(3, 3, "a"), isNumber)).toBe(false);
  });

  it("should create an empty array2d", () => {
    let a = Array2D.create(2, 3);
    expect(a.width).toBe(2);
    expect(a.height).toBe(3);
    expect(a.data).toEqual(new Array(6));
  });

  it("should throw if array has negative dimensions", () => {
    expect(() => {
      Array2D.create(-2, 1);
    }).toThrow();

    expect(() => {
      Array2D.create(2, -1);
    }).toThrow();

    expect(() => {
      Array2D.create(-2, -1);
    }).toThrow();
  });

  it("should clone an array2d", () => {
    let a1 = Array2D.create(2, 3);
    let a2 = Array2D.clone(a1);
    expect(a2).toEqual(a1);
    expect(a2).not.toBe(a1);
    expect(a2.data).not.toBe(a1.data);
  });

  it("should create an array2d from an array", () => {
    let a = Array2D.fromArray(3, 2, [1, 2, 3, 4, 5, 6, 7]);
    expect(a.width).toBe(3);
    expect(a.height).toBe(2);
    expect(a.data).toHaveLength(3 * 2);
  });

  it("should create an array2d from a nested array", () => {
    let a = Array2D.from2DArray([
      [1, 2, 3],
      [4, 5, 6],
    ]);

    expect(a.width).toBe(3);
    expect(a.height).toBe(2);
    expect(a.data).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should create a nested array from an array2d", () => {
    let a = Array2D.fromArray(3, 2, [1, 2, 3, 4, 5, 6, 7]);
    let b = Array2D.to2DArray(a);

    expect(b).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  it("should compare array2d for shallow equality", () => {
    let a1 = Array2D.fromArray(3, 2, [1, 2, 3, 4, 5, 6, 7]);
    let a2 = Array2D.fromArray(3, 2, [1, 2, 3, 4, 5, 6, 7]);
    let a3 = Array2D.fromArray(3, 2, [7, 6, 5, 4, 3, 2, 1]);
    let a4 = Array2D.fromArray(2, 3, [1, 2, 3, 4, 5, 6, 7]);
    expect(Array2D.equals(a1, a2)).toBe(true);
    expect(Array2D.equals(a1, a3)).toBe(false);
    expect(Array2D.equals(a1, a4)).toBe(false);
  });

  it("should get an element from an array2d", () => {
    let a = Array2D.from2DArray([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);

    expect(Array2D.get(a, 0, 0)).toBe(1);
    expect(Array2D.get(a, 2, 0)).toBe(3);
    expect(Array2D.get(a, 1, 2)).toBe(8);

    // Check some out of bounds elements
    expect(Array2D.get(a, 4, 2)).toBe(undefined);
    expect(Array2D.get(a, -1, 2)).toBe(undefined);
  });

  it("should set an element in an array2d", () => {
    let a = Array2D.from2DArray([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);

    // Set some elements inside the bounds
    Array2D.set(a, 0, 0, 0);
    Array2D.set(a, 1, 1, 0);
    Array2D.set(a, 2, 2, 0);
    Array2D.set(a, 2, 0, 0);
    Array2D.set(a, 0, 2, 0);

    // Set some elements out of bounds
    Array2D.set(a, 5, 2, -1);
    Array2D.set(a, 2, -1, -1);

    expect(a.data).toEqual([
      0, 2, 0,
      4, 0, 6,
      0, 8, 0
    ]);
  });

  it("should fill a array2d", () => {
    let a = Array2D.from2DArray([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    Array2D.fill(a, 1);

    expect(a.data).toEqual([
      1, 1, 1,
      1, 1, 1,
      1, 1, 1,
    ]);
  });

  it("should fill a part of an array2d", () => {
    let a = Array2D.from2DArray([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    Array2D.fill(a, 1, 0, 0, 1, 3);

    expect(a.data).toEqual([
      1, 0, 0,
      1, 0, 0,
      1, 0, 0,
    ]);
  });

  it("should create a filled array2d", () => {
    let a1 = Array2D.from2DArray([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    let a2 = Array2D.filled(a1, 1);

    expect(a1.data).toEqual([
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ]);

    expect(a2.data).toEqual([
      1, 1, 1,
      1, 1, 1,
      1, 1, 1,
    ]);
  });

  it("should create a partially filled array2d", () => {
    let a1 = Array2D.from2DArray([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    let a2 = Array2D.filled(a1, 1, 0, 0, 1, 3);

    expect(a1.data).toEqual([
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ]);

    expect(a2.data).toEqual([
      1, 0, 0,
      1, 0, 0,
      1, 0, 0,
    ]);
  });

  it("should create a slice from an array2d", () => {
    let a = Array2D.from2DArray([
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
    ]);

    expect(Array2D.slice(a, 0, 0, 2, 2)).toEqual(Array2D.from2DArray([
      [0, 1],
      [4, 5]
    ]));

    expect(Array2D.slice(a, 0, 1, 4, 2)).toEqual(Array2D.from2DArray([
      [4, 5, 6, 7],
      [8, 9, 10, 11],
    ]));
  });

  it("should map over an array2d", () => {
    let a1 = Array2D.from2DArray([
      [0, 1],
      [2, 3],
    ]);

    let a2 = Array2D.map(a1, (n, x, y) => n + x + y);

    expect(a2.data).toEqual([
      // n + x + y
      0 + 0 + 0,
      1 + 1 + 0,
      2 + 0 + 1,
      3 + 1 + 1,
    ]);
  });
});
