import { Aside, BecomeMemberCard } from "@components/Common";
import React from "react";

const index = () => {
  return (
    <>
      <div className="bg-indigo-50 py-8 w-[100%] flex flex-row">
        <div className="flex w-[20%]">
          <Aside />
        </div>
        <div className="flex flex-col mt-14 w-[80%] ">
          <h1 className="font-black md:text-5xl text-4xl lg:text-7xl text-blue-800 text-center">
            MEMBERSHIP <span className="text-orange-700"> AVAILABLE</span>{" "}
          </h1>
          <BecomeMemberCard />
        </div>
      </div>
    </>
  );
};

export default index;
