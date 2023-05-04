import React, { useEffect } from "react";

import Grouplist from "../common/GroupList";

/**
 * Component that returns the Favourites page, containing a list of groups that are added to favourites.
 * @returns {JSX.Element} - A React component that displays the Favourites page as list GroupList components.
 */
export default function Favourites() {
  const groupsData = [
    {
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: true,
    },
    {
      name: "blast you",
      email: "neil.sim2s@flowbite.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: false,
    },
  ];
  const tableHeaders = ["groups", "join date", "subscription", ""];
  const dropdownList = ["Each Email", "Digest", "Abridged", "No email"];

  useEffect(() => {
    document.title = "Favourites";
    //fetch data from api call and store it in groupsData
  }, []);

  return (
    <div>
      <Grouplist
        groupsData={groupsData}
        tableHeaders={tableHeaders}
        moreInfoRoute="/group-info"
        dropdownList={dropdownList}
      />
    </div>
  );
}
