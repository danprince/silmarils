/**
 * Resize a canvas for drawing at the appropriate resolution for the
 * current device. This prevents blurry rendering on retina displays.
 *
 * __Note__: This function scales the context to match the device's
 * pixel ratio. When `resolution > 1` the `width` and `height`
 * properties on `canvas` will be scaled too.
 *
 * @param canvas https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
 * @param width The desired width in pixels
 * @param height The desired height in pixels
 * @return The width and height of the canvas
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
 *
 * See [[resize]].
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
