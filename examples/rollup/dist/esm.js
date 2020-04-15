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
const ORIGIN = Object.freeze({ x: 0, y: 0 });

/**
 * @typedef Rectangle
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 */

/**
 * Construct a rectangle from x and y coordinates and a width and height.
 *
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {Rectangle}
 */
function from(x, y, width, height) {
  return { x, y, width, height };
}

console.log(from(0, 0, 10, 10));
