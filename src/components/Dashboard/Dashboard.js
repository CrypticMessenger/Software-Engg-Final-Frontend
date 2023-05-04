// Dashboard.js
//user can search for a group by name or email.
// Displays all the available groups in a list and their details and subscritpion type.
import { React, useEffect } from "react";
import GroupList from "../common/GroupList";
/**
 * A component that displays the dashboard.
 * @returns {JSX.Element} - A React component that displays the dashboard.
 * @example
 * <Dashboard />
 *
 */

export default function Dashboard() {
  const groupsData = [
    {
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: true, // set to true if user is the creator of the group ( or similar role)
    },
    {
      name: "blast you",
      email: "neil.sim2s@flowbite.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: false,
    },
    {
      name: "Neil Sims",
      email: "neil.sim5s@flowbite.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: true,
    },
    {
      name: "Neil Si",
      email: "neil.si3ms@flowbite.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: false,
    },
  ];
  const tableHeaders = ["groups", "join date", "subscription", ""];
  const dropdownList = ["Each Email", "Digest", "Abridged", "No email"];

  useEffect(() => {
    document.title = "Dashboard";
    //fetch data from api call and store it in groupsData
  }, []);
  return (
    <>
      <div data-testid="dashboard">
        <GroupList
          groupsData={groupsData}
          tableHeaders={tableHeaders}
          moreInfoRoute="/group-info"
          dropdownList={dropdownList}
        />
      </div>
    </>
  );
}
