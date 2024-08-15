"use client";

import { useState } from "react";
import "../../asset/bootstrap-icons/bootstrap-icons.css";
import "../../asset/bootstrap-icons/bootstrap-icons.json";

const UpdateSingleResult = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5 w-full overflow-auto z-20">
      <div className="bg-white p-8 rounded-lg w-full h-full max-w-md md:max-w-lg lg:max-w-xl overflow-auto">
        <h1 className="text-xl font-bold text-[#4CAF50]">
          Update Single Result
        </h1>
        <div className="overflow-x-auto px-1 md:mt-10 sm:mt-10">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="">
              <tr>
                <th className="py-2 px-4 border-b text-left align-middle text-[#FF5722]">
                  Subject
                </th>
                <th className="py-2 px-4 border-b text-left align-middle text-[#FF5722]">
                  1st C.A
                </th>
                <th className="py-2 px-4 border-b text-left align-middle text-[#FF5722]">
                  2nd C.A
                </th>
                <th className="py-2 px-4 border-b text-left align-middle text-[#FF5722]">
                  3rd C.A
                </th>
                <th className="py-2 px-4 border-b text-left align-middle text-[#FF5722]">
                  Exam
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b text-left align-middle">
                  <div>
                    <div className="flex items-center justify-between"></div>
                    <div className="mt-2">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={"Mathematics"}
                        disabled
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                                focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  <div>
                    <div className="flex items-center justify-between"></div>
                    <div className="mt-2">
                      <input
                        id="firstca"
                        name="firstca"
                        type="number"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                                focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  <div>
                    <div className="flex items-center justify-between"></div>
                    <div className="mt-2">
                      <input
                        id="secondca"
                        name="secondca"
                        type="number"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                                focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  <div>
                    <div className="flex items-center justify-between"></div>
                    <div className="mt-2">
                      <input
                        id="thirdca"
                        name="thirdca"
                        type="number"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                                focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b text-left align-middle">
                  <div>
                    <div className="flex items-center justify-between"></div>
                    <div className="mt-2">
                      <input
                        id="exam"
                        name="exam"
                        type="number"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                                focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex">
          <button
            className="flex w-auto mx-1 justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                    text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
          >
            Update Result
          </button>
          <button
            className="flex w-auto mx-1 justify-center rounded-md bg-[#4CAF50] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                    text-white shadow-sm hover:bg-[#4CAF5095] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateSingleResult;
