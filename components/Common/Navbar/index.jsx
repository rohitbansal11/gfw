import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container, PrimaryButton } from "@components/Common";
import { RiSendPlaneLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
const Navbar = ({ links }) => {
  const [drop, setDrop] = useState(false);
  const handleClick = () => {
    setDrop(!drop);
  };

  return (
    <header>
      <div className="static">
        <ul
          className={
            !drop
              ? "hidden"
              : "fixed lg:hidden bg-white w-full h-screen p-5 justify-between border z-10"
          }
        >
          <div className="flex justify-around">
            <button className="flex font-semibold text-indigo-700 hover:text-zinc-100 hover:bg-indigo-700 rounded-lg border-[3px] border-indigo-700 w-[160px] justify-center h-[40px] items-center transition ease-in-out">
              Login
            </button>

            <button className="flex font-semibold justify-center items-center text-zinc-100 bg-indigo-700 hover:bg-indigo-500 px-4 py-3 rounded-lg border-4 border-indigo-700 hover:border-indigo-500 w-[160px] h-[40px] transition ease-in-out">
              Register Now
            </button>
          </div>

          <div className="flex my-5 justify-around">
            <button className="bg-indigo-700 hover:bg-indigo-500 text-white flex rounded-lg w-[160px] h-[40px] transition ease-in-out items-center text-center justify-center text-sm px-1 "><RiSendPlaneLine size={24} color="white" className=""/>
                  Set Location</button>
            <button className="bg-white hover:bg-indigo-500 text-indigo-700 hover:text-white flex rounded-lg w-[160px] h-[40px] transition ease-in-out items-center text-center border-2 justify-center text-xs font-bold p-2 "><img className="mx-1"
                    src={`/images/emergency-sign.svg`}
                    height={20}
                    width={20}
                  />
                  Emergency Loads</button>
          </div>
          <div className="flex my-5 -mx-[2] justify-around">

            <button className="bg-indigo-700 hover:bg-indigo-500 text-white flex rounded-lg w-[160px] h-[40px] transition ease-in-out items-center text-center justify-center text-sm p-2 "><BsCart2 size={20} color="white" className="mx-1" />
                  View</button>
            <button className="bg-white hover:bg-indigo-500 text-indigo-700 hover:text-white border-2 flex rounded-lg w-[160px] h-[40px] transition ease-in-out items-center text-center justify-center text-sm p-2"><IoMdAdd size={24} color="black" />
                  Listing</button>
          </div>
          <div>
          {links.map((item) => (
                <li className="border-b mx-5 hover:border-b-2 hover:border-black py-5">
                  <Link href={`${item.href}`}>
                    <a className="text-lg font-semibold border-gray-900">
                      {item.text}
                    </a>
                  </Link>
                </li>
              ))}
          </div>
        </ul>
      </div>

      <Container>
        <div className="flex w-full justify-between py-1">
          <div className="w-[15%]">
            <img className="" src="/images/gudguru-logo.png" />
          </div>
          <nav className="w-full lg:flex hidden mr-4 justify-end">
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
          <div className="lg:flex w-[30%] hidden gap-3 items-center">
            <button className="flex justify-center items-center font-medium text-indigo-700 hover:text-zinc-100 hover:bg-indigo-700 w-[100px] md:w-[120px] rounded-lg border-[3px] border-indigo-700 transition ease-in-out h-[40px] ">
              Login
            </button>
            <button className="flex font-medium justify-center items-center text-zinc-100 bg-indigo-700 hover:bg-indigo-500 px-4 py-3 rounded-lg border-4 border-indigo-700 hover:border-indigo-500 w-[160px] h-[40px] transition ease-in-out">
              Register Now
            </button>
          </div>
          <div className="flex lg:hidden" onClick={handleClick}>
            {!drop ? <MenuIcon className="w-5" /> : <XIcon className="w-5 z-10 fixed mt-4" />}
          </div>
        </div>
      </Container>
      <div className="bg-red-200">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="lg:flex hidden py-3">
            <div className="flex flex-1 ">
              <div className=" flex w-full gap-3 pl-4">
              
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
                <PrimaryButton className="bg-indigo-700 text-white font-xl w-[150px]">
                  <BsCart2 size={20} color="white" />
                  View
                </PrimaryButton>
                <PrimaryButton className="bg-white text-indigo-700 font-xl w-[150px]">
                  <IoMdAdd size={24} color="black" />
                  Listing
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
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
};
export default Navbar;
