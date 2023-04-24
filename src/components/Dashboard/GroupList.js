import React from 'react'
import GroupListItem from './GroupListItem'
import Fuse from 'fuse.js';

export default function ListItem() {

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
{
  name:"Neil Sims",
  email:"neil.sim5s@flowbite.com",
  imagePath:"https://cdn.tuk.dev/assets/templates/olympus/projects.png",
  joinDate:"Nov 10, 2024"
  ,isCreated:true
},
{
  name:"Neil Sims",
  email:"neil.si3ms@flowbite.com",
  imagePath:"https://cdn.tuk.dev/assets/templates/olympus/projects.png",
  joinDate:"Nov 10, 2024",
  isCreated:false
}
]
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

  // if all rows are selected, set the "select all" checkbox to true
  let allSelected = true;
  Object.keys(newState).forEach((key) => {
    if (!newState[key]) {
      allSelected = false;
    }
  }
  );
  // console.log("allSelected");
  // console.log(allSelected);
  setIsAllSelected(allSelected);

};

const selectAll = () => {
  const previousState = isAllSelected;
  setIsAllSelected(!previousState);
  // change row selection state to true for all rows
  // setIsRowSelected((prevState) => {
  //   const newState = { ...prevState };
  //   Object.keys(newState).forEach((key) => {
  //     newState[key] = previousState;
  //   });
  //   return newState;
  // });
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

console.log("searchResults")
console.log(searchResults)
const filteredGroupsData = searchResults ? searchResults.map((result) => result.item) : groupsData;

console.log("filteredGroupsData")
console.log(filteredGroupsData);

console.log("groupsData")
console.log(groupsData);
const listGroups = filteredGroupsData.map((group,index) => <GroupListItem name={group.name} email={group.email} imagePath={group.imagePath} joinDate={group.joinDate} isCreated={group.isCreated} handleRowSelect={handleRowSelect} key={index} 
isSelected={isRowSelected[group.email]}/>);


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
      <div>
        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
          <span className="sr-only">Action button</span>
          Action
          <svg className="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        {/* Dropdown menu */}
        <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
            </li>
          </ul>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
          </div>
        </div>
      </div>

      {/**Search*/}
      <label htmlFor="table-search" className="sr-only">Search</label>
      <div className="relative">
          <input
            type="text"
            placeholder="Search email or group name"
            className="px-4 py-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input id="checkbox-all-search" checked={isAllSelected} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={selectAll}/>
              <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            Groups
          </th>
          <th scope="col" className="px-6 py-3">
            Join date
          </th>
          <th scope="col" className="px-6 py-3">
            Subscription
          </th>
          <th scope="col" className="px-6 py-3">
            
          </th>
        </tr>
      </thead>
      <tbody>
       
        {listGroups}

      </tbody>
    </table>
    {/* Edit user modal */}
    <div id="editUserModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <form action="#" className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit user
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>  
            </button>
          </div>
          {/* Modal body */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" required />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input type="number" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" required />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                <input type="text" name="department" id="department" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Development" required />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                <input type="number" name="company" id="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={123456} required />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="current-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                <input type="password" name="current-password" id="current-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="new-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                <input type="password" name="new-password" id="new-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  

  )
}
