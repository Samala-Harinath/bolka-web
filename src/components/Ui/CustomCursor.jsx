import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = ({ targetRef, title }) => {

    const [isVisible, setIsVisible] = useState(false);
  
    const cursorX = useMotionValue(0); 
    const cursorY = useMotionValue(0);
    const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
    const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  
    useEffect(() => {
      const handleMouseMove = (e) => {

        if (targetRef?.current) {
          const rect = targetRef.current.getBoundingClientRect();
  
          // Check if the mouse is inside the box
          const isInsideBox =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;
  
          if (isInsideBox) {
            // Update cursor position
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
  
            setIsVisible(true); // Show cursor
          } else {
            setIsVisible(false); // Hide cursor
          }
        }
      };
  
      // Add event listener
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        // Remove event listener
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [cursorX, cursorY, targetRef]);

    return (
        isVisible && (
            <motion.div className=' fixed top-0 left-0 bg-[#ff5733] cursor-none z-50 px-4 py-1 text-white font-semibold rounded-lg pointer-events-none'
                style={{ translateX: springX, translateY: springY }} >
                {title}
            </motion.div>
        )
    );
}

export default CustomCursor