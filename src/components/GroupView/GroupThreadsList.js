import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";
import GroupThreadsItems from "./GroupThreadsItems";
import ModalAddPost from "../modals/ModalAddPost";
import { MdAdd } from "react-icons/md";
import ButtonSecondary from "../common/ButtonSecondary";
import TabBar from "./TabBar";
import ManageSettings from "./ManageSettings";
import ManageMembers from "./ManageMembers";
import ApprovalRequest from "../Navbar/ApprovalRequest";
import JoiningRequest from "../Navbar/JoiningRequest";
/**
 * GroupThreadsList component - when user clicks on the group name, this component is rendered. This component shows all the threads heads in the group. user can click on the thread head to view the messages in that thread. user can also create a new thread.
 * - renders list of GroupThreadsItems component
 * @returns {JSX.Element} - A React component that displays the GroupThreadsList component.
 * @example
 * <GroupThreadsList />
 * */
const GroupThreadsList = () => {
  //get the information about roles inside use effect of this
  const [columns, setColumns] = useState([
    {
      Header: "Sender Name",
      accessor: "author",
    },
    {
      Header: "Thread Subject",
      accessor: "messageSubject",
    },
    {
      Header: "Date",
      accessor: "messageDate",
    },
    {
      Header: "Time",
      accessor: "messageTime",
    },
  ]);

  const [data, setData] = useState([
    {
      id: 1,
      author: "John Doe1",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageSubject: "Lorem ipsum dolt, consectetur adipiscing elit. ",
      messageDate: "2021-08-01",
      messageTime: "12:00",
      isHead: true,
      parentId: null,
    },
    {
      id: 2,
      author: "John arshi1",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageSubject:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc sapien aliquet urna, vitae aliqua",
      messageDate: "2021-08-01",
      messageTime: "12:00",
      isHead: true,
      parentId: null,
    },
    {
      id: 3,
      author: "John sukhi1",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageSubject:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc sapien aliquet urna, vitae aliqua",
      messageDate: "2021-08-01",
      messageTime: "12:00",
      isHead: true,
      parentId: null,
    },
  ]);
  const allowMetadata = true;
  const allowManageContent = false;
  const allowManagePeople = true;
  const options = {
    // includeScore: true,
    useExtendedSearch: true,
    // includeMatches: true,
    threshold: 0.3,
    keys: ["author", "messageSubject"],
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
    <GroupThreadsItems key={row.id} row={row} columns={columns} />
  ));

  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const tempTabLabels = [
    "Threads",
    "Members",
    "Settings",
    "Approve Requests",
    "Joining Requests",
  ];
  console.log("here");

  console.log(tempTabLabels);

  if (!allowManagePeople) {
    // remove members tab using string search
    tempTabLabels.splice(tempTabLabels.indexOf("Members"), 1);
    tempTabLabels.splice(tempTabLabels.indexOf("Joining Requests"), 1);
  }
  if (!allowMetadata) {
    // remove settings tab
    tempTabLabels.splice(tempTabLabels.indexOf("Settings"), 1);
  }
  if (!allowManageContent) {
    // remove settings tab
    tempTabLabels.splice(tempTabLabels.indexOf("Approve Requests"), 1);
  }
  console.log("here");

  console.log(tempTabLabels);
  const [tabLabels, setTabLabels] = useState(tempTabLabels);

  const [activeTabs, setActiveTabs] = useState(
    tempTabLabels.length > 0
      ? [1, ...Array(tempTabLabels.length - 1).fill(0)]
      : []
  );

  const handleTabClick = (index) => {
    setActiveTabs(activeTabs.map((tab, i) => (i === index ? 1 : 0)));
  };
  {
    console.log(activeTabs);
  }
  {
    console.log(tabLabels);
  }
  useEffect(() => {
    document.title = "Group Threads";
  }, []);

  return (
    <div data-testid="GroupThreadsListTest">
      <TabBar
        Tabs={tabLabels}
        activeTabs={activeTabs}
        handleTabClick={handleTabClick}
      />
      {activeTabs[0] === 1 && (
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
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
                  <div className="flex items-center space-x-3 w-full md:w-auto">
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
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10
              </span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  1
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  2
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  aria-current="page"
                  className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                  3
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  ...
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  100
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
          {isPostModalOpen && (
            <ModalAddPost
              isVisible={isPostModalOpen}
              setIsVisible={setIsPostModalOpen}
            />
          )}
        </section>
      )}
      {allowManagePeople && activeTabs[tabLabels.indexOf("Members")] === 1 && (
        <ManageMembers />
      )}
      {allowMetadata && activeTabs[tabLabels.indexOf("Settings")] === 1 && (
        <ManageSettings />
      )}

      {allowManageContent &&
        activeTabs[tabLabels.indexOf("Approve Requests")] === 1 && (
          <ApprovalRequest />
        )}
      {allowManagePeople &&
        activeTabs[tabLabels.indexOf("Joining Requests")] === 1 && (
          <JoiningRequest />
        )}
    </div>
  );
};

export default GroupThreadsList;
