"use client";

import { useState } from "react";

const DeleteSingleResult = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-8 max-w-md rounded-lg">
        <div className="form">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#4CAF50]">
                Delete Single Result
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                     hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]"
                  >
                    Yes
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#4CAF50] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
                    hover:bg-#4CAF50#4CAF5095 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]"
                  >
                    No
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button
          className="flex w-auto justify-center rounded-md bg-[#4CAF50] px-3 py-1.5 text-sm font-semibold leading-6 mt-6
                 text-white shadow-sm hover:bg-#4CAF5095 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DeleteSingleResult;
