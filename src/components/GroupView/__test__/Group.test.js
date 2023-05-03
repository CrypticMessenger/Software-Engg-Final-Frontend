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
        
        // Conversation rows
        const conversationRows = screen.getAllByTestId('conversation-row');
        
        // Check if all conversation rows are visible before search
        conversationRows.forEach(row => {
            expect(row).toBeVisible();
        });
        
        // Clear the search query
        fireEvent.change(searchInput, { target: { value: '' } });
        
        // Check if all conversation rows are visible after clearing search
        conversationRows.forEach(row => {
            expect(row).toBeVisible();
        });
    });
 });