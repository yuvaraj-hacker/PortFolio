export const fadeIn = (direction = "up", delay = 0) => {
  const distance = 50;

  return {
    hidden: {
      x: direction === "left" ?
        -distance : direction === "right" ?
        distance : 0,
      y: direction === "up" ?
        distance : direction === "down" ?
        -distance : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
      },
    },
  };
};