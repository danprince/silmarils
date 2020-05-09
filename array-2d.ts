/**
 *
 */
export interface Array2D<T> {
  width: number,
  height: number,
  data: T[],
}

/**
 *
 */
export function create<T>(width: number, height: number): Array2D<T> {
  return {
    width: width,
    height: height,
    data: new Array(width * height),
  };
}

/**
 *
 */
export function clone<T>(array2D: Array2D<T>): Array2D<T> {
  return {
    width: array2D.width,
    height: array2D.height,
    data: Array.from(array2D.data),
  };
}

/**
 *
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
 *
 */
export function toArray<T>(array2d: Array2D<T>): Array<T> {
  return array2d.data;
}

/**
 *
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
 *
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
 *
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
 *
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
 *
 */
export function set<T>(array2D: Array2D<T>, x: number, y: number, value: T) {
  if (x >= 0 && y >= 0 && x < array2D.width && y < array2D.height) {
    let i = x + y * array2D.width;
    array2D.data[i] = value;
  }
}

/**
 *
 */
export function fill<T>(
  array2D: Array2D<T>,
  item: T,
  startX: number = 0,
  startY: number = 0,
  endX: number = array2D.width,
  endY: number = array2D.height,
) {
  for (let i = startX; i < endX; i++) {
    for (let j = startY; j < endY; j++) {
      array2D.data[i + j * array2D.width] = item;
    }
  }
}

/**
 *
 */
export function filled<T>(
  array2D: Array2D<T>,
  item: T,
  startX: number = 0,
  startY: number = 0,
  endX: number = array2D.width,
  endY: number = array2D.height,
): Array2D<T> {
  let out = clone(array2D);

  for (let i = startX; i < endX; i++) {
    for (let j = startY; j < endY; j++) {
      out.data[i + j * array2D.width] = item;
    }
  }

  return out;
}

/**
 *
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
 *
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
