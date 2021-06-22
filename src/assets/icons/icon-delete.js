import React from "react";

const IconDelete = ({ width = 13, height = 16, fill = "#888EB0", ...rest }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
        fill={fill}
      />
    </svg>
  );
};

export default IconDelete;
