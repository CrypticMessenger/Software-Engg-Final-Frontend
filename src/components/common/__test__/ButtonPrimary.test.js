// import React from "react";

// const ButtonPrimary = ({ type, children, style, onClick, testid }) => {
//   return (
//     <button
//       type={type ?? "button"}
//       onClick={onClick}
//       data-testid={testid}
//       className={`text-white bg-indigo-400 hover:bg-indigo-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ${
//         style ?? ""
//       }`}
//     >
//       {children}
//     </button>
//   );
// };

// export default ButtonPrimary;

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonPrimary from "../ButtonPrimary";

describe("ButtonPrimary", () => {
    const props = {
        type: null,
        children: "Button",
        style: null,
        onClick: jest.fn(),
        testid: "button"
    };
    it("should render button", () => {
        const { getByTestId } = render(<ButtonPrimary {...props} />);
        const button = getByTestId("button");
        expect(button).toBeInTheDocument();
    });
});