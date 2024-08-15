"use client";

import React, { useState } from 'react';
import { HomeIcon, ChartBarIcon, UserIcon, CogIcon } from '@heroicons/react/solid';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  
    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };
  
    const toggleProfileDropdown = () => {
      setShowProfileDropdown(!showProfileDropdown);
      setShowSettingsDropdown(false); // Close settings dropdown when profile is clicked
    };
  
    const toggleSettingsDropdown = () => {
      setShowSettingsDropdown(!showSettingsDropdown);
      setShowProfileDropdown(false); // Close profile dropdown when settings is clicked
    };
  
    return (
      <div className={`text-white ${collapsed ? 'w-16' : 'w-64'} min-h-screen p-5 transition-all ease-in-out duration-300 relative`} style={{backgroundColor: "#0096a5"}}>
        <div className="flex items-center justify-between mb-6">
        <h1 className={`${collapsed ? 'hidden' : 'block'} text-2xl font-bold`}>Sidebar</h1>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            {collapsed ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
         
        </div>
        <ul className="space-y-2">
          <li className="group">
            <a href="#" className="flex items-center">
              <HomeIcon className="h-6 w-6 mr-2" />
              {!collapsed && <span>Home</span>}
            </a>
          </li>
      
          <li className="group relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center justify-between w-full focus:outline-none"
            >
              <div className="flex items-center">
                <UserIcon className="h-6 w-6 ml-2" />
                {!collapsed && <span className="ml-2">Profile</span>}
              </div>
              {showProfileDropdown ? (
                <svg
                  className="h-4 w-4 text-gray-400 transition-transform transform rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 text-gray-400 transition-transform transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {showProfileDropdown && (
              <ul className="absolute left-full top-0 mt-0.5 bg-gray-200  p-2 space-y-1" style={{color: "#0096a5"}}>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-600 transition duration-300 rounded">
                    Elementary
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-600 transition duration-300 rounded">
                    Basic
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="group relative">
            <button
              onClick={toggleSettingsDropdown}
              className="flex items-center justify-between w-full focus:outline-none"
            >
              <div className="flex items-center">
                <CogIcon className="h-6 w-6 ml-2" />
                {!collapsed && <span className="ml-2">Settings</span>}
              </div>
              {showSettingsDropdown ? (
                <svg
                  className="h-4 w-4 text-gray-400 transition-transform transform rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 text-gray-400 transition-transform transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {showSettingsDropdown && (
              <ul className="absolute left-full top-0 mt-0.5 bg-gray-700 text-white p-2 space-y-1">
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-600 transition duration-300 rounded">
                    General
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-600 transition duration-300 rounded">
                    Advanced
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
  );
};

export default Sidebar;