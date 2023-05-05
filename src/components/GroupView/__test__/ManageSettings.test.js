import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import GroupSettings from "../ManageSettings";

describe("ManageSettings", () => {
    it("should render without crashing", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <GroupSettings />
            </BrowserRouter>
        );
        const manageSettings = getByTestId("ManageSettingsTest");
        expect(manageSettings).toBeInTheDocument();
    });
});