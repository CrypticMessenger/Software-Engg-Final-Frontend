import { render } from "@testing-library/react";
import PostButton from "../PostButton";

describe("PostButton", () => {
    const handleClick = jest.fn();
    it("renders correctly", () => {
        const { getByTestId } = render(<PostButton handleClick={handleClick} />);
        expect(getByTestId("PostButtonTest")).toBeInTheDocument();
    });
});