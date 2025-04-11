import React from "react";
import { motion } from "framer-motion";
const Task_To_AiCaller = ({ resetKey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="3"
      viewBox="0 0 110 3"
      fill="none"
    >
      <motion.path
        key={resetKey}
        d="M0 2L166 2"
        stroke="#EF6820"
        strokeWidth="2" // Adjusted for JSX syntax
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 13,

        }}
      />
    </svg>
  );
};

export default Task_To_AiCaller;
