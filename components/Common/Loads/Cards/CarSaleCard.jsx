import React from "react";
import styled from "styled-components";
import { FaDollarSign, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
const CarSaleCard = ({ item }) => {
  return (
    <div className="flex bg-white shadow-xl rounded-lg min-w-[350px] lg:min-w-[400px] max-w-[420px] mx-2 hover:translate-y-[-4px] transition ease-in-out">
      <div className="rounded-md text-center w-[40%] text-xl font-semibold text-indigo-700 bg-green-100">
        <img
          className="bg-center rounded-tl-md rounded-bl-md w-[100%] h-full object-cover"
          src={item.img}
          alt={item.model}
        />
      </div>
      {/* bottom section */}
      <div className="flex flex-col px-4 py-4 w-[60%]">
        <div className="flex items-center gap-2 text-[18px] font-semibold">
          <h5>{item.name}</h5>
        </div>
        <div className="text-gray-500 text-[12px] mb-2">{item.date}</div>
        {/* weight & type */}
        <div className="flex flex-col mt-2">
          <div className="flex  gap-2">
            <span className="font-medium mr-[2px]">Miles:</span>{" "}
            <span>{item.miles}K mi</span>
          </div>
          <div className="flex  gap-2">
            <span className="font-medium mr-[2px]">Make:</span>{" "}
            <div>{`${item.make}`.toUpperCase()}</div>
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
          <div className="flex w-full items-center justify-between">
            <div className=" flex">
              <div className="py-1 px-1 text-[14px] border-2 border-indigo-700 rounded-lg text-indigo-700 flex gap-2 items-center cursor-pointer hover:bg-indigo-700 hover:text-white transition ease-in-out">
                <span>
                  <FaDollarSign />
                </span>{" "}
                <span>${item.price}</span>
              </div>
            </div>

            <div className=" flex">
              <div className="py-1 text-[14px] px-2 border-2 border-indigo-700 rounded-lg text-indigo-700 flex gap-2 items-center cursor-pointer hover:bg-indigo-700 hover:text-white transition ease-in-out">
                <span>
                  <FaPhoneAlt />
                </span>{" "}
                <span>Call Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSaleCard;
