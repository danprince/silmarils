export type Easing = (time: number) => number;

export const linearInOut: Easing = t =>
  t;

export const quadEaseInOut: Easing = t => {
  if (t < 0.5) {
    return 2 * t * t;
  } else {
    return (-2 * t * t) + (4 * t) - 1;
  }
}

export const quadEaseIn: Easing = t =>
  t * t;

export const quadEaseOut: Easing = t =>
  -(t * (t - 2));

export const cubicEaseIn: Easing = t =>
  t * t * t;

export const cubicEaseOut: Easing = t =>
  (t - 1) * (t - 1) * (t - 1) + 1

export const cubicEaseInOut: Easing = t => {
  if (t < 0.5) {
    return 4 * t * t * t;
  } else {
    let p = 2 * t - 2;
    return 0.5 * p * p * p + 1;
  }
}

export const quarticEaseIn: Easing = t =>
  t * t * t * t;

export const quarticEaseOut: Easing = t =>
  (t - 1) * (t - 1) * (t - 1) * (1 - t) + 1;

export const quarticEaseInOut: Easing = t => {
  if (t < 0.5) {
    return 8 * t * t * t * t;
  } else {
    let p = t - 1;
    return -8 * p * p * p * p + 1;
  }
}

export const quinticEaseIn: Easing = t =>
  t * t * t * t * t;

export const quinticEaseOut: Easing = t =>
  (t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1) + 1;

export const quinticEaseInOut: Easing = t => {
  if (t < 0.5) {
    return 16 * t * t * t * t * t;
  } else {
    let p = (2 * t) - 2;
    return 0.5 * p * p * p * p * p + 1;
  }
}

export const sineEaseIn: Easing = t =>
  Math.sin((t - 1) * Math.PI / 2) + 1;

export const sineEaseOut: Easing = t =>
  Math.sin(t * Math.PI / 2);

export const sineEaseInOut: Easing = t =>
  0.5 * (1 - Math.cos(t * Math.PI));

export const circularEaseIn: Easing = t =>
  1 - Math.sqrt(1 - (t * t));

export const circularEaseOut: Easing = t =>
  Math.sqrt((2 - t) * t);

export const circularEaseInOut: Easing = t => {
  if (t < 0.5) {
    return 0.5 * (1 - Math.sqrt(1 - 4 * (t * t)));
  } else {
    return 0.5 * (Math.sqrt(-((2 * t) - 3) * ((2 * t) - 1)) + 1);
  }
}

export const exponentialEaseIn: Easing = t =>
  t === 0 ? 0 : Math.pow(2, 10 * (t - 1));

export const exponentialEaseOut: Easing = t =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

export const exponentialEaseInOut: Easing = t =>
  t === 0 || t === 1 ? t : t < 0.5
    ? 0.5 * Math.pow(2, (20 * t) - 10)
    : -0.5 * Math.pow(2, (-20 * t) + 10) + 1;

export const elasticEaseIn: Easing = t =>
  Math.sin(13 * Math.PI / 2 * t) * Math.pow(2, 10 * (t - 1));


export const elasticEaseOut: Easing = t =>
  Math.sin(-13 * Math.PI / 2 * (t + 1)) * Math.pow(2, -10 * t) + 1;

export const elasticEaseInOut: Easing = t => {
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

export const backEaseIn: Easing = t =>
  t * t * t - t * Math.sin(t * Math.PI)

export const backEaseOut: Easing = t => {
  let p = 1 - t;
  return 1 - (p * p * p - p * Math.sin(p * Math.PI));
}

export const backEaseInOut: Easing = t => {
  if (t < 0.5) {
    let p = 2 * t;
    return 0.5 * (p * p * p * p - p * Math.sin(p * Math.PI));
  } else {
    let p = 1 - (2 * t - 1);
    return 0.5 * (1 - (p * p * p - p * Math.sin(p * Math.PI))) + 0.5;
  }
}

export const bounceEaseIn: Easing = t =>
  1 - bounceEaseOut(1 - t);

export const bounceEaseOut: Easing = t => {
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

export const bounceEaseInOut: Easing = t => {
  if (t < 0.5) {
    return 0.5 * bounceEaseIn(t * 2);
  } else {
    return 0.5 * bounceEaseOut(t * 2 - 1) + 0.5;
  }
}
