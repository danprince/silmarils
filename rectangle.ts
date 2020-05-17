import type { Point } from "./point";
import type { Vector } from "./vector";

/**
 *
 */
export interface Rectangle {
  /**
   * The x coordinate of the top left corner of the rectangle.
   */
  x: number,

  /**
   * The y coordinate of the top left corner of the rectangle.
   */
  y: number,

  /**
   * The width of the rectangle.
   */
  width: number,

  /**
   * The height of the rectangle.
   */
  height: number,
}

/**
 * Determines whether `value` is a [[Rectangle]].
 */
export function is(value: any): value is Rectangle {
  return (
    value != null &&
    typeof value === "object" &&
    typeof value.x === "number" &&
    typeof value.y === "number" &&
    typeof value.width === "number" &&
    typeof value.height === "number"
  );
}

/**
 * Creates a rectangle from x and y coordinates and a width and height.
 *
 * @category Constructor
 */
export function from(
  x: number,
  y: number,
  width: number,
  height: number
): Rectangle {
  return { x, y, width, height };
}

/**
 * Creates a rectangle from its bounds.
 *
 * @category Constructor
 * @param x1 The left coordinate
 * @param y1 The top coordinate
 * @param x2 The right coordinate
 * @param y2 The bottom coordinate
 */
export function fromBounds(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): Rectangle {
  // TODO: Need to ensure the rectangle doesn't have negative
  // dimensions.
  return {
    x: x1,
    y: y1,
    width: x2 - x1,
    height: y2 - y1,
  };
}

/**
 * Creates a rectangle from two points.
 *
 * If necessary the coordinates will be flipped to ensure that the
 * resulting rectangle does not have negative dimensions.
 *
 * @category Constructor
 */
export function fromPoints(p1: Point, p2: Point): Rectangle {
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
 * Creates a copy of `rectangle` that can be modified separately.
 */
export function clone(rectangle: Rectangle): Rectangle {
  return {
    x: rectangle.x,
    y: rectangle.y,
    width: rectangle.width,
    height: rectangle.height,
  };
}

/**
 * Determines whether `r1` and `r2` are equal.
 *
 * Rectangles are considered equal if they have the same coordinates
 * and dimensions.
 */
export function equals(r1: Rectangle, r2: Rectangle): boolean {
  return r1 === r2 || (
    r1.x === r2.x &&
    r1.y === r2.y &&
    r1.width === r2.width &&
    r1.height === r2.height
  );
}

/**
 * Calculates the area of `rectangle`.
 */
export function area(rectangle: Rectangle): number {
  return rectangle.width * rectangle.height;
}

/**
 * Gets the center point of `rectangle`.
 *
 * @category Points
 */
export function center(rectangle: Rectangle): Point {
  return {
    x: rectangle.x + rectangle.width / 2,
    y: rectangle.y + rectangle.height / 2,
  };
}

/**
 * Gets the top left point of `rectangle`.
 *
 * @category Points
 */
export function topLeft(rectangle: Rectangle): Point {
  return {
    x: rectangle.x,
    y: rectangle.y,
  };
}

/**
 * Gets the top right point of `rectangle`.
 *
 * @category Points
 */
export function topRight(rectangle: Rectangle): Point {
  return {
    x: rectangle.x + rectangle.width,
    y: rectangle.y,
  };
}

/**
 * Gets the bottom left point of `rectangle`.
 *
 * @category Points
 */
export function bottomLeft(rectangle: Rectangle): Point {
  return {
    x: rectangle.x,
    y: rectangle.y + rectangle.height,
  };
}

/**
 * Gets the bottom right point of `rectangle`.
 *
 * @category Points
 */
export function bottomRight(rectangle: Rectangle): Point {
  return {
    x: rectangle.x + rectangle.width,
    y: rectangle.y + rectangle.height,
  };
}

/**
 * Determines whether `r1` and `r2` intersect.
 */
export function intersects(r1: Rectangle, r2: Rectangle): boolean {
  return (
    (r1.x + r1.width >= r2.x) ||
    (r1.x >= r2.x + r2.width) ||
    (r1.y + r1.height >= r2.y) ||
    (r1.y >= r2.y + r2.height)
  );
}

/**
 * Determines whether `rectangle` contains `point`.
 */
export function contains(rectangle: Rectangle, point: Point): boolean {
  return (
    point.x >= rectangle.x &&
    point.y >= rectangle.y &&
    point.x <= rectangle.x + rectangle.width &&
    point.y <= rectangle.y + rectangle.height
  );
}

/**
 * Translate `rectangle` by a `vector`.
 *
 * This modifies `rectangle`. Use [[`translated`]] if you want to
 * create a new rectangle.
 *
 * @category Transform
 */
export function translate(rectangle: Rectangle, vector: Vector) {
  rectangle.x += vector[0];
  rectangle.y += vector[1];
}

/**
 * Creates a new rectangle by translating `rectangle` by `vector`.
 *
 * Use [[`translate`]] if you want to modify `rectangle` instead.
 *
 * @category Transform
 */
export function translated(rectangle: Rectangle, vector: Vector): Rectangle {
  return {
    x: rectangle.x + vector[0],
    y: rectangle.y + vector[1],
    width: rectangle.width,
    height: rectangle.height,
  };
}
