/**
 * @template T
 * @typedef Array2D
 * @property {number} width
 * @property {number} height
 * @property {T[]} data
 */

/**
 * @template T
 * @param {number} width
 * @param {number} height
 * @return {Array2D<T>}
 */
export function create(width, height) {
  return {
    width: width,
    height: height,
    data: new Array(width * height),
  };
}

/**
 * @template T
 * @param {Array2D<T>} array2D
 * @return {Array2D<T>}
 */
export function clone(array2D) {
  return {
    width: array2D.width,
    height: array2D.height,
    data: Array.from(array2D.data),
  };
}

/**
 * @template T
 * @param {number} width
 * @param {number} height
 * @param {T[]} array
 * @return {Array2D<T>}
 */
export function fromArray(width, height, array) {
  return {
    width: width,
    height: height,
    data: array.slice(0, width * height),
  };
}

/**
 * @template T
 * @param {Array2D<T>} array2d
 * @return {T[]}
 */
export function toArray(array2d) {
  return array2d.data;
}

/**
 * @template T
 * @param {T[][]} array
 * @return {Array2D<T>}
 */
export function from2DArray(array) {
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
 * @template T
 * @param {Array2D<T>} array2D
 * @return {T[][]}
 */
export function to2DArray(array2D) {
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
 * @param {Array2D<any>} a1
 * @param {Array2D<any>} a2
 * @return {boolean}
 */
export function equals(a1, a2) {
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
 * @template T
 * @param {Array2D<T>} array2D
 * @param {number} x
 * @param {number} y
 * @return {T | undefined}
 */
export function get(array2D, x, y) {
  if (x >= 0 && y >= 0 && x < array2D.width && y < array2D.height) {
    let i = x + y * array2D.width;
    return array2D.data[i];
  }
}

/**
 * @template T
 * @param {Array2D<T>} array2D
 * @param {number} x
 * @param {number} y
 * @param {T} value
 * @return {void}
 */
export function set(array2D, x, y, value) {
  if (x >= 0 && y >= 0 && x < array2D.width && y < array2D.height) {
    let i = x + y * array2D.width;
    array2D.data[i] = value;
  }
}

/**
 * @template T
 * @param {Array2D<T>} array2D
 * @param {T} item
 * @param {number} [startX]
 * @param {number} [startY]
 * @param {number} [endX]
 * @param {number} [endY]
 * @return {void}
 */
export function fill(
  array2D,
  item,
  startX = 0,
  startY = 0,
  endX = array2D.width,
  endY = array2D.height,
) {
  for (let i = startX; i < endX; i++) {
    for (let j = startY; j < endY; j++) {
      array2D.data[i + j * array2D.width] = item;
    }
  }
}

/**
 * @template T
 * @param {Array2D<T>} array2D
 * @param {T} item
 * @param {number} [startX]
 * @param {number} [startY]
 * @param {number} [endX]
 * @param {number} [endY]
 * @return {Array2D<T>}
 */
export function filled(
  array2D,
  item,
  startX = 0,
  startY = 0,
  endX = array2D.width,
  endY = array2D.height,
) {
  let out = clone(array2D);

  for (let i = startX; i < endX; i++) {
    for (let j = startY; j < endY; j++) {
      out.data[i + j * array2D.width] = item;
    }
  }

  return out;
}

/**
 * @template T
 * @param {Array2D<T>} array2D
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {Array2D<T>}
 */
export function slice(array2D, x, y, width, height) {
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
 * @template T
 * @template U
 * @param {Array2D<T>} array2D
 * @param {(item: T, x: number, y: number) => U} callback
 * @return {Array2D<U>}
 */
export function map(array2D, callback) {
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
