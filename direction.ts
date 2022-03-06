import type { Vector } from "./vector";
import * as Angle from "./angle";

export type North = "north";
export type East = "east";
export type South = "south";
export type West = "west";

export type NorthEast = "north-east";
export type NorthWest = "north-west";
export type SouthEast = "south-east";
export type SouthWest = "south-west";

/**
 * The four points on a compass.
 */
export type CardinalDirection =
  | North
  | East
  | South
  | West

/**
 * The directions between the cardinal directions.
 */
export type IntercardinalDirection =
  | NorthEast
  | NorthWest
  | SouthEast
  | SouthWest

/**
 * A cardinal or intercardinal direction.
 */
export type Direction =
  | CardinalDirection
  | IntercardinalDirection

/**
 * @category Cardinal
 */
export const NORTH: North = "north";

/**
 * @category Cardinal
 */
export const EAST: East = "east";

/**
 * @category Cardinal
 */
export const SOUTH: South = "south";

/**
 * @category Cardinal
 */
export const WEST: West = "west";

/**
 * @category Intercardinal
 */
export const NORTH_EAST: NorthEast = "north-east";

/**
 * @category Intercardinal
 */
export const NORTH_WEST: NorthWest = "north-west";

/**
 * @category Intercardinal
 */
export const SOUTH_EAST: SouthEast = "south-east";

/**
 * @category Intercardinal
 */
export const SOUTH_WEST: SouthWest = "south-west";

export const CARDINAL_DIRECTIONS: CardinalDirection[] = [NORTH, EAST, SOUTH, WEST];
export const INTERCARDINAL_DIRECTIONS: IntercardinalDirection[] = [NORTH_EAST, SOUTH_EAST, SOUTH_WEST, NORTH_WEST];
export const DIRECTIONS: Direction[] = [NORTH, NORTH_EAST, EAST, SOUTH_EAST, SOUTH, SOUTH_WEST, WEST, NORTH_WEST];

/**
 * Calculates the approximate direction from an angle in radians.
 *
 * ```typescript
 * Direction.fromAngle(0) // Direction.NORTH
 * Direction.fromAngle(Math.PI) // Direction.SOUTH
 * ```
 *
 * @category Angle
 * @param radians Angle in radians
 * @return Approximate direction
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
    default: return NORTH;
  }
}

/**
 * Calculates the approximate [[CardinalDirection]] from an angle in
 * radians.
 *
 * If you want to find the nearest direction of any type, use [[fromAngle]].
 *
 * ```typescript
 * Direction.fromAngle(0) // Direction.NORTH
 * Direction.fromAngle(Math.PI) // Direction.SOUTH
 * ```
 *
 * @category Angle
 * @param radians Angle in radians
 * @return Approximate cardinal direction
 */
export function cardinalFromAngle(radians: number): CardinalDirection {
  let normalized = Angle.normalize(radians) / (2 * Math.PI);
  let index = Math.round(normalized * 4);

  switch (index) {
    case 0: return NORTH;
    case 1: return EAST;
    case 2: return SOUTH;
    case 3: return WEST;
    default: return NORTH;
  }
}

/**
 * Calculates the angle of a given direction.
 *
 * ```typescript
 * Direction.toAngle(Direction.NORTH) // 0
 * Direction.toAngle(Direction.SOUTH) // Math.PI
 * ```
 *
 * @category Angle
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
 * Creates a unit vector from a direction.
 *
 * @category Vector
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
 * Returns the approximate direction from a vector.
 *
 * @category Vector
 */
export function fromVector(vector: Vector): Direction {
  let angle = Math.atan2(vector[0], vector[1]) + Math.PI;
  let normalized = angle / (2 * Math.PI);
  let index = Math.floor(normalized * 7);

  switch (index) {
    case 0: return NORTH_WEST;
    case 1: return WEST;
    case 2: return SOUTH_WEST;
    case 3: return SOUTH;
    case 4: return SOUTH_EAST;
    case 5: return EAST;
    case 6: return NORTH_EAST;
    default: return NORTH;
  }
}

/**
 * Returns the approximate cardinal direction of a vector.
 *
 * @category Vector
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
 * Rotates a direction by 45 degrees in a clockwise direction.
 *
 * @category Rotation
 */
export function rotateRight45(direction: North): NorthEast;
export function rotateRight45(direction: NorthEast): East;
export function rotateRight45(direction: East): SouthEast;
export function rotateRight45(direction: SouthEast): South;
export function rotateRight45(direction: South): SouthWest;
export function rotateRight45(direction: SouthWest): West;
export function rotateRight45(direction: West): NorthWest;
export function rotateRight45(direction: NorthWest): North;
export function rotateRight45(direction: CardinalDirection): IntercardinalDirection
export function rotateRight45(direction: IntercardinalDirection): CardinalDirection
export function rotateRight45(direction: Direction): Direction
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
 * Rotates a direction by 45 degrees in a counterclockwise direction.
 *
 * @category Rotation
 */
export function rotateLeft45(direction: North): NorthWest
export function rotateLeft45(direction: NorthWest): West
export function rotateLeft45(direction: West): SouthWest
export function rotateLeft45(direction: SouthWest): South
export function rotateLeft45(direction: South): SouthEast
export function rotateLeft45(direction: SouthEast): East
export function rotateLeft45(direction: East): NorthEast
export function rotateLeft45(direction: CardinalDirection): IntercardinalDirection
export function rotateLeft45(direction: IntercardinalDirection): CardinalDirection
export function rotateLeft45(direction: Direction): Direction
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
 * Rotates a direction by 90 degrees in a clockwise direction.
 *
 * @category Rotation
 */
export function rotateRight90(direction: North): East
export function rotateRight90(direction: East): South
export function rotateRight90(direction: South): West
export function rotateRight90(direction: West): North
export function rotateRight90(direction: NorthEast): SouthEast
export function rotateRight90(direction: SouthEast): SouthWest
export function rotateRight90(direction: SouthWest): NorthWest
export function rotateRight90(direction: NorthWest): NorthEast
export function rotateRight90(direction: CardinalDirection): CardinalDirection
export function rotateRight90(direction: IntercardinalDirection): IntercardinalDirection
export function rotateRight90(direction: Direction): Direction
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
 * Rotates a direction by 90 degrees in a counterclockwise direction.
 *
 * @category Rotation
 */
export function rotateLeft90(direction: North): West
export function rotateLeft90(direction: West): South
export function rotateLeft90(direction: South): East
export function rotateLeft90(direction: East): North
export function rotateLeft90(direction: NorthEast): NorthWest
export function rotateLeft90(direction: NorthWest): SouthWest
export function rotateLeft90(direction: SouthWest): SouthEast
export function rotateLeft90(direction: SouthEast): NorthEast
export function rotateLeft90(direction: CardinalDirection): CardinalDirection
export function rotateLeft90(direction: IntercardinalDirection): IntercardinalDirection
export function rotateLeft90(direction: Direction): Direction
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
 * Rotates a direction by 180 degrees.
 *
 * @category Rotation
 */
export function rotate180(direction: North): South
export function rotate180(direction: South): North
export function rotate180(direction: East): West
export function rotate180(direction: West): East
export function rotate180(direction: NorthEast): SouthWest
export function rotate180(direction: NorthWest): SouthEast
export function rotate180(direction: SouthEast): NorthWest
export function rotate180(direction: SouthWest): NorthEast
export function rotate180(direction: CardinalDirection): CardinalDirection
export function rotate180(direction: IntercardinalDirection): IntercardinalDirection
export function rotate180(direction: Direction): Direction
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
