import React from "react";

import { useNavigate } from "react-router-dom";


import ButtonPrimary from "../common/ButtonPrimary";

/**
 * A component that displays a single row in the group list.
 * @param {string} name - The name of the group.
 * @param {string} email - The email of the group.
 * @param {string} imagePath - The image path of the group.
 * @param {string} joinDate - The date the user joined the group.
 * @param {boolean} isPublic - Whether the group is public or private.
 * @param {boolean} isCreated - Whether the user created the group.
 * @param {boolean} isSelected - Whether the row is selected.
 * @param {function} handleRowSelect - The function to call when the row is selected.
 * @param {string} key - The key of the row.
 * @param {function} handleJoinClick - The function to call when the join button is clicked.
 * @returns {JSX.Element} - A React component that displays a single row in the group list.
 * @example
 * <SearchItem
 * name="Neil Sims"
 * email="john.doe@gmail.com"
 * imagePath="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
 * joinDate="2022-01-01"
 * isCreated={false}
 * isSelected={false}
 * handleRowSelect={() => {}}
 * key="1"
 * />
 *
 */
export default function SearchItem({
  id,
  name,
  email,
  imagePath,
  joinDate,
  isPublic,
  isCreated,
  isSelected,
  handleRowSelect,
  key,
  handleJoinClick,
}) {
  const navigate = useNavigate();
  const [isFavourite, setIsFavourite] = React.useState(false);
  const handleFavoriteClick = () => {
    setIsFavourite(!isFavourite);
  };
  const getGroupInfo = () => {
    console.log("Get Group Info");
    navigate("/group-info"); // can pass information about the roles here
  };
  const dropdownList = ["Each Email", "Digest", "Abridged", "No email"];
  const [isExitVisible, setIsExitVisible] = React.useState(false);
  const [isAddPeopleVisible, setIsAddPeopleVisible] = React.useState(false);
  const handleAddClick = () => {
    setIsAddPeopleVisible(!isAddPeopleVisible);
  };
  const handleExitClick = () => {
    setIsExitVisible(!isExitVisible);
  };
  return (
    <div data-testid="SearchItemTest">
      <tr
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        key={key}>
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-2"
              type="checkbox"
              checked={isSelected}
              onChange={() => handleRowSelect(email)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-2" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          onClick={getGroupInfo}
          scope="row"
          className="cursor-pointer flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <img
            className="w-10 h-10 rounded-full"
            src={imagePath}
            alt={name + " image"}
          />
          <div className="pl-3">
            <div className="text-base font-semibold">{name}</div>
            <div className="font-normal text-gray-500">{email}</div>
          </div>
        </th>
        <td className="px-6 py-4">{joinDate}</td>
        <td className="px-6 py-4">{isPublic}</td>
        <td className="px-6 py-4">
          {/* Join button */}
          <ButtonPrimary
            onClick={() => {
              handleJoinClick(id)
            }}
          >
            Join
          </ButtonPrimary>
          
        </td>

      </tr>
    </div>
  );
}
