"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import PromoteStudent from "../../../../components/promotestudent";
import DashboardNav from "../../../../components/dashboardNav";
import DeleteStudent from "../../../../components/deletestudent";

const studentProfile = {
  profileImage: "https://shorturl.at/BDSZ9",
  firstName: "Kuidaisi",
  lastName: "Ireoluwa",
  sex: "female",
  phoneNo: "+234000000000",
  studentClass: "Primary 2",
  studentEmail: "ajayi@gmail.com",
  id: "4",
};

const Dashboard = () => {
  const [isPromoteStudentOpen, setPromoteStudentOpen] = useState(false);
  const [isDeleteStudentOpen, setDeleteStudentOpen] = useState(false);

  const user = studentProfile[0]; // You may need to select the appropriate user based on your requirements.

  return (
    <>
      <div className="min-h-full">
        <DashboardNav></DashboardNav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#FF5722]">
              STUDENT PROFILE
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setPromoteStudentOpen(true)}
                className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-[#FF5722]"
              >
                Promote Student
              </button>
              <button
                onClick={() => setDeleteStudentOpen(true)}
                className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-[#FF5722]"
              >
                Delete
              </button>
            </div>
          </div>
        </header>
        <main className="">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="">
              <PromoteStudent
                isOpen={isPromoteStudentOpen}
                onClose={() => setPromoteStudentOpen(false)}
              />
              <DeleteStudent
                isOpen={isDeleteStudentOpen}
                onClose={() => setDeleteStudentOpen(false)}
              />
            </div>
            <div key={studentProfile.id}>
              <div className="profile_picture_back bg-[#4CAF5099] rounded-lg w-full h-52 grid place-content-center">
                <img
                  src={studentProfile.profileImage}
                  className="profile_picture"
                  alt="Profile image"
                />
              </div>
              <div className="details overflow-x-auto container mx-auto mt-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Firstname
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {studentProfile.firstName}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Lastname
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {studentProfile.lastName}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Sex
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {studentProfile.sex}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Phone No
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {studentProfile.phoneNo}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Email Address
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {studentProfile.studentEmail}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Class
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {studentProfile.studentClass}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* ... (other code) */}
            </div>
            <div className="btn" key={studentProfile.id}>
              <a
                href={`/dashboard/student/${studentProfile.id}/edit`}
                className="flex w-full justify-center rounded-md bg-[#4CAF50] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                  text-white shadow-sm hover:bg-[#4CAF5095] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                  focus-visible:outline-[#4CAF50]"
              >
                Edit Profile
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
