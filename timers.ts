export interface Timer {
  /**
   * Check whether a timer is currently stopped.
   */
  stopped: boolean,

  /**
   * Starts the timer. Most timers will be started automatically, but
   * they can be restarted manually using [[start]] after calling [[stop]].
   */
  start(): void

  /**
   * Stops/pauses a timer.
   */
  stop(): void

  /**
   * Resets the timer to its initial state (if applicable).
   */
  reset(): void
}

/**
 * Creates a timer that calls `callback` after `duration` milliseconds
 * have elapsed.
 *
 * An alternative to `setTimeout` that won't run in the background.
 *
 * @param duration Duration in milliseconds
 * @param callback Function to call when the timeout completes
 */
export function timeout(duration: number, callback: () => any): Timer {
  let last = 0;
  let id = 0;

  function tick(now: number) {
    id = requestAnimationFrame(tick);
    last = last || now;
    let elapsed = now - last;

    if (elapsed >= duration) {
      callback();
      stop();
    }
  }

  let timer: Timer = {
    stopped: true,

    start() {
      if (timer.stopped) {
        id = requestAnimationFrame(tick);
        timer.stopped = false;
      }
    },

    stop() {
      if (!timer.stopped) {
        cancelAnimationFrame(id);
        timer.stopped = true;
        last = 0;
      }
    },

    reset() {
      id = 0;
      last = 0;
    },
  };

  timer.start();

  return timer;
}

/**
 * Creates a timer that calls `callback` once every `duration` milliseconds.
 *
 * An alternative to `setInterval` that won't run in the background.
 *
 * The interval timer can be used to create fixed rate animation loops.
 *
 * ```ts
 * // call update at 30fps
 * Timers.interval(1000 / 30, update);
 * ```
 *
 * @param duration Length of the interval in milliseconds
 * @param callback Callback which is called with the delta in
 * milliseconds between the current call and the last one.
 */
export function interval(duration: number, callback: (dt: number) => any): Timer {
  let last = 0;
  let id = 0;

  function tick(now: number) {
    id = requestAnimationFrame(tick);
    last = last || now;
    let delta = now - last;

    if (delta >= duration) {
      callback(delta);
      last = now;
    }
  }

  let timer: Timer = {
    stopped: true,

    start() {
      if (timer.stopped) {
        timer.stopped = false;
        id = requestAnimationFrame(tick);
      }
    },

    stop() {
      if (!timer.stopped) {
        cancelAnimationFrame(id);
        timer.stopped = true;
        last = 0;
      }
    },

    reset() {
      id = 0;
      last = 0;
    }
  };

  timer.start();

  return timer;
}

/**
 * Creates a timer based on `requestAnimationFrame` that calls `callback`
 * every frame, with the delta in milliseconds since the last frame.
 */
export function animation(callback: (dt: number) => any): Timer {
  let last = 0;
  let id = 0;

  function tick(now: number) {
    id = requestAnimationFrame(tick);
    last = last || now;
    let delta = now - last;
    callback(delta);
    last = now;
  }

  let timer: Timer = {
    stopped: true,

    start() {
      if (timer.stopped) {
        id = requestAnimationFrame(tick);
        timer.stopped = false;
      }
    },

    stop() {
      if (!timer.stopped) {
        cancelAnimationFrame(id);
        timer.stopped = true;
      }
    },

    reset() {
      id = 0;
      last = 0;
    },
  }

  timer.start();

  return timer;
}

/**
 * Creates a timer that calls `callback` once every frame until `duration`
 * milliseconds have elapsed.
 *
 * `callback` is called with the normalized progress (0-1) between
 * the start and the end.
 *
 * This timer is designed to be used with the easing module to create
 * tweens and animations.
 *
 * @param duration Length of the interpolation in milliseconds
 * @param callback Function that will be called each frame
 */
export function interpolate(duration: number, callback: (t: number) => any): Timer {
  let last = 0;
  let id = 0;
  let elapsed = 0;

  function tick(now: number) {
    id = requestAnimationFrame(tick);
    last = last || now;

    let delta = now - last;
    elapsed += delta;
    last = now;

    let t = Math.max(0, Math.min(elapsed / duration, 1));
    callback(t);

    if (t === 1) {
      timer.stop();
      timer.reset();
    }
  }

  let timer: Timer = {
    stopped: true,

    start() {
      if (timer.stopped) {
        id = requestAnimationFrame(tick);
        timer.stopped = false;
      }
    },

    stop() {
      if (!timer.stopped) {
        cancelAnimationFrame(id);
        timer.stopped = true;
        last = 0;
      }
    },

    reset() {
      last = 0;
      elapsed = 0;
    },
  };

  timer.start();

  return timer;
}
