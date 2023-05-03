import React from "react";

const ButtonPrimary = ({ type, children, style, onClick, testid }) => {
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      data-testid={testid}
      className={`text-white bg-indigo-400 hover:bg-indigo-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ${
        style ?? ""
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;