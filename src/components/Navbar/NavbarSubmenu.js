import { React, useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";

/**
 * Navbar Submenu
 * @param {Object} group - The group object
 * @returns {JSX.Element} A React component that displays a navbar submenu. for each group that's created by the user, ot has options to see approve joining requests and post requests.
 * @example
 * <NavbarSubmenu group={group} />
 */
export default function NavbarSubmenu({ group }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <li>
      <button
        onClick={() => setIsShown(!isShown)}
        type="button"
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example">
        <RiAdminFill />
        <span
          className="flex-1 ml-3 text-left whitespace-nowrap"
          sidebar-toggle-item>
          {group.name}
        </span>
        <svg
          sidebar-toggle-item
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul
        id="dropdown-example"
        className={`${isShown ? "relative" : "hidden"} py-2 space-y-2`}>
        <li>
          <Link
            to="/approval-request"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            Approve Requests
          </Link>
        </li>

        <li>
          <Link
            to="/joining-request"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            Joining Requests
          </Link>
        </li>
      </ul>
    </li>
  );
}
