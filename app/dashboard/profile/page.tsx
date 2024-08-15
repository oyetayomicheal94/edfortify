"use client";
import { Fragment } from "react";
import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, BellIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import DashboardNav from "../../components/dashboardNav";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const schoolProfile = {
  profileImage: "https://shorturl.at/BDSZ9",
  firstName: "Ajayi",
  lastName: "Ireoluwa",
  schoolName: "Futca Model Academy",
  phoneNo: "+234000000000",
  creditCard: "7896 7896 256 7153",
  email: "futcatechnologies@gmail.com",
  id: "4",
};

const Dashboard = () => {
  // export default function Dashboard() {

  return (
    <>
      <div className="min-h-full">
        <DashboardNav></DashboardNav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              YOUR PROFILE
            </h1>
            {/* <a
              href="/dashboard/creditcardedit"
              className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
              text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
            >
              Manage Credit Card
            </a> */}
          </div>
        </header>
        <main className="">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="profile_box px-2">
              <div className="profile_picture_back bg-[#4CAF5099] rounded-lg w-full h-52 grid place-content-center">
                <img
                  src={schoolProfile.profileImage}
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
                        {schoolProfile.firstName}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Lastname
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {schoolProfile.lastName}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Schoolname
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {schoolProfile.schoolName}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Phone No
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {schoolProfile.phoneNo}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Email Address
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {schoolProfile.email}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        Credit Card
                      </td>
                      <td className="py-2 px-4 border-b text-left align-middle">
                        {schoolProfile.creditCard}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="btn">
                <a
                  href="/dashboard/profileedit"
                  className="flex w-full justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                   text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                   focus-visible:outline-[#FF5722]"
                >
                  Edit Profile
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
