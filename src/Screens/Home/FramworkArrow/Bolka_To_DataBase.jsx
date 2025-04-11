import React from 'react'
import { motion } from 'framer-motion'
const Bolka_To_DataBase = ({resetKey}) => {
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
      d="M0 1H98"
      stroke="#29ABE2"
      strokeWidth="2" 
      initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay:17,

        }}
    />
  </svg>
  )
}

export default Bolka_To_DataBase
