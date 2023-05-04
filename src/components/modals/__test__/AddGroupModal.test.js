import { render } from "@testing-library/react";
import AddGroupModal from "../AddGroupModal";


describe("AddGroupModal", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<AddGroupModal />);
        const addGroupModal = getByTestId("addGroupModalTest");
        expect(addGroupModal).toBeInTheDocument();

        const addGroupModalButton = getByTestId("addGroupModalButtonTest");
        expect(addGroupModalButton).toBeInTheDocument();

        const mainModal = getByTestId("mainModalTest");
        expect(mainModal).toBeInTheDocument();

        const modalBody = getByTestId("modalBodyTest");
        expect(modalBody).toBeInTheDocument();
    });

});