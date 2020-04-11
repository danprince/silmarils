import { Keyboard, KEY_ENTER, KEY_SHIFT, KEY_UP } from "./keyboard.js";

describe("Keyboard", () => {
  it("should track state of pressed keys", () => {
    let keyboard = new Keyboard();

    expect(keyboard.isDown(KEY_SHIFT)).toBe(false);
    expect(keyboard.isDown(KEY_ENTER)).toBe(false);

    window.dispatchEvent(new KeyboardEvent("keydown", {
      // @ts-ignore
      which: KEY_SHIFT,
      key: "Shift",
    }));

    expect(keyboard.isDown(KEY_SHIFT)).toBe(true);
    expect(keyboard.isDown(KEY_ENTER)).toBe(false);

    window.dispatchEvent(new KeyboardEvent("keydown", {
      // @ts-ignore
      which: KEY_ENTER,
      key: "Enter",
    }));

    expect(keyboard.isDown(KEY_SHIFT)).toBe(true);
    expect(keyboard.isDown(KEY_ENTER)).toBe(true);

    window.dispatchEvent(new KeyboardEvent("keyup", {
      // @ts-ignore
      which: KEY_ENTER,
      key: "Enter",
    }));

    expect(keyboard.isDown(KEY_SHIFT)).toBe(true);
    expect(keyboard.isDown(KEY_ENTER)).toBe(false);

    window.dispatchEvent(new KeyboardEvent("keyup", {
      // @ts-ignore
      which: KEY_SHIFT,
      key: "Shift",
    }));

    expect(keyboard.isDown(KEY_SHIFT)).toBe(false);
    expect(keyboard.isDown(KEY_ENTER)).toBe(false);

    keyboard.removeEventListeners();
  });

  it("should track pressed key names", () => {
    let keyboard = new Keyboard();

    window.dispatchEvent(new KeyboardEvent("keydown", {
      // @ts-ignore
      which: KEY_UP,
      key: "ArrowUp",
    }));

    expect(keyboard.isDown("ArrowUp")).toBe(true);

    keyboard.removeEventListeners();
  });
});
