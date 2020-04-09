import * as Angle from "./angle.js";

describe("Angle", () => {
  it("should convert from degrees", () => {
    expect(Angle.fromDegrees(0)).toBeCloseTo(0);
    expect(Angle.fromDegrees(90)).toBeCloseTo(Math.PI / 2);
    expect(Angle.fromDegrees(180)).toBeCloseTo(Math.PI);
    expect(Angle.fromDegrees(270)).toBeCloseTo(Math.PI * 1.5);
    expect(Angle.fromDegrees(360)).toBeCloseTo(Math.PI * 2);
  });

  it("should convert to degrees", () => {
    expect(Angle.toDegrees(0)).toBeCloseTo(0);
    expect(Angle.toDegrees(Math.PI / 2)).toBeCloseTo(90);
    expect(Angle.toDegrees(Math.PI)).toBeCloseTo(180);
    expect(Angle.toDegrees(Math.PI * 1.5)).toBeCloseTo(270);
    expect(Angle.toDegrees(Math.PI * 2)).toBeCloseTo(360);
  });
});
