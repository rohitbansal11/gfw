import React from "react";
import styled from "styled-components";
import { FaDollarSign, FaPhoneAlt } from "react-icons/fa";
import moment from "moment";
import Link from "next/link";
import { CardButton } from "@components/Common";
import { useDispatch } from "react-redux";
import { UserRoomDelete } from "@store/UserListing/UserListingAction";
const RentCard = ({ item }) => {
    
  const dispatch = useDispatch();

  return (
    <div className="flex bg-white shadow-xl rounded-lg min-w-[350px] lg:min-w-[400px] max-w-[420px] mx-2 hover:translate-y-[-4px] transition ease-in-out">
      <div className="rounded-md text-center w-[40%] text-xl font-semibold text-indigo-700 bg-green-100">
        <img
          className="bg-center rounded-tl-md rounded-bl-md w-[100%] h-full object-cover"
          src={item.image}
          alt={item.title.slice(0, 5)}
        />
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
          {/* <div className="flex  gap-2">
            <span className="font-medium mr-[6px]">Type:</span>{" "}
            <span className="text-gray-600 text-[14px]">{item.type}</span>
          </div> */}
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
            <div
          className={`flex my-4 justify-end`}
          onClick={() => {
            dispatch(UserRoomDelete(item._id));
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
    </div>
  );
};

export default RentCard;
