export const MOUSE_BUTTON_LEFT = 0;
export const MOUSE_BUTTON_MIDDLE = 1;
export const MOUSE_BUTTON_RIGHT = 2;
export const MOUSE_BUTTON_BACK = 3;
export const MOUSE_BUTTON_FORWARD = 4;

/**
 * A class that tracks the mouse position, wheel, and buttons.
 */
export class Mouse {
  /**
   * The x coordinate of the mouse relative to [[element]].
   */
  public x = NaN;

  /**
   * The x coordinate of the mouse relative to [[element]].
   */
  public y = NaN;

  /**
   * The x distance moved since the previous mouse event.
   */
  public deltaX = 0;

  /**
   * The y distance moved since the previous mouse event.
   */
  public deltaY = 0;

  /**
   * The x distanced scrolled during the current wheel event.
   */
  public wheelX = 0;

  /**
   * The y distance scrolled during the current wheel event.
   */
  public wheelY = 0;

  /**
   * The z distance scrolled (zoomed) during the current wheel event.
   */
  public wheelZ = 0;

  /**
   * The element that the mouse position is calculated relative to.
   */
  public readonly element: HTMLElement;

  private buttons = new Set<number>();

  constructor(element = document.body) {
    this.element = element;
    this.addEventListeners();
  }

  /**
   * Check whether one of the mouse buttons is down.
   */
  isDown(button = MOUSE_BUTTON_LEFT) {
    return this.buttons.has(button);
  }

  /**
   * Add the appropriate event listeners for the mouse.
   *
   * This method is called automatically when a mouse object is created.
   */
  addEventListeners() {
    window.addEventListener("mousemove", this.handleEvent);
    window.addEventListener("mouseup", this.handleEvent);
    window.addEventListener("mousedown", this.handleEvent);
    window.addEventListener("wheel", this.handleEvent);
  }

  /**
   * Remove the event listeners for the mouse. This can be used to stop
   * the mouse processing events.
   */
  removeEventListeners() {
    window.removeEventListener("mousemove", this.handleEvent);
    window.removeEventListener("mouseup", this.handleEvent);
    window.removeEventListener("mousedown", this.handleEvent);
    window.removeEventListener("wheel", this.handleEvent);
  }

  /**
   * @internal
   */
  private handleEvent = (event: MouseEvent) => {
    if (event instanceof MouseEvent) {
      switch (event.type) {
        case "mousemove": {
          let { left, top } = this.element.getBoundingClientRect();
          let { clientX, clientY } = event;
          let x = clientX - left;
          let y = clientY - top;
          this.deltaX = x - this.x;
          this.deltaY = y - this.y;
          this.x = x;
          this.y = y;
          break;
        }

        case "mousedown": {
          this.buttons.add(event.button);
          break;
        }

        case "mouseup": {
          this.buttons.delete(event.button);
          break;
        }
      }
    }

    if (event instanceof WheelEvent) {
      this.wheelX = event.deltaX;
      this.wheelY = event.deltaY;
      this.wheelZ = event.deltaZ;
    }
  }
}
