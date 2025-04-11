import React from "react";
import { motion } from "framer-motion";
const Bolka_To_DataBase_LongArrow = ({ resetKey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="198"
      height="91"
      viewBox="0 0 198 91"
      fill="none"
    >
      <motion.path
        key={resetKey}
        d="M1 91V31C1 14.4315 14.4315 1 31 1H167C183.569 1 197 14.4315 197 31V91"
        stroke="#29ABE2"
        strokeWidth="2" // Adjusted for JSX compatibility
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: 17,

        }}
      />
    </svg>
  );
};

export default Bolka_To_DataBase_LongArrow;
