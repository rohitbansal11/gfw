import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
import { CardButton } from "@components/Common";
import {
  UserAirportDelete,
  UserOldageDelete,
  UserSchoolDelete,
} from "@store/UserListing/UserListingAction";
import { useDispatch } from "react-redux";

const RideCard = ({ item, type }) => {
  const dispatch = useDispatch();
  const handleDelete = (id, ride) => {
    if (ride == "school") {
      dispatch(UserSchoolDelete(id));
    }
  };
  return (
    <div className="flex bg-white shadow-xl rounded-lg min-w-[300px] lg:min-w-[220px] mx-6">
      <div className="flex flex-col px-10 py-4">
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
        <div>
          <div
            className={`flex my-4  justify-end`}
            onClick={() => {
              handleDelete(item._id, type);
            }}
          >
            <button
              className={`text-white bg-red-600 px-4  rounded-2xl shadow-lg  font-bold py-2 hover:text-blue-600`}
            >
              Delete
            </button>
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
