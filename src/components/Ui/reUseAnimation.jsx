export const ArrowAnimation = (delay = 0) => {
    return{
      hidden: {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)", // Start from the right
      },
      horizontal: {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // Horizontal line (left to right)
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
      vertical: {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Vertical line (top to bottom)
        transition: {
          duration: 1,
          ease: "easeInOut",
          delay: delay, // Delay before vertical animation starts
        },
      },
    };
}  