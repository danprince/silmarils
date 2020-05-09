import type { Point } from "./point";
import type { Vector } from "./vector";

/**
 *
 */
export interface Line {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
}

/**
 * Construct a line from the coordinates of its start and end.
 */
export function from(x1: number, y1: number, x2: number, y2: number): Line {
  return { x1, y1, x2, y2 };
}

/**
 * Construct a line from its start and end points.
 */
export function fromPoints(p1: Point, p2: Point): Line {
  return {
    x1: p1.x,
    y1: p1.y,
    x2: p2.x,
    y2: p2.y,
  };
}

/**
 * Create a copy of a line.
 */
export function clone(line: Line): Line {
  return { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 };
}

/**
 * Check whether two lines are equal.
 *
 * Lines are considered equal if they have the same start and end points.
 */
export function equals(l1: Line, l2: Line): boolean {
  return l1 === l2 || (
    l1.x1 === l2.x1 &&
    l1.y1 === l2.y1 &&
    l1.x2 === l2.x2 &&
    l1.y2 === l2.y2
  );
}

/**
 * Find the length of a line.
 */
export function length(line: Line): number {
  return Math.hypot(line.x2 - line.x1, line.y2 - line.y1);
}

/**
 * Find the Manhattan distance of the line.
 */
export function manhattan(line: Line): number {
  return Math.abs(line.x2 - line.x1) + Math.abs(line.y2 - line.y1);
}

/**
 * Find the Chebyshev distance of the line.
 */
export function chebyshev(line: Line): number {
  return Math.max(
    Math.abs(line.x2 - line.x1),
    Math.abs(line.y2 - line.y1)
  );
}

/**
 * Get the start point of a line.
 */
export function start(line: Line): Point {
  return { x: line.x1, y: line.y1 };
}

/**
 * Get the center point of a line.
 */
export function center(line: Line): Point {
  return {
    x: line.x1 + (line.x2 - line.x1) / 2,
    y: line.y1 + (line.y2 - line.y1) / 2,
  };
}

/**
 * Get the end point of a line.
 */
export function end(line: Line): Point {
  return { x: line.x2, y: line.y2 };
}

/**
 * Translate a line by a vector.
 *
 * This modifies the line. Use [[translated]] if you want to create
 * a new line.
 */
export function translate(line: Line, vector: Vector) {
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
 */
export function translated(line: Line, vector: Vector): Line {
  return {
    x1: line.x1 + vector[0],
    y1: line.y1 + vector[1],
    x2: line.x2 + vector[0],
    y2: line.y2 + vector[1],
  };
}
