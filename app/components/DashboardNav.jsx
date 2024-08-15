// components/DashboardNav.tsx

import Link from 'next/link';

const DashboardNav = () => {
  return (
    <nav className="bg-green-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-lg">Dashboard</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard">
              <span className="text-white hover:text-gray-300">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/analytics">
              <span className="text-white hover:text-gray-300">Analytics</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile">
              <span className="text-white hover:text-gray-300">Profile</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings">
              <span className="text-white hover:text-gray-300">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNav;
