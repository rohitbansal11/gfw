import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";

import { ModalPlatinum } from "@components/Common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoadImgCard = ({ item, role }) => {
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
          <img
            className="bg-center rounded-tl-md rounded-bl-md w-[100%] h-full object-cover"
            src={item.image || "/images/nophoto.jpg"}
            alt={item.model}
          />
        </div>
        {/* bottom section */}
        <div className="flex flex-col px-4 py-4 w-[60%]">
          <div className="flex items-center gap-2 font-semibold">
            <h5>{item.title}</h5>
          </div>
          <div className="text-gray-500 text-[12px]">
            {moment(new Date(item.createdAt)).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
          {/* weight & type */}
          <div className="flex flex-col mt-2">
            <div className="flex  gap-2">
              <span className="font-medium mr-[2px]">Miles:</span>{" "}
              <span>{item.miles}</span>
            </div>
            <div className="flex  gap-2">
              <span className="font-medium mr-[2px]">Make:</span>{" "}
              <div>{item.make}</div>
            </div>
            <div className="flex  gap-2">
              <span className="font-medium mr-[-2px]">Model:</span>{" "}
              <div>{item.model}</div>
            </div>
            <div className="flex  gap-2">
              <span className="font-medium mr-[10px]">Year:</span>{" "}
              <div>{item.year}</div>
            </div>
          </div>
          {/* button */}
          <div className="flex items-start justify-end mt-4">
            <div className="flex w-full items-center">
              <div className="h-[2px] bg-gray-300 w-[30%] mx-2"></div>

              <div className=" flex">
                <div
                  onClick={() => {
                    handleBookNow(item.contactno);
                  }}
                  className="py-1 px-4 border-2 border-indigo-700 rounded-lg text-indigo-700 flex gap-2 items-center cursor-pointer hover:bg-indigo-700 hover:text-white transition ease-in-out"
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

export default LoadImgCard;
