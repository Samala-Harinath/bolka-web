import React, { useState, useRef, useEffect } from 'react';

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const targetRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (isVisible && targetRef.current && tooltipRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let styles = {};
      switch (position) {
        case 'top':
          styles = {
            top: targetRect.top - tooltipRect.height - 8,
            left: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2,
          };
          break;
        case 'bottom':
          styles = {
            top: targetRect.bottom + 8,
            left: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2,
          };
          break;
        case 'left':
          styles = {
            top: targetRect.top + targetRect.height / 2 - tooltipRect.height / 2,
            left: targetRect.left - tooltipRect.width - 8,
          };
          break;
        case 'right':
          styles = {
            top: targetRect.top + targetRect.height / 2 - tooltipRect.height / 2,
            left: targetRect.right + 8,
          };
          break;
        default:
          break;
      }

      setTooltipStyle(styles);
    }
  }, [isVisible, position]);

  return (
    <div
      className="relative inline-block"
      ref={targetRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className="absolute bg-gray-800 text-white text-sm px-3 py-2 rounded shadow-lg z-50"
          style={{ ...tooltipStyle, position: 'absolute' }}
          ref={tooltipRef}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
