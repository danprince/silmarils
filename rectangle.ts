import type { Point } from "./point";
import type { Vector } from "./vector";

/**
 *
 */
export interface Rectangle {
  x: number,
  y: number,
  width: number,
  height: number,
}

/**
 * Construct a rectangle from x and y coordinates and a width and height.
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
 * Construct a rectangle from its bounds.
 *
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
  return {
    x: x1,
    y: y1,
    width: x2 - x1,
    height: y2 - y1,
  };
}

/**
 * Construct a rectangle from two points.
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
 * Create a copy of a rectangle that can be modified separately.
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
 * Check whether two rectangles are equal. Rectangles are considered
 * equal if they have the same coordinates and dimensions.
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
 * Calculate the area of a rectangle.
 */
export function area(rectangle: Rectangle): number {
  return rectangle.width * rectangle.height;
}

/**
 * Get the center point of a rectangle.
 */
export function center(rectangle: Rectangle): Point {
  return {
    x: rectangle.x + rectangle.width / 2,
    y: rectangle.y + rectangle.height / 2,
  };
}

/**
 * Get the top left point of a rectangle.
 */
export function topLeft(rectangle: Rectangle): Point {
  return {
    x: rectangle.x,
    y: rectangle.y,
  };
}

/**
 * Get the top right point of a rectangle.
 */
export function topRight(rectangle: Rectangle): Point {
  return {
    x: rectangle.x + rectangle.width,
    y: rectangle.y,
  };
}

/**
 * Get the bottom left point of a rectangle.
 */
export function bottomLeft(rectangle: Rectangle): Point {
  return {
    x: rectangle.x,
    y: rectangle.y + rectangle.height,
  };
}

/**
 * Get the bottom right point of a rectangle.
 */
export function bottomRight(rectangle: Rectangle): Point {
  return {
    x: rectangle.x + rectangle.width,
    y: rectangle.y + rectangle.height,
  };
}

/**
 * Check whether two rectangles intersect.
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
 * Check whether a rectangle contains a point.
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
 * Translate a rectangle by a vector.
 *
 * This modifies the rectangle. Use [[translated]] if you want to create
 * a new rectangle.
 */
export function translate(rectangle: Rectangle, vector: Vector) {
  rectangle.x += vector[0];
  rectangle.y += vector[1];
}

/**
 * Translate a rectangle by a vector.
 *
 * This creates a new rectangle. Use [[translate]] if you want to modify
 * the rectangle instead.
 */
export function translated(rectangle: Rectangle, vector: Vector): Rectangle {
  return {
    x: rectangle.x + vector[0],
    y: rectangle.y + vector[1],
    width: rectangle.width,
    height: rectangle.height,
  };
}
