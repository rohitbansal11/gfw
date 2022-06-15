import React, { useState } from "react"
import { IoIosSearch } from "react-icons/io"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { VscLocation } from "react-icons/vsc"
import { PrimaryButton } from ".."
const SearchBar = () => {
  const [categoryActive, setCategoryActive] = useState(false)

  return (
    <>
      <div className=" my-16 flex w-full justify-center">
        <div className="w-[80%] bg-white shadow-md rounded-lg` flex rounded-2xl">
          <div className="flex w-[40%] border-r-2 border-gray-300  px-2 items-center py-1">
            <IoIosSearch size={26} color="gray" />
            <input
              className="ml-2 py-2  px-2 outline-none w-full"
              type="text"
              placeholder="Search By Category"
            />
            <div className="relative">
              {categoryActive ? (
                <FiChevronDown
                  className="ml-auto cursor-pointer"
                  size={24}
                  onClick={() => setCategoryActive(false)}
                />
              ) : (
                <FiChevronUp
                  className="ml-auto cursor-pointer"
                  onClick={() => setCategoryActive(true)}
                  size={24}
                />
              )}
              {categoryActive && (
                <div
                  style={{ userSelect: "none" }}
                  className="bg-white z-10  rounded-lg shadow-lg flex absolute top-[120%] left-[-200%] border-[1px] border-zinc-300"
                >
                  <ul className="flex flex-col px-4 py-2  w-[200px]">
                    {[
                      "Loads",
                      "Truck & part sales",
                      "Jobs",
                      "Car sale",
                      "Get Ride",
                      "Rent Room & Home",
                    ].map((item, index) => (
                      <li className="text-gray-700 pb-2 text-center cursor-pointer">
                        {item} {index}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex w-[40%] px-2 items-center py-1">
            <VscLocation size={26} color="gray" />
            <input
              className="ml-2 py-2 px-2 outline-none w-full"
              type="text"
              placeholder="Search By Location"
            />
          </div>
          <div className="w-[20%] flex justify-end">
            <PrimaryButton className="w-[140px] shadow-none bg-indigo-700 text-white rounded-2xl hover:bg-indigo-500">
              Search
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar
