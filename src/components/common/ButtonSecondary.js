import React from "react";
import { MdAdd } from "react-icons/md";

const ButtonSecondary = ({ type, children, style, onClick, testid }) => {
  return (
    <button
      type={type ?? "button"}
      data-testid={testid}
      onClick={onClick}
      className="w-full hover:text-black from-cyan-500 to-blue-500
       relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br   text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span className="w-full flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md bg-opacity-0 group-hover:bg-opacity-100">
        {children}
      </span>
    </button>
  );
};

export default ButtonSecondary;
