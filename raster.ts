import type { Line } from "./line";
import type { Circle } from "./circle";
import type { Point } from "./point";
import type { Rectangle } from "./rectangle";

/**
 * Computes the points on a rasterised version of `line` using Bresenham's
 * algorithm.
 *
 * @see https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
 */
export function strokeLine(line: Line): Point[] {
  let points: Point[] = [];
  let { x1, y1, x2, y2 } = line;
  let dx = x2 - x1;
  let dy = y2 - y1;
  let sx = Math.sign(dx);
  let sy = Math.sign(dy);
  let error = 0;

  if (sx === 0 && sy === 0) return [];

  dx = Math.abs(dx);
  dy = Math.abs(dy);

  if (dx > dy) {
    for (let x = x1, y = y1; sx < 0 ? x >= x2 : x <= x2; x += sx) {
      points.push({ x, y });

      error += dy;

      if (error * 2 >= dx) {
        y += sy;
        error -= dx;
      }
    }
  } else {
    for(let x = x1, y = y1; sy < 0 ? y >= y2 : y <= y2; y += sy) {
      points.push({ x, y });

      error += dx;

      if (error * 2 >= dy) {
        x += sx;
        error -= dy;
      }
    }
  }

  return points;
}

/**
 * Returns the points along the outside edge of a rasterised `circle` using
 * Bresenham's algorithm.
 *
 * @see https://en.wikipedia.org/wiki/Midpoint_circle_algorithm
 */
export function strokeCircle(circle: Circle): Point[] {
  let { x, y, radius } = circle;
  if (radius < 1) return [{ x, y }];

  let points: Point[] = [];

  let i = 0;
  let j = radius;
  let d = 3 - 2 * radius;

  while (i <= j) {
    points.push({ x: x + i, y: y + j });
    points.push({ x: x + i, y: y - j });

    if (i !== 0) {
      points.push({ x: x - i, y: y + j });
      points.push({ x: x - i, y: y - j });
    }

    if (i !== j) {
      points.push({ x: x + j, y: y + i });
      points.push({ x: x - j, y: y + i });

      if (i !== 0) {
        points.push({ x: x + j, y: y - i });
        points.push({ x: x - j, y: y - i });
      }
    }


    if (d < 0) {
      d = d + 4 * i + 6;
    } else {
      d = d + 4 * (i - j) + 10;
      j = j - 1;
    }

    i = i + 1;
  }

  return points;
}

/**
 * Returns the points inside a rasterised `circle` using Bresenham's algorithm.
 *
 * @see https://en.wikipedia.org/wiki/Midpoint_circle_algorithm
 */
export function fillCircle(circle: Circle): Point[] {
  let { x, y, radius: r } = circle;
  if (r < 1) return [{ x, y }];

  let points: Point[] = [];
  let i = 0;
  let j = r;
  let d = 3 - 2 * r;

  while (i <= j) {
    for (let lx = -i, ly = -j; ly <= j; ly++) {
      if (Math.abs(ly) >= i) {
        points.push({ x: x + lx, y: y + ly });
      }
    }

    if (i !== 0) {
      for (let lx = i, ly = -j; ly <= j; ly++) {
        if (Math.abs(ly) >= i) {
          points.push({ x: x + lx, y: y + ly });
        }
      }
    }

    if (i !== 0) {
      for (let lx = -j, ly = -i; lx <= j; lx++) {
        if (Math.abs(lx) > i) {
          points.push({ x: x + lx, y: y + ly });
        }
      }
    }

    for (let lx = -j, ly = i; lx <= j; lx++) {
      if (Math.abs(lx) > i) {
        points.push({ x: x + lx, y: y + ly });
      }
    }

    if (d < 0) {
      d = d + 4 * i + 6;
    } else {
      d = d + 4 * (i - j) + 10;
      j = j - 1;
    }

    i = i + 1;
  }

  return points;
}

/**
 * Returns the points along the outside of a rasterised rectangle.
 */
export function strokeRectangle(rect: Rectangle): Point[] {
  let points: Point[] = [];

  for (let i = 0; i < rect.width; i++) {
    points.push({ x: rect.x + i, y: rect.y });
    if (rect.height > 1) {
      points.push({ x: rect.x + i, y: rect.y + rect.height - 1 });
    }
  }

  for (let j = 1; j < rect.height - 1; j++) {
    points.push({ x: rect.x, y: rect.y + j });
    if (rect.width > 1) {
      points.push({ x: rect.x + rect.width - 1, y: rect.y + j });
    }
  }

  return points;
}

/**
 * Returns the points inside a rasterised rectangle.
 */
export function fillRectangle(rect: Rectangle): Point[] {
  let points: Point[] = [];

  for (let j = 0; j < rect.height; j++) {
    for (let i = 0; i < rect.width; i++) {
      points.push({ x: rect.x + i, y: rect.y + j });
    }
  }

  return points;
}
