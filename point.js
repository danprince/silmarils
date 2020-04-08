/**
 * @typedef Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {Point}
 */
export function from(x, y) {
  return { x, y };
}

/**
 * @param {Point} point
 * @return {Point}
 */
export function clone(point) {
  return { x: point.x, y: point.y };
}

/**
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
 * @param {Point} p1
 * @param {Point} p2
 * @return {number}
 */
export function distance(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

/**
 * @param {Point} point
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
export function translate(point, x, y) {
  point.x += x;
  point.y += y;
}

/**
 * @param {Point} point
 * @param {number} x
 * @param {number} y
 * @return {Point}
 */
export function translated(point, x, y) {
  return {
    x: point.x + x,
    y: point.y + y,
  };
}
