import React, { useState } from "react";
import Fuse from "fuse.js";
// This file shows all the conversations in a group google group
//  Then the user can click on a conversation to view the messages in that conversation
//  The user can also create a new conversation
import GroupThreads from "./GroupThreadsItems";
import ModalAddPost from "../modals/ModalAddPost";
import { MdAdd } from "react-icons/md";
import ButtonSecondary from "../common/ButtonSecondary";
/** 
 * Displays all the conversations in a groups i.e. all the thread heads.
 * @returns {JSX.Element} - Rendered component i.e. a list of all the thread heads.
 * @example
 * <Group />
 * 
 */
const Group = () => {
  const [columns, setColumns] = useState([
    {
      Header: "Sender Name",
      accessor: "name",
    },
    {
      Header: "Thread Subject",
      accessor: "subject",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Time",
      accessor: "time",
    },
  ]);

  const [data, setData] = useState([
    {
      id: 1,
      name: "Sukhmeet Doe",
      subject: "This is a test",
      date: "01/01/2021",
      time: "12:00:00",
    },
    {
      id: 2,
      name: "Sourabh Doe2",
      subject: "This is a test",
      date: "01/01/2021",
      time: "12:00:00",
    },
    {
      id: 3,
      name: "Arshi Doe",
      subject: "This is a test",
      date: "01/01/2021",
      time: "12:00:00",
    },
  ]);
  const options = {
    // includeScore: true,
    useExtendedSearch: true,

    threshold: 0.3,
    keys: ["name", "subject"],
  };
  const handleSearch = (e) => {
    const fuse = new Fuse(data, options);
    setSearchQuery(e.target.value);
    if (e.target.value.trim() !== "") {
      setSearchResults(fuse.search(e.target.value));
    } else {
      setSearchResults(null);
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const columnHeaders = columns.map((column) => (
    <th key={column.Header} scope="col" className="px-4 py-3">
      {column.Header}
    </th>
  ));
  const filteredGroupsData = searchResults
    ? searchResults.map((result) => result.item)
    : data;
  const rowData = filteredGroupsData.map((row) => (
    <GroupThreads
      key={row.id}
      row={row}
      columns={columns}
      data-testid="conversation-row"
    />
  ));

  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  return (
    <>
      <section
        className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"
        data-testid="group">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          {/* Start coding here */}
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      data-testid="search-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={handleSearch}
                      required
                    />
                  </div>
                </form>
              </div>

              {/* Dropdown */}
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <div
                  className="flex items-center space-x-3 w-full md:w-auto"
                  data-testid="group-dropdown">
                  {/* Dropdown filter */}
                  {/* <button
                  className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  onClick={() => {
                    setIsPostModalOpen(!isPostModalOpen);
                    console.log(isPostModalOpen);
                  }}>
                  Post
                </button> */}

                  <ButtonSecondary
                    onClick={() => {
                      setIsPostModalOpen(!isPostModalOpen);
                      console.log(isPostModalOpen);
                    }}>
                    <MdAdd className="w-5 h-5 mr-2" />
                    Post
                  </ButtonSecondary>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {columnHeaders}
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>{rowData}</tbody>
              </table>
            </div>
          </div>
        </div>
        {isPostModalOpen && (
          <ModalAddPost
            isVisible={isPostModalOpen}
            setIsVisible={setIsPostModalOpen}
          />
        )}
      </section>
    </>
  );
};

export default Group;
