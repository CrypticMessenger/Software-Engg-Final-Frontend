import { render } from "@testing-library/react";
import ApprovalRequest from "../ApprovalRequest";

describe("ApprovalRequest", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<ApprovalRequest />);
        expect(getByTestId("ApprovalRequestTest1")).toBeInTheDocument();
    });
});