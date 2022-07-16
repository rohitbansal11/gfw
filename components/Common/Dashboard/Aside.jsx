import React from "react";
import {
  ClipboardListIcon,
  InboxInIcon,
  GrNotification,
  UserCircleIcon,
} from "@heroicons/react/outline";
import {FaBell} from "react-icons/fa";
import Link from "next/link";

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
                <div className="flex hover:text-blue-600 mb-4 cursor-pointer">
                  {" "}
                  <ClipboardListIcon className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-50 " />
                  <span className="hidden sm:inline ml-3">Dashboard</span>
                </div>
              </Link>
            </>
            <>
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

            <>
              <Link
                href="/notification"
                className="flex items-center group p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-700 hover:text-gray-50 "
              >
                <div className="flex hover:text-blue-600 mt-4 cursor-pointer">
                  <FaBell className="w-6 h-5 text-gray-500 transition duration-75  group-hover:text-gray-50 " />
                  <span className="hidden sm:flex flex-1 ml-3 whitespace-nowrap">
                    Notification
                  </span>
                </div>
              </Link>
            </>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
