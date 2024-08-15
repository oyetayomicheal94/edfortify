import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../asset/bootstrap-icons/bootstrap-icons.css";
import "../../asset/bootstrap-icons/bootstrap-icons.json";
// import { Menu, Transition } from '@headlessui/react';
// import { EyeIcon, PencilIcon, ShareIcon, CloudDownloadIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import "../../styles/globals.css";
const DashboardListTable = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap justify-center">
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg m-2">
          <div className="icon_box text-center">
            <i className="bi bi-people icon_display text-[#4CAF50]"></i>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#FF5722]">Student</div>
            <p className="text-gray-700 text-base">
              Total: <span>150</span>
            </p>
          </div>
          <div className="px-6 py-4">
            {/* additional card content */}
            Male: <span>100</span> Female: <span>50</span>
          </div>
        </div>
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg m-2">
          <div className="icon_box text-center">
            <i className="bi bi-people icon_display text-[#4CAF50]"></i>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#FF5722]">Staff</div>
            <p className="text-gray-700 text-base">Total: 20</p>
          </div>
          <div className="px-6 py-4">
            {/* additional card content */}
            Male: <span>50</span> Female: <span>50</span>
          </div>
        </div>
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg m-2">
          <div className="icon_box text-center">
            <i className="bi bi-journals icon_display text-[#4CAF50]"></i>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#FF5722]">Class</div>
            <p className="text-gray-700 text-base">Total: 15</p>
          </div>
          <div className="px-6 py-4">
            {/* additional card content */}
            You only have 15 class added
          </div>
        </div>
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg m-2">
          <div className="icon_box text-center">
            <i className="bi bi-book icon_display text-[#4CAF50]"></i>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#FF5722]">Subject</div>
            <p className="text-gray-700 text-base">Total: 50</p>
          </div>
          <div className="px-6 py-4">
            {/* additional card content */}
            You've succefully added 50 subjects
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardListTable;
