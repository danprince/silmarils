import type { Vector } from "./vector";

/**
 * Point represents a position in 2d space and is defined by its X and
 * Y coordinates.
 */
export interface Point {
  x: number,
  y: number,
}

/**
 * The origin is the point at 0, 0. It cannot be modified.
 */
export const ORIGIN = Object.freeze({ x: 0, y: 0 });

/**
 * Construct a point from its X and Y coordinates.
 */
export function from(x: number, y: number): Point {
  return { x, y };
}

/**
 * Create a copy of a point that can be modified separately.
 */
export function clone(point: Point): Point {
  return { x: point.x, y: point.y };
}

/**
 * Check whether two points are equal. Points are considered equal if
 * their X and Y coordinates are both equal.
 */
export function equals(p1: Point, p2: Point): boolean {
  return p1 === p2 || (
    p1.x === p2.x &&
    p1.y === p2.y
  );
}

/**
 * Calculate the Euclidean distance between two points.
 */
export function distance(p1: Point, p2: Point): number {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

/**
 * Calculate the Manhattan distance between two points.
 */
export function manhattan(p1: Point, p2: Point): number {
  return Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y);
}

/**
 * Calculate the Chebyshev distance between two points.
 */
export function chebyshev(p1: Point, p2: Point) {
  return Math.max(Math.abs(p2.x - p1.x), Math.abs(p2.y - p1.y));
}

/**
 * Translate a point by a vector.
 *
 * This modifies the point. Use [[translated]] to create a new point.
 */
export function translate(point: Point, vector: Vector) {
  point.x += vector[0];
  point.y += vector[1];
}

/**
 * Translate a point by a vector.
 *
 * This creates a new point. Use [[translate]] if you want to modify
 * the point instead.
 */
export function translated(point: Point, vector: Vector) {
  return {
    x: point.x + vector[0],
    y: point.y + vector[1],
  };
}

/**
 * Interpolate a new point between on the line between two points.
 */
export function interpolate(p1: Point, p2: Point, value: number) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;

  return {
    x: p1.x + dx * value,
    y: p1.y + dy * value,
  };
}
