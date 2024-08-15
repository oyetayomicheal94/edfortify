"use client";
import { Fragment } from "react";
import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, BellIcon, XIcon } from "@heroicons/react/outline";
import DashboardNav from "../../../../components/dashboardNav";
// import ProjectListTable from '../components/projectlist';

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
  // export default function Dashboard() {

  //   const[isAddSessionOpen, setAddSessionOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <DashboardNav></DashboardNav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#FF5722]">
              Result Preview -{" "}
              <span>
                {studentProfile.firstName + " " + studentProfile.lastName}
              </span>
            </h1>
            <div className="flex space-x-4">
              {/* <button 
              onClick={ () => setAddClassOpen(true)} 
              className="flex w-auto justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 mt-6
              text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Add Class
              </button> */}
              <h1 className="mt-5 text-[#FF5722] font-bold">
                Class: <span>{studentProfile.studentClass}</span>
              </h1>
            </div>
          </div>
        </header>
        <main className="px-1">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 text-[#4CAF50]">
            You are welcome
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
