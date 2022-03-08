import * as Direction from "./direction";
import * as Angle from "./angle";
import * as Vector from "./vector";

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
  ] as [number, Direction.Direction][])(
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
  ] as [number, Direction.Direction][])(
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
  ] as [Direction.Direction, number][])(
    "should return angle for %p -> %p radians",
    (direction, radians) => {
      expect(Direction.toAngle(direction)).toBeCloseTo(radians);
    }
  );

  test.each([
    [Direction.NORTH, [0, -1]],
    [Direction.EAST, [1, 0]],
    [Direction.WEST, [-1, 0]],
    [Direction.SOUTH, [0, 1]],
  ] as [Direction.Direction, Vector.Vector][])(
    "should create a unit vector direction %p -> %p",
    (direction, vector) => {
      expect(Direction.toVector(direction)).toEqual(vector);
    }
  );

  test.each<[Vector.Vector, Direction.Direction]>([
    [[1, 0], Direction.EAST],
    [[0, 1], Direction.SOUTH],
    [[-1, 0], Direction.WEST],
    [[0, -1], Direction.NORTH],
  ])(
    "should create a cardinal direction from a vector %p -> %p",
    (vector, direction) => {
      expect(Direction.cardinalFromVector(vector)).toEqual(direction);
    }
  );

  test.each<[Vector.Vector, Direction.Direction]>([
    [[0, -1], Direction.NORTH],
    [[1, -1], Direction.NORTH_EAST],
    [[1, 0], Direction.EAST],
    [[1, 1], Direction.SOUTH_EAST],
    [[0, 1], Direction.SOUTH],
    [[-1, 1], Direction.SOUTH_WEST],
    [[-1, 0], Direction.WEST],
    [[-1, -1], Direction.NORTH_WEST],
  ])(
    "should create a direction from a vector %p -> %p",
    (vector, direction) => {
      expect(Direction.fromVector(vector)).toEqual(direction);
    }
  );
});
