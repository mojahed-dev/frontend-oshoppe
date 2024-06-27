import React from 'react';
import ReactStars from "react-rating-stars-component";

function CustomReactStars({
  count = 5,
  size = 24,
  value = 3,
  edit = true,
  activeColor = "#ffd700",
  ...props
}) {
  return (
      <ReactStars
          count={count}
          size={size}
          value={value}
          edit={edit}
          activeColor={activeColor}
          {...props}
      />
  );
}

export default CustomReactStars;
