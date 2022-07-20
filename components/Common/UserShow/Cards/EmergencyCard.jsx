import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { CardButton } from "@components/Common";
import { useDispatch } from "react-redux";
import { UserEmergencyLoadsDelete } from "@store/UserListing/UserListingAction";


const EmergencyCard = ({ item }) => {

  const dispatch = useDispatch();



  return (
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
            {item?.from?.state},{item?.from?.city} - {item?.to?.state},
            {item?.to?.city}
          </div>
        </div>
        <div className="text-gray-500 text-center text-[12px]">{item.date}</div>
        {/* weight & type */}
        <div className="flex flex-col mt-2">
          <div className="flex  gap-2">
            <span className="font-medium">Weight:</span>
            <span>
              {item?.weight}/{item?.weight_type}
            </span>
          </div>
          <div className="flex  gap-2">
            <span className="font-medium mr-4">Type:</span>{" "}
            <div>{item?.type}</div>
          </div>
        </div>
        {/* button */}
        <div
          className={`flex my-4   justify-end`}
          onClick={() => {
            dispatch(UserEmergencyLoadsDelete(item._id));
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
