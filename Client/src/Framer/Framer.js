export const Animate1 = {
  Offscreen: { x: -10, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 90, 0],
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
    },
  },
};

export const Animate2 = {
  Offscreen: { y: 30, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export const Animate3 = {
  Offscreen: { y: 10, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export const Animate4 = {
  Offscreen: { opacity: 0 },
  onScreen: {
    opacity: 1,
    transition: {
      type: "",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export const Animate5 = {
  Offscreen: { x: 30 },
  onScreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 1,
    },
  },
};
