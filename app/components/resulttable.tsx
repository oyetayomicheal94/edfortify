import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import EditOtherResultInfo from "./editotherresultinfo";
// import { Menu, Transition } from '@headlessui/react';
// import { EyeIcon, PencilIcon, ShareIcon, CloudDownloadIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import "../../styles/globals.css";
import UpdateSingleResult from "./updatesingleresult";
import DeleteSingleResult from "./deletesingleresult";

const ResultTable = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (buttonId: string) => {
    setOpenDropdowns((prevOpenDropdowns) => ({
      ...prevOpenDropdowns,
      [buttonId]: !prevOpenDropdowns[buttonId],
    }));
  };

  const resultStudentList = [
    {
      id: "1",
      subject: "Mathematics",
      firstCa: "10",
      secondCaCa: "12",
      thirdCa: "12",
      exam: "45",
      total: "45",
      grade: "A1",
      comment: "Excellent",
    },
    {
      id: "2",
      subject: "English",
      firstCa: "12",
      secondCaCa: "12",
      thirdCa: "12",
      exam: "45",
      total: "45",
      grade: "A1",
      comment: "Excellent",
    },
    {
      id: "3",
      subject: "Civic Education",
      firstCa: "13",
      secondCaCa: "12",
      thirdCa: "12",
      exam: "45",
      total: "45",
      grade: "A1",
      comment: "Excellent",
    },
    {
      id: "4",
      subject: "Social Study",
      firstCa: "12",
      secondCaCa: "12",
      thirdCa: "12",
      exam: "45",
      total: "45",
      grade: "A1",
      comment: "Excellent",
    },
  ];

  const behavioralAssessment = [
    { name: "Neatness", rate: "A" },
    { name: "Punctuality", rate: "B" },
    { name: "Attentiveness", rate: "A" },
    { name: "Etiquette", rate: "C" },
    { name: "Honesty", rate: "A" },
    { name: "Self-Control", rate: "D" },
    { name: "Obedience", rate: "C" },
    { name: "Politeness", rate: "A" },
    { name: "Relation ship with other", rate: "B" },
  ];

  const otherInfo = {
    teacherComment: "An active member of the class",
    principalComment: "A good result you can keep it up",
    presentDays: "122",
    absentDays: "2",
    NextOpenDate: "17-05-2024",
    schoolFee: "20000",
  };

  const [isEditOtherResultInfoOpen, setEditOtherResultInfoOpen] =
    useState(false);
  const [isUpdateSingleResultOpen, setUpdateSingleResultOpen] = useState(false);
  const [isDeleteSingleResultOpen, setDeleteSingleResultOpen] = useState(false);

  return (
    <div className="container px-1 mx-auto mt-8">
      <div className="">
        <EditOtherResultInfo
          isOpen={isEditOtherResultInfoOpen}
          onClose={() => setEditOtherResultInfoOpen(false)}
        />
        <UpdateSingleResult
          isOpen={isUpdateSingleResultOpen}
          onClose={() => setUpdateSingleResultOpen(false)}
        />
        <DeleteSingleResult
          isOpen={isDeleteSingleResultOpen}
          onClose={() => setDeleteSingleResultOpen(false)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="">
            <tr>
              <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                Subject
              </th>
              <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                1st C.A
              </th>
              <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                2nd C.A
              </th>
              <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                3rd C.A
              </th>
              <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                Exam
              </th>
              <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                Total
              </th>
              <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                Grade
              </th>
              <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                Comment
              </th>
              <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {resultStudentList.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-left align-middle border-b">
                  {item.subject}
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  {item.firstCa}
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  {item.secondCaCa}
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  {item.thirdCa}
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  {item.exam}
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  {item.total}
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  {item.grade}
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  {item.comment}
                </td>
                <td className="px-4 py-2 text-left align-middle border-b relative">
                  <button
                    id={`button${item.id}`}
                    onClick={() => toggleDropdown(`button${item.id}`)}
                    className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6 
                    text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-[#FF5722]"
                  >
                    Action
                  </button>
                  {openDropdowns[`button${item.id}`] && (
                    <div className="absolute top-16 z-10 space-y-3 left-20 p-2 bg-white rounded-lg shadow-lg text-sm">
                      <button
                        id={`${item.id}`}
                        onClick={() => setUpdateSingleResultOpen(true)}
                        className="px-2 block text-center hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
                      >
                        Edit
                      </button>
                      <button
                        id={`${item.id}`}
                        onClick={() => setDeleteSingleResultOpen(true)}
                        className="px-2 block text-center hover:bg-[#4CAF5060] w-full rounded-sm active:bg-[#4CAF50]"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-between mt-5 overflow-x-auto">
        <div className="mx-3 overflow-x-auto">
          <table className="min-w-full p-2 bg-white border border-gray-300">
            <caption className="caption-top text-[#FF5722] font-bold">
              Keys to Comment
            </caption>
            <thead className="">
              <tr>
                <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                  Rate
                </th>
                <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                  Key
                </th>
              </tr>
            </thead>
            <tbody>
              {behavioralAssessment.map((item) => (
                <tr>
                  <td className="px-4 py-2 text-left align-middle border-b">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 text-left align-middle border-b">
                    {item.rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mx-3 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <caption className="caption-top text-[#FF5722] font-bold">
              Keys to Grade for behavioral assessment
            </caption>
            <thead>
              <tr>
                <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                  Key
                </th>
                <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-left align-middle border-b">A</td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  Excellent
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left align-middle border-b">B</td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  Good
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left align-middle border-b">C</td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  Fair
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left align-middle border-b">D</td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  Poor
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mx-3 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <caption className="caption-top text-[#FF5722] font-bold">
              Keys to Grade
            </caption>
            <thead>
              <tr>
                <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                  Key
                </th>
                <th className="px-4 py-2 text-left align-middle border-b text-[#4CAF50]">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-left align-middle border-b">
                  Excellent
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  75% to 100%
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left align-middle border-b">
                  V.Good
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  65% to 75%
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left align-middle border-b">
                  Good
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  55% to 65%
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left align-middle border-b">
                  Pass
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  50% to 55%
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left align-middle border-b">
                  Fair
                </td>
                <td className="px-4 py-2 text-left align-middle border-b">
                  0% to 50%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-5">
        <div className="max-w-xs m-2 overflow-hidden rounded shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold text-[#4CAF50]">
              Class Teacher Comment
            </div>
            <p className="text-base text-gray-700">
              {otherInfo.teacherComment}
            </p>
          </div>
        </div>
        <div className="max-w-xs m-2 overflow-hidden rounded shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold text-[#4CAF50]">
              HeadTeacher / Principal Comment
            </div>
            <p className="text-base text-gray-700">
              {otherInfo.principalComment}
            </p>
          </div>
        </div>
        <div className="max-w-xs m-2 overflow-hidden rounded shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold text-[#4CAF50]">
              Attendance
            </div>
            <p className="text-base text-gray-700">
              Present Days: {otherInfo.presentDays}
            </p>
            <p className="text-base text-gray-700">
              Absent Days: {otherInfo.absentDays}
            </p>
          </div>
        </div>
        <div className="max-w-xs m-2 overflow-hidden rounded shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold text-[#4CAF50]">
              Next Term Information
            </div>
            <p className="text-base text-gray-700">
              Open Date: {otherInfo.NextOpenDate}
            </p>
            <p className="text-base text-gray-700">
              School fess: &#8358; {otherInfo.schoolFee}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setEditOtherResultInfoOpen(true)}
          className="flex w-auto mx-1 justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
         text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
         focus-visible:outline-[#FF5722]"
        >
          Edit Behavioral Assessment
        </button>
      </div>
    </div>
  );
};

export default ResultTable;
