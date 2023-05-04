import React, { useEffect } from "react";
import MemberView from "./MemberView";

export default function ManageMembers() {
  const memberData = [
    {
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: true,
    },
  ];
  const tableHeaders = ["User", "join date", "role", ""];
  const dropdownList = ["Member", "Admin"];
  useEffect(() => {
    document.title = "Manage Members";
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
