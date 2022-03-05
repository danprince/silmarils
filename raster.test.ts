import * as Raster from "./raster";
import * as Line from "./line";
import * as Circle from "./circle";
import * as Rectangle from "./rectangle";
import { Point } from "./point";

describe("Raster", () => {
  test.each([
    [0, 0, 0, 0, ``],
    [0, 0, 4, 0, `
    #####
    `],
    [0, 0, 0, 4, `
    #
    #
    #
    #
    #
    `],
    [0, 0, 4, 4, `
    #....
    .#...
    ..#..
    ...#.
    ....#
    `],
    [4, 4, 0, 0, `
    #....
    .#...
    ..#..
    ...#.
    ....#
    `],
    [0, 1, 4, 0, `
    ..###
    ##...
    `],
    [4, 1, 0, 0, `
    ###..
    ...##
    `],
  ])("rasterises line (%i, %i) to (%i, %i)", (x1, y1, x2, y2, str) => {
    let line = Line.from(x1, y1, x2, y2);
    let points = Raster.strokeLine(line);
    assertNoDuplicatePoints(points);
    expect(
      renderPointsToString(points)
    ).toEqual(
      trimExampleWhitespace(str)
    );
  });

  test.each([
    [0, 0, 0, `#`],
    [1, 1, 1, `
      .#.
      #.#
      .#.
    `],
    [2, 2, 2, `
      .###.
      #...#
      #...#
      #...#
      .###.
    `],
    [3, 3, 3, `
      ..###..
      .#...#.
      #.....#
      #.....#
      #.....#
      .#...#.
      ..###..
    `],
  ])("rasterises stroke of circle at (%i, %i) with radius=%i", (x, y, radius, str) => {
    let circle = Circle.from(x, x, radius);
    let points = Raster.strokeCircle(circle);
    assertNoDuplicatePoints(points);
    expect(
      renderPointsToString(points)
    ).toEqual(
      trimExampleWhitespace(str)
    );
  });

  test.each([
    [0, 0, 0, `#`],
    [1, 1, 1, `
      .#.
      ###
      .#.
    `],
    [2, 2, 2, `
      .###.
      #####
      #####
      #####
      .###.
    `],
    [3, 3, 3, `
      ..###..
      .#####.
      #######
      #######
      #######
      .#####.
      ..###..
    `],
  ])("rasterises fill for circle at (%i, %i) with radius=%i", (x, y, radius, str) => {
    let circle = Circle.from(x, y, radius);
    let points = Raster.fillCircle(circle);

    assertNoDuplicatePoints(points);

    expect(
      renderPointsToString(points)
    ).toEqual(
      trimExampleWhitespace(str)
    );
  });

  test.each([
    [0, 0, 0, 0, ``],
    [0, 0, 1, 1, `#`],
    [1, 1, 2, 2, `
      ...
      .##
      .##
    `],
    [1, 1, 3, 5, `
      ....
      .###
      .#.#
      .#.#
      .#.#
      .###
    `],
    [1, 0, 4, 3, `
      .####
      .#..#
      .####
    `],
  ])("rasterises stroke for rectangle (%i, %i, %i, %i)", (x, y, w, h, str) => {
    let rect = Rectangle.from(x, y, w, h);
    let points = Raster.strokeRectangle(rect);

    assertNoDuplicatePoints(points);

    expect(
      renderPointsToString(points)
    ).toEqual(
      trimExampleWhitespace(str)
    );
  });

  test.each([
    [0, 0, 0, 0, ``],
    [0, 0, 1, 1, `#`],
    [1, 1, 2, 2, `
      ...
      .##
      .##
    `],
    [1, 1, 3, 5, `
      ....
      .###
      .###
      .###
      .###
      .###
    `],
    [1, 0, 4, 3, `
      .####
      .####
      .####
    `],
  ])("rasterises stroke for rectangle (%i, %i, %i, %i)", (x, y, w, h, str) => {
    let rect = Rectangle.from(x, y, w, h);
    let points = Raster.fillRectangle(rect);

    assertNoDuplicatePoints(points);

    expect(
      renderPointsToString(points)
    ).toEqual(
      trimExampleWhitespace(str)
    );
  });
});

/**
 * Render a set of points as a string of # and whitespace to make it
 * easier to test.
 */
function renderPointsToString(points: Point[]): string {
  let xs = points.map(p => p.x);
  let ys = points.map(p => p.y);
  let x0 = Math.min(...xs);
  let y0 = Math.min(...ys);
  let x1 = Math.max(...xs);
  let y1 = Math.max(...ys);
  let w = x1 + 1;
  let h = y1 + 1;

  if (x0 < 0 || y0 < 0) {
    throw new Error(`Can't render negative points to string!`);
  }

  let lines: string[][] = [];
  for (let y = 0; y < h; y++) {
    lines[y] = [];
    for (let x = 0; x < w; x++) {
      lines[y][x] = ".";
    }
  }

  for (let point of points) {
    lines[point.y][point.x] = "#";
  }

  return lines.map(line => line.join("")).join("\n");
}

/**
 * Clean up whitespace from an example, so that it can be compared to the
 * output from `renderPointsToString`.
 */
function trimExampleWhitespace(str: string): string {
  return str
    .replace(/ /g, "")
    .replace(/^\n+/g, "")
    .replace(/\n+$/g, "");
}

function assertNoDuplicatePoints(points: Point[]) {
  let seen = new Set<string>();
  for (let point of points) {
    let key = `${point.x}:${point.y}`;
    if (seen.has(key)) {
      console.error(points);
      throw new Error(`Expected no duplicate points! (${key} was found twice)`);
    } else {
      seen.add(key);
    }
  }
}