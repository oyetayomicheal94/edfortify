"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
export default function ContactUs() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <main className="relative isolate px-6 pt-14 lg:px-8">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-3xl py-12 sm:py-14 lg:py-14">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-[#922d0fd3] sm:text-6xl">
                  Contact Us
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Thank you for your interest in Edfortify. We are here to
                  assist you with any inquiries or concerns you may have. Please
                  feel free to reach out to us using the contact information
                  provided below:
                </p>
              </div>
              <div className="mt-5">
                <h1 className=" text-2xl font-bold my-5 text-[#4CAF50] text-center">
                  General Inquiries
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="font-bold text-[#FF5722]">Email: </span>
                  info@edfortify.com
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="font-bold text-[#FF5722]">Phone: </span>+1
                  (555) 123-4567
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="font-bold text-[#FF5722]">Address: </span>123
                  Main Street, Cityville, State, Zip Code
                </p>
              </div>
              <div className="mt-5">
                <h1 className=" text-2xl font-bold my-5 text-[#4CAF50] text-center">
                  Sales and Demo Requests
                </h1>
                <p className="mt-3 text-lg leading-8 text-gray-600 text-center">
                  For sales inquiries or to request a demo of our platform,
                  please contact our sales team:
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="font-bold text-[#FF5722]">Email: </span>
                  sales@edfortify.com
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="font-bold text-[#FF5722]">Phone: </span>+1
                  (555) 123-4567
                </p>
              </div>
              <div className="mt-5">
                <h1 className=" text-2xl font-bold my-5 text-[#4CAF50] text-center">
                  Technical Support
                </h1>
                <p className="mt-3 text-lg leading-8 text-gray-600 text-center">
                  If you require technical assistance or have questions about
                  using our platform, our support team is here to help:
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="font-bold text-[#FF5722]">Email: </span>
                  support@edfortify.com
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="font-bold text-[#FF5722]">Phone: </span>+1
                  (555) 123-4567
                </p>
              </div>
              <div className="mt-5">
                <h1 className=" text-2xl font-bold my-5 text-[#4CAF50] text-center">
                  Partner With Us
                </h1>
                <p className="mt-3 text-lg leading-8 text-gray-600 text-center">
                  Interested in becoming a partner or reseller of Edfortify?
                  Contact our partnership team to explore collaboration
                  opportunities:
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="font-bold text-[#FF5722]">Email: </span>
                  partnerships@edfortify.com
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="font-bold text-[#FF5722]">Phone: </span>+1
                  (555) 123-4567
                </p>
              </div>
              <div className="mt-5">
                <h1 className=" text-2xl font-bold my-5 text-[#4CAF50] text-center">
                  Feedback and Suggestions
                </h1>
                <p className="mt-3 text-lg leading-8 text-gray-600 text-center">
                  We value your feedback and suggestions. Please share your
                  thoughts with us to help us improve our platform:
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <span className="font-bold text-[#FF5722]">Email: </span>
                  feedback@edfortify.com
                </p>
              </div>
              <div className="mt-5">
                <h1 className=" text-2xl font-bold my-5 text-[#4CAF50] text-center">
                  Connect With Us
                </h1>
                <p className="mt-3 text-lg leading-8 text-gray-600 text-center">
                  Stay updated on the latest news, updates, and events by
                  following us on social media:
                </p>
                <div className="flex justify-center mt-5">
                  <div className="mx-2">
                    <Link
                      href="https://www.facebook.com"
                      className="rounded-md bg-[#FF5722] px-3.5 py-2.5 text-sm font-semibold text-white 
                      shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 
                      focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
                    >
                      <i className="bi bi-facebook"></i> Facebook
                    </Link>
                  </div>
                  <div className="mx-2">
                    <Link
                      href="https://www.twitter.com"
                      className="rounded-md bg-[#FF5722] px-3.5 py-2.5 text-sm font-semibold text-white 
                      shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 
                      focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
                    >
                      <i className="bi bi-twitter"></i> Twitter
                    </Link>
                  </div>
                  <div className="mx-2">
                    <Link
                      href="https://www.linkedin.com"
                      className="rounded-md bg-[#FF5722] px-3.5 py-2.5 text-sm font-semibold text-white 
                      shadow-sm hover:bg-[#FF572295] focus-visible:outline focus-visible:outline-2 
                      focus-visible:outline-offset-2 focus-visible:outline-[#FF5722]"
                    >
                      <i className="bi bi-linkedin"></i> Linkedin
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h1 className=" text-2xl font-bold my-5 text-[#4CAF50] text-center">
                  Business Hours
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our office hours are Monday through Friday, 9:00 AM to 5:00 PM
                  (local time). We strive to respond to all inquiries promptly
                  during these hours.
                </p>
              </div>
              <div className="mt-5">
                <h1 className=" text-2xl font-bold my-5 text-[#4CAF50] text-center">
                  We Look Forward to Hearing From You!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Whether you're a school administrator, educator, parent, or
                  student, we're here to support you on your journey towards
                  more efficient and effective school management. Reach out to
                  us today and let's start a conversation!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
