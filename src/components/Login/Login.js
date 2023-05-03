import React, { useEffect } from "react";
import AuthForm from "../common/AuthForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Providers/userProvider";

export default function Login() {
  const navigate = useNavigate();
  // const { handleLogin } = useContext(UserContext);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    const userData = { name: "Neil Sims", email: "neil_sims@ymail.com" };
    // handleLogin(userData);

    navigate("/dashboard");
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
    <div data-testid="Login">
      <AuthForm {...props} />
    </div>
  );
}




// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import Login from "../Login";
// import AuthForm from "../../common/AuthForm";
 
// describe("Login", () => {
//   test("renders AuthForm with correct props", () => {
//     const { getByText, getByLabelText } = render(<Login />);
//     expect(getByText("Flowbite")).toBeInTheDocument();
//     expect(getByText("Welcome back")).toBeInTheDocument();
//     expect(getByText("Login")).toBeInTheDocument();
//     expect(getByLabelText("Email")).toBeInTheDocument();
//     expect(getByLabelText("Password")).toBeInTheDocument();
//     expect(getByText("Forgot password?")).toBeInTheDocument();
//     expect(getByText("Don't have an account?")).toBeInTheDocument();
//     expect(getByText("Or")).toBeInTheDocument();
//     // expect(getByText("Don't have an account")).toHaveAttribute("href", "/register");
//   });

//   test("calls onSubmit when button is clicked", () => {
//     // const onSubmitMock = jest.fn(e => e.preventDefault());
//     const onSubmitMock = jest.fn((e) => e.preventDefault());
//     const props = {
//       title: "Flowbite",
//       buttonText: "Login",
//       titleText: "Welcome back",
   
//       secondaryLink: "/forgot-password",
//       secondaryText: "Forgot password?",
      
//       alternativeTextPre: "Or",
//       alternativeLink: "/register",
//       alternativeText: "Don't have an account?",
   
//       onSubmit: onSubmitMock,
//     };
 
//     const { getByText } = render(<Login><AuthForm {...props} /></Login>);
//     const submitButton = getByText("Login");
//     fireEvent.click(submitButton);
//     expect(onSubmitMock).toHaveBeenCalledTimes(1);

//     // const consoleSpy = jest.spyOn(console, 'log');
//     // console.log("Submitted");
//     // expect(consoleSpy).toHaveBeenCalledWith("Submitted");
//   });
// });
