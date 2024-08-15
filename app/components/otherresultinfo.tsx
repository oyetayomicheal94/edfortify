"use client";

import { useState } from "react";
import "../../asset/bootstrap-icons/bootstrap-icons.css";
import "../../asset/bootstrap-icons/bootstrap-icons.json";

const behaviouralAssessment = [
  { displayName: "Neatness", id: "neatness", name: "neatness" },
  { displayName: "Punctuality", id: "punctuality", name: "punctuality" },
  { displayName: "Attentiveness", id: "attentiveness", name: "attentiveness" },
  { displayName: "Etiquette", id: "etiquette", name: "etiquette" },
  { displayName: "Honesty", id: "honesty", name: "honesty" },
  { displayName: "Self-control", id: "self-control", name: "self-control" },
  { displayName: "Obedience", id: "obedience", name: "obedience" },
  { displayName: "Politeness", id: "politeness", name: "politeness" },
  {
    displayName: "Relationship with other",
    id: "relationshipwithother",
    name: "relationshipwithother",
  },
];

const OtherResultInfo = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-0 left-0 flex items-center justify-center w-full p-5 overflow-auto bg-black bg-opacity-50 z-20">
      <div className="w-full h-full max-w-md p-8 overflow-auto bg-white rounded-lg md:max-w-lg lg:max-w-xl">
        <h1 className="w-auto p-2 my-2 text-sm font-medium text-center bg-[#4CAF50] text-white rounded-lg ">
          Behavioral Assessment
        </h1>
        <div className="flex flex-wrap justify-center behavioural_assessment">
          {behaviouralAssessment.map((item) => (
            <div className="m-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="{item.id}"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {item.displayName}
                </label>
              </div>
              <div className="mt-2">
                <select
                  key={item.displayName}
                  className="form-select
                                 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 
                                 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                  name="{item.name}"
                  id="{item.id}"
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="m-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="teachercomment"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Teacher Comment
              </label>
            </div>
            <div className="mt-2">
              <input
                id="teachercomment"
                name="teachercomment"
                type="text"
                required
                className="block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                         focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
              />
            </div>
          </div>
          <div className="m-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="headcomment"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                HT/Principal Comment
              </label>
            </div>
            <div className="mt-2">
              <input
                id="headcomment"
                name="headcomment"
                type="text"
                required
                className="block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                         focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
              />
            </div>
          </div>
          <div className="m-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="presentdays"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                No of time present
              </label>
            </div>
            <div className="mt-2">
              <input
                id="presentdays"
                name="presentdays"
                type="number"
                required
                className="block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                         focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
              />
            </div>
          </div>
          <div className="m-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="absentdays"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                No of time absent
              </label>
            </div>
            <div className="mt-2">
              <input
                id="absentdays"
                name="absentdays"
                type="number"
                required
                className="block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                         focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
              />
            </div>
          </div>
          <div className="m-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="opendate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Next term Open Date
              </label>
            </div>
            <div className="mt-2">
              <input
                id="opendate"
                name="opendate"
                type="Date"
                required
                className="block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                         focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
              />
            </div>
          </div>

          <div className="m-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="schoolfee"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Next term school fee
              </label>
            </div>
            <div className="mt-2">
              <input
                id="schoolfee"
                name="schoolfee"
                type="text"
                required
                className="block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                         focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            className="flex w-auto mx-1 justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                    text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
          >
            Add Information
          </button>
          <button
            className="flex w-auto mx-1 justify-center rounded-md bg-[#4CAF50] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                    text-white shadow-sm hover:bg-[#4CAF5095] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-[#4CAF50]"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherResultInfo;
