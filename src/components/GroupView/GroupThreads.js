import React from 'react'
import { IoEllipsisHorizontal } from 'react-icons/io5';

export default function GroupThreads({row, columns}) {
    const [isEditOptionsOpen, setIsEditOptionsOpen] = React.useState(false);
    const toggleEditOptions = () => {
        setIsEditOptionsOpen(!isEditOptionsOpen);
    }
  return (
    <tr key={row.id} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
    {columns.map((column,index) => {
        const value = row[column.accessor]
        return (
            index === 0 ? (
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer hover:underline">
                    {column.Cell ? column.Cell({ value }) : value}
                </th>
            ) : (
            <td key={column.accessor} className="px-4 py-3">
                {column.Cell ? column.Cell({ value }) : value}
            </td>
            )
        )
    })}
<td className="px-4 py-3"></td>
<td className="px-4 py-3 flex items-center justify-end">
<button onClick={toggleEditOptions} id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
 <IoEllipsisHorizontal/>
</button>
<div id="apple-imac-27-dropdown" className={`${isEditOptionsOpen? 'absolute':'hidden'} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
    <li>
      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
    </li>
    <li>
      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
    </li>
  </ul>
  <div className="py-1">
    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
  </div>
</div>
</td>
</tr>
)
  
}
