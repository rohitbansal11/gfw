import React from "react"

const MyListingCard = () => {
  return (
    <div className="p-4 mx-auto w-[95%] lg:w-[50%]">
      <div className="relative flex w-full border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col bg-zinc-50 shadow-lg">
        {/* category label */}
        <div className="px-2 py-[2px] bg-indigo-700 text-white text-[12px] font-semibold rounded-md shadow-md absolute top-4 right-4">
          Loads
        </div>
        {/* category label ends */}
        <div className="w-8 h-8 sm:w-16 sm:h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLine="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 sm:w-8 sm:h-8"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-md sm:text-lg title-font font-medium ">
            2011 FREIGHTLINER M2 106
          </h2>
          <div className="text-[12px] text-gray-500 flex">
            25-04-2022, 11:13AM
          </div>
          <a className="mt-3 mr-4 text-[12px] sm:text-[14px] text-indigo-500 inline-flex items-center border-2 rounded-md border-indigo-500 px-2 py-[2px] hover:bg-indigo-500 hover:text-white cursor-pointer">
            Edit Listing
          </a>
          <a className="mt-3 text-[12px] sm:text-[14px] text-indigo-500 inline-flex items-center border-2 rounded-md border-indigo-500 px-2 py-[2px] hover:bg-indigo-500 hover:text-white cursor-pointer">
            Delete Listing
          </a>
        </div>
      </div>
    </div>
  )
}

export default MyListingCard
