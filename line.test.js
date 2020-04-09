import * as Line from "./line.js";
import * as Point from "./point.js";

describe("Line", () => {
  it("should create a line", () => {
    let l = Line.from(0, 1, 2, 3);
    expect(l).toEqual({ x1: 0, y1: 1, x2: 2, y2: 3 });
  });

  it("should create a line from points", () => {
    let p1 = Point.from(0, 1);
    let p2 = Point.from(2, 3);
    let l = Line.fromPoints(p1, p2);
    expect(l).toEqual({ x1: 0, y1: 1, x2: 2, y2: 3 });
  });

  it("should clone a line", () => {
    let l1 = Line.from(0, 1, 2, 3);
    let l2 = Line.clone(l1);
    expect(l2).toEqual(l1);
    expect(l2).not.toBe(l1);
  });

  it("should reconise equal lines", () => {
    let l1 = Line.from(0, 1, 2, 3);
    let l2 = Line.from(0, 1, 2, 3);
    let l3 = Line.from(9, 7, 2, 3);
    expect(Line.equals(l1, l2)).toBe(true);
    expect(Line.equals(l1, l3)).toBe(false);
  });

  it("should find the length of a line", () => {
    let l1 = Line.from(0, 0, 5, 0);
    let l2 = Line.from(0, 0, 0, -5);
    let l3 = Line.from(5, 5, 10, 10);
    expect(Line.length(l1)).toBeCloseTo(5);
    expect(Line.length(l2)).toBeCloseTo(5);
    expect(Line.length(l3)).toBeCloseTo(7.071);
  });

  it("should get the center point of a line", () => {
    let l = Line.from(0, 1, 2, 3);
    expect(Line.center(l)).toEqual({ x: 1, y: 2 });
  });

  it("should get the start point of a line", () => {
    let l = Line.from(0, 1, 2, 3);
    expect(Line.start(l)).toEqual({ x: 0, y: 1 });
  });

  it("should get the end point of a line", () => {
    let l = Line.from(0, 1, 2, 3);
    expect(Line.end(l)).toEqual({ x: 2, y: 3 });
  });
});
