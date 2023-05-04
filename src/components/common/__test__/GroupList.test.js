import { render,fireEvent } from "@testing-library/react";
import ListItem from "../GroupList";
import GroupListItem from "../GroupListItem";
import { BrowserRouter } from "react-router-dom";
import { renderHook } from "@testing-library/react";
import { useState } from "react";
import { act } from "@testing-library/react";
import user from "@testing-library/user-event";
import { shallow } from "enzyme";

describe("GroupList", () => {
    const groupsData = [
        {
          name: "Neil Sims",
          email: "neil.sims@flowbite.com",
          imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
          joinDate: "Nov 10, 2024",
          isCreated: true,
          isSelected : false
        }
    ];
    const tableHeaders = ["groups", "join date", "subscription", ""];
    const props = {
        groupsData,
        tableHeaders
    };
    test("renders without crashing", () => {
        const {getByTestId} = render(<BrowserRouter><ListItem {...props} /></BrowserRouter>);
        const groupList = getByTestId("grouplisttest");
        expect(groupList).toBeInTheDocument();

        // testing the search input
        const searchInput = getByTestId("searchInputTest");
        fireEvent.change(searchInput, { target: { value: 'test' } });
        expect(searchInput.value).toBe('test');
    });
    
    test("renders the group list item", () => {
        const {getByTestId} = render(<BrowserRouter><ListItem {...props} /></BrowserRouter>);
        const groupListItem = getByTestId("groupListItemTest");
        expect(groupListItem).toBeInTheDocument();
    });

    test('initial value of isAllSelected is false', () => {
    const { result } = renderHook(() => useState(false));
    const [isAllSelected] = result.current;
    expect(isAllSelected).toBe(false);
    });    
});


