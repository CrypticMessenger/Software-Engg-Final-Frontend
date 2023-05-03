import { React, useEffect } from "react";
import GroupList from "../common/GroupList";

export default function Dashboard() {
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
  useEffect(() => {
    document.title = "Dashboard";
    //fetch data from api call and store it in groupsData
  }, []);
  return (
    <div data-testid="dashboard">
        <GroupList groupsData={groupsData} tableHeaders={tableHeaders}/>
    </div>
  );
}
