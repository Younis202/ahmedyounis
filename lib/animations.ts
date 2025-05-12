export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export const fadeInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export const fadeInRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export const fadeInBlur = (delay = 0) => ({
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay,
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export const staggerChildren = (staggerTime = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime,
    },
  },
});

export const clipReveal = (delay = 0, direction = 'horizontal') => ({
  hidden: {
    clipPath: direction === 'horizontal' 
      ? 'inset(0 100% 0 0)' 
      : 'inset(100% 0 0 0)',
  },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: {
      delay,
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export const letterReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
});

export const scaleUp = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export const filmUnroll = (delay = 0) => ({
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      delay,
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});