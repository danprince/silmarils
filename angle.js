export const DEGREES_0 = 0;
export const DEGREES_90 = Math.PI / 2;
export const DEGREES_180 = Math.PI;
export const DEGREES_270 = Math.PI * 1.5;
export const DEGREES_360 = Math.PI * 2;

/**
 * Convert an angle in degrees to radians.
 *
 * @param {number} degrees
 * @return {number} radians
 */
export function fromDegrees(degrees) {
  return degrees * Math.PI / 180;
}

/**
 * Convert an angle in radians to degrees.
 *
 * @param {number} radians
 * @return {number} degrees
 */
export function toDegrees(radians) {
  return radians * (180 / Math.PI);
}
