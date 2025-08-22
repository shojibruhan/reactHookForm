import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div className="flex flex-col items-start justify-start mt-2 p-0 mr-2 w-full">
      {label && (
        <label htmlFor={id} className="mb-1">
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div className="text-red-700 text-xs px-2 py-1">{error.message}</div>
      )}
    </div>
  );
};

export default Field;

const getChildId = (children) => {
  const child = React.Children.only(children);

  // eslint-disable-next-line no-unsafe-optional-chaining
  if ("id" in child?.props) {
    return child.props.id;
  }
};
