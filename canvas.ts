/**
 * Resize a canvas for drawing at the appropriate resolution for the
 * current device. This prevents blurry rendering on retina displays.
 *
 * This function only needs to be called once, and only after setting
 * the desired canvas width and height.
 */
export function resize(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  resolution: number = window.devicePixelRatio
): [number, number] {
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = width * resolution;
  canvas.height = height * resolution;
  canvas.getContext("2d").scale(resolution, resolution);
  return [width, height];
}

/**
 * Resize a canvas to fill the screen.
 */
export function resizeToFillScreen(
  canvas: HTMLCanvasElement,
  resolution: number = window.devicePixelRatio
): [number, number] {
  return resize(
    canvas,
    window.innerWidth,
    window.innerHeight,
    resolution,
  );
}
