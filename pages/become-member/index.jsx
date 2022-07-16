import { Aside, BecomeMemberCard, Heading } from "@components/Common";
import React from "react";

const index = () => {
  return (
    <>
      <div className="bg-indigo-50 py-8 w-[100%] flex flex-row">
        <div className="flex w-[20%]">
          <Aside />
        </div>
        <div className="flex flex-col mt-14 w-[80%] ">          
          <Heading />
          <BecomeMemberCard />
        </div>
      </div>
    </>
  );
};

export default index;
