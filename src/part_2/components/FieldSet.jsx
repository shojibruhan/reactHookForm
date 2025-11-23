import React from "react";

const FieldSet = ({ children, label }) => {
  return (
    <fieldset className="m-2 border-none p-0">
      {label && <legend className="text-base font-bold mb-2">{label}</legend>}
      <div className="flex flex-col justify-between self-start">{children}</div>
    </fieldset>
  );
};

export default FieldSet;
