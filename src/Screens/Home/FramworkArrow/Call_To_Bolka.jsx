import React from "react";
import { motion } from "framer-motion";

const User_To_Call2 = ({resetKey}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="166"
      height="3"
      viewBox="0 0 166 3"
      fill="none"
    >
      <motion.path
      key={resetKey}
        d="M0 2L166 2"
        stroke="#EF6820"
        strokeWidth="2" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay:4,
        }}
      />
    </svg>
  );
};

export default User_To_Call2;
