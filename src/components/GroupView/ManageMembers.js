import React, { useEffect } from "react";
import MemberView from "./MemberView";

/**
 * ManageMembers component is used to render the ManageMembers page,  i.e. displayed only with proper permissions.
 * @returns {JSX.Element} ManageMembers component i.e. list of memebers and their details.
 * @example
 *  <ManageMembers />
 * 
 */
export default function ManageMembers({groupId}) {
  const memberData = [
    {
      name: "Neil Sims",
      email: "neil.sims@SubPubNet.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      
      joinDate: "Nov 10, 2024",
      isCreated: true,
    },
  ];
  console.log(groupId)
  const tableHeaders = ["User", "join date", "role", ""];
  const dropdownList = ["Member", "Admin"];
  useEffect(() => {
    document.title = "Manage Members";

    // const user = JSON.parse(localStorage.getItem("user"));
    // const token = user.token;
    // const fetchGroups = async () => {
    //   const response = await fetch(
    //     `http://${groupLink}/members/group/${groupId}/`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   console.log(data);
    // }
    // fetchGroups();

  }, []);
  return (
    <div data-testid="ManageMemberTest">
      <MemberView
        groupsData={memberData}
        tableHeaders={tableHeaders}
        moreInfoRoute="/dashboard"
        dropdownList={dropdownList}
      />
    </div>
  );
}
