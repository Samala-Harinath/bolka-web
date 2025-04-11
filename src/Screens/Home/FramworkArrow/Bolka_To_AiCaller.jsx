import React from "react";
import { motion } from "framer-motion";
const Bolka_To_AiCaller = ({ resetKey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="80"
      viewBox="0 0 2 80"
      fill="none"
    >
      <motion.path
        key={resetKey}
        d="M1 80L1 0"
        stroke="#29ABE2"
        strokeWidth="2" // Adjusted for JSX syntax
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 5,

        }}
      />
    </svg>
  );
};

export default Bolka_To_AiCaller;
