import React from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
const LoadImgCard = ({ item }) => {
  console.log(item);
  return (
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
      </div>
    </div>
  );
};

export default LoadImgCard;
