import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GroupThreadsList from "../GroupThreadsList";

describe("GroupThreadsList", () => {
    
    it("should render", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <GroupThreadsList/>
            </MemoryRouter>
        );
        expect(getByTestId("GroupThreadsListTest")).toBeInTheDocument();
    });
});
