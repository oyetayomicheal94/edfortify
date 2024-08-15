"use client";

import { useState } from "react";
import "../../asset/bootstrap-icons/bootstrap-icons.css";
import "../../asset/bootstrap-icons/bootstrap-icons.json";

const AddBehaviouralAssessment = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [behaviouralAssessment, setBehaviouralAssessment] = useState([
    { name: "Neatness" },
    { name: "Punctuality" },
    { name: "Attentiveness" },
    { name: "Etiquette" },
    { name: "Honesty" },
    { name: "Self-control" },
    { name: "Obedience" },
    { name: "Politeness" },
    { name: "Relationship with other" },
  ]);

  const [selectedAssessments, setSelectedAssessments] = useState([
    behaviouralAssessment[0] || {},
  ]);

  const addNewSelect = () => {
    setSelectedAssessments((prevAssessments) => [...prevAssessments, {}]);
  };

  const deleteSelect = (index) => {
    if (index === 0) {
      return; // Disable deletion for the first row
    }
    setSelectedAssessments((prevAssessments) =>
      prevAssessments.filter((_, i) => i !== index)
    );
  };

  return (
    <div className=" z-20 fixed top-0 left-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5 w-full overflow-auto">
      <div className="bg-white p-8 rounded-lg w-full h-full max-w-md md:max-w-lg lg:max-w-xl overflow-auto">
        <h1 className=" font-medium text-sm p-2 bg-[#4CAF50] text-white text-center w-auto my-2 rounded-lg">
          Behavioural Assessment
        </h1>
        <div className="flex flex-wrap justify-center behavioural_assessment">
          <div className="m-1">
            <div className="flex items-center justify-between">
              <div className="mt-2">
                {selectedAssessments.map((select, index) => (
                  <div key={index}>
                    <label htmlFor={`select-${index}`}>
                      {`Behavioural Assessment ${index + 1}`}
                    </label>
                    <select
                      className="form-select
                                     w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2
                                     focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      id={`select-${index}`}
                      name={`select-${index}`}
                    >
                      {behaviouralAssessment.map((option, optionIndex) => (
                        <option key={optionIndex} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => deleteSelect(index)}
                      disabled={index === 0}
                      className={`mt-2 inline-flex items-center px-4 py-2 border border-transparent 
                                        text-sm leading-5 font-medium rounded-md ${
                                          index === 0
                                            ? "bg-gray-300 cursor-not-allowed"
                                            : "bg-red-500 text-white hover:bg-red-400 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-800 transition ease-in-out duration-150"
                                        }`}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button
                  className="flex w-auto mx-1 justify-center rounded-md bg-[#4CAF50] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                                 text-white shadow-sm hover:bg-[#4CAF5095] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                 focus-visible:outline-[#4CAF50]"
                  onClick={addNewSelect}
                >
                  Add Behavioral
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            className="flex w-auto mx-1 justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                    text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
          >
            Add Behavioral Assessment
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

export default AddBehaviouralAssessment;
