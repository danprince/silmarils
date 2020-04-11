import * as UID from "./uid.js";

describe("UID", () => {
  it("should generate unique sequential ids", () => {
    expect(UID.sequential()).toBe(1);
    expect(UID.sequential()).toBe(2);
    expect(UID.sequential()).toBe(3);
  });

  it("should generate unique random ids", () => {
    let ids = new Set();

    for (let i = 0; i < 1000; i++) {
      ids.add(UID.random());
    }

    expect(ids.size).toBe(1000);
  });
});
