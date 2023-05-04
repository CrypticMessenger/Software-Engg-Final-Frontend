import React from "react";

/**
 * Input component with label, help text and error message.
 * @param {string} label - The label to display above the input.
 * @param {string} placeholder - The placeholder to display inside the input.
 * @param {string} helpText - The help text to display below the input.
 * @param {string} error - The error message to display below the input.
 * @returns {JSX.Element} - A React component that displays an input with label, help text and error message.
 * @example
 * <Input
 *  label="Email"
 * placeholder="Enter your email"
 * helpText="We'll never share your email with anyone else."
 * error="Please enter a valid email address."
 * />
 *
 */
const Input = ({ label, placeholder, helpText, error }) => {
  const inputClasses =
    "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const inputClassesError =
    "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer";

  const labelClasses =
    "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1";
  const labelClassError =
    "absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1";

  return (
    <div  data-testid="input-test">
      <div className="relative">
        <input
          type="text"
          id={label}
          aria-describedby={`${label}_help`}
          className={error ? inputClassesError : inputClasses}
          placeholder={placeholder}
        />
        <label
          htmlFor={label}
          className={error ? labelClassError : labelClasses}>
          {label}
        </label>
      </div>
      {error ? (
        <p
          id="outlined_error_help"
          className="mt-1 mb-2 text-xs text-red-600 dark:text-red-400">
          <span class="font-medium">Oh, snapp!</span> {error}
        </p>
      ) : (
        <p
          id={`${label}_help`}
          className="invisible  mt-1 text-xs text-gray-500 dark:text-gray-400">
          Typing
        </p>
      )}
    </div>
  );
};

export default Input;
