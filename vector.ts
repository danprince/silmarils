import type { Point } from "./point";

/**
 * Vector represents a direction and a magnitude.
 */
export type Vector = [number, number];

/**
 * Create a vector from X and Y components.
 */
export function from(x: number, y: number): Vector {
  return [x, y];
}

/**
 * Create a vector from start and end points.
 */
export function fromPoints(start: Point, end: Point): Vector {
  return [
    end.x - start.x,
    end.y - start.y,
  ];
}

/**
 * Create a vector from an angle and a length.
 */
export function fromAngle(radians: number, length: number) {
  return [
    Math.cos(radians) * length,
    Math.sin(radians) * length
  ];
}

/**
 * Create a copy of a vector that can be modified separately.
 */
export function clone(vector: Vector): Vector {
  return [vector[0], vector[1]];
}

/**
 * Check whether two vectors are equal. Vectors are equal if both of
 * their components are the same.
 */
export function equals(v1: Vector, v2: Vector): boolean {
  return v1 === v2 || (v1[0] === v2[0] && v1[1] === v2[1]);
}

/**
 * Calculate the magnitude of a vector.
 */
export function length(vector: Vector): number {
  return Math.hypot(vector[0], vector[1]);
}

/**
 * Find the Manhattan distance of the vector.
 */
export function manhattan(vector: Vector): number {
  return Math.abs(vector[0]) + Math.abs(vector[1]);
}

/**
 * Find the Chebyshev distance of the vector.
 */
export function chebyshev(vector: Vector): number {
  return Math.max(
    Math.abs(vector[0]),
    Math.abs(vector[1])
  );
}

/**
 * Calculate the dot product of two vectors.
 */
export function dot(v1: Vector, v2: Vector): number {
  return v1[0] * v2[0] + v1[1] * v2[1];
}

/**
 * Adds two vectors.
 */
export function add(v1: Vector, v2: Vector): Vector {
  return [
    v1[0] + v2[0],
    v1[1] + v2[1],
  ];
}

/**
 * Subtracts the second vector from the first.
 */
export function subtract(v1: Vector, v2: Vector): Vector {
  return [
    v1[0] - v2[0],
    v1[1] - v2[1],
  ];
}

/**
 * Multiplies two vectors.
 */
export function multiply(v1: Vector, v2: Vector): Vector {
  return [
    v1[0] * v2[0],
    v1[1] * v2[1],
  ];
}

/**
 * Divides two vectors.
 */
export function divide(v1: Vector, v2: Vector): Vector {
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
 */
export function normalize(vector: Vector) {
  let len = 1 / Math.hypot(vector[0], vector[1]);
  vector[0] *= len;
  vector[1] *= len;
}

/**
 * Construct a new normalized vector.
 *
 * This function produces a new vector. Use [[normalize]] if you want to
 * modify the vector in place.
 */
export function normalized(vector: Vector): Vector {
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
 */
export function rotate(vector: Vector, radians: number) {
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
 */
export function rotated(vector: Vector, radians: number): Vector {
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
 */
export function scale(vector: Vector, scale: number) {
  vector[0] *= scale;
  vector[1] *= scale;
}

/**
 * Construct a new scaled vector.
 *
 * This function produces a new vector. Use [[scale]] if you want to
 * modify the vector in place.
 */
export function scaled(vector: Vector, scale: number): Vector {
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
