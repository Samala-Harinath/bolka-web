import React from "react";
import { motion } from "framer-motion";
const User_To_Task = ({ resetKey }) => {
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
        d="M1 0L1 80"
        stroke="#EF6820"
        strokeWidth="2" // Adjusted for JSX syntax
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 11,

        }}
      />
    </svg>
  );
};

export default User_To_Task;
