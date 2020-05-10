/**
 * 0 degrees in radians.
 */
export const DEGREES_0 = 0;

/**
 * 90 degrees in radians.
 */
export const DEGREES_90 = Math.PI / 2;

/**
 * 180 degrees in radians.
 */
export const DEGREES_180 = Math.PI;

/**
 * 270 degrees in radians.
 */
export const DEGREES_270 = Math.PI * 1.5;

/**
 * 360 degrees in radians.
 */
export const DEGREES_360 = Math.PI * 2;

/**
 * Converts an angle in degrees to radians.
 *
 * ```typescript
 * Angle.fromDegrees(180) // Math.PI
 * ```
 *
 * @param degrees The angle in degrees
 * @return The angle in radians
 */
export function fromDegrees(degrees: number): number {
  return degrees * Math.PI / 180;
}

/**
 * Converts an angle in radians to degrees.
 *
 * ```typescript
 * Angle.toDegrees(Math.PI) // 180
 * ```
 *
 * @param radians The angle in radians
 * @return The angle in degrees
 */
export function toDegrees(radians: number): number {
  return radians * (180 / Math.PI);
}

/**
 * Normalizes an angle to the interval 0, 2π.
 *
 * ```typescript
 * Angle.normalize(Math.PI * 3) // Math.PI
 * ```
 *
 * @param radians The angle in radians
 * @return The normalized angle in radians
 */
export function normalize(radians: number): number {
  let normalized = radians % DEGREES_360;

  if (normalized < 0) {
    normalized = DEGREES_360 + normalized;
  }

  return normalized;
}
