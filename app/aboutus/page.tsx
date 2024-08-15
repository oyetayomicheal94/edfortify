"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";

const Aboutus = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
        <main className="relative isolate px-6 pt-14 lg:px-8">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-4xl py-12 sm:py-14 lg:py-14">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-[#922d0fd3] sm:text-6xl">
                  About Edfortify
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Edfortify, we believe in revolutionizing the way schools
                  manage their operations. With a commitment to innovation and
                  excellence, we provide a comprehensive online school
                  management platform tailored to meet the diverse needs of
                  educational institutions worldwide.
                </p>
                <div className="mt-5">
                  <h1 className=" text-3xl font-bold my-5 text-[#4CAF50]">
                    Our Mission
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our mission is to empower schools with cutting-edge
                    technology, enabling them to streamline administrative
                    tasks, enhance communication, and improve overall
                    efficiency. We aim to simplify school management processes,
                    allowing educators to focus on what truly matters -
                    providing quality education to students.
                  </p>
                </div>
                <div className="mt-5">
                  <h1 className=" text-3xl font-bold my-5 text-[#4CAF50]">
                    What We Offer
                  </h1>
                  <p className="my-6 text-lg leading-8 text-gray-600">
                    Edfortify offers a range of features designed to simplify
                    school management:
                  </p>
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
                          Provide students and parents with instant access to
                          academic performance and progress reports.
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
                          Create professional and engaging websites for schools
                          to showcase their unique identity and offerings.
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
                          Streamline attendance management with our easy-to-use
                          tools, reducing administrative burden.
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
                          Facilitate seamless communication between
                          administrators, teachers, students, and parents
                          through integrated messaging systems.
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
                          application forms, document uploads, and automated
                          workflows.
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
                          Efficiently manage fee collection, invoicing, and
                          financial transactions with our intuitive financial
                          management tools.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className=" text-3xl font-bold my-5 text-[#4CAF50]">
                    Our Commitment
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    At Edfortify, we are committed to providing exceptional
                    service and ongoing support to our clients. We strive to
                    foster strong partnerships with schools, listening to their
                    feedback and continuously improving our platform to meet
                    evolving needs.
                  </p>
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

export default Aboutus;
