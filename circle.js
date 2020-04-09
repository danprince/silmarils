/**
 * @typedef Circle
 * @property {number} x
 * @property {number} y
 * @property {number} radius
 */

/**
 * Construct a circle from the X and Y coordinates of its center and
 * it's radius.
 *
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @return {Circle}
 */
export function from(x, y, radius) {
  return { x, y, radius };
}

/**
 * Create a copy of a circle that can be modified separately.
 *
 * @param {Circle} circle
 * @return {Circle}
 */
export function clone(circle) {
  return {
    x: circle.x,
    y: circle.y,
    radius: circle.radius,
  };
}

/**
 * Check whether two circles are equal.
 *
 * Circles are considered equal if their center coordinates and radii
 * are the same.
 *
 * @param {Circle} c1
 * @param {Circle} c2
 * @return {boolean}
 */
export function equals(c1, c2) {
  return c1 === c2 || (
    c1.x === c2.x &&
    c1.y === c2.y &&
    c1.radius === c2.radius
  );
}

/**
 * Calculate the diameter of the circle.
 *
 * @param {Circle} circle
 * @return {number}
 */
export function diameter(circle) {
  return circle.radius * 2;
}

/**
 * Calculate the area of the circle.
 *
 * @param {Circle} circle
 * @return {number}
 */
export function area(circle) {
  return Math.PI * Math.pow(circle.radius, 2);
}

/**
 * Get the point at the center of the circle.
 *
 * @param {Circle} circle
 * @return {import("./point").Point}
 */
export function center(circle) {
  return { x: circle.x, y: circle.y };
}

/**
 * Check whether two circles intersect.
 *
 * @param {Circle} c1
 * @param {Circle} c2
 * @return {boolean}
 */
export function intersects(c1, c2) {
  let distance = Math.hypot(c2.x - c1.x, c2.y - c1.y);
  return distance <= c1.radius + c2.radius;
}

/**
 * Check whether a circle contains a point.
 *
 * @param {Circle} circle
 * @param {import("./point").Point} point
 * @return {boolean}
 */
export function contains(circle, point) {
  return Math.hypot(circle.x - point.x, circle.y - point.y) <= circle.radius;
}
