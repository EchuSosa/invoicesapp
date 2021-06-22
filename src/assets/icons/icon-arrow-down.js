import React from "react";

const IconArrowDown = ({ width = 11, height = 7, stroke = "#7C5DFA", ...rest }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1l4.228 4.228L9.456 1"
        stroke={stroke}
        stroke-width="2"
        fill="none"
      />
    </svg>
  );
};

export default IconArrowDown;
