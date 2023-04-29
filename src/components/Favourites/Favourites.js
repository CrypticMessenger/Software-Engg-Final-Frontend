import React, { useEffect } from 'react'

import Grouplist from '../common/GroupList'
export default function Favourites() {
    const groupsData = [
        {
          name:"Neil Sims",
          email:"neil.sims@flowbite.com",
          imagePath:"https://cdn.tuk.dev/assets/templates/olympus/projects.png",
          joinDate:"Nov 10, 2024",
          isCreated:true
    },
    {
      name:"blast you",
      email:"neil.sim2s@flowbite.com",
      imagePath:"https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate:"Nov 10, 2024",
      isCreated:false
    },
  
    ]
    const tableHeaders = ["groups","join date","subscription",""]
    useEffect(() => {
        document.title = "Favourites"
        //fetch data from api call and store it in groupsData
        
    }, [])
    
  return (
    <div>
        
        <Grouplist groupsData={groupsData} tableHeaders={tableHeaders}/>
    </div>
  )
}
