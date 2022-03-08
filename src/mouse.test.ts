import { Mouse, MOUSE_BUTTON_LEFT } from "./mouse";

describe("Mouse", () => {
  test("should respond to mousemove events", () => {
    let mouse = new Mouse(document.body);

    let event = new MouseEvent("mousemove", {
      bubbles: true,
      clientX: 10,
      clientY: 20,
    });

    document.body.dispatchEvent(event);

    expect(mouse.x).toBe(10);
    expect(mouse.y).toBe(20);
  });

  test("should set the cursor to be relative to element", () => {
    let element = document.createElement("div");
    let mouse = new Mouse(element);
    document.body.appendChild(element);

    element.getBoundingClientRect = () => ({
      left: 200,
      top: 100,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      toJSON() {}
    });

    let event = new MouseEvent("mousemove", {
      bubbles: true,
      clientX: 210,
      clientY: 120,
    });

    element.dispatchEvent(event);

    expect(mouse.x).toBe(10);
    expect(mouse.y).toBe(20);
  });

  test("should track mouse deltas", () => {
    let mouse = new Mouse(document.body);

    document.body.dispatchEvent(new MouseEvent("mousemove", {
      bubbles: true,
      clientX: 10,
      clientY: 20,
    }));

    document.body.dispatchEvent(new MouseEvent("mousemove", {
      bubbles: true,
      clientX: 15,
      clientY: 15,
    }));

    expect(mouse.deltaX).toBe(5);
    expect(mouse.deltaY).toBe(-5);
  });

  test("should track mouse button state", () => {
    let mouse = new Mouse(document.body);

    expect(mouse.isDown(MOUSE_BUTTON_LEFT)).toBe(false);

    document.body.dispatchEvent(new MouseEvent("mousedown", {
      bubbles: true,
      button: MOUSE_BUTTON_LEFT,
    }));

    expect(mouse.isDown(MOUSE_BUTTON_LEFT)).toBe(true);

    document.body.dispatchEvent(new MouseEvent("mouseup", {
      bubbles: true,
      button: MOUSE_BUTTON_LEFT,
    }));

    expect(mouse.isDown(MOUSE_BUTTON_LEFT)).toBe(false);
  });

  test("should track mouse wheel state", () => {
    let mouse = new Mouse(document.body);

    document.body.dispatchEvent(new WheelEvent("wheel", {
      bubbles: true,
      deltaX: 1,
      deltaY: 2,
      deltaZ: 3,
    }));

    expect(mouse.wheelX).toBe(1);
    expect(mouse.wheelY).toBe(2);
    expect(mouse.wheelZ).toBe(3);
  });
});
