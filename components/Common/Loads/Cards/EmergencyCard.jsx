import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

import { ModalPlatinum } from "@components/Common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmergencyCard = ({ item, role }) => {
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
      <div className="flex bg-white shadow-xl rounded-lg min-w-[350px] lg:min-w-[400px] mx-2">
        <div className="border-2 border-red-500 rounded-md text-center flex text-xl font-semibold text-indigo-700">
          <div
            style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
            className="text-[14px] "
          >
            Emergency
          </div>
        </div>
        {/* bottom section */}
        <div className="flex flex-col px-4 py-4">
          <div className="flex items-center gap-2 border-b-2 border-gray-200 pb-1">
            <AnimatedDot />
            <div>{item?.title}</div>
          </div>
          <div className="flex items-center gap-2 pb-1 mt-2">
            <FaMapMarkerAlt size={20} className="text-red-600" />
            <div>
              {item?.from.state},{item?.from.city} - {item?.to.state},
              {item?.to.city}
            </div>
          </div>
          <div className="text-gray-500 text-center text-[12px]">
            {item.date}
          </div>
          {/* weight & type */}
          <div className="flex flex-col mt-2">
            <div className="flex  gap-2">
              <span className="font-medium">Weight:</span>
              <span>
                {item?.weight}/{item?.weight_type}
              </span>
            </div>
            <div className="flex  gap-2">
              <span className="font-medium mr-4">Type:</span>
              <div>{item?.type}</div>
            </div>
          </div>
          {/* button */}
          <div className="flex items-start justify-start">
            <div
              onClick={() => {
                handleBookNow(item.contactno);
              }}
              className="py-1 px-6 border-2 cursor-pointer border-indigo-700 rounded-lg text-indigo-700 mt-4 cursor-pointer"
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

export default EmergencyCard;
