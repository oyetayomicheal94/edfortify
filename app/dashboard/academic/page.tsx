"use client";
import { Fragment } from "react";
import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, BellIcon, XIcon } from "@heroicons/react/outline";
import DashboardNav from "../../components/dashboardNav";
import AddClass from "../../components/addclass";
import AddSession from "../../components/addsession";
import ClassListTable from "../../components/classlist";
import SessionListTable from "../../components/sessionlist";

const Dashboard = () => {
  // export default function Dashboard() {
  const [isAddClassOpen, setAddClassOpen] = useState(false);
  const [isAddSessionOpen, setAddSessionOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <DashboardNav></DashboardNav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#FF5722]">
              Academic
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setAddSessionOpen(true)}
                className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
              text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-[#FF5722]"
              >
                Add Session
              </button>
              <button
                onClick={() => setAddClassOpen(true)}
                className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
              text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-[#FF5722]"
              >
                Add Class
              </button>
            </div>
          </div>
        </header>
        <main className="px-1">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="">
              <AddClass
                isOpen={isAddClassOpen}
                onClose={() => setAddClassOpen(false)}
              />
            </div>
            <div className="">
              <AddSession
                isOpen={isAddSessionOpen}
                onClose={() => setAddSessionOpen(false)}
              />
            </div>
            <SessionListTable></SessionListTable>
            <ClassListTable></ClassListTable>
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
