export const enterLeft = (delay: number) => ({
  initial: {
    opacity: 0,
    x: 100,
  },
  visibleOnce: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1500,
      delay: delay * 200,
    },
  },
});

export const enterRigth = (delay: number) => ({
  initial: {
    opacity: 0,
    x: -100,
  },
  visibleOnce: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1000,
      delay: delay * 200,
    },
  },
});

export const fade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,

    transition: {
      duration: 2000,
    },
  },
};
