export const KEY_BACKSPACE = 8;
export const KEY_TAB = 9;
export const KEY_ENTER = 13;
export const KEY_SHIFT = 16;
export const KEY_CTRL = 17;
export const KEY_ALT = 18;
export const KEY_CAPS_LOCK = 20;
export const KEY_ESC = 27;
export const KEY_SPACE = 32;
export const KEY_PAGE_UP = 33;
export const KEY_PAGE_DOWN = 34;
export const KEY_END = 35;
export const KEY_HOME = 36;
export const KEY_LEFT = 37;
export const KEY_UP = 38;
export const KEY_RIGHT = 39;
export const KEY_DOWN = 40;
export const KEY_PRINTSCREEN = 44;
export const KEY_INSERT = 45;
export const KEY_DELETE = 46;
export const KEY_0 = 48;
export const KEY_1 = 49;
export const KEY_2 = 50;
export const KEY_3 = 51;
export const KEY_4 = 52;
export const KEY_5 = 53;
export const KEY_6 = 54;
export const KEY_7 = 55;
export const KEY_8 = 56;
export const KEY_9 = 57;
export const KEY_A = 65;
export const KEY_B = 66;
export const KEY_C = 67;
export const KEY_D = 68;
export const KEY_E = 69;
export const KEY_F = 70;
export const KEY_G = 71;
export const KEY_H = 72;
export const KEY_I = 73;
export const KEY_J = 74;
export const KEY_K = 75;
export const KEY_L = 76;
export const KEY_M = 77;
export const KEY_N = 78;
export const KEY_O = 79;
export const KEY_P = 80;
export const KEY_Q = 81;
export const KEY_R = 82;
export const KEY_S = 83;
export const KEY_T = 84;
export const KEY_U = 85;
export const KEY_V = 86;
export const KEY_W = 87;
export const KEY_X = 88;
export const KEY_Y = 89;
export const KEY_Z = 90;

export class Keyboard {
  private pressed = new Set<string | number>();

  constructor() {
    this.addEventListeners();
  }

  /**
   * Check whether a given key is down.
   *
   * @param {number | string} keyCodeOrName
   */
  isDown(keyCodeOrName: number | string) {
    return this.pressed.has(keyCodeOrName);
  }

  /**
   * Add the appropriate keyboard event listeners.
   *
   * This method is called automatically when the keyboard is created.
   */
  addEventListeners() {
    window.addEventListener("keydown", this.handleEvent);
    window.addEventListener("keyup", this.handleEvent);
  }

  /**
   * Remove the event listeners for the keyboard. This can be used to stop
   * the keyboard processing events.
   */
  removeEventListeners() {
    window.removeEventListener("keydown", this.handleEvent);
    window.removeEventListener("keyup", this.handleEvent);
  }

  /**
   * @internal
   */
  private handleEvent = (event: KeyboardEvent) => {
    switch (event.type) {
      case "keydown":
        this.pressed.add(event.which);
        this.pressed.add(event.key);
        break;

      case "keyup":
        this.pressed.delete(event.which);
        this.pressed.delete(event.key);
        break;
    }
  }
}
