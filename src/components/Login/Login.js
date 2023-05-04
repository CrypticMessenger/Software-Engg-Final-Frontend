import React, { useEffect } from "react";
import AuthForm from "../common/AuthForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Providers/userProvider";
import { DJANGO_API_URL } from "../../constants/urls";

/**
 * A component that displays a login form.
 * @returns {JSX.Element} A React component that displays a login form.
 * @example
 *  <Login />
 */
export default function Login() {
  const navigate = useNavigate();
  const { handleLogin } = useContext(UserContext);
  // const { handleLogin } = useContext(UserContext);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");

    // get email and password from form
    const email = e.target.Email.value;
    const password = e.target.Password.value;

    console.log(email,password);

    // send data to backend
    const response = await fetch(DJANGO_API_URL + "user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // if response is ok, redirect to dashboard
    const data = await response.json();
    if (response.ok) {
      handleLogin(data.data);
      navigate("/dashboard");
      return;
    }
    // console.log(data);
    // console.log(data.errors);

    const userData = { name: "Neil Sims", email: "neil_sims@ymail.com" };
    handleLogin(userData);

    // navigate("/dashboard");
  };
  const props = {
    title: "",
    buttonText: "Login",
    titleText: "Welcome back",

    secondaryLink: "/forgot-password",
    secondaryText: "Forgot password?",

    alternativeTextPre: "Or",
    alternativeLink: "/register",
    alternativeText: "Don't have an account?",

    onSubmit,
  };
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div data-testid="Login">
      <AuthForm {...props} />
    </div>
  );
}
