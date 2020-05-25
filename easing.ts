/**
 * # Easing Functions
 *
 * <div id="root"></div>
 * <script type="module" src="/assets/easing-previews.js"></script>
 *
 * @packageDocumentation
 */
export type Easing = (time: number) => number;

export const easeInOutLinear: Easing = t =>
  t;

export const easeInQuad: Easing = t =>
  t * t;

export const easeOutQuad: Easing = t =>
  -(t * (t - 2));

export const easeInOutQuad: Easing = t => {
  if (t < 0.5) {
    return 2 * t * t;
  } else {
    return (-2 * t * t) + (4 * t) - 1;
  }
}

export const easeInCubic: Easing = t =>
  t * t * t;

export const easeOutCubic: Easing = t =>
  (t - 1) * (t - 1) * (t - 1) + 1

export const easeInOutCubic: Easing = t => {
  if (t < 0.5) {
    return 4 * t * t * t;
  } else {
    let p = 2 * t - 2;
    return 0.5 * p * p * p + 1;
  }
}

export const easeInQuart: Easing = t =>
  t * t * t * t;

export const easeOutQuart: Easing = t =>
  (t - 1) * (t - 1) * (t - 1) * (1 - t) + 1;

export const easeInOutQuart: Easing = t => {
  if (t < 0.5) {
    return 8 * t * t * t * t;
  } else {
    let p = t - 1;
    return -8 * p * p * p * p + 1;
  }
}

export const easeInQuint: Easing = t =>
  t * t * t * t * t;

export const easeOutQuint: Easing = t =>
  (t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1) + 1;

export const easeInOutQuint: Easing = t => {
  if (t < 0.5) {
    return 16 * t * t * t * t * t;
  } else {
    let p = (2 * t) - 2;
    return 0.5 * p * p * p * p * p + 1;
  }
}

export const easeInSine: Easing = t =>
  Math.sin((t - 1) * Math.PI / 2) + 1;

export const easeOutSine: Easing = t =>
  Math.sin(t * Math.PI / 2);

export const easeInOutSine: Easing = t =>
  0.5 * (1 - Math.cos(t * Math.PI));

export const easeInCirc: Easing = t =>
  1 - Math.sqrt(1 - (t * t));

export const easeOutCirc: Easing = t =>
  Math.sqrt((2 - t) * t);

export const easeInOutCirc: Easing = t => {
  if (t < 0.5) {
    return 0.5 * (1 - Math.sqrt(1 - 4 * (t * t)));
  } else {
    return 0.5 * (Math.sqrt(-((2 * t) - 3) * ((2 * t) - 1)) + 1);
  }
}

export const easeInExp: Easing = t =>
  t === 0 ? 0 : Math.pow(2, 10 * (t - 1));

export const easeOutExp: Easing = t =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

export const easeInOutExp: Easing = t =>
  t === 0 || t === 1 ? t : t < 0.5
    ? 0.5 * Math.pow(2, (20 * t) - 10)
    : -0.5 * Math.pow(2, (-20 * t) + 10) + 1;

export const easeInElastic: Easing = t =>
  Math.sin(13 * Math.PI / 2 * t) * Math.pow(2, 10 * (t - 1));


export const easeOutElastic: Easing = t =>
  Math.sin(-13 * Math.PI / 2 * (t + 1)) * Math.pow(2, -10 * t) + 1;

export const easeInOutElastic: Easing = t => {
  if (t < 0.5) {
    return (
      0.5 *
      Math.sin(13 * Math.PI / 2 * (2 * t)) *
      Math.pow(2, 10 * (2 * t - 1))
    );
  } else {
    return 0.5 * (
      Math.sin(-13 * Math.PI / 2 * (2 * t - 1) + 1) *
      Math.pow(2, -10 * (2 * t - 1)) +
      2
    );
  }
}

export const easeInBack: Easing = t =>
  t * t * t - t * Math.sin(t * Math.PI)

export const easeOutBack: Easing = t => {
  let p = 1 - t;
  return 1 - (p * p * p - p * Math.sin(p * Math.PI));
}

export const easeInOutBack: Easing = t => {
  if (t < 0.5) {
    let p = 2 * t;
    return 0.5 * (p * p * p * p - p * Math.sin(p * Math.PI));
  } else {
    let p = 1 - (2 * t - 1);
    return 0.5 * (1 - (p * p * p - p * Math.sin(p * Math.PI))) + 0.5;
  }
}

export const easeInBounce: Easing = t =>
  1 - easeOutBounce(1 - t);

export const easeOutBounce: Easing = t => {
  if (t < 4 / 11) {
    return 121 * t * t / 16;
  } else if (t < 8 / 11) {
    return (363 / 40.0 * t * t) - (99 / 10.0 * t) + 17 / 5.0;
  } else if (t < 9 / 10) {
    return (4356 / 361.0 * t * t) - (35442 / 1805.0 * t) + 16061 / 1805.0;
  } else {
    return (54 / 5.0 * t * t) - (513 / 25.0 * t) + 268 / 25.0;
  }
}

export const easeInOutBounce: Easing = t => {
  if (t < 0.5) {
    return 0.5 * easeInBounce(t * 2);
  } else {
    return 0.5 * easeOutBounce(t * 2 - 1) + 0.5;
  }
}
