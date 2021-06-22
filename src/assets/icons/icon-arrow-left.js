import React from "react";

const IconArrowLeft = ({
  width = 7,
  height = 10,
  stroke = "#9277FF",
  ...rest
}) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.342.886L2.114 5.114l4.228 4.228"
        stroke={stroke}
        stroke-width="2"
        fill="none"
      />
    </svg>
  );
};

export default IconArrowLeft;
