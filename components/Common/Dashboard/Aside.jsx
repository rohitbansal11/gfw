import React from "react"
import {
  ClipboardListIcon,
  InboxInIcon,
  UserCircleIcon,
} from "@heroicons/react/outline"

const Aside = () => {
  return (
    <aside className="w-fit md:w-64 h-full relative py-4" aria-label="Sidebar">
      <div className=" sticky top-0 overflow-y-auto py-4 px-3 bg-gray-50 rounded  h-[500px] shadow-lg">
        <ul className=" space-y-2 flex flex-col justify-between h-full ">
          {/* top section */}
          <div>
            <li>
              <a
                href="#"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50"
              >
                <ClipboardListIcon className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 " />

                <span className="hidden sm:inline ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50"
              >
                <UserCircleIcon className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 " />
                <span className="hidden sm:flex flex-1 ml-3 whitespace-nowrap">
                  Update Profile
                </span>
                {/* <span className=" inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span> */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50"
              >
                <InboxInIcon className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 " />
                <span className="hidden md:flex flex-1 ml-3 whitespace-nowrap">
                  Inbox
                </span>
                <span className="hidden md:inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50"
              >
                <svg
                  className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="hidden sm:flex flex-1 ml-3 whitespace-nowrap">
                  Users
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50"
              >
                <svg
                  className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="hidden sm:flex flex-1 ml-3 whitespace-nowrap">
                  Products
                </span>
              </a>
            </li>
          </div>
          {/* bottom section */}
          <div className="mt-auto ">
            <li>
              <a
                href="#"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50"
              >
                <svg
                  className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="hidden sm:flex flex-1 ml-3 whitespace-nowrap">
                  Sign Out
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50"
              >
                <svg
                  className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="hidden sm:flex flex-1 ml-3 whitespace-nowrap">
                  Contact Support
                </span>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </aside>
  )
}

export default Aside
