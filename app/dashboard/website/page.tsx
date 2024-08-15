"use client"
import { Fragment } from 'react'
import { useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, BellIcon, XIcon } from '@heroicons/react/outline';
import DashboardNav from '../../components/dashboardNav';


const Dashboard = () => {


  return (
    <>
      <div className="min-h-full">
        <DashboardNav></DashboardNav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Website</h1>
          </div>
        </header>
        <main className='px-1'>
          You are welcome website
        </main>
      </div>
    </>
  )
}
export default Dashboard;