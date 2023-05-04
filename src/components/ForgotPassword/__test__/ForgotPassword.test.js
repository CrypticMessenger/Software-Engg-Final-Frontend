import { render } from "@testing-library/react";
import ForgotPassword from "../ForgotPassword";
import { BrowserRouter } from "react-router-dom";

describe("ForgotPassword", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<BrowserRouter><ForgotPassword /></BrowserRouter>);
        expect(getByTestId("ForgotPasswordTest")).toBeInTheDocument();
    });
});