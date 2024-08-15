"use client";
import { Fragment } from "react";
import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, BellIcon, XIcon } from "@heroicons/react/outline";
import StaffListTable from "../../components/stafflist";
import DashboardNav from "../../components/dashboardNav";

const Dashboard = () => {
  // export default function Dashboard() {

  return (
    <>
      <div className="min-h-full">
        <DashboardNav></DashboardNav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#FF5722]">
              Staff
            </h1>
            <a
              href="/dashboard/staff/add"
              className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                  text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
            >
              Add Staff
            </a>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <StaffListTable></StaffListTable>
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
