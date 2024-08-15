"use client";
import { Fragment } from "react";
import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, BellIcon, XIcon } from "@heroicons/react/outline";
import DashboardNav from "../../../../components/dashboardNav";
import ResultTable from "../../../../components/resulttable";
import BulkResult from "../../../../components/bulkresult";
import SingleResult from "../../../../components/singleresult";
import OtherResultInfo from "../../../../components/otherresultinfo";
// import UpdateBulkResult from '../../../../components/editbulkresult';

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
  const [isBulkResultOpen, setBulkResultOpen] = useState(false);
  const [isSingleResultOpen, setSingleResultOpen] = useState(false);
  const [isOtherResultInfoOpen, setOtherResultInfoOpen] = useState(false);
  // const[isUpdateBulkResultOpen, setUpdateBulkResultOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <DashboardNav></DashboardNav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#FF5722]">
              Result -{" "}
              <span>
                {studentProfile.firstName + " " + studentProfile.lastName}
              </span>
            </h1>
            <div className="flex space-x-4 overflow-x-auto">
              <button
                onClick={() => setBulkResultOpen(true)}
                className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
              text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-[#FF5722]"
              >
                Add Bulk Result
              </button>
              <button
                onClick={() => setSingleResultOpen(true)}
                className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
              text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-[#FF5722]"
              >
                Add Single Result
              </button>
              <button
                onClick={() => setOtherResultInfoOpen(true)}
                className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
              text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-[#FF5722]"
              >
                Add Behavioural Assessment
              </button>
              <a
                href={`/dashboard/result/${studentProfile.id}/print`}
                className="flex w-auto justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
              text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-[#FF5722]"
              >
                Print Result
              </a>
              <h1 className=" mt-7 text-[#FF5722] font-bold">
                Curent class: <span>{studentProfile.studentClass}</span>
              </h1>
            </div>
          </div>
        </header>
        <main className="px-1">
          <div className="">
            <BulkResult
              isOpen={isBulkResultOpen}
              onClose={() => setBulkResultOpen(false)}
            />
            {/* <UpdateBulkResult isOpen={isUpdateBulkResultOpen} onClose={() => setUpdateBulkResultOpen(false)} /> */}
            <SingleResult
              isOpen={isSingleResultOpen}
              onClose={() => setSingleResultOpen(false)}
            />
            <OtherResultInfo
              isOpen={isOtherResultInfoOpen}
              onClose={() => setOtherResultInfoOpen(false)}
            />
          </div>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="">
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="class"
                    className="block text-sm font-medium leading-6 text-[#4CAF50]"
                  >
                    Class to check result for
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    className="form-select
                      w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 
                      focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                    name="class"
                    id="class"
                  >
                    <option value="Primary 1">Primary 1</option>
                    <option value="Primary 2">Primary 2</option>
                    <option value="Primary 3">Primary 3</option>
                    <option value="Primary 4">Primary 4</option>
                    <option value="Primary 5">Primary 5</option>
                  </select>
                </div>
              </div>
              {/* No Result Addded */}
            </div>
            <div className="">
              <ResultTable></ResultTable>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
