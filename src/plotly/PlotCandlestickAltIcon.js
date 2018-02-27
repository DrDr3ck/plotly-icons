import React from 'react';
const PlotCandlestickAltIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M8.688 0h1.313v32h-1.313zM15.313 0h1.375v32h-1.375zM15.313 5.313h1.375c0.75 0 1.313 0.563 1.313 1.375v6.625c0 0.813-0.563 1.375-1.313 1.375h-1.375c-0.75 0-1.313-0.563-1.313-1.375v-6.625c0-0.813 0.563-1.375 1.313-1.375zM8.688 20h1.313c0.813 0 1.313 0.563 1.313 1.313v6.688c0 0.813-0.5 1.313-1.313 1.313h-1.313c-0.813 0-1.375-0.5-1.375-1.313v-6.688c0-0.75 0.563-1.313 1.375-1.313zM2 0h1.313v32h-1.313zM2 10.688h1.313c0.813 0 1.375 0.5 1.375 1.313v6.688c0 0.75-0.563 1.313-1.375 1.313h-1.313c-0.813 0-1.313-0.563-1.313-1.313v-6.688c0-0.813 0.5-1.313 1.313-1.313zM22 0h1.313v32h-1.313zM22 14.688h1.313c0.813 0 1.375 0.5 1.375 1.313v6.688c0 0.75-0.563 1.313-1.375 1.313h-1.313c-0.813 0-1.313-0.563-1.313-1.313v-6.688c0-0.813 0.5-1.313 1.313-1.313zM28.688 0h1.313v32h-1.313zM28.688 2.688h1.313c0.813 0 1.313 0.5 1.313 1.313v6.688c0 0.75-0.5 1.313-1.313 1.313h-1.313c-0.813 0-1.375-0.563-1.375-1.313v-6.688c0-0.813 0.563-1.313 1.375-1.313z" />
    </svg>
  );
};
export default PlotCandlestickAltIcon;