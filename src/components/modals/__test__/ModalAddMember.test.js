import { render, fireEvent } from "@testing-library/react";
import ModalAddMember from "../ModalAddMember";
import { shallow, mount } from "enzyme";

describe("ModalAdd Member Test", ()=>{
    const isVisible=true
        const setIsVisible=true
        const props = {
            isVisible,
            setIsVisible
        };
    test("renders correctly ",()=>{
        const {getByTestId} = render(<ModalAddMember {...props}/>);
        const modalAddMember = getByTestId("ModalAddMemberTest");
        expect(modalAddMember).toBeInTheDocument();

        const formTest = getByTestId("formTest");     
        expect(formTest).toBeInTheDocument();   
    });

    it('should call setIsVisible when close button is clicked', () => {
    const setIsVisible = jest.fn();
    const { getByTestId } = render(
        <ModalAddMember isVisible={true} setIsVisible={setIsVisible} />
    );

    const closeButton = getByTestId('modalButton');
    fireEvent.click(closeButton);

    expect(setIsVisible).toHaveBeenCalledWith(false);
    });
});