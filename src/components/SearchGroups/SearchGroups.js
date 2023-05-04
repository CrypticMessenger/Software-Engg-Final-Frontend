import { React, useEffect, useState } from "react";
import GroupList from "../common/GroupList";
import { DJANGO_API_URL } from "../../constants/urls";
import SearchItemList from "./SearchItemList";

export const SearchGroups = () => {
    const [groupsData, setGroupsData] = useState([]);
    // const groupsData = [
    //   {
    //     name: "Neil Sims",
    //     email: "neil.sims@flowbite.com",
    //     imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
    //     joinDate: "Nov 10, 2024",
    //     isCreated: true, // set to true if user is the creator of the group ( or similar role)
    //   },
    //   {
    //     name: "blast you",
    //     email: "neil.sim2s@flowbite.com",
    //     imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
    //     joinDate: "Nov 10, 2024",
    //     isCreated: false,
    //   },
    //   {
    //     name: "Neil Sims",
    //     email: "neil.sim5s@flowbite.com",
    //     imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
    //     joinDate: "Nov 10, 2024",
    //     isCreated: true,
    //   },
    //   {
    //     name: "Neil Si",
    //     email: "neil.si3ms@flowbite.com",
    //     imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
    //     joinDate: "Nov 10, 2024",
    //     isCreated: false,
    //   },
    // ];
    const tableHeaders = ["groups", "is Public Join", "is Public viewable", ""];
    const dropdownList = ["Each Email", "Digest", "Abridged", "No email"];

    const handleJoinClick = (id) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const fetchData = async () => {
            const response = await fetch(`${DJANGO_API_URL}member/group/${id}/join/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
               
            });
            const data = await response.json();
            console.log(data);
        };
        fetchData();
    };
    
  
    useEffect(() => {
      document.title = "Dashboard";
      //fetch data from api call and store it in groupsData
      const fetchData = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user.token);
        const response = await fetch(DJANGO_API_URL + "group/", {
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
          <SearchItemList
            groupsData={groupsData}
            tableHeaders={tableHeaders}
            moreInfoRoute="/group-info"
            dropdownList={dropdownList}
            handleJoinClick={handleJoinClick}
          />
        </div>
      </>
    );
}
