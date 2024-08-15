"use client";
import DashboardListTable from "../components/dashboardlist";
import DashboardNav from "../components/dashboardNav";

const Dashboard = () => {
  // export default function Dashboard() {

  return (
    <>
      <div className="min-h-full">
        <DashboardNav></DashboardNav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#FF5722]">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <DashboardListTable></DashboardListTable>
          </div>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
