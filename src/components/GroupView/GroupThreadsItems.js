import React from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function GroupThreads({ row, columns }) {
  const [isEditOptionsOpen, setIsEditOptionsOpen] = React.useState(false);
  const toggleEditOptions = () => {
    setIsEditOptionsOpen(!isEditOptionsOpen);
  };
  const navigate = useNavigate();
  const goToView = () => {
    navigate("/group-thread-view", { state: { id: row.id } });
  };
  return (
    <tr
      key={row.id}
      className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
      {columns.map((column, index) => {
        const value = row[column.accessor];
        return index === 0 ? (
          <th
            onClick={goToView}
            scope="row"
            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer hover:underline">
            {column.Cell ? column.Cell({ value }) : value}
          </th>
        ) : (
          <td key={column.accessor} className="px-4 py-3">
            {column.Cell ? column.Cell({ value }) : value}
          </td>
        );
      })}
      <td className="px-4 py-3"></td>
      <td className="px-4 py-3"></td>
    </tr>
  );
}
