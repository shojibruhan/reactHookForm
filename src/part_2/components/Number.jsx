import React from "react";

const Number = ({ value, onChange, ...rest }) => {
  const handleChange = (e) => {
    const val = e.target.valueAsNumber || 0;
    onChange(val);
  };
  return (
    <input
      type="number"
      min={0}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default Number;
