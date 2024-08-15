import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { Menu, Transition } from '@headlessui/react';
// import { EyeIcon, PencilIcon, ShareIcon, CloudDownloadIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import "../../styles/globals.css";
const AccessListTable = () => {
  const [isCheckedacademic, setIscheckedacademic] = useState(true);
  // const[isCheckedwebsite, setIscheckedwebsite] = useState(false);
  const [isCheckedstudent, setIscheckedstudent] = useState(true);
  const [isCheckedresult, setIscheckedresult] = useState(false);
  // const[isCheckedattendance, setIscheckedattendance] = useState(false);
  const [isCheckedstaff, setIscheckedstaff] = useState(true);

  const handleCheckboxChangeacademic = () => {
    setIscheckedacademic(!isCheckedacademic);
  };
  // const handleCheckboxChangewebsite = () => {
  //   setIscheckedwebsite(!isCheckedwebsite);
  // }
  const handleCheckboxChangestudent = () => {
    setIscheckedstudent(!isCheckedstudent);
  };
  const handleCheckboxChangeresult = () => {
    setIscheckedresult(!isCheckedresult);
  };
  // const handleCheckboxChangeattendance = () => {
  //   setIscheckedattendance(!isCheckedattendance);
  // }
  const handleCheckboxChangestaff = () => {
    setIscheckedstaff(!isCheckedstaff);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="overflow-x-auto px-1">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="">
            <tr>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Access Name
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Price
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Status
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-left align-middle">
                Academic
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                &#8358; 000.00 per Month
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <span className="">
                  {isCheckedacademic ? "Enabled" : "Disabled"}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <label className="switch">
                  <input
                    type="checkbox"
                    name="academic"
                    checked={isCheckedacademic}
                    onChange={handleCheckboxChangeacademic}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
            {/* <tr>
              <td className="py-2 px-4 border-b text-left align-middle">Website</td>
              <td className="py-2 px-4 border-b text-left align-middle">&#8358; 5,000.00 per Month</td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <span className=''>{isCheckedwebsite?'Enabled' : 'Disabled'}</span>
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <label className="switch">
                  
                  <input 
                    type="checkbox"  
                    name='Website'
                    checked={isCheckedwebsite}
                    onChange={handleCheckboxChangewebsite}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr> */}
            <tr>
              <td className="py-2 px-4 border-b text-left align-middle">
                Student
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                &#8358; 000.00 per Month
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <span className="">
                  {isCheckedstudent ? "Enabled" : "Disabled"}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isCheckedstudent}
                    onChange={handleCheckboxChangestudent}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-left align-middle">
                Result
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                &#8358; 25,000 per Month
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <span className="">
                  {isCheckedresult ? "Enabled" : "Disabled"}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isCheckedresult}
                    onChange={handleCheckboxChangeresult}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
            {/* <tr>
              <td className="py-2 px-4 border-b text-left align-middle">Attendance</td>
              <td className="py-2 px-4 border-b text-left align-middle">&#8358; 25,000</td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <span className=''>{isCheckedattendance?'Enabled' : 'Disabled'}</span>
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <label className="switch">
                  <input 
                    type="checkbox"  
                    checked={isCheckedattendance}
                    onChange={handleCheckboxChangeattendance}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr> */}
            <tr>
              <td className="py-2 px-4 border-b text-left align-middle">
                Staff
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                &#8358; 000.00 per Month
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <span className="">
                  {isCheckedstaff ? "Enabled" : "Disabled"}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-left align-middle">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isCheckedstaff}
                    onChange={handleCheckboxChangestaff}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessListTable;
