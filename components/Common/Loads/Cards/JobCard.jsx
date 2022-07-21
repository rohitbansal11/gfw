import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";

import { ModalPlatinum } from "@components/Common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobCard = ({ isWorkers, item, role }) => {
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
      <div className="flex bg-white shadow-xl rounded-lg min-w-[300px] lg:min-w-[300px] mx-4 max-w-[350px]">
        <div className="flex flex-col px-4 py-4">
          <div className="flex items-center gap-2 text-[18px] font-semibold">
            <h5>{item.title}</h5>
          </div>

          <div className="text-gray-500 mb-2 mt-1 text-[12px]">
            {moment(new Date(item.createdAt)).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
          {/* weight & type */}
          <div className="flex flex-col mt-2">
            <div className="flex  gap-2">
              <span className="font-medium  w-20">Job:</span>
              <div className="text-[14px] text-gray-600">{item.job}</div>
            </div>
            <div className="flex  gap-2">
              <span className="font-medium  w-20">Location:</span>
              <div className="text-[14px] text-gray-600">{item.location}</div>
            </div>
            <div className="flex  gap-2">
              <span className="font-medium w-20 ">
                {isWorkers ? "Name:" : "Store:"}
              </span>
              <span className="text-[14px] text-gray-600">
                {item.name || item.nameofstore}
              </span>
            </div>
            <div className="flex  gap-2">
              <span className="font-medium w-20">City:</span>
              <div className="text-[14px] text-gray-600">{item.city}</div>
            </div>
          </div>
          {/* button */}
          <div className="flex items-start justify-start">
            <div
              onClick={() => {
                handleBookNow(item.contactno);
              }}
              className="py-1 px-6 border-2 border-indigo-700 rounded-lg text-indigo-700 mt-4 hover:bg-indigo-700 hover:text-white cursor-pointer"
            >
              Book Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AnimatedDot = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 100px;
  margin: 0px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  position: relative;
  z-index: 2;
  :before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #cee2ff;
    animation: beat 1.1s ease-in-out infinite;
    transform-origin: center;
    opacity: 0.4;
    z-index: -2;
  }

  @keyframes beat {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(2);
    }
  }
`;

export default JobCard;
