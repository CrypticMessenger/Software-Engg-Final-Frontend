import { render } from "@testing-library/react";
import ButtonSecondary from "../ButtonSecondary";

describe("ButtonSecondary", () => {
    const props = {
        type: null,
        children: "Button",
        style: null,
        onClick: jest.fn(),
        testid: "button"
    };

    it("should render ButtonSecondary component", () => {    
        const { getByTestId } = render(<ButtonSecondary {...props} />);
        const buttonSecondary = getByTestId("button-secondary");
        expect(buttonSecondary).toBeInTheDocument();
    });
});