import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/globals.css";

const StaffListTable = () => {
  const staffList = [
    {
      id: "1",
      profileImage: "https://shorturl.at/BDSZ9",
      staffName: "Mr. Victor",
      staffClass: "Primary 3",
      staffEmail: "ajayi@gmail.com",
    },
    {
      id: "2",
      profileImage: "https://shorturl.at/BDSZ9",
      staffName: "Mr. Terfa",
      staffClass: "Primary 1",
      staffEmail: "ajayi@gmail.com",
    },
    {
      id: "3",
      profileImage: "https://shorturl.at/BDSZ9",
      staffName: "Mr. Joel",
      staffClass: "Primary 5",
      staffEmail: "ajayi@gmail.com",
    },
    {
      id: "4",
      profileImage: "https://shorturl.at/BDSZ9",
      staffName: "Mrs. Mayowa",
      staffClass: "Primary 2",
      staffEmail: "ajayi@gmail.com",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="overflow-x-auto px-1">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="">
            <tr>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Profile Image
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Staff Name
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Staff Email
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Staff Class
              </th>
              <th className="py-2 px-4 border-b text-left align-middle text-[#4CAF50]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff, index) => (
              <tr key={staff.id}>
                <td className="py-2 px-4 border-b text-left align-middle">
                  <img
                    src={staff.profileImage}
                    alt={`Profile of ${staff.staffName}`}
                    className="student_profile"
                  />
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  {staff.staffName}
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  {staff.staffEmail}
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  {staff.staffClass}
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  <a
                    href={`/dashboard/staff/${staff.id}/staffview`}
                    className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                    text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
                  >
                    View Profile
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

export default StaffListTable;
