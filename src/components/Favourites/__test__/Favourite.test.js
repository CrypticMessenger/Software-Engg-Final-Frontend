import { render } from "@testing-library/react";
import Favourites from "../Favourites";
import { BrowserRouter } from "react-router-dom";

describe("Favourites", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<BrowserRouter><Favourites /></BrowserRouter>);
        expect(getByTestId("FavouriteTest")).toBeInTheDocument();
    });
});