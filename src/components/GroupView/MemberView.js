import { React, useState } from "react";
import Fuse from "fuse.js";
import MemberListItem from "./MemberListItem";

/**
 * A component that displays a list of groups.
 * @param {Array} groupsData - An array of objects containing the data for each group.
 * @param {Array} tableHeaders - An array of strings containing the table headers.
 * @param {String} moreInfoRoute - The route to the page that displays more information about a group.
 * @param {Array} dropdownList - An array of objects containing the data for each dropdown item.
 * @returns {JSX.Element} - A React component that displays a list of groups.
 * @example
 *  const groupsData = [{
 *    name: "Neil Sims",
 *    email: "neil.sims@SubPubNet.com",
 *    imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
 *     joinDate: "Nov 10, 2024",
 *     isCreated: true,
 *   }]
 *
 * <MemberView
 * groupsData={groupsData}
 * tableHeaders={["groups", "join date", "subscription", ""]}
 * />
 */
export default function MemberView({
  groupsData,
  tableHeaders,
  moreInfoRoute,
  dropdownList,
}) {
  const TableHeaders = tableHeaders.map((item, index) => {
    return (
      <th
        key={index}
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        {item}
      </th>
    );
  });

  const [isAllSelected, setIsAllSelected] = useState(false);

  const [isRowSelected, setIsRowSelected] = useState(
    Object.fromEntries(groupsData.map((group) => [group.email, false]))
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleRowSelect = (email) => {
    //alert(email);
    // console.log(isRowSelected);
    // make a new updated state object
    const newState = { ...isRowSelected, [email]: !isRowSelected[email] };
    setIsRowSelected(newState);

    let allSelected = true;
    Object.keys(newState).forEach((key) => {
      if (!newState[key]) {
        allSelected = false;
      }
    });

    setIsAllSelected(allSelected);
  };

  const selectAll = () => {
    const previousState = isAllSelected;
    setIsAllSelected(!previousState);

    groupsData.forEach((group) => {
      setIsRowSelected((prevState) => ({
        ...prevState,
        [group.email]: !previousState,
      }));
    });
    console.table(isRowSelected);
  };

  const options = {
    // includeScore: true,
    useExtendedSearch: true,
    // includeMatches: true,
    threshold: 0.3,
    keys: ["name", "email"],
  };

  const handleSearch = (e) => {
    const fuse = new Fuse(groupsData, options);
    setSearchQuery(e.target.value);
    if (e.target.value.trim() !== "") {
      setSearchResults(fuse.search(e.target.value));
    } else {
      setSearchResults(null);
    }
  };

  const filteredGroupsData = searchResults
    ? searchResults.map((result) => result.item)
    : groupsData;

  const listGroups = filteredGroupsData.map((group, index) => (
    <MemberListItem
      name={group.name}
      email={group.email}
      imagePath={group.imagePath ?? "https://www.gkseries.com/blog/wp-content/uploads/2020/11/IIT-Ropar-2048x1534.jpg"}
      joinDate={group.email}
      isCreated={group.isCreated}
      role={group?.Role?.role_name}
      handleRowSelect={handleRowSelect}
      key={index}
      isSelected={isRowSelected[group.email]}
      moreInfoRoute={moreInfoRoute}
      // dropdownList={dropdownList}
    />
  ));

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative flex ml-auto">
          <input
            type="text"
            placeholder="Search email or group name"
            className="mr-4 w-80 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  checked={isAllSelected}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onClick={selectAll}
                  onChange={(e) => {}}
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {TableHeaders}
          </tr>
        </thead>
        <tbody>{listGroups}</tbody>
      </table>
    </div>
  );
}
