import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import GroupThreadView from "../GroupThreadView";

describe("GroupThreadView", () => {
    test("renders GroupThreadView component", () => {
        const { getByTestId } = render(
        <BrowserRouter>
            <GroupThreadView />
        </BrowserRouter>
        );
        const linkElement = getByTestId('GroupThreadTest');
        expect(linkElement).toBeInTheDocument();
    });

});