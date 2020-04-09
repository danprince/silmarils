/**
 * @typedef Line
 * @property {number} x1
 * @property {number} y1
 * @property {number} x2
 * @property {number} y2
 */

/**
 * Construct a line from the coordinates of its start and end.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {Line}
 */
export function from(x1, y1, x2, y2) {
  return { x1, y1, x2, y2 };
}

/**
 * Construct a line from its start and end points.
 *
 * @param {import("./point").Point} p1
 * @param {import("./point").Point} p2
 * @return {Line}
 */
export function fromPoints(p1, p2) {
  return {
    x1: p1.x,
    y1: p1.y,
    x2: p2.x,
    y2: p2.y,
  };
}

/**
 * Create a copy of a line.
 *
 * @param {Line} line
 * @return {Line}
 */
export function clone(line) {
  return { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 };
}

/**
 * Check whether two lines are equal.
 *
 * Lines are considered equal if they have the same start and end points.
 *
 * @param {Line} l1
 * @param {Line} l2
 * @return {boolean}
 */
export function equals(l1, l2) {
  return l1 === l2 || (
    l1.x1 === l2.x1 &&
    l1.y1 === l2.y1 &&
    l1.x2 === l2.x2 &&
    l1.y2 === l2.y2
  );
}

/**
 * Find the length of a line.
 *
 * @param {Line} line
 * @return {number}
 */
export function length(line) {
  return Math.hypot(line.x2 - line.x1, line.y2 - line.y1);
}

/**
 * Get the start point of a line.
 *
 * @param {Line} line
 * @return {import("./point").Point}
 */
export function start(line) {
  return { x: line.x1, y: line.y1 };
}

/**
 * Get the center point of a line.
 *
 * @param {Line} line
 * @return {import("./point").Point}
 */
export function center(line) {
  return {
    x: line.x1 + (line.x2 - line.x1) / 2,
    y: line.y1 + (line.y2 - line.y1) / 2,
  };
}

/**
 * Get the end point of a line.
 *
 * @param {Line} line
 * @return {import("./point").Point}
 */
export function end(line) {
  return { x: line.x2, y: line.y2 };
}

/**
 * Translate a line by a vector.
 *
 * This modifies the line. Use [[translated]] if you want to create
 * a new line.
 *
 * @param {Line} line
 * @param {import("./vector").Vector} vector
 * @return {void}
 */
export function translate(line, vector) {
  line.x1 += vector[0];
  line.y1 += vector[1];
  line.x2 += vector[0];
  line.y2 += vector[1];
}

/**
 * Translate a line by a vector.
 *
 * This creates a new line. Use [[translate]] if you want to modify
 * the line instead.
 *
 * @param {Line} line
 * @param {import("./vector").Vector} vector
 * @return {Line}
 */
export function translated(line, vector) {
  return {
    x1: line.x1 + vector[0],
    y1: line.y1 + vector[1],
    x2: line.x2 + vector[0],
    y2: line.y2 + vector[1],
  };
}
