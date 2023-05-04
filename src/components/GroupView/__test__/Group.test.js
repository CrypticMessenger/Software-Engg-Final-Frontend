import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Group from "../Group";
import { BrowserRouter } from 'react-router-dom';

describe("Group", () => {  
    it("should render Group component", () => {
        // const component = render(<BrowserRouter><Group /></BrowserRouter>);
        // console.log(component);
        const {getByTestId} = render(<BrowserRouter><Group /></BrowserRouter>);
        const group = getByTestId("group");  // done
        expect(group).toBeInTheDocument();

        const addProductButton = getByTestId("group-dropdown");
        expect(addProductButton).toBeInTheDocument();
    });

    test('should toggle the post modal when clicked', () => {
        const { getByRole } = render(<BrowserRouter><Group /></BrowserRouter>);
    
        const button = getByRole('button');
        expect(button).toBeInTheDocument();
    
        fireEvent.click(button);
    });

    test('searching for conversations', () => {
        const {getByTestId} = render(<BrowserRouter><Group /></BrowserRouter>);
        
        // Search input field
        const searchInput = getByTestId('search-input');
        fireEvent.change(searchInput, { target: { value: 'test' } });
        expect(searchInput.value).toBe('test');
    });

    test('Search input field should be empty', () => {
        const {getByTestId} = render(<BrowserRouter><Group /></BrowserRouter>);
        
        // Search input field
        const searchInput = getByTestId('search-input');
        fireEvent.change(searchInput, { target: { value: null } });
        expect(searchInput.value).toBe("");
    });
 });