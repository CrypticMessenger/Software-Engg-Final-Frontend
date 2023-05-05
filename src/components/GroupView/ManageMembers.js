import React, { useEffect, useState } from "react";
import MemberView from "./MemberView";
import { DJANGO_API_URL } from "../../constants/urls";

/**
 * ManageMembers component is used to render the ManageMembers page,  i.e. displayed only with proper permissions.
 * @returns {JSX.Element} ManageMembers component i.e. list of memebers and their details.
 * @example
 *  <ManageMembers />
 * 
 */
export default function ManageMembers({groupId,groupLink}) {
  const [memberData, setMemberData] = useState([]);
  // const memberData = [
  //   {
  //     name: "Neil Sims",
  //     email: "neil.sims@flowbite.com",
  //     imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",

  //     joinDate: "Nov 10, 2024",
  //     isCreated: true,
  //   },
  // ];
  console.log(groupId)
  const tableHeaders = ["User", "email", "role", ""];
  const dropdownList = ["Member", "Admin"];



  
  useEffect(() => {
    document.title = "Manage Members";

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    const fetchGroups = async () => {
      console.log("getting",user)
      const response = await fetch(
        `${DJANGO_API_URL}member/group/${groupId}/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log("sdfasdf",data);
      setMemberData(data);
    }
    fetchGroups();

  }, []);
  return (
    <div>
      <MemberView
        groupsData={memberData}
        tableHeaders={tableHeaders}
        moreInfoRoute="/dashboard"
        // dropdownList={dropdownList}
      />
    </div>
  );
}
