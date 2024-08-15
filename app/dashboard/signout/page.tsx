"use client";

import { useEffect, useState } from "react";
import DashboardNav from "../../components/dashboardNav";

const SignOutPage = () => {
  const [isRouterReady, setIsRouterReady] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsRouterReady(true);
    }, 1000);

    // Clear timer on unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isRouterReady) {
      // Perform sign-out logic here
      // For example, clear authentication tokens, etc.
      // Redirect to the home page after sign-out
      window.location.href = "/account/signin";
    }
  }, [isRouterReady]);

  if (!isRouterReady) {
    // Loading state, you can render a loader or placeholder here
    return (
      <div className="grid place-content-center h-full">
        <div className="circle_loader"></div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-full">
        <DashboardNav />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#FF5722]">
              Sign Out
            </h1>
          </div>
        </header>
        <main>
          <div className=" mt-36 grid place-content-center">
            <div className="circle_loader"></div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SignOutPage;
