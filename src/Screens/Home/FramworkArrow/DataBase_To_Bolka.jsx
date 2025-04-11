import React from 'react'
import { motion } from 'framer-motion'
const DataBase_To_Bolka = ({resetKey}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="98"
    height="2"
    viewBox="0 0 98 2"
    fill="none"
  >
    <motion.path
    key={resetKey}
      d="M98 1H0"
      stroke="#EF6820"
      strokeWidth="2" // Added for proper stroke thickness in JSX
      initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay:21,
        }}
    />
  </svg>
  )
}

export default DataBase_To_Bolka
