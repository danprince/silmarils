import * as Angle from "./angle.js";

/**
 * @typedef {(
 *   typeof NORTH |
 *   typeof EAST |
 *   typeof SOUTH |
 *   typeof WEST
 * )} CardinalDirection
 *
 * @typedef {(
 *   typeof NORTH_EAST |
 *   typeof NORTH_WEST |
 *   typeof SOUTH_EAST |
 *   typeof SOUTH_WEST
 * )} IntercardinalDirection
 *
 * @typedef {CardinalDirection | IntercardinalDirection} Direction
 */

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
 *
 * @param {number} radians
 * @return {Direction}
 */
export function fromAngle(radians) {
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
 *
 * @param {number} radians
 * @return {CardinalDirection}
 */
export function cardinalFromAngle(radians) {
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
 * @param {Direction} direction
 * @return {number} Angle in radians
 */
export function toAngle(direction) {
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
 *
 * @param {Direction} direction
 * @return {import("./vector").Vector}
 */
export function toVector(direction) {
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
 * Create a cardinal direction from a vector.
 *
 * @param {import("./vector").Vector} vector
 * @return {CardinalDirection}
 */
export function cardinalFromVector(vector) {
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
 * Create a direction from a vector.
 *
 * @param {import("./vector").Vector} vector
 * @return {Direction}
 */
export function fromVector(vector) {
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
 *
 * TODO: Fix types so that if a CardinalDirection goes in, an
 * IntercardinalDirection is returned and vice versa.
 *
 * @param {Direction} direction
 * @return {Direction}
 */
export function rotateRight45(direction) {
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
 *
 * TODO: Fix types so that if a CardinalDirection goes in, an
 * IntercardinalDirection is returned and vice versa.
 *
 * @param {Direction} direction
 * @return {Direction}
 */
export function rotateLeft45(direction) {
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
 *
 * TODO: Fix types so that if a CardinalDirection goes in, a
 * CardinalDirection is returned and the same for IntercardinalDirection.
 *
 * @param {Direction} direction
 * @return {Direction}
 */
export function rotateRight90(direction) {
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
 *
 * TODO: Fix types so that if a CardinalDirection goes in, a
 * CardinalDirection is returned and the same for IntercardinalDirection.
 *
 * @param {Direction} direction
 * @return {Direction}
 */
export function rotateLeft90(direction) {
  switch (direction) {
    case NORTH: return WEST;
    case EAST: return NORTH;
    case SOUTH: return EAST;
    case WEST: return SOUTH;
    case NORTH_EAST: return NORTH_WEST;
    case SOUTH_EAST: return NORTH_EAST;
    case SOUTH_WEST: return SOUTH_EAST;
    case NORTH_WEST: return SOUTH_WEST;
  }
}

/**
 * Rotate a direction by 180 degrees.
 *
 * TODO: Fix types so that if a CardinalDirection goes in, a
 * CardinalDirection is returned and the same for IntercardinalDirection.
 *
 * @param {Direction} direction
 * @return {Direction}
 */
export function rotate180(direction) {
  switch (direction) {
    case NORTH: return SOUTH;
    case EAST: return WEST;
    case SOUTH: return NORTH;
    case WEST: return EAST;
    case NORTH_EAST: return SOUTH_WEST;
    case SOUTH_EAST: return NORTH_WEST;
    case SOUTH_WEST: return NORTH_EAST;
    case NORTH_WEST: return SOUTH_EAST;
  }
}
