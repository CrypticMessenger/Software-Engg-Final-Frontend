// Dashboard.js
//user can search for a group by name or email.
// Displays all the available groups in a list and their details and subscritpion type.
import { React, useEffect, useState } from "react";
import GroupList from "../common/GroupList";
import { DJANGO_API_URL } from "../../constants/urls";
/**
 * A component that displays the dashboard.
 * @returns {JSX.Element} - A React component that displays the dashboard.
 * @example
 * <Dashboard />
 *
 */

export default function Dashboard() {
  const [groupsData, setGroupsData] = useState([]);
 
  const tableHeaders = ["groups", "DB region", "subscription", ""];
  const dropdownList = ["Each Email", "Digest", "Abridged", "No email"];

  useEffect(() => {
    document.title = "Dashboard";
    //fetch data from api call and store it in groupsData
    const fetchData = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user.token);
      const response = await fetch(DJANGO_API_URL + "group/user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      
      const data = await response.json();
      console.log(data);
      setGroupsData(data);
    }
    fetchData();

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
