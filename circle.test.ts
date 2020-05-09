import * as Circle from "./circle";
import * as Point from "./point";
import * as Vector from "./vector";

describe("Circle", () => {
  it("should create a circle", () => {
    expect(Circle.from(0, 1, 2)).toEqual({ x: 0, y: 1, radius: 2 });
  });

  it("should clone a circle", () => {
    let c1 = Circle.from(0, 1, 2);
    let c2 = Circle.clone(c1);
    expect(c2).toEqual(c1);
    expect(c2).not.toBe(c1);
  });

  it("should recognise equal circles", () => {
    let c1 = Circle.from(0, 1, 2);
    let c2 = Circle.from(0, 1, 2);
    let c3 = Circle.from(2, 1, 0);
    expect(Circle.equals(c1, c2)).toBe(true);
    expect(Circle.equals(c1, c3)).toBe(false);
  });

  it("should calculate diameter of circle", () => {
    let c1 = Circle.from(0, 1, 2);
    expect(Circle.diameter(c1)).toBe(4);
  });

  it("should calculate area of circle", () => {
    let c1 = Circle.from(0, 1, 2);
    expect(Circle.area(c1)).toBeCloseTo(12.5663);
  });

  it("should get the center point of a circle", () => {
    let c1 = Circle.from(0, 1, 2);
    expect(Circle.center(c1)).toEqual({ x: 0, y: 1 });
  });

  it("should recognise when circles intersect", () => {
    expect(
      Circle.intersects(
        Circle.from(0, 0, 10),
        Circle.from(5, 5, 10),
      )
    ).toBe(true);
  });

  it("should recongise when circles do not intersect", () => {
    expect(
      Circle.intersects(
        Circle.from(0, 0, 5),
        Circle.from(20, 20, 5),
      )
    ).toBe(false);
  });

  it("should recognise when a circle contains a point", () => {
    expect(
      Circle.contains(
        Circle.from(0, 0, 10),
        Point.from(3, 3)
      )
    ).toBe(true);
  });

  it("should recognise when a circle does not contain a point", () => {
    expect(
      Circle.contains(
        Circle.from(0, 0, 10),
        Point.from(30, 3)
      )
    ).toBe(false);
  });

  it("should translate a circle by a vector", () => {
    let c = Circle.from(1, 2, 3);
    let v = Vector.from(1, 2);
    Circle.translate(c, v);
    expect(c).toEqual(Circle.from(2, 4, 3));
  });

  it("should create a translated circle from a vector", () => {
    let v = Vector.from(1, 2);
    let c1 = Circle.from(1, 2, 3);
    let c2 = Circle.translated(c1, v);
    expect(c1).toEqual(Circle.from(1, 2, 3));
    expect(c2).toEqual(Circle.from(2, 4, 3));
  });
});
