import React, { useEffect } from "react";
import AuthForm from "../common/AuthForm";
import { useNavigate } from 'react-router-dom'; 
import { useContext } from "react";
import { UserContext } from "../Providers/userProvider";
export default function Login() {
  const navigate = useNavigate();
  const {handleLogin } = useContext(UserContext);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    const userData = {"name":"Neil Sims","email":"neil_sims@ymail.com"}
    handleLogin(userData);
    // makes a call to the backend to login
    // if successful, redirect to dashboard

    navigate('/dashboard'); 

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
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div>
      <AuthForm {...props} />
    </div>
  );
}
