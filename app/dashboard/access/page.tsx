"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, BellIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardNav from "../../components/dashboardNav";
import AccessList from "../../components/accesslist";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-full">
        <DashboardNav></DashboardNav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#FF5722]">
              Here you can enable the features you want
            </h1>
          </div>
        </header>
        <main>
          <AccessList></AccessList>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
