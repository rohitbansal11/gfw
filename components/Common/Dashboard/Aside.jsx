import React from "react"
import {
  ClipboardListIcon,
  InboxInIcon,
  UserCircleIcon,
} from "@heroicons/react/outline"
import Link from "next/link"

const Aside = () => {
  return (
    <aside className="w-fit md:w-64 h-full relative py-4" aria-label="Sidebar">
      <div className=" sticky top-0 overflow-y-auto py-4 px-3 bg-gray-50 rounded  h-[500px] shadow-lg">
        <ul className=" space-y-2 flex flex-col justify-between h-full ">
          {/* top section */}
          <div> 
            <>
              <Link
                href="/dashboard"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50"
              >
              <div className="flex hover:text-blue-600 cursor-pointer"> <ClipboardListIcon className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 " />
               <span className="hidden sm:inline ml-3">Dashboard</span></div>
              </Link>
               </>
            
             <>
              <Link
                href="/"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50"
              >
               <div className="flex my-4 hover:text-blue-600 cursor-pointer">
               <UserCircleIcon className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 " />
                <span className="hidden sm:flex flex-1 ml-3 whitespace-nowrap">
                  Update Profile
                </span>
               </div>
              </Link>
              </>
           
              <>
              <Link
                href="/become-member"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50 "
              >
                <div className="flex hover:text-blue-600 cursor-pointer">
                <UserCircleIcon className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 " />
                <span className="hidden sm:flex flex-1 ml-3 whitespace-nowrap">
                  Become Member
                </span>
                </div>
              </Link>
              </>

            
          </div>
          {/* bottom section */}
          <div className="mt-auto ">
            <li>
              <>
              <Link
                href="/">   
              <div className="flex cursor-pointer">
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
                <span className="hidden sm:flex flex-1 ml-3 whitespace-nowrap hover:text-blue-600">
                  Sign Out
                </span>     
              </div>      
              </Link>
              </>
            </li>
          </div>
        </ul>
      </div>
    </aside>
  )
}

export default Aside
