import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GroupThreadsItems from "../GroupThreadsItems";

describe("GroupThreadsItems", () => {
    const row = {
        id: 1,
        title: "Test Title",
        description: "Test Description",
        created_at: "2021-08-01T00:00:00.000Z",
        updated_at: "2021-08-01T00:00:00.000Z",
        user_id: 1,
        group_id: 1,
        user: {
            id: 1,
            username: "testuser",
            email: "abc@gmail.com",
            created_at: "2021-08-01T00:00:00.000Z",
            updated_at: "2021-08-01T00:00:00.000Z",
        },
        group: {
            id: 1,
            name: "Test Group",
            description: "Test Description",
            created_at: "2021-08-01T00:00:00.000Z",
            updated_at: "2021-08-01T00:00:00.000Z",
            user_id: 1,
        },
    };
    const columns = [
        {
            Header: "Title",
            accessor: "title",
        },
        {
            Header: "Description",
            accessor: "description",
        },
        {
            Header: "Created At",
            accessor: "created_at",
        },
        {
            Header: "Updated At",
            accessor: "updated_at",
        },
        {
            Header: "User ID",
            accessor: "user_id",
        },
        {
            Header: "Group ID",
            accessor: "group_id",
        },
    ]; 
    it("should render", () => {
        const { getByText } = render(
            <MemoryRouter>
                <GroupThreadsItems row={row} columns={columns} />
            </MemoryRouter>
        );
        expect(getByText("Test Title")).toBeInTheDocument();
    });
});