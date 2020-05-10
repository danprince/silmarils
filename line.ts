import type { Point } from "./point";
import type { Vector } from "./vector";

/**
 *
 */
export interface Line {
  /**
   * The x coordinate for the line's start point
   */
  x1: number,

  /**
   * The y coordinate for the line's start point
   */
  y1: number,

  /**
   * The x coordinate for the line's end point
   */
  x2: number,

  /**
   * The y coordinate for the line's end point
   */
  y2: number,
}

/**
 * Creates a line from the coordinates of its start and end.
 *
 * @category Constructor
 */
export function from(x1: number, y1: number, x2: number, y2: number): Line {
  return { x1, y1, x2, y2 };
}

/**
 * Creates a line from start and end points.
 *
 * @category Constructor
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
 * Creates a copy of `line`.
 */
export function clone(line: Line): Line {
  return { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 };
}

/**
 * Determines whether `l1` and `l2` are equal.
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
 * Calculates the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance)
 * between the end points of `line`.
 *
 * @category Length
 */
export function length(line: Line): number {
  return Math.hypot(line.x2 - line.x1, line.y2 - line.y1);
}

/**
 * Calculates the [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry)
 * between the end points of `line`.
 *
 * @category Length
 */
export function manhattan(line: Line): number {
  return Math.abs(line.x2 - line.x1) + Math.abs(line.y2 - line.y1);
}

/**
 * Calculates the [Chebyshev distance](https://en.wikipedia.org/wiki/Chebyshev_distance)
 * between the end points of `line`.
 *
 * @category Length
 */
export function chebyshev(line: Line): number {
  return Math.max(
    Math.abs(line.x2 - line.x1),
    Math.abs(line.y2 - line.y1)
  );
}

/**
 * Gets the start point of `line`.
 */
export function start(line: Line): Point {
  return { x: line.x1, y: line.y1 };
}

/**
 * Gets the center point of `line`.
 */
export function center(line: Line): Point {
  return {
    x: line.x1 + (line.x2 - line.x1) / 2,
    y: line.y1 + (line.y2 - line.y1) / 2,
  };
}

/**
 * Get the end point of `line`.
 */
export function end(line: Line): Point {
  return { x: line.x2, y: line.y2 };
}

/**
 * Translates `line` by `vector`.
 *
 * This modifies `line`. Use [[`translated`]] if you want to create
 * a new line instead.
 */
export function translate(line: Line, vector: Vector) {
  line.x1 += vector[0];
  line.y1 += vector[1];
  line.x2 += vector[0];
  line.y2 += vector[1];
}

/**
 * Translates `line` by `vector`.
 *
 * This creates a new line. Use [[translate]] if you want to modify
 * `line` instead.
 */
export function translated(line: Line, vector: Vector): Line {
  return {
    x1: line.x1 + vector[0],
    y1: line.y1 + vector[1],
    x2: line.x2 + vector[0],
    y2: line.y2 + vector[1],
  };
}
