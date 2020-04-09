/**
 * Point represents a position in 2d space and is defined by its X and
 * Y coordinates.
 *
 * @typedef Point
 * @property {number} x
 * @property {number} y
 */

/**
 * The origin is the point at 0, 0. It cannot be modified.
 */
export const ORIGIN = Object.freeze({ x: 0, y: 0 });

/**
 * Construct a point from its X and Y coordinates.
 *
 * @param {number} x
 * @param {number} y
 * @return {Point}
 */
export function from(x, y) {
  return { x, y };
}

/**
 * Create a copy of a point that can be modified separately.
 *
 * @param {Point} point
 * @return {Point}
 */
export function clone(point) {
  return { x: point.x, y: point.y };
}

/**
 * Check whether two points are equal. Points are considered equal if
 * their X and Y coordinates are both equal.
 *
 * @param {Point} p1
 * @param {Point} p2
 * @return {boolean}
 */
export function equals(p1, p2) {
  return p1 === p2 || (
    p1.x === p2.x &&
    p1.y === p2.y
  );
}

/**
 * Calculate the Euclidean distance between two points.
 *
 * @param {Point} p1
 * @param {Point} p2
 * @return {number}
 */
export function distance(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}
