import React from "react";

const IconArrowDown = ({
  width = 7,
  height = 10,
  stroke = "#7C5DFA",
  ...rest
}) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1l4 4-4 4" stroke-width="2" stroke={stroke} fill="none" />
    </svg>
  );
};

export default IconArrowDown;
