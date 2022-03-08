/**
 * The interface for 2D arrays.
 *
 * @template T The type of the items inside the array
 */
export interface Array2D<T> {
  /**
   * The width of the array in columns. Cannot be negative.
   */
  readonly width: number,

  /**
   * The height of the array in rows. Cannot be negative.
   */
  readonly height: number,

  /**
   * A flat array of items in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).
   * The length of this array should be equal to [[`width`]] × [[`height`]].
   */
  data: T[],
}

/**
 * Determines whether `value` is an [[Array2D]].
 *
 * @param guard An on optional [type guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards)
 * that will check the type of the elements of in the array.
 *
 * ```ts
 * // Check that grid is an Array2D<Point.Point>
 * Array2D.is(grid, Point.is)
 *
 * function isNumber(value): value is number {
 *   return typeof value === "number";
 * }
 *
 * // Check that samples is an Array2D<number>
 * Array2D.is(samples, isNumber)
 * ```
 */
export function is<T = any>(
  value: any,
  guard?: (v: any) => v is T
): value is Array2D<T> {
  return (
    // Check whether it looks like an array2d
    value != null &&
    typeof value === "object" &&
    typeof value.width === "number" &&
    typeof value.height === "number" &&
    Array.isArray(value.data) &&

    // Validate that the length matches the width/height
    value.data.length === (value.width * value.height) &&

    // If a type guard was provided, check the element types
    (guard ? value.data.every(guard) : true)
  );
}

/**
 * Creates an empty [[Array2D]] with fixed dimensions and an optional
 * initial value for each element.
 *
 * ```typescript
 * // create an array with width = 3 and height = 6
 * Array2D.create(3, 6)
 *
 * // create an array with width = 2, height = 2, filled with "a"
 * Array2D.create(2, 2, "a")
 * ```
 *
 * @category Constructor
 * @template T The type of the elements in the array
 * @return The new array
 */
export function create<T>(
  width: number,
  height: number,
  initial?: T
): Array2D<T> {
  if (width < 0 || height < 0) {
    throw new Error("Array2D dimensions must not be negative!");
  }

  return {
    width: width,
    height: height,
    data: new Array(width * height).fill(initial),
  };
}

/**
 * Creates a new [[Array2D]] by shallowly cloning an existing one.
 *
 * ```typescript
 * let a1 = Array2D.create(10, 10);
 *
 * // create a copy of an existing Array2D
 * let a2 = Array2D.clone(a1);
 * ```
 *
 * @template T The type of the elements in the array
 * @param array2D The array to clone
 * @return The cloned array
 */
export function clone<T>(array2D: Array2D<T>): Array2D<T> {
  return {
    width: array2D.width,
    height: array2D.height,
    data: Array.from(array2D.data),
  };
}

/**
 * Creates an [[Array2D]] from a one dimensional array in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).
 *
 * ```typescript
 * let map = [
 *   0, 1, 0,
 *   1, 1, 1,
 *   0, 0, 0,
 * ];
 *
 * Array2D.fromArray(map, 3, 3);
 * ```
 *
 * @category Conversion
 * @template T The type of the elements in the array
 * @param width The width of the array in columns
 * @param height The height of the array in rows
 * @param array The one dimensional array. The length of `array` should be equal to `width * height`
 * @return The new array
 */
export function fromArray<T>(
  width: number,
  height: number,
  array: Array<T>
): Array2D<T> {
  return {
    width: width,
    height: height,
    data: array.slice(0, width * height),
  };
}

/**
 * Creates a one dimensional array in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).
 * from an [[Array2D]].
 *
 * ```typescript
 * let map = Array2D.create(2, 2, 0);
 *
 * Array2D.toArray(map) // [0, 0, 0, 0]
 * ```
 *
 * @category Conversion
 * @template T The type of the elements in the array
 * @param array2d The source [[Array2D]]
 * @return The new one dimensional array
 */
export function toArray<T>(array2D: Array2D<T>): Array<T> {
  return Array.from(array2D.data);
}

/**
 * Creates an [[Array2D]] from a two dimensional array.
 *
 * Each element in `array` corresponds to a row in the returned array.
 *
 * The `height` will be the number or rows and the `width` will be the
 * length of the longest row.
 *
 * ```typescript
 * let map = [
 *   [0, 1, 0],
 *   [1, 1, 1],
 *   [0, 0, 0],
 * ];
 *
 * Array2D.from2DArray(map)
 * ```
 *
 * If you want to create an [[Array2D]] from a one dimensional (flat)
 * array, then use [[fromArray]] instead.
 *
 * @category Conversion
 * @template T The type of the elements in `array`
 * @param array The two-dimensional array
 */
export function from2DArray<T>(array: T[][]): Array2D<T> {
  let height = array.length;
  let width = Math.max(...array.map(row => row.length));
  let data = new Array(width * height);

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      data[x + y * width] = array[y][x];
    }
  }

  return { width, height, data };
}

/**
 * Creates a two dimensional array from `array2D`.
 *
 * ```typescript
 * let map = Array2D.create(2, 2, 0);
 *
 * Array2D.to2DArray(map) // [[0, 0], [0, 0]]
 * ```
 *
 * @category Conversion
 * @template T The type of the elements in `array2D`
 * @return The two dimensional array
 */
export function to2DArray<T>(array2D: Array2D<T>): T[][] {
  let array = new Array(array2D.height);

  for (let y = 0; y < array2D.height; y++) {
    let start = y * array2D.width;
    let end = start + array2D.width;
    let row = array2D.data.slice(start, end);
    array[y] = row;
  }

  return array;
}

/**
 * Performs a shallow comparison to determine whether `a1` and `a2` are
 * equivalent.
 *
 * ```typescript
 * let a1 = Array2D.create(2, 2, 0);
 * let a2 = Array2D.create(2, 2, 0);
 *
 * Array2D.equals(a1, a2) // true
 * ```
 *
 * [[Array2D]] objects are considered to be equivalent if:
 * - They have the same dimensions
 * - They have the same elements in the same order
 *
 * @template T The type of the elements in `a1` _and_ `a2`
 */
export function equals<T>(a1: Array2D<T>, a2: Array2D<T>): boolean {
  if (a1.width !== a2.width || a1.height !== a2.height) {
    return false;
  }

  for (let i = 0; i < a1.data.length; i++) {
    if (a1.data[i] !== a2.data[i]) {
      return false;
    }
  }

  return true;
}

/**
 * Gets the element at the given indices.
 *
 * ```typescript
 * let a = Array2D.create(2, 2, 0);
 *
 * // get the element at 0, 0
 * Array2D.get(a, 0, 0)
 * ```
 *
 * @template T The type of the elements in `array2D`
 * @param x The x index
 * @param y The y index
 * @return The element (or undefined if the indices were out of bounds).
 */
export function get<T>(
  array2D: Array2D<T>,
  x: number,
  y: number
): T | undefined {
  if (x >= 0 && y >= 0 && x < array2D.width && y < array2D.height) {
    let i = x + y * array2D.width;
    return array2D.data[i];
  }
}

/**
 * Sets the element at the given indices.
 *
 * ```typescript
 * let a = Array2D.create(2, 2);
 *
 * // set the element at 0, 0 to "a"
 * Array2D.set(a, 0, 0, "a")
 * ```
 *
 * @template T The type of the elements in `array2D`
 * @param x The x index
 * @param y The y index
 * @param value The value to insert
 */
export function set<T>(array2D: Array2D<T>, x: number, y: number, value: T) {
  if (x >= 0 && y >= 0 && x < array2D.width && y < array2D.height) {
    let i = x + y * array2D.width;
    array2D.data[i] = value;
  }
}

/**
 * Fills the elements of `array2D` with `value`.
 *
 * Can optionally fill a subrectangle within the [[Array2D]] by passing
 * start and end coordinates.
 *
 * ```typescript
 * let a = Array2D.create(3, 3, "a");
 *
 * // fill with "b"
 * Array2D.fill(a, "b");
 *
 * // fill the top left quarter with "c"
 * Array2D.fill(a, "c", 0, 0, 2, 2);
 * ```
 *
 * This function modifies `array2D`. Use [[filled]] to create a new
 * [[Array2D]] instead.
 *
 * @template T The type of the elements in `array2D`
 * @param array2D The array to fill
 * @param value The value to fill `array2D` with
 * @param startX The x coordinate to start filling from
 * @param startY The y coordinate to start filling from
 * @param endX The x coordinate to finish filling before
 * @param endY The y coordinate to finish filling before
 */
export function fill<T>(
  array2D: Array2D<T>,
  value: T,
  startX: number = 0,
  startY: number = 0,
  endX: number = array2D.width,
  endY: number = array2D.height,
) {
  for (let i = startX; i < endX; i++) {
    for (let j = startY; j < endY; j++) {
      array2D.data[i + j * array2D.width] = value;
    }
  }
}

/**
 * Creates a new [[Array2D]] by filling a copy of `array2D` with `value`.
 *
 * Can optionally fill a subrectangle within the [[Array2D]] by passing
 * the start and end coordinates.
 *
 * ```typescript
 * let a = Array2D.create(3, 3, "a");
 *
 * // fill with "b"
 * let b = Array2D.fill(a, "b");
 *
 * // fill the top left quarter with "c"
 * let c = Array2D.fill(a, "c", 0, 0, 2, 2);
 * ```
 *
 * This function creates a new [[Array2D]]. Use [[fill]] to modify the
 * existing one instead.
 *
 * @template T The element type of `array2D`
 * @param array2D The array to fill
 * @param value The value to fill `array2D` with
 * @param startX The x coordinate to start filling from
 * @param startY The y coordinate to start filling from
 * @param endX The x coordinate to finish filling before
 * @param endY The y coordinate to finish filling before
 * @return The filled array2D
 */
export function filled<T>(
  array2D: Array2D<T>,
  value: T,
  startX: number = 0,
  startY: number = 0,
  endX: number = array2D.width,
  endY: number = array2D.height,
): Array2D<T> {
  let out = clone(array2D);

  for (let i = startX; i < endX; i++) {
    for (let j = startY; j < endY; j++) {
      out.data[i + j * array2D.width] = value;
    }
  }

  return out;
}

/**
 * Creates an [[Array2D]] from rectangular slice of `array2d`.
 *
 * ```typescript
 * let a1 = Array2D.create(10, 10, "a");
 *
 * // Copy the top left slice into a new Array2D
 * let a2 = Array2D.slice(a1, 0, 0, 5, 5);
 * ```
 *
 * @template T The element type of `array2D`
 * @param x The top left x coordinate of the slice
 * @param y The top left y coordinate of the slice
 * @param width The width of the slice
 * @param height The height of the slice
 * @return The sliced rectangle as an [[Array2D]]
 */
export function slice<T>(
  array2D: Array2D<T>,
  x: number,
  y: number,
  width: number,
  height: number
) {
  let newArray2D = create(width, height);

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let oldIndex = (x + i) + (y + j) * array2D.width;
      let newIndex = i + j * newArray2D.width;
      newArray2D.data[newIndex] = array2D.data[oldIndex];
    }
  }

  return newArray2D;
}

/**
 * Maps over `array2D` with a function to create a new [[Array2D]].
 *
 * This works like [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 * but rather than having a single index passed into the callback, both
 * x and y coordinates are provided.
 *
 * ```typescript
 * let a = Array2D.from2DArray([
 *   [0, 1, 2],
 *   [3, 4, 5]
 * ]);
 *
 * // Create a new Array2D by incrementing the value of each element
 * let b = Array2D.map(a, n => n + 1);
 * ```
 *
 * @template T The element type of `array2D`
 * @template U The element type of the returned [[Array2D]]
 * @param callback A function that takes a value of type `T` and returns a value of type `U`
 */
export function map<T, U>(
  array2D: Array2D<T>,
  callback: (item: T, x: number, y: number) => U,
): Array2D<U> {
  let data = array2D.data.map((value, index) => {
    let x = index % array2D.width;
    let y = Math.floor(index / array2D.width);
    return callback(value, x, y);
  });

  return {
    width: array2D.width,
    height: array2D.height,
    data,
  };
}

export function fromString(str: string): Array2D<any> {
  let lines = str.trim().split("\n");
  let height = lines.length;
  let width = lines[0].trim().length;
  let out = create<string>(width, height);

  for (let y = 0; y < height; y++) {
    let line = lines[y].trim();
    for (let x = 0; x < width; x++) {
      let ch = line[x];
      set(out, x, y, ch);
    }
  }

  return out;
}

export function toString(array2D: Array2D<any>, separator = ""): string {
  let out = "";

  for (let y = 0; y < array2D.height; y++) {
    for (let x = 0; x < array2D.width; x++) {
      let v = get(array2D, x, y);
      out += v;
      out += separator;
    }

    if (y < array2D.height - 1) {
      out += "\n";
    }
  }

  return out;
}

export function transpose<T>(array2D: Array2D<T>): Array2D<T> {
  let { data, width, height } = array2D;
  let out = create<T>(height, width);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      out.data[y + x * height] = data[x + y * width];
    }
  }

  return out;
}

export function rotateRight90<T>(array2D: Array2D<T>): Array2D<T> {
  let { data, width, height } = array2D;
  let out = create<T>(height, width);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let _y = height - 1 - y;
      out.data[_y + x * height] = data[x + y * width];
    }
  }

  return out;
}

export function rotateLeft90<T>(array2D: Array2D<T>): Array2D<T> {
  let { data, width, height } = array2D;
  let out = create<T>(height, width);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let _x = width - 1 - x;
      out.data[y + _x * height] = data[x + y * width];
    }
  }

  return out;
}

export function inBounds(array2D: Array2D<any>, x: number, y: number): boolean {
  return (
    x >= 0 &&
    y >= 0 &&
    x < array2D.width &&
    y < array2D.height
  );
}
