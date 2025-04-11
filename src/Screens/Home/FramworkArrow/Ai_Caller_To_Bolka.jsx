import React from "react";
import { motion } from "framer-motion";
const Ai_Caller_To_Bolka = ({resetKey}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="96"
      viewBox="0 0 180 96"
      fill="none"
    >
      <motion.path
      key={resetKey}
        // d="M0 96H149C165.569 96 179 82.5685 179 66V0"
        // d="M0 112H149C165.569 112 179 98.569 179 82V0"
        d="M0 95H149C165 95 179 79 179 60V0"
        stroke="#EF6820"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 15,
        }}
      />
    </svg>
  );
};

export default Ai_Caller_To_Bolka;
