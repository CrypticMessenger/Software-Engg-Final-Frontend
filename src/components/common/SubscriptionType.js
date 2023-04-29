import React from 'react'

export default function SubscriptionType() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [selected, setSelected] = React.useState('Each Email');
    const toggleVisibility = () => setIsVisible(!isVisible);
    const dropdownList = ['Each Email', 'Digest', 'Abridged', 'No email'];
    const handleSelection = (e) => {
        setSelected(e.target.nextSibling.innerText);
        setIsVisible(false);
    }
    const dropdownListItems = dropdownList.map((item, index) => (

        <li key={index}>
        <div className="flex items-center">
          <input onClick={handleSelection} id="default-radio-1" type="radio" defaultValue name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" >{item}</label>
        </div>
      </li>
    ));

  return (
    <div>
    <button id="dropdownRadioButton" data-dropdown-toggle="dropdownDefaultRadio" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={toggleVisibility} style={{ width: "130px" }}>{selected} <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
   
    <div id="dropdownDefaultRadio" className={`z-10 ${isVisible ? 'absolute' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
      <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
         {dropdownListItems}
      </ul>
    </div>
  </div>
  )
}
