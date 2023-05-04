import React from "react";

/**
 * A general purpose button component with primary styling.
 * @param {string} type - The type of the button. (eg: submit)
 * @param {string} children - The text to display inside the button.
 * @param {string} style - The style to apply to the button. (eg: w-full)
 * @param {function} onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} - A React component that displays a button with primary styling.
 * @example
 * <ButtonPrimary type="submit" onClick={() => console.log("clicked")} style="w-full">
 * Submit
 * </ButtonPrimary>
 */
const ButtonPrimary = ({ type, children, style, onClick, testid }) => {
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      data-testid={testid}
      className={`text-white bg-indigo-400 hover:bg-indigo-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ${
        style ?? ""
      }`}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
