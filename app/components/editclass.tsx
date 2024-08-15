"use client";

import { useState } from "react";

const EditClass = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectValue, setSelectValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-8 max-w-md rounded-lg">
        <div className="form">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#4CAF50]">
                Edit Class
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="class"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Class
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      className="form-select
                                    w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 
                                    focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6"
                      name="class"
                      id="class"
                      value={selectValue}
                      onChange={handleSelectChange}
                    >
                      <option value="">Select Class----</option>
                      <option value="Primary 1">Primary 1</option>
                      <option value="Primary 2">Primary 2</option>
                      <option value="Primary 3">Primary 3</option>
                      <option value="Primary 4">Primary 4</option>
                      <option value="Primary 5">Primary 5</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="classprefered"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Prefered Class Name
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="classprefered"
                      name="classprefered"
                      type="text"
                      value={selectValue}
                      // autoComplete="classprefered"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                                        placeholder:text-gray-400
                                         focus:ring-2 focus:ring-inset focus:ring-[#FF5722] sm:text-sm sm:leading-6 mt-2"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="class"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Asssign Class To
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
                      <option value="">Select Teacher----</option>
                      <option value="Mr. Adeleke">Mr. Adeleke</option>
                      <option value="Mr. Victor">Mr. Victor</option>
                      <option value="Mr. Terfa">Mr. Terfa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#FF5722] px-3 py-1.5 text-sm font-semibold leading-6 
                                text-white shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                focus-visible:outline-[#FF5722]"
                  >
                    Add Class
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button
          className="flex w-auto justify-center rounded-md bg-[#4CAF50] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                 text-white shadow-sm hover:bg-[#4CAF5095] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                 focus-visible:outline-[#4CAF50]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditClass;
