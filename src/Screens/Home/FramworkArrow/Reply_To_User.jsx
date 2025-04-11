import React from "react";
import { motion } from "framer-motion";
const Reply_To_User = ({ resetKey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="191"
      height="75"
      viewBox="0 0 191 75"
      fill="none"
    >
      <motion.path
        key={resetKey}
        d="M191 1H31C14.4315 1 1 14.4315 1 31V80"
        stroke="#29ABE2"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 9,
        }}
      />
    </svg>
  );
};

export default Reply_To_User;
