import { render } from "@testing-library/react";
import JoiningRequest from "../JoiningRequest";

describe("JoiningRequest", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<JoiningRequest />);
        expect(getByTestId("JoiningRequestTest")).toBeInTheDocument();
    });
});