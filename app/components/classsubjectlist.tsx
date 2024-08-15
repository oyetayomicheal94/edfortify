import React, { useState } from "react";
import EditSubject from "./editsubject";
import "../../styles/globals.css";
import DeleteSubject from "./deletesubject";

const ClassSubjectListTable = () => {
  const [isEditSubjectOpen, setEditSubjectOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const [isDeleteSubjectOpen, setDeleteSubjectOpen] = useState(false);

  const toggleDropdown = (buttonId) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [buttonId]: !prev[buttonId],
    }));
  };

  const SubjectPerClassList = [
    { id: "1", subjectName: "Mathematics", class: "Primary 3" },
    { id: "2", subjectName: "English", class: "Primary 3" },
    { id: "3", subjectName: "Civic Education", class: "Primary 3" },
    { id: "4", subjectName: "Social Studies", class: "Primary 3" },
  ];

  const renderRows = () => {
    return SubjectPerClassList.map((subjectInfo, index) => (
      <tr key={subjectInfo.id}>
        <td className="py-2 px-4 border-b text-left align-middle">
          {index + 1}
        </td>
        <td className="py-2 px-4 border-b text-left align-middle">
          {subjectInfo.subjectName}
        </td>
        <td className="py-2 px-4 border-b text-left align-middle">
          {subjectInfo.class}
        </td>
        <td className="py-2 px-4 border-b text-left align-middle relative">
          <button
            id={`button${subjectInfo.id}`}
            onClick={() => toggleDropdown(`button${subjectInfo.id}`)}
            className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
            text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-[#FF5722]"
          >
            Action
          </button>
          {openDropdowns[`button${subjectInfo.id}`] && (
            <div className="absolute top-16 z-10 space-y-3 left-20 p-2 bg-white rounded-lg shadow-lg text-sm">
              <button
                onClick={() => setEditSubjectOpen(true)}
                className="px-2 block text-center hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
              >
                Edit
              </button>
              <button
                onClick={() => setDeleteSubjectOpen(true)}
                className="px-2 block text-center hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
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
      <div className="">
        <EditSubject
          isOpen={isEditSubjectOpen}
          onClose={() => setEditSubjectOpen(false)}
        />
        <DeleteSubject
          isOpen={isDeleteSubjectOpen}
          onClose={() => setDeleteSubjectOpen(false)}
        />
      </div>
      <div className="overflow-x-auto px-1">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="">
            <tr>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                S/N
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Subject
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Class
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassSubjectListTable;
