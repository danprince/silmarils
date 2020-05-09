import type { Point } from "./point";
import type { Vector } from "./vector";

/**
 *
 */
export interface Circle {
  x: number,
  y: number,
  radius: number,
}

/**
 * Construct a circle from the X and Y coordinates of its center and
 * it's radius.
 */
export function from(x: number, y: number, radius: number): Circle {
  return { x, y, radius };
}

/**
 * Create a copy of a circle that can be modified separately.
 */
export function clone(circle: Circle): Circle {
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
 */
export function equals(c1: Circle, c2: Circle): boolean {
  return c1 === c2 || (
    c1.x === c2.x &&
    c1.y === c2.y &&
    c1.radius === c2.radius
  );
}

/**
 * Calculate the diameter of the circle.
 */
export function diameter(circle: Circle): number {
  return circle.radius * 2;
}

/**
 * Calculate the area of the circle.
 */
export function area(circle: Circle): number {
  return Math.PI * Math.pow(circle.radius, 2);
}

/**
 * Get the point at the center of the circle.
 */
export function center(circle: Circle): Point {
  return { x: circle.x, y: circle.y };
}

/**
 * Check whether two circles intersect.
 */
export function intersects(c1: Circle, c2: Circle): boolean {
  let distance = Math.hypot(c2.x - c1.x, c2.y - c1.y);
  return distance <= c1.radius + c2.radius;
}

/**
 * Check whether a circle contains a point.
 */
export function contains(circle: Circle, point: Point): boolean {
  return Math.hypot(circle.x - point.x, circle.y - point.y) <= circle.radius;
}

/**
 * Translate a circle by a vector.
 *
 * This modifies the circle. Use [[translated]] if you want to create
 * a new circle.
 */
export function translate(circle: Circle, vector: Vector) {
  circle.x += vector[0];
  circle.y += vector[1];
}

/**
 * Translate a circle by a vector.
 *
 * This creates a new circle. Use [[translate]] if you want to modify
 * the circle instead.
 */
export function translated(circle: Circle, vector: Vector) {
  return {
    x: circle.x + vector[0],
    y: circle.y + vector[1],
    radius: circle.radius,
  };
}
