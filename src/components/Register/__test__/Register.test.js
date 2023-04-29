// import { render, screen } from '@testing-library/react'
// import Login from '../Login'


// test('renders Login component', () => {
//   render(<Login />)
//   const linkElement = screen.getByText(/Login/i)
//   expect(linkElement).toBeInTheDocument()
// })


import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Register from "../Register";
import { shallow } from "enzyme";
import AuthForm from "../../common/AuthForm";
 
describe("register", () => {
  test("renders AuthForm with correct props", () => {
    const { getByText, getByLabelText ,getAllByText } = render(<Register />);
    expect(getByText("Create an account")).toBeInTheDocument();
    expect(getAllByText("Register")[1]).toBeInTheDocument();
    expect(getAllByText("Register")[0]).toBeInTheDocument();
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByText("Forgot password?")).toBeInTheDocument();
    expect(getByText("Already have an account?")).toBeInTheDocument();
    expect(getByText("Or")).toBeInTheDocument();
    expect(getByText("Already have an account?")).toHaveAttribute("href", "/login");

    
  });

  test("calls onSubmit when button is clicked", () => {
    // const onSubmitMock = jest.fn(e => e.preventDefault());
    const onSubmitMock = jest.fn((e) => e.preventDefault());
    const props = {
        title: "Register",
        buttonText: "Register",
        titleText: "Create an account",

        secondaryLink: "/forgot-password",
        secondaryText: "Forgot password?",

        alternativeTextPre: "Or",
        alternativeLink: "/login",
        alternativeText: "Already have an account?",
        onSubmit: onSubmitMock,
    };
    // get by type of element
    const { getAllByText } = render(<AuthForm {...props} />);
    const submitButton = getAllByText("Register")[1];
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
