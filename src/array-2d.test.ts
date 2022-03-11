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

  describe("toArray2D", () => {
    test.each([
      [
        "1x1",
        Array2D.create(1, 1, 0),
        [[0]],
      ],
      [
        "2x1",
        Array2D.create(2, 1, 0),
        [[0, 0]],
      ],
      [
        "2x2",
        Array2D.create(2, 2, 0),
        [[0, 0],
         [0, 0]],
      ],
      [
        "3x3",
        Array2D.create(3, 3, 0),
        [[0, 0, 0],
         [0, 0, 0],
         [0, 0, 0]],
      ],
    ])("%s", (_, input, expected) => {
      let actual = Array2D.to2DArray(input);
      expect(actual).toEqual(expected);
    });
  });

  describe("fromString", () => {
    test.each([
      [
        "1x1",
        `#`,
        Array2D.create(1, 1, "#"),
      ],
      [
        "2x1",
        `##`,
        Array2D.create(2, 1, "#"),
      ],
      [
        "2x2",
        `##
         ##`,
        Array2D.create(2, 2, "#"),
      ],
      [
        "3x3",
        `###
         ###
         ###`,
        Array2D.create(3, 3, "#"),
      ],
    ])("%s", (_, input, expected) => {
      let actual = Array2D.fromString(input);
      expect(actual).toEqual(expected);
    });
  });

  describe("toString", () => {
    test.each([
      [
        "1x1",
        Array2D.create(1, 1, "#"),
        `#`,
      ],
      [
        "2x1",
        Array2D.create(2, 1, "#"),
        `##`,
      ],
      [
        "2x2",
        Array2D.create(2, 2, "#"),
        `##
         ##`,
      ],
      [
        "3x3",
        Array2D.create(3, 3, "#"),
        `###
         ###
         ###`,
      ],
    ])("%s", (_, input, expected) => {
      let actual = Array2D.toString(input);
      expected = expected.replace(/ +/g, "");
      expect(actual).toEqual(expected);
    });

    test("custom separator", () => {
      let array = Array2D.create(3, 3, "#");
      let actual = Array2D.toString(array, ",");
      expect(actual).toEqual(`
        #,#,#,
        #,#,#,
        #,#,#,
      `.trim().replace(/ +/g, ""));
    });
  });

  describe("transpose", () => {
    test.each([
      [
        "1x1",
        `A`,
        `A`
      ],
      [
        "2x2",
        `AB
         CD`,
        `AC
         BD`,
      ],
      [
        "3x1",
        `ABC`,
        `A
         B
         C`
      ],
      [
        "3x3",
        `ABC
         DEF
         GHI`,
        `ADG
         BEH
         CFI`,
      ],
    ])("%s", (_, input, expected) => {
      let array = Array2D.fromString(input);
      let transposed = Array2D.transpose(array);
      let actual = Array2D.toString(transposed);
      expected = expected.replace(/ +/g, "");
      expect(actual).toEqual(expected);
    });
  });

  describe("rotateRight90", () => {
    test.each([
      [
        "1x1",
        `A`,
        `A`
      ],
      [
        "2x2",
        `AB
         CD`,
        `CA
         DB`,
      ],
      [
        "3x2",
        `ABC
         DEF`,
        `DA
         EB
         FC`
      ],
      [
        "3x3",
        `ABC
         DEF
         GHI`,
        `GDA
         HEB
         IFC`,
      ],
    ])("%s", (_, input, expected) => {
      let array = Array2D.fromString(input);
      let transposed = Array2D.rotateRight90(array);
      let actual = Array2D.toString(transposed);
      expected = expected.replace(/ +/g, "");
      expect(actual).toEqual(expected);
    });
  });

  describe("rotateLeft90", () => {
    test.each([
      [
        "1x1",
        `A`,
        `A`
      ],
      [
        "2x2",
        `AB
         CD`,
        `BD
         AC`,
      ],
      [
        "3x2",
        `ABC
         DEF`,
        `CF
         BE
         AD`
      ],
      [
        "3x3",
        `ABC
         DEF
         GHI`,
        `CFI
         BEH
         ADG`,
      ],
    ])("%s", (_, input, expected) => {
      let array = Array2D.fromString(input);
      let transposed = Array2D.rotateLeft90(array);
      let actual = Array2D.toString(transposed);
      expected = expected.replace(/ +/g, "");
      expect(actual).toEqual(expected);
    });
  });

  describe("inBounds", () => {
    test("negative x", () => {
      let arr = Array2D.create(3, 3);
      expect(Array2D.inBounds(arr, -1, 2)).toBe(false);
    });

    test("negative y", () => {
      let arr = Array2D.create(3, 3);
      expect(Array2D.inBounds(arr, 1, -2)).toBe(false);
    });

    test("origin is in bounds", () => {
      let arr = Array2D.create(3, 3);
      expect(Array2D.inBounds(arr, 0, 0)).toBe(true);
    });

    test("extent is in bounds", () => {
      let arr = Array2D.create(3, 3);
      expect(Array2D.inBounds(arr, 2, 2)).toBe(true);
    });

    test("overflow x", () => {
      let arr = Array2D.create(3, 3);
      expect(Array2D.inBounds(arr, 4, 2)).toBe(false);
    });

    test("overflow y", () => {
      let arr = Array2D.create(3, 3);
      expect(Array2D.inBounds(arr, 2, 8)).toBe(false);
    });
  });

  test("generate", () => {
    expect(
      Array2D.toString(
        Array2D.generate(3, 3, ({ x, y }) => `${x}:${y}`),
        ","
      )
    ).toBe(`
      0:0,1:0,2:0,
      0:1,1:1,2:1,
      0:2,1:2,2:2,
    `.trim().replace(/ +/g, ""));
  });

  test("points", () => {
    expect(
      Array2D.points(Array2D.create(3, 3))
    ).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
    ]);
  });

  test("iter", () => {
    expect(
      Array.from(Array2D.iter(Array2D.create(3, 3)))
    ).toEqual(
      Array2D.points(Array2D.create(3, 3))
    );
  });
});
