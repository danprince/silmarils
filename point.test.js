import * as Point from "./point.js";

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

  it("should translate a point", () => {
    let p = Point.from(10, 10);
    Point.translate(p, 1, -1);
    expect(p).toEqual({ x: 11, y: 9 });
  });

  it("should create a translated point", () => {
    let p = Point.from(0, 0);
    let q = Point.translated(p, 1, -1);
    expect(p).toEqual({ x: 0, y: 0 });
    expect(q).toEqual({ x: 1, y: -1 });
  });
});
