import * as Point from "./point";
import * as Vector from "./vector";

describe("Point", () => {
  it("should recognise points", () => {
    expect(Point.is({ x: 0, y: 0 })).toBe(true);
    expect(Point.is(true)).toBe(false);
    expect(Point.is(null)).toBe(false);
    expect(Point.is({ x: 0 })).toBe(false);
    expect(Point.is({ x: true, y: 0 })).toBe(false);
  });

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

  it("should interpolate new point between points", () => {
    let p1 = Point.from(0, 0);
    let p2 = Point.from(10, 10);
    let p3 = Point.interpolate(p1, p2, 0.5);
    expect(p3).toEqual({ x: 5, y: 5 });
  });

  it("should floor a point", () => {
    let p1 = Point.from(0.2, 0.9);
    Point.floor(p1);
    expect(p1).toEqual({ x: 0, y: 0 });
  });

  it("should create a floored point from a point", () => {
    let p1 = Point.from(0.2, 0.9);
    let p2 = Point.floored(p1);
    expect(p2).not.toBe(p1);
    expect(p2).toEqual({ x: 0, y: 0 });
  });

  it("should ceil a point", () => {
    let p1 = Point.from(0.2, 0.9);
    Point.ceil(p1);
    expect(p1).toEqual({ x: 1, y: 1 });
  });

  it("should create a floored point from a point", () => {
    let p1 = Point.from(0.2, 0.9);
    let p2 = Point.ceiled(p1);
    expect(p2).not.toBe(p1);
    expect(p2).toEqual({ x: 1, y: 1 });
  });

  it("should return the moore neighbours", () => {
    let p = Point.from(5, 10);
    let ns = Point.mooreNeighbours(p);
    expect(ns).toEqual([
      Point.from(4, 9),
      Point.from(5, 9),
      Point.from(6, 9),
      Point.from(4, 10),
      Point.from(6, 10),
      Point.from(4, 11),
      Point.from(5, 11),
      Point.from(6, 11),
    ]);
  });

  it("should return the von neumann neighbours", () => {
    let p = Point.from(5, 10);
    let ns = Point.vonNeumannNeighbours(p);
    expect(ns).toEqual([
      Point.from(5, 9),
      Point.from(4, 10),
      Point.from(6, 10),
      Point.from(5, 11),
    ]);
  });

  test.each([
    [Point.from(3, 3), Point.ORIGIN, Point.from(3, 3)],
    [Point.from(1, 2), Point.from(3, 4), Point.from(4, 6)],
  ])("%o relative to %o is %o", (point, origin, expected) => {
    let actual = Point.relativeTo(point, origin);
    expect(actual).toEqual(expected)
  });

  test.each([
    [Point.from(3, 3), Point.ORIGIN, Point.from(3, 3)],
    [Point.from(2, 4), Point.from(1, 2), Point.from(1, 2)],
  ])("%o relative from %o is %o ", (point, origin, expected) => {
    let actual = Point.relativeFrom(point, origin);
    expect(actual).toEqual(expected)
  });
});
