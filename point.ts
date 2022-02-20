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
 * Determines whether `value` is a [[Point]].
 */
export function is(value: any): value is Point {
  return (
    value != null &&
    typeof value === "object" &&
    typeof value.x === "number" &&
    typeof value.y === "number"
  );
}

/**
 * Creates a point from its X and Y coordinates.
 *
 * @category Constructor
 */
export function from(x: number, y: number): Point {
  return { x, y };
}

/**
 * Creates a copy of `point`.
 */
export function clone(point: Point): Point {
  return { x: point.x, y: point.y };
}

/**
 * Determines whether `p1` and `p2` are equal.
 *
 * Points are considered equal if their X and Y coordinates are both
 * equal.
 */
export function equals(p1: Point, p2: Point): boolean {
  return p1 === p2 || (
    p1.x === p2.x &&
    p1.y === p2.y
  );
}

/**
 * Calculates the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance)
 * between `p1` and `p2`.
 *
 * @category Distance
 */
export function distance(p1: Point, p2: Point): number {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

/**
 * Calculates the [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry)
 * between `p1` and `p2`.
 *
 * @category Distance
 */
export function manhattan(p1: Point, p2: Point): number {
  return Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y);
}

/**
 * Calculates the [Chebyshev distance](https://en.wikipedia.org/wiki/Chebyshev_distance)
 * between `p1` and `p2`.
 *
 * @category Distance
 */
export function chebyshev(p1: Point, p2: Point) {
  return Math.max(Math.abs(p2.x - p1.x), Math.abs(p2.y - p1.y));
}

/**
 * Translates `point` by `vector`.
 *
 * This modifies `point`. Use [[translated]] to create a new point.
 *
 * @category Transform
 */
export function translate(point: Point, vector: Vector) {
  point.x += vector[0];
  point.y += vector[1];
}

/**
 * Translates `point` by `vector`.
 *
 * This creates a new point. Use [[translate]] if you want to modify
 * `point` instead.
 *
 * @category Transform
 */
export function translated(point: Point, vector: Vector) {
  return {
    x: point.x + vector[0],
    y: point.y + vector[1],
  };
}

/**
 * Interpolate a new point on the line between `p1` and `p2`.
 */
export function interpolate(p1: Point, p2: Point, value: number) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;

  return {
    x: p1.x + dx * value,
    y: p1.y + dy * value,
  };
}

/**
 * Rounds the coordinates in `point` down.
 *
 * This creates a new point. Use [[floor]] if you want to modify `point` instead.
 */ 
export function floored(point: Point) {
  return {
    x: Math.floor(point.x),
    y: Math.floor(point.y),
  };
}

/**
 * Rounds the coordinates in `point` down.
 *
 * This modifies `point`. Use [[floored]] to create a new point.
 */
export function floor(point: Point) {
  point.x = Math.floor(point.x);
  point.y = Math.floor(point.y);
}

/**
 * Rounds the coordinates in `point` up.
 *
 * This creates a new point. Use [[ceil]] if you want to modify `point` instead.
 */ 
export function ceiled(point: Point) {
  return {
    x: Math.ceil(point.x),
    y: Math.ceil(point.y),
  };
}

/**
 * Rounds the coordinates in `point` up.
 *
 * This modifies `point`. Use [[ceiled]] to create a new point.
 */
export function ceil(point: Point) {
  point.x = Math.ceil(point.x);
  point.y = Math.ceil(point.y);
}

/**
 * Returns the adjacent 8-points from the Moore neighbourhood.
 * Assumes the point a rounded grid coordinate.
 *
 * @see https://en.wikipedia.org/wiki/Moore_neighborhood
 */
export function mooreNeighbours(point: Point): Point[] {
  let { x, y } = point;
  return [
    { x: x - 1, y: y - 1 },
    { x: x - 0, y: y - 1 },
    { x: x + 1, y: y - 1 },
    { x: x - 1, y: y - 0 },
    { x: x + 1, y: y - 0 },
    { x: x - 1, y: y + 1 },
    { x: x - 0, y: y + 1 },
    { x: x + 1, y: y + 1 },
  ];
}

/**
 * Returns the adjacent 4-points from the Von Neumann neighbourhood.
 * Assumes the point a rounded grid coordinate.
 *
 * @see https://en.wikipedia.org/wiki/Von_Neumann_neighborhood
 */
export function vonNeumannNeighbours(point: Point): Point[] {
  let { x, y } = point;
  return [
    { x: x - 0, y: y - 1 },
    { x: x - 1, y: y - 0 },
    { x: x + 1, y: y - 0 },
    { x: x - 0, y: y + 1 },
  ];
}
