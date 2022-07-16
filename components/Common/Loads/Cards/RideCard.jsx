import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";

const RideCard = ({ item }) => {
  // console.log("vvvvv" , item)
  return (
    <div className="flex bg-white shadow-xl rounded-lg min-w-[300px] lg:min-w-[300px] mx-6">
      <div className="flex flex-col px-4 py-4">
        <div className="flex items-center gap-2 border-b-2 border-gray-200 pb-1">
          <AnimatedDot />
          <div className="ml-1">{item.title}</div>
        </div>
        <div className="flex items-center gap-2 pb-1 mt-2">
          <FaMapMarkerAlt size={20} className="text-red-600" />
          <div>
            {item.pickup} - {item.schoolname || item.dropoff || item.schoolname}
          </div>
        </div>
        <div className="text-gray-500  text-[12px]">
          {moment(new Date(item.createdAt)).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
        {/* weight & type */}
        <div className="flex flex-col mt-2">
          <div className="flex  gap-2">
            <span className="font-medium mr-6">City:</span>{" "}
            <span className="text-[14px] text-gray-600">{item.city}</span>
          </div>
          <div className="flex  gap-2">
            <span className="font-medium mr-4">State:</span>{" "}
            <div className="text-[14px] text-gray-600">{item.state}</div>
          </div>
        </div>
        {/* button */}
        <div className="flex items-start justify-start">
          <div className="py-1 px-6 border-2 border-indigo-700 rounded-lg text-indigo-700 mt-4 hover:bg-indigo-700 hover:text-white">
            Book Now
          </div>
        </div>
      </div>
    </div>
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

export default RideCard;
