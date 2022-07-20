import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
import { CardButton } from "@components/Common";
import { useDispatch } from "react-redux";
import { UserStoreDelete, UserWorkerDelete } from "@store/UserListing/UserListingAction";

const JobCard = ({ isWorkers, item ,type }) => {

  const dispatch = useDispatch();
  console.log("fdgfd" , type)

  const handleDelete = (id , job) =>{
    if(job === "store"){
        dispatch(UserStoreDelete(id))
    }
    else{
      dispatch(UserWorkerDelete(id))
    }
  }

  return (
    <div className="flex bg-white shadow-xl rounded-lg min-w-[300px] lg:min-w-[240px] mx-4 max-w-[350px]">
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
        <div
            className={`flex my-4  justify-end`}
            onClick={() => {
             handleDelete(item._id , type) 
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

export default JobCard;
