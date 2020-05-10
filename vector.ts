import type { Point } from "./point";

/**
 * Vector represents a direction and a magnitude.
 */
export type Vector = [number, number];

/**
 * Creates a vector from X and Y components.
 *
 * @category Constructors
 */
export function from(x: number, y: number): Vector {
  return [x, y];
}

/**
 * Creates a vector from `start` and `end` points.
 *
 * @category Constructors
 */
export function fromPoints(start: Point, end: Point): Vector {
  return [
    end.x - start.x,
    end.y - start.y,
  ];
}

/**
 * Creates a vector from an angle and a length.
 *
 * @category Constructors
 * @param radians Angle in radians
 */
export function fromAngle(radians: number, length: number) {
  return [
    Math.cos(radians) * length,
    Math.sin(radians) * length
  ];
}

/**
 * Creates a copy of `vector` that can be modified separately.
 *
 * @category Constructors
 */
export function clone(vector: Vector): Vector {
  return [vector[0], vector[1]];
}

/**
 * Check whether `v1` and `v2` are equal.
 *
 * Vectors are equal if both of their components are the equal.
 */
export function equals(v1: Vector, v2: Vector): boolean {
  return v1 === v2 || (v1[0] === v2[0] && v1[1] === v2[1]);
}

/**
 * Calculates the magnitude of a vector.
 *
 * @category Length
 */
export function length(vector: Vector): number {
  return Math.hypot(vector[0], vector[1]);
}

/**
 * Calculates the [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry)
 * of `vector`.
 *
 * @category Length
 */
export function manhattan(vector: Vector): number {
  return Math.abs(vector[0]) + Math.abs(vector[1]);
}

/**
 * Calculates the [Chebyshev distance](https://en.wikipedia.org/wiki/Chebyshev_distance)
 * of `vector`.
 *
 * @category Length
 */
export function chebyshev(vector: Vector): number {
  return Math.max(
    Math.abs(vector[0]),
    Math.abs(vector[1])
  );
}

/**
 * Calculates the dot product of `v1` and `v2`.
 */
export function dot(v1: Vector, v2: Vector): number {
  return v1[0] * v2[0] + v1[1] * v2[1];
}

/**
 * Adds `v1` and `v2` to create a new vector.
 */
export function add(v1: Vector, v2: Vector): Vector {
  return [
    v1[0] + v2[0],
    v1[1] + v2[1],
  ];
}

/**
 * Subtracts `v2` from `v1` to create a new vector.
 */
export function subtract(v1: Vector, v2: Vector): Vector {
  return [
    v1[0] - v2[0],
    v1[1] - v2[1],
  ];
}

/**
 * Multiplies `v1` and `v2` to create a new vector.
 */
export function multiply(v1: Vector, v2: Vector): Vector {
  return [
    v1[0] * v2[0],
    v1[1] * v2[1],
  ];
}

/**
 * Divides `v1` by `v2` to create a new vector.
 */
export function divide(v1: Vector, v2: Vector): Vector {
  return [
    v1[0] / v2[0],
    v1[1] / v2[1],
  ];
}

/**
 * Normalizes `vector` to have a [[length]] of 1.
 *
 * This function modifies `vector`. Use [[normalized]] if you want to
 * produce a new vector.
 */
export function normalize(vector: Vector) {
  let len = 1 / Math.hypot(vector[0], vector[1]);
  vector[0] *= len;
  vector[1] *= len;
}

/**
 * Creates a new vector by normalizing `vector`.
 *
 * Use [[normalize]] if you want to normalize `vector` in place.
 */
export function normalized(vector: Vector): Vector {
  let len = 1 / Math.hypot(vector[0], vector[1]);

  return [
    vector[0] * len,
    vector[1] * len,
  ];
}

/**
 * Rotates `vector`.
 *
 * This function modifies `vector`. Use [[rotated]] if you want to
 * produce a new vector.
 *
 * @category Transform
 * @param radians Rotation angle in radians
 */
export function rotate(vector: Vector, radians: number) {
  let cos = Math.cos(radians);
  let sin = Math.sin(radians);
  vector[0] = cos * vector[0] - sin * vector[1];
  vector[1] = sin * vector[0] + cos * vector[1];
}

/**
 * Creates a new rotated vector.
 *
 * Use [[rotate]] if you want to rotate `vector` in place.
 *
 * @category Transform
 * @param radians Rotation angle in radians
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
 * Scales a vector in-place.
 *
 * This function modifies `vector`. Use [[scaled]] if you want to
 * produce a new vector.
 *
 * @category Transform
 * @param scale Scaling factor
 */
export function scale(vector: Vector, scale: number) {
  vector[0] *= scale;
  vector[1] *= scale;
}

/**
 * Creates a new scaled vector.
 *
 * This function produces a new vector. Use [[scale]] if you want to
 * scale `vector` in-place.
 *
 * @category Transform
 * @param scale Scaling factor
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
