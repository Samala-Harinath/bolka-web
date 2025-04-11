import React from "react";
import { motion } from "framer-motion";
const Ai_Caller_To_Reply = ({ resetKey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="142"
      height="3"
      viewBox="0 0 142 3"
      fill="none"
    >
      <motion.path
      key={ resetKey }
        d="M142 1H0"
        stroke="#29ABE2"
        strokeWidth="2" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay:7,
        }}
      />
    </svg>
  );
};

export default Ai_Caller_To_Reply;
