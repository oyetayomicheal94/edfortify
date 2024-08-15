import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { Menu, Transition } from '@headlessui/react';
// import { EyeIcon, PencilIcon, ShareIcon, CloudDownloadIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import "../../styles/globals.css";
const ResultListTable = () => {
  const resultStudentList = [
    {
      id: "1",
      profileImage: "https://shorturl.at/BDSZ9",
      studentName: "Morenikeji Victor",
      studentClass: "Primary 3",
    },
    {
      id: "2",
      profileImage: "https://shorturl.at/BDSZ9",
      studentName: "Agibi Terfa",
      studentClass: "Primary 1",
    },
    {
      id: "3",
      profileImage: "https://shorturl.at/BDSZ9",
      studentName: "Ajayi Joel",
      studentClass: "Primary 5",
    },
    {
      id: "4",
      profileImage: "https://shorturl.at/BDSZ9",
      studentName: "Adebisi Mayowa",
      studentClass: "Primary 2",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className=" overflow-x-auto px-1">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="">
            <tr>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Profile Image
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Student Name
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Student Class
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {resultStudentList.map((student, index) => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b text-left align-middle">
                  <img
                    src={student.profileImage}
                    alt={`Profile of ${student.studentName}`}
                    className="student_profile"
                  />
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  {student.studentName}
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  {student.studentClass}
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  <a
                    href={`/dashboard/result/${student.id}/studentview`}
                    className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                    text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-[#FF5722]"
                  >
                    View Result
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultListTable;
