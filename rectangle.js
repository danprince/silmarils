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
export function from(x, y, width, height) {
  return { x, y, width, height };
}

/**
 * Construct a rectangle from its bounds.
 *
 * @param {number} x1 The left coordinate
 * @param {number} y1 The top coordinate
 * @param {number} x2 The right coordinate
 * @param {number} y2 The bottom coordinate
 * @return {Rectangle}
 */
export function fromBounds(x1, y1, x2, y2) {
  return {
    x: x1,
    y: y1,
    width: x2 - x1,
    height: y2 - y1,
  };
}

/**
 * Construct a rectangle from two points.
 *
 * @param {import("./point").Point} p1
 * @param {import("./point").Point} p2
 * @return {Rectangle}
 */
export function fromPoints(p1, p2) {
  let x1 = Math.min(p1.x, p2.x);
  let y1 = Math.min(p1.y, p2.y);
  let x2 = Math.max(p1.x, p2.x);
  let y2 = Math.max(p1.y, p2.y);

  return {
    x: x1,
    y: y1,
    width: x2 - x1,
    height: y2 - y1
  };
}

/**
 * Create a copy of a rectangle that can be modified separately.
 *
 * @param {Rectangle} rectangle
 * @return {Rectangle}
 */
export function clone(rectangle) {
  return {
    x: rectangle.x,
    y: rectangle.y,
    width: rectangle.width,
    height: rectangle.height,
  };
}

/**
 * Check whether two rectangles are equal. Rectangles are considered
 * equal if they have the same coordinates and dimensions.
 *
 * @param {Rectangle} r1
 * @param {Rectangle} r2
 * @return {boolean}
 */
export function equals(r1, r2) {
  return r1 === r2 || (
    r1.x === r2.x &&
    r1.y === r2.y &&
    r1.width === r2.width &&
    r1.height === r2.height
  );
}

/**
 * Calculate the area of a rectangle.
 *
 * @param {Rectangle} rectangle
 * @return {number}
 */
export function area(rectangle) {
  return rectangle.width * rectangle.height;
}

/**
 * Get the center point of a rectangle.
 *
 * @param {Rectangle} rectangle
 * @return {import("./point").Point}
 */
export function center(rectangle) {
  return {
    x: rectangle.x + rectangle.width / 2,
    y: rectangle.y + rectangle.height / 2,
  };
}

/**
 * Get the top left point of a rectangle.
 *
 * @param {Rectangle} rectangle
 * @return {import("./point").Point}
 */
export function topLeft(rectangle) {
  return {
    x: rectangle.x,
    y: rectangle.y,
  };
}

/**
 * Get the top right point of a rectangle.
 *
 * @param {Rectangle} rectangle
 * @return {import("./point").Point}
 */
export function topRight(rectangle) {
  return {
    x: rectangle.x + rectangle.width,
    y: rectangle.y,
  };
}

/**
 * Get the bottom left point of a rectangle.
 *
 * @param {Rectangle} rectangle
 * @return {import("./point").Point}
 */
export function bottomLeft(rectangle) {
  return {
    x: rectangle.x,
    y: rectangle.y + rectangle.height,
  };
}

/**
 * Get the bottom right point of a rectangle.
 *
 * @param {Rectangle} rectangle
 * @return {import("./point").Point}
 */
export function bottomRight(rectangle) {
  return {
    x: rectangle.x + rectangle.width,
    y: rectangle.y + rectangle.height,
  };
}

/**
 * Check whether two rectangles intersect.
 *
 * @param {Rectangle} r1
 * @param {Rectangle} r2
 * @return {boolean}
 */
export function intersects(r1, r2) {
  return (
    (r1.x + r1.width >= r2.x) ||
    (r1.x >= r2.x + r2.width) ||
    (r1.y + r1.height >= r2.y) ||
    (r1.y >= r2.y + r2.height)
  );
}

/**
 * Check whether a rectangle contains a point.
 *
 * @param {Rectangle} rectangle
 * @param {import("./point").Point} point
 * @return {boolean}
 */
export function contains(rectangle, point) {
  return (
    point.x >= rectangle.x &&
    point.y >= rectangle.y &&
    point.x <= rectangle.x + rectangle.width &&
    point.y <= rectangle.y + rectangle.height
  );
}
