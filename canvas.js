/**
 * Resize a canvas for drawing at the appropriate resolution for the
 * current device. This prevents blurry rendering on retina displays.
 *
 * This function only needs to be called once, and only after setting
 * the desired canvas width and height.
 *
 * @param {HTMLCanvasElement} canvas
 * @param {number} width
 * @param {number} height
 * @param {number} [resolution]
 */
export function resize(
  canvas,
  width,
  height,
  resolution = window.devicePixelRatio
) {
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = width * resolution;
  canvas.height = height * resolution;
  canvas.getContext("2d").scale(resolution, resolution);
  return [width, height];
}

/**
 * Resize a canvas to fill the screen.
 *
 * @param {HTMLCanvasElement} canvas
 * @param {number} resolution
 */
export function resizeToFillScreen(
  canvas,
  resolution = window.devicePixelRatio
) {
  return resize(
    canvas,
    window.innerWidth,
    window.innerHeight,
    resolution,
  );
}
