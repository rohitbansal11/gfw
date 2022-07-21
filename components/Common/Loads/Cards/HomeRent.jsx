import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaDollarSign, FaPhoneAlt } from "react-icons/fa";
import moment from "moment";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ModalPlatinum } from "@components/Common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomeRent = ({ item, role }) => {
  const [showPlatinum, setShowPlatinum] = useState(false);
  const handleBookNow = (phone) => {
    if (role == "subscribe") {
      console.log("fhfgh");
      navigator.clipboard.writeText(phone);
      notify();
    } else {
      setShowPlatinum(true);
    }
  };
  const HandleBackModalPlatinum = (value) => {
    setShowPlatinum(value);
  };
  const notify = () =>
    toast.success(`Phone No. ${item.contactno} Copied !`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <>
      <ModalPlatinum
        handleBackplatinum={HandleBackModalPlatinum}
        showModalPlatinum={showPlatinum}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex bg-white shadow-xl rounded-lg min-w-[350px] lg:min-w-[400px] max-w-[420px] mx-2 hover:translate-y-[-4px] transition ease-in-out">
        <div className="rounded-md text-center w-[40%] text-xl font-semibold text-indigo-700 bg-green-100">
          <Slide>
            {item?.image?.map((w) => {
              return (
                <div className="w-full h-full">
                  <img
                    className="bg-center rounded-tl-md rounded-bl-md w-[100%] h-56 "
                    src={w}
                  />
                </div>
              );
            })}
          </Slide>
        </div>
        {/* bottom section */}
        <div className="flex flex-col px-4 py-2 pr-2 w-[60%]">
          <div className="flex items-center gap-2 text-[18px] font-semibold">
            <h5>{item.title.slice(0, 7)}</h5>
          </div>
          <div className="text-gray-500 text-[12px]">
            {moment(new Date(item.createdAt)).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
          {/* weight & type */}
          <div className="flex flex-col mt-1">
            <div className="flex  gap-2">
              <span className="font-medium mr-[2px]">State:</span>{" "}
              <span className="text-gray-600 text-[14px]">{item.state}</span>
            </div>
            <div className="flex  gap-2">
              <span className="font-medium mr-[12px]">City:</span>{" "}
              <span className="text-gray-600 text-[14px]">
                {`${item.city}`.toUpperCase()}
              </span>
            </div>
            <div className="flex  gap-2">
              <span className="font-medium mr-[6px]">Area:</span>{" "}
              <span className="text-gray-600 text-[14px]">{item.area}</span>
            </div>
            <div className="flex  gap-2">
              <span className="font-medium  mr-[1px]">Rooms:</span>{" "}
              <span className="text-gray-600 text-[14px]">
                {item.rooms} Rooms
              </span>
            </div>
          </div>
          {/* button */}
          <div className="flex items-start justify-end mt-4">
            <div className="flex w-full items-center justify-between">
              <div className=" flex">
                <div className="py-1 px-2 text-[14px] border-2 border-indigo-700 rounded-lg text-indigo-700 flex gap-2 items-center cursor-pointer hover:bg-indigo-700 hover:text-white transition ease-in-out">
                  <span>
                    <FaDollarSign />
                  </span>{" "}
                  <span>{item.price}</span>
                </div>
              </div>

              <div className=" flex">
                <div
                  onClick={() => {
                    handleBookNow(item.contactno);
                  }}
                  className="py-1 text-[14px] px-2 border-2 border-indigo-700 rounded-lg text-indigo-700 flex gap-2 items-center cursor-pointer hover:bg-indigo-700 hover:text-white transition ease-in-out"
                >
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span>Call Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRent;
