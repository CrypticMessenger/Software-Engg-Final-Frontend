import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Group from "../Group";

describe("Group", () => {  
    it("should render Group component", () => {
        const {getByTestId} = render(<Group />);
        const group = getByTestId("group");
        expect(group).toBeInTheDocument();

        const addProductButton = getByTestId("add-product-button");
        expect(addProductButton).toBeInTheDocument();

        const filterButton = getByTestId("filter-button");
        expect(filterButton).toBeInTheDocument();

        const columnHolders = getByTestId("column-holders");
        expect(columnHolders).toBeInTheDocument();

        const pagination = getByTestId("pagination");
        expect(pagination).toBeInTheDocument();
    });

    it("test toggleEditOptions", () => {
        
    });

 });