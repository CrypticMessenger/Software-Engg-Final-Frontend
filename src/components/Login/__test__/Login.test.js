// import { render, screen } from '@testing-library/react'
// import Login from '../Login'


// test('renders Login component', () => {
//   render(<Login />)
//   const linkElement = screen.getByText(/Login/i)
//   expect(linkElement).toBeInTheDocument()
// })


import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../Login";
import { shallow } from "enzyme";
import AuthForm from "../../common/AuthForm";
import renderer from 'react-test-renderer';
 
describe("Login", () => {
  test("renders AuthForm with correct props", () => {
    const { getByText, getByLabelText } = render(<Login />);
    expect(getByText("Flowbite")).toBeInTheDocument();
    expect(getByText("Welcome back")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByText("Forgot password?")).toBeInTheDocument();
    expect(getByText("Don't have an account?")).toBeInTheDocument();
    expect(getByText("Or")).toBeInTheDocument();
    // expect(getByText("Don't have an account")).toHaveAttribute("href", "/register");
  });

  test("calls onSubmit when button is clicked", () => {
    // const onSubmitMock = jest.fn(e => e.preventDefault());
    const onSubmitMock = jest.fn((e) => e.preventDefault());
    const props = {
      title: "Flowbite",
      buttonText: "Login",
      titleText: "Welcome back",
   
      secondaryLink: "/forgot-password",
      secondaryText: "Forgot password?",
      
      alternativeTextPre: "Or",
      alternativeLink: "/register",
      alternativeText: "Don't have an account?",
   
      onSubmit: onSubmitMock,
    };
 
    const { getByText } = render(<AuthForm {...props} />);
    const submitButton = getByText("Login");
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);

    // const consoleSpy = jest.spyOn(console, 'log');
    // console.log("Submitted");
    // expect(consoleSpy).toHaveBeenCalledWith("Submitted");
  });
});
