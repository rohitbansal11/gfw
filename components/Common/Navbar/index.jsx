import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container, PrimaryButton } from "@components/Common";
import { RiSendPlaneLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { ChevronDownIcon, ChevronUpIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { Navhide } from "@store/user-store/userActions";
import Login from "@pages/login";


const Navbar = ({ links , loginHref , registerHref , listingHref}) => {
  const [Nav, SetNav] = useState(false);
  const active = useSelector((state) => state?.user?.Nav);
  const dispatch = useDispatch();
  const [drop, setDrop] = useState(false);
  const handleClick = (text) => {
    // setDrop(!drop);
    if (active) {
      return dispatch(Navhide(""));
    }
    // console.log(text.target.innerText);
    dispatch(Navhide(text.target.innerText));
    // setActive(text);   
  };

  
  const handleNav = () => {
    SetNav(!Nav);
  };
  useEffect(() => {
    return () => {};
  }, [active]);

  

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
            <Link href={loginHref}>
            <button className="flex font-semibold text-indigo-700 hover:text-zinc-100 hover:bg-indigo-700 rounded-lg border-[3px] border-indigo-700 w-[160px] justify-center h-[40px] items-center transition ease-in-out">
              Login
            </button>
            </Link>
            <Link href={registerHref}>
              <button  className="flex font-semibold justify-center items-center text-zinc-100 bg-indigo-700 hover:bg-indigo-500 px-4 py-3 rounded-lg border-4 border-indigo-700 hover:border-indigo-500 w-[160px] h-[40px] transition ease-in-out">
                Register Now
              </button>
            </Link>
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
          <Link href="/">
          <div className="w-[15%]">
            <img className="cursor-pointer" src="/images/gudguru-logo.png" />
          </div>
          </Link>
          <nav className="w-full lg:flex hidden mr-4 justify-end">
            <ul className="flex sm:w-[100%] md:w-[90%] lg:w-[80%] h-full items-center justify-end gap-8">
              {links.map((item) => (
                // <li>
                //   <Link href={`${item.href}`}>
                //     <a className="text-base font-medium hover:border-b-2 border-gray-900">
                //       {item.text}
                //     </a>
                //   </Link>
                // </li>
                <Link className="cursor-pointer" href={item.href}>
                  <>
                  
                  { //click event fired over the screen for close dropdown 
                    `${item.text}`.toLowerCase() == `${active}`.toLowerCase() && <div onClick={handleClick} className="absolute top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] bg-transparent"></div>
                  }
                   
                <li
                  className="cursor-pointer relative mt-1 p-4 text-base flex uppercase"
                  onClick={handleClick}
                >

                  <span>{item.text}</span>
                  {item?.sublinks?.length && (
                    <span
                      className=" p-0.5 ml-1"
                      onClick={handleClick}
                    >
                      {`${item.text}`.toLowerCase() ==
                      `${active}`.toLowerCase() ? (
                        <ChevronUpIcon onClick={handleClick}  className="h-5 cursor-pointer " />
                      ) : (
                        <ChevronDownIcon  onClick={handleClick} className="h-5 " />
                      )}
                    </span>
                  )}

                  {`${item.text}`.toLowerCase() == `${active}`.toLowerCase() ? (
                    <div>
                     
                      {/* <span className="h-5 w-5 bg-red-500 relative"></span> */}
                      {item?.sublinks?.length && (
                        <>
                              
                          <ul
                            className={
                              "cursor-pointer	absolute z-20 bg-white text-primary-600 font-bold tracking-wide  text-center border-white border-[2px] border-blue-700  overflow-hidden left-[-50%] rounded-lg mt-10 w-[200px] ml-5 normal-case"
                            }
                          >
                            {item?.sublinks?.length &&
                              item.sublinks.map((subitem) => (
                                <>
                                  <Link
                                    className="cursor-pointer"
                                    href={subitem.href}
                                  >
                                    <li className="justify-center hover:text-blue-800 p-4 text-base flex border-b-2 border-white hover:border-gray-700 ">
                                      {subitem.text}
                                    </li>
                                  </Link>
                                </>
                              ))}
                          </ul>
                        </>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
                </>
              </Link>
              ))}
            </ul>
          </nav>
          <div className="lg:flex w-[30%] hidden gap-3 items-center">
            <Link href={loginHref}>
            <button className="flex justify-center items-center font-medium text-indigo-700 hover:text-zinc-100 hover:bg-indigo-700 w-[100px] md:w-[120px] rounded-lg border-[3px] border-indigo-700 transition ease-in-out h-[40px] ">
              Login
            </button>
            </Link>
            <Link href={registerHref}>
            <button className="flex font-medium justify-center items-center text-zinc-100 bg-indigo-700 hover:bg-indigo-500 px-4 py-3 rounded-lg border-4 border-indigo-700 hover:border-indigo-500 w-[160px] h-[40px] transition ease-in-out">
              Register Now
            </button>
            </Link>
          </div>
          <div className="flex lg:hidden" onClick={handleClick}>
            {!drop ? <MenuIcon className="w-5" /> : <XIcon  className="w-5 z-10 fixed mt-4" />}
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
                
                <Link href={listingHref}>
                <button
                  className={`flex justify-center gap-3 font-semibold  items-center   px-4 py-3 rounded-md  w-[220px] h-[50px] transition ease-in-out shadow-md bg-white text-indigo-700 font-xl w-[150px]`}
                >
                  <IoMdAdd size={24} color="black" />
                  Listing
                </button>

                </Link>
               
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
      href: "",
      text: "Loads",
      sublinks: [
        {
          href: "/loads",
          text:'Loads',

        },
        {
          href: "/emergency-loads",
          text:'Emergency Loads',
          
        }
      ]
    },
    {
      href: "",
      text: "Sale",
      sublinks: [
        {
          href: "/sell-trucks",
          text: "Truck Sale",
        },
        {
          href: "/sell-truck-parts",
          text: "Truck part sale",
        },
        {
          href: "/car-sale",
          text: "Car sale",
        },
      ],
    },
    {
      href: "",
      text: "Get Ride",
      sublinks: [
        {
          href: "/ride-school",
          text: "Get school ride",
        },
        {
          href: "/ride-oldage",
          text: "Get oldage ride",
        },
        {
          href: "/ride-airport",
          text: "Get airport ride",
        },
      ],
    },
    {
      href: "",
      text: "Jobs",
      sublinks: [
        {
          href: "/job-local-stores",
          text: "Local stores",
        },
        {
          href: "/job-local-worker",
          text: "Local workers",
        },
      ],
    },
    {
      href: "",
      text: "Rent",
      sublinks: [
        {
          href: "/rent-home",
          text: "Home rent",
        },
        {
          href: "/rent-room",
          text: "Room rent",
        },
      ],
    },
  ],
  loginHref: "/login",
  registerHref: "/register",
  listingHref: "/listings",
};
export default Navbar;
