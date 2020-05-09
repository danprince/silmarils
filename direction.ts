import type { Vector } from "./vector";
import * as Angle from "./angle";

export type CardinalDirection =
  | typeof NORTH
  | typeof EAST
  | typeof SOUTH
  | typeof WEST

export type IntercardinalDirection =
  | typeof NORTH_EAST
  | typeof NORTH_WEST
  | typeof SOUTH_EAST
  | typeof SOUTH_WEST

export type Direction =
  | CardinalDirection
  | IntercardinalDirection

// Cardinal directions
export const NORTH = "north";
export const EAST = "east";
export const SOUTH = "south";
export const WEST = "west";

// Intercardinal directions
export const NORTH_EAST = "north-east";
export const NORTH_WEST = "north-west";
export const SOUTH_EAST = "south-east";
export const SOUTH_WEST = "south-west";

/**
 * Find the approximate direction from an angle in radians.
 */
export function fromAngle(radians: number): Direction {
  let normalized = Angle.normalize(radians) / (2 * Math.PI);
  let index = Math.round(normalized * 8);

  switch (index) {
    case 0: return NORTH;
    case 1: return NORTH_EAST;
    case 2: return EAST;
    case 3: return SOUTH_EAST;
    case 4: return SOUTH;
    case 5: return SOUTH_WEST;
    case 6: return WEST;
    case 7: return NORTH_WEST;
    case 8: return NORTH;
  }
}

/**
 * Find the approximate cardinal direction from an angle in radians.
 */
export function cardinalFromAngle(radians: number): CardinalDirection {
  let normalized = Angle.normalize(radians) / (2 * Math.PI);
  let index = Math.round(normalized * 4);

  switch (index) {
    case 0: return NORTH;
    case 1: return EAST;
    case 2: return SOUTH;
    case 3: return WEST;
    case 4: return NORTH;
  }
}

/**
 * Get the angle of a given direction.
 *
 * @return Angle in radians
 */
export function toAngle(direction: Direction): number {
  switch (direction) {
    case NORTH: return 0;
    case NORTH_EAST: return Math.PI * 0.25;
    case EAST: return Math.PI * 0.5;
    case SOUTH_EAST: return Math.PI * 0.75;
    case SOUTH: return Math.PI;
    case SOUTH_WEST: return Math.PI * 1.25;
    case WEST: return Math.PI * 1.5;
    case NORTH_WEST: return Math.PI * 1.75;
    default: return 0;
  }
}

/**
 * Create a unit vector from a direction.
 */
export function toVector(direction: Direction): Vector {
  // Length of components in diagonal unit vectors
  const u = 0.7071067811865475;

  switch (direction) {
    case NORTH: return [0, -1];
    case SOUTH: return [0, 1];
    case EAST: return [1, 0];
    case WEST: return [-1, 0];
    case NORTH_EAST: return [u, -u];
    case NORTH_WEST: return [-u, -u];
    case SOUTH_EAST: return [u, u];
    case SOUTH_WEST: return [-u, u];
    default: return [0, 0];
  }
}

/**
 * Return an approximate cardinal direction from a vector.
 */
export function cardinalFromVector(vector: Vector): CardinalDirection {
  let absX = Math.abs(vector[0]);
  let absY = Math.abs(vector[1]);

  if (absX > absY) {
    if (vector[0] >= 0) {
      return EAST;
    } else {
      return WEST;
    }
  } else {
    if (vector[1] >= 0) {
      return SOUTH;
    } else {
      return NORTH;
    }
  }
}

/**
 * Return an approximate direction from a vector.
 */
export function fromVector(vector: Vector): Direction {
  let angle = Math.atan2(vector[0], vector[1]);
  let normalized = angle / (2 * Math.PI);
  let index = Math.round(normalized * 8);

  switch (index) {
    case 0: return NORTH;
    case 1: return NORTH_EAST;
    case 2: return EAST;
    case 3: return SOUTH_EAST;
    case 4: return SOUTH;
    case 5: return SOUTH_WEST;
    case 6: return WEST;
    case 7: return NORTH_WEST;
    case 8: return NORTH;
  }
}

/**
 * Rotate a direction by 45 degrees in a clockwise direction.
 */
export function rotateRight45(direction: typeof NORTH): typeof NORTH_EAST;
export function rotateRight45(direction: typeof NORTH_EAST): typeof EAST;
export function rotateRight45(direction: typeof EAST): typeof SOUTH_EAST;
export function rotateRight45(direction: typeof SOUTH_EAST): typeof SOUTH;
export function rotateRight45(direction: typeof SOUTH): typeof SOUTH_WEST;
export function rotateRight45(direction: typeof SOUTH_WEST): typeof WEST;
export function rotateRight45(direction: typeof WEST): typeof NORTH_WEST;
export function rotateRight45(direction: typeof NORTH_WEST): typeof NORTH;
export function rotateRight45(direction: CardinalDirection): IntercardinalDirection
export function rotateRight45(direction: IntercardinalDirection): CardinalDirection
export function rotateRight45(direction: Direction): Direction {
  switch (direction) {
    case NORTH: return NORTH_EAST;
    case NORTH_EAST: return EAST;
    case EAST: return SOUTH_EAST;
    case SOUTH_EAST: return SOUTH;
    case SOUTH: return SOUTH_WEST;
    case SOUTH_WEST: return WEST;
    case WEST: return NORTH_WEST;
    case NORTH_WEST: return NORTH;
  }
}

/**
 * Rotate a direction by 45 degrees in a counterclockwise direction.
 */
export function rotateLeft45(direction: typeof NORTH): typeof NORTH_WEST
export function rotateLeft45(direction: typeof NORTH_WEST): typeof WEST
export function rotateLeft45(direction: typeof WEST): typeof SOUTH_WEST
export function rotateLeft45(direction: typeof SOUTH_WEST): typeof SOUTH
export function rotateLeft45(direction: typeof SOUTH): typeof SOUTH_EAST
export function rotateLeft45(direction: typeof SOUTH_EAST): typeof EAST
export function rotateLeft45(direction: typeof EAST): typeof NORTH_EAST
export function rotateLeft45(direction: CardinalDirection): IntercardinalDirection
export function rotateLeft45(direction: IntercardinalDirection): CardinalDirection
export function rotateLeft45(direction: Direction): Direction {
  switch (direction) {
    case NORTH: return NORTH_WEST;
    case NORTH_WEST: return WEST;
    case WEST: return SOUTH_WEST;
    case SOUTH_WEST: return SOUTH;
    case SOUTH: return SOUTH_EAST;
    case SOUTH_EAST: return EAST;
    case EAST: return NORTH_EAST;
    case NORTH_EAST: return NORTH;
  }
}

/**
 * Rotate a direction by 90 degrees in a clockwise direction.
 */
export function rotateRight90(direction: typeof NORTH): typeof EAST
export function rotateRight90(direction: typeof EAST): typeof SOUTH
export function rotateRight90(direction: typeof SOUTH): typeof WEST
export function rotateRight90(direction: typeof WEST): typeof NORTH
export function rotateRight90(direction: typeof NORTH_EAST): typeof SOUTH_EAST
export function rotateRight90(direction: typeof SOUTH_EAST): typeof SOUTH_WEST
export function rotateRight90(direction: typeof SOUTH_WEST): typeof NORTH_WEST
export function rotateRight90(direction: typeof NORTH_WEST): typeof NORTH_EAST
export function rotateRight90(direction: CardinalDirection): CardinalDirection
export function rotateRight90(direction: IntercardinalDirection): IntercardinalDirection
export function rotateRight90(direction: Direction): Direction {
  switch (direction) {
    case NORTH: return EAST;
    case EAST: return SOUTH;
    case SOUTH: return WEST;
    case WEST: return NORTH;
    case NORTH_EAST: return SOUTH_EAST;
    case SOUTH_EAST: return SOUTH_WEST;
    case SOUTH_WEST: return NORTH_WEST;
    case NORTH_WEST: return NORTH_EAST;
  }
}

/**
 * Rotate a direction by 90 degrees in a counterclockwise direction.
 */
export function rotateLeft90(direction: typeof NORTH): typeof WEST
export function rotateLeft90(direction: typeof WEST): typeof SOUTH
export function rotateLeft90(direction: typeof SOUTH): typeof EAST
export function rotateLeft90(direction: typeof EAST): typeof NORTH
export function rotateLeft90(direction: typeof NORTH_EAST): typeof NORTH_WEST
export function rotateLeft90(direction: typeof NORTH_WEST): typeof SOUTH_WEST
export function rotateLeft90(direction: typeof SOUTH_WEST): typeof SOUTH_EAST
export function rotateLeft90(direction: typeof SOUTH_EAST): typeof NORTH_EAST
export function rotateLeft90(direction: CardinalDirection): CardinalDirection
export function rotateLeft90(direction: IntercardinalDirection): IntercardinalDirection
export function rotateLeft90(direction: Direction): Direction {
  switch (direction) {
    case NORTH: return WEST;
    case WEST: return SOUTH;
    case SOUTH: return EAST;
    case EAST: return NORTH;
    case NORTH_EAST: return NORTH_WEST;
    case NORTH_WEST: return SOUTH_WEST;
    case SOUTH_WEST: return SOUTH_EAST;
    case SOUTH_EAST: return NORTH_EAST;
  }
}

/**
 * Rotate a direction by 180 degrees.
 */
export function rotate180(direction: typeof NORTH): typeof SOUTH
export function rotate180(direction: typeof SOUTH): typeof NORTH
export function rotate180(direction: typeof EAST): typeof WEST
export function rotate180(direction: typeof WEST): typeof EAST
export function rotate180(direction: typeof NORTH_EAST): typeof SOUTH_WEST
export function rotate180(direction: typeof NORTH_WEST): typeof SOUTH_EAST
export function rotate180(direction: typeof SOUTH_EAST): typeof NORTH_WEST
export function rotate180(direction: typeof SOUTH_WEST): typeof NORTH_EAST
export function rotate180(direction: CardinalDirection): CardinalDirection
export function rotate180(direction: IntercardinalDirection): IntercardinalDirection
export function rotate180(direction: Direction): Direction {
  switch (direction) {
    case NORTH: return SOUTH;
    case SOUTH: return NORTH;
    case EAST: return WEST;
    case WEST: return EAST;
    case NORTH_EAST: return SOUTH_WEST;
    case NORTH_WEST: return SOUTH_EAST;
    case SOUTH_EAST: return NORTH_WEST;
    case SOUTH_WEST: return NORTH_EAST;
  }
}
