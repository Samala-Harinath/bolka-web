import React from "react";
import { motion } from "framer-motion";
const DataBase_To_Bolka_LongArrow = ({ resetKey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="198"
      height="92"
      viewBox="0 0 198 92"
      fill="none"
    >
      <motion.path
        key={resetKey}
        d="M197 0V60C197 80 180 91 167 91H31C18 91 1 80 1 60V0"
        stroke="#EF6820"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: 21,
        }}
      />
    </svg>
  );
};

export default DataBase_To_Bolka_LongArrow;


