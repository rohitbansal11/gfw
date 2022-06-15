import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { PrimaryButton } from "@components/Common"
import { RiSendPlaneLine } from "react-icons/ri"
import { IoMdAdd } from "react-icons/io"
import { BsCart2 } from "react-icons/bs"
const Navbar = ({ links }) => {
  return (
    <header>
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="flex w-full justify-between py-1  px-4">
          <div className="w-[15%]">
            <img className="" src="/images/gudguru-logo.png" />
          </div>
          <nav className="w-full flex mr-4 justify-end">
            <ul className="flex sm:w-[100%] md:w-[90%] lg:w-[80%] h-full items-center justify-end gap-8">
              {links.map((item) => (
                <li>
                  <Link href={`${item.href}`}>
                    <a className="text-base font-medium hover:border-b-2 border-gray-900">
                      {item.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex w-[30%]  gap-3 items-center">
            <button className="flex justify-center items-center font-medium text-indigo-700 hover:text-zinc-100 hover:bg-indigo-700 w-[100px] md:w-[120px] rounded-lg border-[3px] border-indigo-700 transition ease-in-out h-[40px]">
              Login
            </button>
            <button className="flex font-medium justify-center items-center text-zinc-100 bg-indigo-700 hover:bg-indigo-500 px-4 py-3 rounded-lg border-4 border-indigo-700 hover:border-indigo-500 w-[160px] h-[40px] transition ease-in-out">
              Register Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-red-200">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="flex  py-3">
            <div className="flex flex-1 ">
              <div className=" flex w-full gap-3 pl-4">
                <PrimaryButton className="bg-indigo-700 hover:bg-indigo-500 text-white">
                  <RiSendPlaneLine size={24} color="white" />
                  Set Location
                </PrimaryButton>
                <PrimaryButton className="bg-white">
                  <img
                    src={`/images/emergency-sign.svg`}
                    height={30}
                    width={30}
                  />
                  Emergency Loads
                </PrimaryButton>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="flex  w-full gap-3 pr-4 justify-end">
                <PrimaryButton className="bg-indigo-700 text-white font-xl w-[140px]">
                  <BsCart2 size={20} color="white" />
                  View
                </PrimaryButton>
                <PrimaryButton className="bg-white text-indigo-700 font-xl w-[140px]">
                  <IoMdAdd size={24} color="black" />
                  Listing
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
Navbar.defaultProps = {
  links: [
    {
      href: "/",
      text: "Loads",
    },
    {
      href: "/truck-part-sale",
      text: "Truck & Part Sale",
    },
    {
      href: "/car-sale",
      text: "Car Sale",
    },
    {
      href: "/jobs",
      text: "Jobs",
    },
    {
      href: "/get-ride",
      text: "Get Ride",
    },
    {
      href: "/rent",
      text: "Rent",
    },
  ],
}
export default Navbar
