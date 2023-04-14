import React from "react";
import AuthForm from "../common/AuthForm";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  const props = {
    title: "Flowbite",
    buttonText: "Login",
    titleText: "Welcome back",

    secondaryLink: "/forgot-password",
    secondaryText: "Forgot password?",
    
    alternativeTextPre: "Or",
    alternativeLink: "/register",
    alternativeText: "Don't have an account?",

    onSubmit,
  };

  return (
    <div>
      <AuthForm {...props} />
    </div>
  );
}
