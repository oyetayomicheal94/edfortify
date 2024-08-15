"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import "../styles/globals.css";

const LandingPage = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
        <main className="relative isolate px-6 pt-14 lg:px-8">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-4xl py-12 sm:py-14 lg:py-14">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-[#922d0fd3] sm:text-6xl">
                  Welcome to Edfortify: Empowering Schools, Enriching
                  Educationon.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Simplify School Management, Amplify Learning Edfortify is your
                  all-in-one solution for modern school management. Our
                  intuitive platform empowers educators, administrators,
                  students, and parents alike to streamline processes, enhance
                  communication, and focus on what truly matters - education.
                </p>
                <div className="mt-5">
                  <h1 className=" text-3xl font-bold my-5 text-[#4CAF50]">
                    Our Features
                  </h1>
                  <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
                      <div className="icon_box text-center">
                        <i className="bi bi-journal-check icon_display text-[#FF5722]"></i>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                          Online Results
                        </h2>
                        <p className="text-gray-700 text-base">
                          Instant access to students' academic performance and
                          progress reports.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
                      <div className="icon_box text-center">
                        <i className="bi bi-globe icon_display text-[#FF5722]"></i>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                          Dynamic Websites
                        </h2>
                        <p className="text-gray-700 text-base">
                          Professional and engaging websites tailored to
                          showcase your school's identity and offerings.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
                      <div className="icon_box text-center">
                        <i className="bi bi-person-check icon_display text-[#FF5722]"></i>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                          Attendance Tracking
                        </h2>
                        <p className="text-gray-700 text-base">
                          Effortlessly manage attendance, reducing
                          administrative burden and ensuring accountability.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
                      <div className="icon_box text-center">
                        <i className="bi bi-wechat icon_display text-[#FF5722]"></i>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                          Communication Tools
                        </h2>
                        <p className="text-gray-700 text-base">
                          Seamless communication between all stakeholders,
                          fostering collaboration and engagement.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
                      <div className="icon_box text-center">
                        <i className="bi bi-motherboard icon_display text-[#FF5722]"></i>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                          Admissions Management:
                        </h2>
                        <p className="text-gray-700 text-base">
                          Simplify the admissions process with online
                          applications and automated workflows.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
                      <div className="icon_box text-center">
                        <i className="bi bi-coin icon_display text-[#FF5722]"></i>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                          Fee Management
                        </h2>
                        <p className="text-gray-700 text-base">
                          Efficient fee collection and financial management
                          tools to streamline operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className=" text-3xl font-bold my-5 text-[#4CAF50]">
                    Why Choose Edfortify
                  </h1>
                  <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
                      <div className="icon_box text-center">
                        <i className="bi bi-lightbulb icon_display text-[#FF5722]"></i>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                          Innovative Solutions
                        </h2>
                        <p className="text-gray-700 text-base">
                          Stay ahead with cutting-edge technology designed to
                          meet the evolving needs of modern education.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
                      <div className="icon_box text-center">
                        <i className="bi bi-gear-wide icon_display text-[#FF5722]"></i>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                          Exceptional Support
                        </h2>
                        <p className="text-gray-700 text-base">
                          Our dedicated team is committed to providing
                          personalized support and ongoing guidance.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
                      <div className="icon_box text-center">
                        <i className="bi bi-person-check icon_display text-[#FF5722]"></i>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                          User-Friendly Interface
                        </h2>
                        <p className="text-gray-700 text-base">
                          Intuitive and easy-to-use platform ensures a seamless
                          experience for all users.
                        </p>
                      </div>
                    </div>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
                      <div className="icon_box text-center">
                        <i className="bi bi-arrows-move icon_display text-[#FF5722]"></i>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#4CAF50]">
                          Scalable and Flexible
                        </h2>
                        <p className="text-gray-700 text-base">
                          Whether you're a small school or a large institution,
                          Edfortify scales to fit your needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className=" text-3xl font-bold my-5 text-[#4CAF50]">
                    Get Started Today
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Join thousands of schools worldwide that trust Edfortify to
                    revolutionize their school management experience. Request a
                    demo or contact us to learn more about how Edfortify can
                    transform your school today!
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/account/signup"
                      className="rounded-md bg-[#FF5722] px-3.5 py-2.5 text-sm font-semibold text-white 
                      shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 
                      focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LandingPage;
