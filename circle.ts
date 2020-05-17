import type { Point } from "./point";
import type { Vector } from "./vector";

/**
 *
 */
export interface Circle {
  /**
   * The x coordinate for the center of the circle
   */
  x: number,

  /**
   * The y coordinate for the center of the circle
   */
  y: number,

  /**
   * The radius of the circle
   */
  radius: number,
}

/**
 * Determines whether `value` is a [[Circle]].
 */
export function is(value: any): value is Circle {
  return (
    value != null &&
    typeof value === "object" &&
    typeof value.x === "number" &&
    typeof value.y === "number" &&
    typeof value.radius === "number"
  );
}

/**
 * Creates a circle given the x, y coordinates of the center and its radius.
 *
 * @category Constructor
 */
export function from(x: number, y: number, radius: number): Circle {
  return { x, y, radius };
}

/**
 * Creates a copy of `circle` that can be modified separately.
 */
export function clone(circle: Circle): Circle {
  return {
    x: circle.x,
    y: circle.y,
    radius: circle.radius,
  };
}

/**
 * Determines whether `c1` and `c2` are equal.
 *
 * Circles are considered equal if their center coordinates and radii
 * are the same.
 */
export function equals(c1: Circle, c2: Circle): boolean {
  return c1 === c2 || (
    c1.x === c2.x &&
    c1.y === c2.y &&
    c1.radius === c2.radius
  );
}

/**
 * Calculates the diameter of `circle`.
 */
export function diameter(circle: Circle): number {
  return circle.radius * 2;
}

/**
 * Calculates the area of `circle`.
 */
export function area(circle: Circle): number {
  return Math.PI * Math.pow(circle.radius, 2);
}

/**
 * Gets the [[Point]] at the center of `circle`.
 */
export function center(circle: Circle): Point {
  return { x: circle.x, y: circle.y };
}

/**
 * Determines whether `c1` and `c2` intersect.
 */
export function intersects(c1: Circle, c2: Circle): boolean {
  let distance = Math.hypot(c2.x - c1.x, c2.y - c1.y);
  return distance <= c1.radius + c2.radius;
}

/**
 * Determines whether `circle` contains `point`.
 */
export function contains(circle: Circle, point: Point): boolean {
  return Math.hypot(circle.x - point.x, circle.y - point.y) <= circle.radius;
}

/**
 * Translates `circle` by `vector`.
 *
 * This modifies the circle. Use [[translated]] if you want to create
 * a new circle.
 *
 * @category Transform
 */
export function translate(circle: Circle, vector: Vector) {
  circle.x += vector[0];
  circle.y += vector[1];
}

/**
 * Translates a circle by a vector.
 *
 * This creates a new circle. Use [[translate]] if you want to modify
 * the circle instead.
 *
 * @category Transform
 * @return The translated circle
 */
export function translated(circle: Circle, vector: Vector) {
  return {
    x: circle.x + vector[0],
    y: circle.y + vector[1],
    radius: circle.radius,
  };
}
