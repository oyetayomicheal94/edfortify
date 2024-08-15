"use client";
import { useState } from "react";
import DashboardNav from "../../../../../components/dashboardNav";
import ClassSubjectListTable from "../../../../../components/classsubjectlist";
import AddSubject from "../../../../../components/addsubject";

const classDetails = {
  className: "Primary 3",
};

const Dashboard = () => {
  // export default function Dashboard() {

  const [isAddSubjectOpen, setAddSubjectOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <DashboardNav></DashboardNav>
        <header className="bg-white shadow">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#FF5722]">
              Subject - <span>{classDetails.className}</span>
            </h1>
            <div className="">
              <button
                onClick={() => setAddSubjectOpen(true)}
                className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
               text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
              >
                Add Subject
              </button>
            </div>
          </div>
        </header>
        <main>
          <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="">
              <AddSubject
                isOpen={isAddSubjectOpen}
                onClose={() => setAddSubjectOpen(false)}
              />
            </div>
            <ClassSubjectListTable></ClassSubjectListTable>
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
