import React from "react";

const IconPlus = ({ width = 11, height = 11, fill = "#7C5DFA", ...rest }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
        fill={fill}
      />
    </svg>
  );
};

export default IconPlus;
