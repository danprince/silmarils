/**
 * Vector represents a direction and a magnitude.
 *
 * @typedef {[number, number]} Vector
 */

/**
 * Create a vector from X and Y components.
 *
 * @param {number} x
 * @param {number} y
 * @return {Vector}
 */
export function from(x, y) {
  return [x, y];
}

/**
 * Create a vector from start and end points.
 *
 * @param {import("./point").Point} start
 * @param {import("./point").Point} end
 * @return {Vector}
 */
export function fromPoints(start, end) {
  return [
    end.x - start.x,
    end.y - start.y,
  ];
}

/**
 * Create a vector from an angle and a length.
 *
 * @param {number} radians
 * @param {number} length
 * @return {Vector}
 */
export function fromAngle(radians, length) {
  return [
    Math.cos(radians) * length,
    Math.sin(radians) * length
  ];
}

/**
 * Create a copy of a vector that can be modified separately.
 *
 * @param {Vector} vector
 * @return {Vector}
 */
export function clone(vector) {
  return [vector[0], vector[1]];
}

/**
 * Check whether two vectors are equal. Vectors are equal if both of
 * their components are the same.
 *
 * @param {Vector} v1
 * @param {Vector} v2
 * @return {boolean}
 */
export function equals(v1, v2) {
  return v1 === v2 || (v1[0] === v2[0] && v1[1] === v2[1]);
}

/**
 * Calculate the magnitude of a vector.
 *
 * @param {Vector} vector
 * @return {number}
 */
export function length(vector) {
  return Math.hypot(vector[0], vector[1]);
}

/**
 * Find the Manhattan distance of the vector.
 *
 * @param {Vector} vector
 * @return {number}
 */
export function manhattan(vector) {
  return Math.abs(vector[0]) + Math.abs(vector[1]);
}

/**
 * Find the Chebyshev distance of the vector.
 *
 * @param {Vector} vector
 * @return {number}
 */
export function chebyshev(vector) {
  return Math.max(
    Math.abs(vector[0]),
    Math.abs(vector[1])
  );
}

/**
 * Calculate the dot product of two vectors.
 *
 * @param {Vector} v1
 * @param {Vector} v2
 * @return {number}
 */
export function dot(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1];
}

/**
 * Adds two vectors.
 *
 * @param {Vector} v1
 * @param {Vector} v2
 * @return {Vector}
 */
export function add(v1, v2) {
  return [
    v1[0] + v2[0],
    v1[1] + v2[1],
  ];
}

/**
 * Subtracts two vectors.
 *
 * @param {Vector} v1
 * @param {Vector} v2
 * @return {Vector}
 */
export function subtract(v1, v2) {
  return [
    v1[0] - v2[0],
    v1[1] - v2[1],
  ];
}

/**
 * Multiplies two vectors.
 *
 * @param {Vector} v1
 * @param {Vector} v2
 * @return {Vector}
 */
export function multiply(v1, v2) {
  return [
    v1[0] * v2[0],
    v1[1] * v2[1],
  ];
}

/**
 * Divides two vectors.
 *
 * @param {Vector} v1
 * @param {Vector} v2
 * @return {Vector}
 */
export function divide(v1, v2) {
  return [
    v1[0] / v2[0],
    v1[1] / v2[1],
  ];
}

/**
 * Normalize a vector to have a length of 1.
 *
 * This function modifies the vector. Use [[normalized]] if you want to
 * produce a new vector.
 *
 * @param {Vector} vector
 * @return {void}
 */
export function normalize(vector) {
  let len = 1 / Math.hypot(vector[0], vector[1]);
  vector[0] *= len;
  vector[1] *= len;
}

/**
 * Construct a new normalized vector.
 *
 * This function produces a new vector. Use [[normalize]] if you want to
 * modify the vector in place.
 *
 * @param {Vector} vector
 * @return {Vector}
 */
export function normalized(vector) {
  let len = 1 / Math.hypot(vector[0], vector[1]);

  return [
    vector[0] * len,
    vector[1] * len,
  ];
}

/**
 * Rotate a vector.
 *
 * This function modifies the vector. Use [[rotated]] if you want to
 * produce a new vector.
 *
 * @param {Vector} vector
 * @param {number} radians
 * @return {void}
 */
export function rotate(vector, radians) {
  let cos = Math.cos(radians);
  let sin = Math.sin(radians);
  vector[0] = cos * vector[0] - sin * vector[1];
  vector[1] = sin * vector[0] + cos * vector[1];
}

/**
 * Construct a new rotated vector.
 *
 * This function produces a new vector. Use [[rotate]] if you want to
 * modify the vector in place.
 *
 * @param {Vector} vector
 * @param {number} radians
 * @return {Vector}
 */
export function rotated(vector, radians) {
  let cos = Math.cos(radians);
  let sin = Math.sin(radians);

  return [
    cos * vector[0] - sin * vector[1],
    sin * vector[0] + cos * vector[1],
  ];
}

/**
 * Scale a vector.
 *
 * This function modifies the vector. Use [[scaled]] if you want to
 * produce a new vector.
 *
 * @param {Vector} vector
 * @param {number} scale
 * @return {void}
 */
export function scale(vector, scale) {
  vector[0] *= scale;
  vector[1] *= scale;
}

/**
 * Construct a new scaled vector.
 *
 * This function produces a new vector. Use [[scale]] if you want to
 * modify the vector in place.
 *
 * @param {Vector} vector
 * @param {number} scale
 * @return {Vector}
 */
export function scaled(vector, scale) {
  return [
    vector[0] * scale,
    vector[1] * scale,
  ];
}

// TODO: Add rounding functions
// export function ceil(vector) {}
// export function ceiled(vector) {}
// export function floor(vector) {}
// export function floored(vector) {}
// export function round(vector) {}
// export function rounded(vector) {}
