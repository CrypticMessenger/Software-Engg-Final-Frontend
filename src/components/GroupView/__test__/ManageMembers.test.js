import { render } from "@testing-library/react";
import ManageMembers from "../ManageMembers";
import { BrowserRouter } from "react-router-dom";

describe("ManageMembers", () => {
    it("should render", () => {
        const { getByTestId } = render(<BrowserRouter><ManageMembers /></BrowserRouter>);
        const linkElement = getByTestId("ManageMemberTest");
        expect(linkElement).toBeInTheDocument();
    });
});