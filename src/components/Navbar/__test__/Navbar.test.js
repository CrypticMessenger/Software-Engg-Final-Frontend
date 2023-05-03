import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";
import {UserProvider,UserContext} from "../../Providers/userProvider";

test('Test Navbar', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    const navbar = screen.getByTestId('Navbar');
    expect(navbar).toBeInTheDocument();
})