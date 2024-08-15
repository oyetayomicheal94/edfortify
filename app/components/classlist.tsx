import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import EditClass from "./editclass";
import DeleteClass from "./deleteclass";
import AssignTeacher from "./assignstaff";
import AddBehaviouralAssessment from "./addbehaviouralass";
import "../../styles/globals.css";
import Link from "next/link";
const ClassListTable = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (buttonId: string) => {
    setOpenDropdowns((prevOpenDropdowns) => ({
      ...prevOpenDropdowns,
      [buttonId]: !prevOpenDropdowns[buttonId],
    }));
  };

  const [isEditClassOpen, setEditClassOpen] = useState(false);
  const [isAssignTeacherOpen, setAssignTeacherOpen] = useState(false);

  const [isDeleteClassOpen, setDeleteClassOpen] = useState(false);

  const [isAddBehaviouralAssessmentOpen, setAddBehaviouralAssessmentOpen] =
    useState(false);

  const classList = [
    { id: "1", name: "Primary 4", classTeacher: "Mr victor" },
    { id: "2", name: "Primary 3", classTeacher: "Mr Terfa" },
    { id: "3", name: "Primary 5", classTeacher: "Mr Joel" },
    { id: "4", name: "Primary 1", classTeacher: "Mrs. Mayowa" },
  ];

  const renderRows = () => {
    return classList.map((classInfo, index) => (
      <tr key={classInfo.id}>
        <td className="py-2 px-4 border-b text-left align-middle">
          {index + 1}
        </td>
        <td className="py-2 px-4 border-b text-left align-middle">
          {classInfo.name}
        </td>
        <td className="py-2 px-4 border-b text-left align-middle">
          {classInfo.classTeacher}
        </td>
        <td className="py-2 px-4 border-b text-left align-middle relative">
          <button
            id={`button${classInfo.id}`}
            onClick={() => toggleDropdown(`button${classInfo.id}`)}
            className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6 
              text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-[#FF5722]"
          >
            Action
          </button>
          {openDropdowns[`button${classInfo.id}`] && (
            <div className="absolute top-16 z-10 space-y-3 left-20 p-2 bg-white rounded-lg shadow-lg text-sm">
              <button
                onClick={() => setEditClassOpen(true)}
                className="px-2 block text-center hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
              >
                Edit
              </button>
              <button
                onClick={() => setDeleteClassOpen(true)}
                className="px-2 block text-center hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
              >
                Delete
              </button>
              <Link
                href={`/dashboard/academic/schoolclass/${classInfo.id}/subject`}
                className="px-2 text-center block hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
              >
                View Subject
              </Link>
              <button
                onClick={() => setAssignTeacherOpen(true)}
                className="px-2 block text-center hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
              >
                Assign teacher to class
              </button>
              <button
                onClick={() => setAddBehaviouralAssessmentOpen(true)}
                className="px-2 block text-center hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
              >
                Add Behavioral Assessment
              </button>
            </div>
          )}
        </td>
      </tr>
    ));
  };
  return (
    <div className="container mx-auto mt-8">
      <div className="verflow-x-auto px-1">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="">
            <tr>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                S/N
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Class Name
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Class Teacher
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
          <EditClass
            isOpen={isEditClassOpen}
            onClose={() => setEditClassOpen(false)}
          />
          <DeleteClass
            isOpen={isDeleteClassOpen}
            onClose={() => setDeleteClassOpen(false)}
          />
          <AssignTeacher
            isOpen={isAssignTeacherOpen}
            onClose={() => setAssignTeacherOpen(false)}
          />
          <AddBehaviouralAssessment
            isOpen={isAddBehaviouralAssessmentOpen}
            onClose={() => setAddBehaviouralAssessmentOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ClassListTable;
