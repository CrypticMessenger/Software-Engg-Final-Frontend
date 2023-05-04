import { render } from "@testing-library/react";
import ModalAddPost from "../ModalAddPost";

describe("ModalAddPost", () => {
    test("renders ModalAddPost component", () => {
        const {getByTestId} = render(<ModalAddPost />);
        const modalAddPost = getByTestId("modalAddPostTest");
        expect(modalAddPost).toBeInTheDocument();
    });
    }
);