import React from "react";
import { Link } from "react-router-dom";

/** 
 * display the tabs in on clicking groups
 * @param {Array} Tabs - array of tabs
 * @param {Array} activeTabs - array of active tabs a boolean. 1 for active and 0 for inactive
 * @param {Function} handleTabClick - function to handle tab click
 */


export default function TabBar({ Tabs, activeTabs, handleTabClick }) {
  console.log(Tabs);
  console.log(activeTabs);

  const tabs = Tabs.map((tab, index) => {
    if (activeTabs[index] === 1) {
      return (
        <li className="mr-2">
          <Link
            onClick={(e) =>{e.preventDefault(); handleTabClick(index)}}
            // to="/"
            aria-current="page"
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500">
            {tab}
          </Link>
        </li>
      );
    } else {
      return (
        <li className="mr-2">
          <Link
            onClick={(e) =>{e.preventDefault(); handleTabClick(index)}}
            // to="/"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            {tab}
          </Link>
        </li>
      );
    }
  });
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {tabs}
    </ul>
  );
}
