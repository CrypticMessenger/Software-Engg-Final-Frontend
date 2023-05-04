import React from "react";
import AuthForm from "../common/AuthForm";

/**
 * A component that displays the Forgot Password component. Uses already defined AuthForm to pass in props, which are used to display the Forgot Password page.
 * @returns {JSX.Element} - A React component that displays the Forgot Password page.
 * @example
 * <ForgotPassword />
 *
 */
const ForgotPassword = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  const props = {
    title: "Forgot Password",
    buttonText: "Reset Password",
    titleText: "Reset your password",
    onSubmit,
  };

  return (
    <div>
      <AuthForm {...props} />
    </div>
  );
};

export default ForgotPassword;
