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

const subjectList = [
  { name: "Mathematics" },
  { name: "English" },
  { name: "Youruba" },
  { name: "Civic Education" },
  { name: "Writing" },
  { name: "Drawing" },
  { name: "Collor" },
];

const BulkResult = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // State to keep track of rows
  const [rows, setRows] = useState([{ id: 1 }]);

  // Function to duplicate a row
  const duplicateRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index + 1, 0, { id: Date.now() });
    setRows(newRows);
  };

  // Function to delete a row
  const deleteRow = (index) => {
    if (index === 0) {
      // Disable deletion for the default row
      return;
    }

    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  return (
    <div className="fixed top-0 left-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5 w-full overflow-auto z-20">
      <div className="bg-white p-8 rounded-lg w-full h-full max-w-md md:max-w-lg lg:max-w-xl overflow-auto">
        <h1 className="text-xl font-bold text-[#4CAF50]">Add Bulk Result</h1>
        <div className="overflow-x-auto px-1 ">
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
                <th className="py-2 px-4 border-b text-left align-middle text-[#FF5722]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Map through rows and render them */}
              {rows.map((row, index) => (
                <tr key={row.id}>
                  {/* ... Your existing row content ... */}
                  <td className="py-2 px-4 border-b text-left align-middle">
                    <div>
                      <div className="flex items-center justify-between"></div>
                      <div className="mt-2">
                        <select
                          className="form-select w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                          name={`subject-${row.id}`}
                          id={`subject-${row.id}`}
                        >
                          <option value="">Select Subject---</option>
                          {subjectList.map((subject) => (
                            <option key={subject.name} value={subject.name}>
                              {subject.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b text-left align-middle">
                    <div>
                      <div className="mt-2">
                        <input
                          id={`firstca-${row.id}`}
                          name={`firstca-${row.id}`}
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
                      <div className="mt-2">
                        <input
                          id={`secondca-${row.id}`}
                          name={`secondca-${row.id}`}
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
                      <div className="mt-2">
                        <input
                          id={`thirdca-${row.id}`}
                          name={`thirdca-${row.id}`}
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
                      <div className="mt-2">
                        <input
                          id={`exam-${row.id}`}
                          name={`exam-${row.id}`}
                          type="number"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                                                        focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-left align-middle flex">
                    <button
                      onClick={() => duplicateRow(index)}
                      type="button"
                      className="flex w-full justify-center mx-1 rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
                      hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>
                    <button
                      onClick={() => deleteRow(index)}
                      type="button"
                      disabled={index === 0} // Disable delete button for the default row
                      className={`flex w-full justify-center mx-1 rounded-md ${
                        index === 0 ? "bg-gray-300" : "bg-red-700"
                      } px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                        index === 0 ? "cursor-not-allowed" : "hover:bg-red-600"
                      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        index === 0
                          ? "focus-visible:outline-gray-300"
                          : "focus-visible:outline-red-700"
                      }`}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h1 className=" font-medium text-sm p-2 bg-[#4CAF50] text-center text-white w-auto my-2 rounded-lg">
          Behavioural Assessment
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
                htmlFor="teachercommet"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Teacher Commet
              </label>
            </div>
            <div className="mt-2">
              <input
                id="teachercommet"
                name="teachercommet"
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
                htmlFor="headcommet"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                HT/Principal Commet
              </label>
            </div>
            <div className="mt-2">
              <input
                id="headcommet"
                name="headcommet"
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
                    text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-[#FF5722]"
          >
            Add Result
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

export default BulkResult;
