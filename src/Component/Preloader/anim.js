// anim.js
export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
    backgroundColor: "#d9683c",
  },
  exit: {
    top: "-100vh",

    transition: {
      top: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      backgroundColor: { duration: 0.1, ease: [0.76, 0, 0.24, 1] },
    },
  },
};
