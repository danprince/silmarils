import * as Direction from "./direction.js";
import * as Angle from "./angle.js";
import * as Vector from "./vector.js";

describe("Direction", () => {
  it("should have unique values for all directions", () => {
    let directions = new Set([
      Direction.NORTH,
      Direction.EAST,
      Direction.SOUTH,
      Direction.WEST,
      Direction.NORTH_EAST,
      Direction.NORTH_WEST,
      Direction.SOUTH_EAST,
      Direction.SOUTH_WEST,
    ]);

    expect(directions.size).toBe(8);
  });

  test.each([
    [0, Direction.NORTH],
    [90, Direction.EAST],
    [180, Direction.SOUTH],
    [270, Direction.WEST],
    [45, Direction.NORTH_EAST],
    [22, Direction.NORTH],
    [23, Direction.NORTH_EAST],
    [-90, Direction.WEST],
    [450, Direction.EAST],
  ])(
    "should create approximate direction from %p degrees -> %p",
    (degrees, direction) => {
      let radians = Angle.fromDegrees(degrees);
      expect(Direction.fromAngle(radians)).toBe(direction);
    }
  );

  test.each([
    [0, Direction.NORTH],
    [90, Direction.EAST],
    [180, Direction.SOUTH],
    [270, Direction.WEST],
    [45, Direction.EAST],
    [22, Direction.NORTH],
    [23, Direction.NORTH],
    [-90, Direction.WEST],
    [450, Direction.EAST],
  ])(
    "should create approximate cardinal direction from %p degrees -> %p",
    (degrees, direction) => {
      let radians = Angle.fromDegrees(degrees);
      expect(Direction.cardinalFromAngle(radians)).toBe(direction);
    }
  );

  test.each([
    [Direction.NORTH, 0],
    [Direction.NORTH_EAST, Math.PI * 0.25],
    [Direction.EAST, Math.PI * 0.5],
    [Direction.SOUTH_EAST, Math.PI * 0.75],
    [Direction.SOUTH, Math.PI],
    [Direction.SOUTH_WEST, Math.PI * 1.25],
    [Direction.WEST, Math.PI * 1.5],
    [Direction.NORTH_WEST, Math.PI * 1.75],
  ])(
    "should return angle for %p -> %p radians",
    (/** @type {Direction.Direction} */direction, radians) => {
      expect(Direction.toAngle(direction)).toBeCloseTo(radians);
    }
  );

  test.each([
    [Direction.NORTH, [0, -1]],
    [Direction.EAST, [1, 0]],
    [Direction.WEST, [-1, 0]],
    [Direction.SOUTH, [0, 1]],
  ])(
    "should create a unit vector direction %p -> %p",
    (/** @type {Direction.Direction} */direction, vector) => {
      expect(Direction.toVector(direction)).toEqual(vector);
    }
  );

  test.each([
    [[0, -1], Direction.NORTH],
    [[0, -10], Direction.NORTH],
    [[-3, -10], Direction.NORTH],
  ])(
    "should create a cardinal direction from a vector %p -> %p",
    (/** @type {Vector.Vector} */vector, direction) => {
      expect(Direction.cardinalFromVector(vector)).toEqual(direction);
    }
  );
});
