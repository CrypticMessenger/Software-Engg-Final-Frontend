import React from 'react'
import GroupListItem from './GroupListItem'
import Fuse from 'fuse.js';

export default function ListItem({groupsData,tableHeaders}) {

  const TableHeaders =tableHeaders.map((item,index)=>{

    return <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{item}</th>
  }

  )
  
const [isAllSelected, setIsAllSelected] = React.useState(false);

const [isRowSelected, setIsRowSelected] = React.useState(
  Object.fromEntries(groupsData.map((group) => [group.email, false]))
);

const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);

const handleRowSelect = (email) => {
  //alert(email);
  // console.log(isRowSelected);
  // make a new updated state object
  const newState = { ...isRowSelected , [email]: !isRowSelected[email] };
  setIsRowSelected(newState);

  let allSelected = true;
  Object.keys(newState).forEach((key) => {
    if (!newState[key]) {
      allSelected = false;
    }
  }
  );

  setIsAllSelected(allSelected);

};

const selectAll = () => {
  const previousState = isAllSelected;
  setIsAllSelected(!previousState);

  groupsData.forEach((group) => {
    setIsRowSelected((prevState) => ({
      ...prevState,
      [group.email]: !previousState
    }));
  });
  console.table(isRowSelected);
  
};

const options = {
  // includeScore: true,
  useExtendedSearch: true,
  // includeMatches: true,
  threshold: 0.3,
  keys: ['name', 'email'],
};

const handleSearch = (e) => {
  const fuse = new Fuse(groupsData, options);
  setSearchQuery(e.target.value);
  if (e.target.value.trim() !== '') {
    setSearchResults(fuse.search(e.target.value));
  } else {
    setSearchResults(null);
  }
};

const filteredGroupsData = searchResults ? searchResults.map((result) => result.item) : groupsData;

const listGroups = filteredGroupsData.map((group,index) => <GroupListItem name={group.name} email={group.email} imagePath={group.imagePath} joinDate={group.joinDate} isCreated={group.isCreated} handleRowSelect={handleRowSelect} key={index} 
isSelected={isRowSelected[group.email]}/>);


  return (
  
  
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div class="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
    <label for="table-search" class="sr-only">Search</label>
    <div class="relative flex ml-auto">
      <input
        type="text"
        placeholder="Search email or group name"
        class="mr-4 w-80 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  </div>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="p-4">
          <div class="flex items-center">
            <input id="checkbox-all-search" checked={isAllSelected} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={selectAll}/>
            <label for="checkbox-all-search" class="sr-only">checkbox</label>
          </div>
        </th>
        {TableHeaders}
      </tr>
    </thead>
    <tbody>
      {listGroups}
    </tbody>
  </table>
</div>

  )
}
