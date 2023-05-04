import { render } from "@testing-library/react";
import ModalLeaveGroup from "../ModalLeaveGroup";

describe("ModalAddPost", () => {
    test("renders ModalAddPost component", () => {
        const {getByTestId} = render(<ModalLeaveGroup />);
        const modalLeaveGroup = getByTestId("modalLeaveGroupTest");
        expect(modalLeaveGroup).toBeInTheDocument();
    });
    }
);