import * as Point from "./point.js";
import * as Vector from "./vector.js";

describe("Point", () => {
  it("should create a point", () => {
    let p = Point.from(10, 10);
    expect(p).toEqual({ x: 10, y: 10 });
  });

  it("should clone a point", () => {
    let p = Point.from(10, 10);
    let q = Point.clone(p);
    expect(q).not.toBe(p);
    expect(q).toEqual(p);
  });

  it("should recognise equal points", () => {
    let p = Point.from(20, 10);
    let q = Point.from(20, 10);
    let r = Point.from(0, 0);

    expect(Point.equals(p, p)).toBe(true);
    expect(Point.equals(p, q)).toBe(true);
    expect(Point.equals(p, r)).toBe(false);
  });

  it("should calculate distance between points", () => {
    let a1 = Point.from(0, 0);
    let a2 = Point.from(0, 5);
    expect(Point.distance(a1, a2)).toBe(5);

    let b1 = Point.from(0, 0);
    let b2 = Point.from(3, 0);
    expect(Point.distance(b1, b2)).toBe(3);

    let c1 = Point.from(-2, -2);
    let c2 = Point.from(2, 2);
    expect(Point.distance(c1, c2)).toBe(5.656854249492381);
  });

  it("should calculate manhattan distance between points", () => {
    expect(
      Point.manhattan(
        Point.from(0, 0),
        Point.from(1, 5)
      )
    ).toBe(6);
  });

  it("should calculate chebyshev distance between points", () => {
    expect(
      Point.chebyshev(
        Point.from(0, 0),
        Point.from(1, 5)
      )
    ).toBe(5);
  });

  it("should translate a point by a vector", () => {
    let p = Point.from(10, 10);
    let v = Vector.from(1, -1);
    Point.translate(p, v);
    expect(p).toEqual({ x: 11, y: 9 });
  });

  it("should create a translated point from a vector", () => {
    let p = Point.from(0, 0);
    let v = Vector.from(1, -1);
    let q = Point.translated(p, v);
    expect(p).toEqual({ x: 0, y: 0 });
    expect(q).toEqual({ x: 1, y: -1 });
  });

  it("should have an origin at 0, 0", () => {
    expect(Point.ORIGIN).toEqual({ x: 0, y: 0 });
  });

  it("should not be possible to mutate the origin", () => {
    expect(() => {
      // @ts-ignore
      Point.ORIGIN.x += 1;
    }).toThrow();
  });
});
