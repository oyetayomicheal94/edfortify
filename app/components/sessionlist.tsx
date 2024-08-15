import React, { useState } from "react";
import EditSession from "./editsession";
import SessionDelete from "./sessiondelete";
import "../../styles/globals.css";

const SessionListTable = () => {
  const sessionList = [
    {
      id: "1",
      sessionName: "2022/2023",
      startDate: "09-17-2022",
      endDate: "09-18-2023",
    },
    {
      id: "2",
      sessionName: "2023/2024",
      startDate: "09-17-2022",
      endDate: "09-18-2023",
    },
    {
      id: "3",
      sessionName: "2024/2025",
      startDate: "09-17-2022",
      endDate: "09-18-2023",
    },
    {
      id: "4",
      sessionName: "2025/2026",
      startDate: "09-17-2022",
      endDate: "09-18-2023",
    },
  ];

  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isEditSessionOpen, setEditSessionOpen] = useState(false);
  const [isDeleteSessionOpen, setDeleteSessionOpen] = useState(false);

  const toggleDropdown = (buttonId) => {
    setOpenDropdowns((prevOpenDropdowns) => ({
      ...prevOpenDropdowns,
      [buttonId]: !prevOpenDropdowns[buttonId],
    }));
  };

  const renderRows = () => {
    return sessionList.map((session) => (
      <tr key={session.id}>
        <td className="py-2 px-4 border-b text-left align-middle">
          {session.sessionName}
        </td>
        <td className="py-2 px-4 border-b text-left align-middle">
          {session.startDate}
        </td>
        <td className="py-2 px-4 border-b text-left align-middle">
          {session.endDate}
        </td>
        <td className="py-2 px-4 border-b text-left align-middle relative">
          <button
            id={`button${session.id}`}
            onClick={() => toggleDropdown(`button${session.id}`)}
            className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
            text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-[#FF5722]"
          >
            Action
          </button>
          {openDropdowns[`button${session.id}`] && (
            <div className="absolute top-16 z-10 space-y-3 left-20 p-2 bg-white rounded-lg shadow-lg">
              <button
                onClick={() => setEditSessionOpen(true)}
                className="px-2 block hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
              >
                Edit
              </button>
              <button
                onClick={() => setDeleteSessionOpen(true)}
                className="px-2 block hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
              >
                Delete
              </button>
            </div>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="overflow-x-auto px-1">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Session Name
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Start Date
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                End Date
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="">
          <EditSession
            isOpen={isEditSessionOpen}
            onClose={() => setEditSessionOpen(false)}
          />
          <SessionDelete
            isOpen={isDeleteSessionOpen}
            onClose={() => setDeleteSessionOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default SessionListTable;
