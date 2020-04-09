import * as Vector from "./vector.js";
import * as Point from "./point.js";

describe("Vector", () => {
  it("should create a vector", () => {
    expect(Vector.from(10, 10))
  });

  it("should create a vector from two points", () => {
    let p1 = Point.from(0, 0);
    let p2 = Point.from(0, 10);
    let v = Vector.fromPoints(p1, p2);
    expect(v).toEqual([0, 10]);
  });

  it.skip("should create a vector from an angle and length", () => {
    let v = Vector.fromAngle(Math.PI, 5);
    expect(v).toEqual([5, 0]);
  });

  it("should clone a vector", () => {
    let v1 = Vector.from(1, 2);
    let v2 = Vector.clone(v1);
    expect(v2).toEqual(v1);
    expect(v2).not.toBe(v1);
  });

  it("should recognise equal vectors", () => {
    let v1 = Vector.from(0.5, 0);
    let v2 = Vector.from(0.5, 0);
    let v3 = Vector.from(0.5, 100);
    expect(Vector.equals(v1, v2)).toBe(true);
    expect(Vector.equals(v1, v3)).toBe(false);
  });

  it("should calculate the length of a vector", () => {
    expect(Vector.length([0, 0])).toBe(0);
    expect(Vector.length([10, 0])).toBe(10);
    expect(Vector.length([-10, -10])).toBeCloseTo(14.1421);
  });

  it("should find the dot product", () => {
    expect(Vector.dot([10, 10], [20, 20])).toBe(400);
  });

  it("should add vectors", () => {
    expect(Vector.add([1, 2], [1, 2])).toEqual([2, 4]);
  });

  it("should subtract vectors", () => {
    expect(Vector.subtract([2, 4], [1, 2])).toEqual([1, 2]);
  });

  it("should multiply vectors", () => {
    expect(Vector.multiply([2, 4], [1, 2])).toEqual([2, 8]);
  });

  it("should divide vectors", () => {
    expect(Vector.divide([6, 8], [2, 4])).toEqual([3, 2]);
  });

  it("should normalize a vector", () => {
    let v = Vector.from(10, 0);
    Vector.normalize(v);
    expect(v).toEqual([1, 0]);
  });

  it("should create a normalized copy", () => {
    let v1 = Vector.from(10, 0);
    let v2 = Vector.normalized(v1);
    expect(v1).toEqual([10, 0]);
    expect(v2).toEqual([1, 0]);
  });

  it("should rotate a vector", () => {
    let v = Vector.from(10, 0);
    Vector.rotate(v, Math.PI);
    expect(v[0]).toBeCloseTo(-10);
    expect(v[1]).toBeCloseTo(0);
  });

  it("should create a rotated copy", () => {
    let v1 = Vector.from(10, 0);
    let v2 = Vector.rotated(v1, Math.PI);

    expect(v1[0]).toBeCloseTo(10);
    expect(v1[1]).toBeCloseTo(0);

    expect(v2[0]).toBeCloseTo(-10);
    expect(v2[1]).toBeCloseTo(0);
  });

  it("should scale a vector", () => {
    let v = Vector.from(2, 4);
    Vector.scale(v, 2);
    expect(v).toEqual([4, 8]);
  });

  it("should create a scaled copy", () => {
    let v1 = Vector.from(2, 4);
    let v2 = Vector.scaled(v1, 2);
    expect(v1).toEqual([2, 4]);
    expect(v2).toEqual([4, 8]);
  });
});
