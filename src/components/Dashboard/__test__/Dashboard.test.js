import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "../Dashboard";
import { BrowserRouter } from "react-router-dom";

describe("Dashboard component", () => {
    it("should render dashboard component", () => {
        const {getByTestId} = render(<BrowserRouter><Dashboard /></BrowserRouter>);
        const dashboard = getByTestId("dashboard");
        expect(dashboard).toBeInTheDocument();
    });
});