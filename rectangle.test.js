import * as Rectangle from "./rectangle.js";
import * as Point from "./point.js";
import * as Vector from "./vector.js";

describe("Rectangle", () => {
  it("should create a rectangle", () => {
    let r = Rectangle.from(0, 1, 2, 3);
    expect(r).toEqual({ x: 0, y: 1, width: 2, height: 3 });
  });

  it("should create a rectangle from bounds", () => {
    let r = Rectangle.fromBounds(0, 1, 2, 4);
    expect(r).toEqual({ x: 0, y: 1, width: 2, height: 3 });
  });

  it("should create a rectangle from points", () => {
    let p1 = Point.from(1, 1);
    let p2 = Point.from(5, 5);
    let r = Rectangle.fromPoints(p1, p2);
    expect(r).toEqual({ x: 1, y: 1, width: 4, height: 4 });
  });

  it("should rearrange points to create rectangle with positive dimensions", () => {
    let p1 = Point.from(1, 1);
    let p2 = Point.from(5, 5);
    let r = Rectangle.fromPoints(p2, p1);
    expect(r).toEqual({ x: 1, y: 1, width: 4, height: 4 });
  });

  it("should clone a rectangle", () => {
    let r1 = Rectangle.from(0, 0, 1, 1);
    let r2 = Rectangle.clone(r1);
    expect(r1).toEqual(r2);
    expect(r1).not.toBe(r2);
  });

  it("should recognise equal rectangles", () => {
    let r1 = Rectangle.from(0, 0, 1, 1);
    let r2 = Rectangle.from(0, 0, 1, 1);
    let r3 = Rectangle.from(0, 0, 1, 9);
    expect(Rectangle.equals(r1, r2)).toBe(true);
    expect(Rectangle.equals(r1, r3)).toBe(false);
  });

  it("should calculate the rectangle's area", () => {
    let r = Rectangle.from(0, 0, 3, 2);
    expect(Rectangle.area(r)).toBe(6);
  });

  it("should get the center point of a rectangle", () => {
    let r = Rectangle.from(0, 0, 8, 6);
    let p = Rectangle.center(r);
    expect(p).toEqual({ x: 4, y: 3 });
  });

  it("should get the top left point of a rectangle", () => {
    let r = Rectangle.from(0, 0, 8, 6);
    let p = Rectangle.topLeft(r);
    expect(p).toEqual({ x: 0, y: 0 });
  });

  it("should get the top right point of a rectangle", () => {
    let r = Rectangle.from(0, 0, 8, 6);
    let p = Rectangle.topRight(r);
    expect(p).toEqual({ x: 8, y: 0 });
  });

  it("should get the bottom left point of a rectangle", () => {
    let r = Rectangle.from(0, 0, 8, 6);
    let p = Rectangle.bottomLeft(r);
    expect(p).toEqual({ x: 0, y: 6 });
  });

  it("should get the bottom right point of a rectangle", () => {
    let r = Rectangle.from(0, 0, 8, 6);
    let p = Rectangle.bottomRight(r);
    expect(p).toEqual({ x: 8, y: 6 });
  });

  it("should recognise when rectangles intersect", () => {
    expect(
      Rectangle.intersects(
        Rectangle.from(0, 0, 50, 50),
        Rectangle.from(25, 25, 50, 50),
      )
    ).toBe(true);
  });

  it("should recognise when rectangles do not intersect", () => {
    expect(
      Rectangle.intersects(
        Rectangle.from(0, 0, 2, 2),
        Rectangle.from(4, 4, 2, 2),
      )
    ).toBe(false);
  });

  it("should recognise when a rectangle contains a point", () => {
    expect(
      Rectangle.contains(
        Rectangle.from(0, 0, 5, 5),
        Point.from(2, 2)
      )
    ).toBe(true);
  });

  it("should recognise when a rectangle does not contains a point", () => {
    expect(
      Rectangle.contains(
        Rectangle.from(0, 0, 5, 5),
        Point.from(-2, 2)
      )
    ).toBe(false);
  });

  it("should translate a rectangle by a vector", () => {
    let r = Rectangle.from(1, 2, 3, 4);
    let v = Vector.from(1, 2);
    Rectangle.translate(r, v);
    expect(r).toEqual(Rectangle.from(2, 4, 3, 4));
  });

  it("should create a translated rectangle from a vector", () => {
    let v = Vector.from(1, 2);
    let r1 = Rectangle.from(1, 2, 3, 4);
    let r2 = Rectangle.translated(r1, v);
    expect(r1).toEqual(Rectangle.from(1, 2, 3, 4));
    expect(r2).toEqual(Rectangle.from(2, 4, 3, 4));
  });
});
