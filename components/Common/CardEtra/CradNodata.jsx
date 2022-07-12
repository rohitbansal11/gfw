import React from "react";

const CarNodata = () => {
  return (
    <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
      <div className="flex bg-white shadow-xl rounded-lg min-w-[350px] lg:min-w-[400px] max-w-[420px] mx-2 hover:translate-y-[-4px] transition ease-in-out">
        <div className="rounded-md text-center w-[40%] text-xl font-semibold text-indigo-700 bg-green-100">
          <img
            className="bg-center rounded-tl-md rounded-bl-md w-[100%] h-full object-cover"
            src="/images/nodata.png"
          />
        </div>
        {/* bottom section */}
        <div className="flex flex-col px-4 py-4 w-[60%]">
          <div className="flex items-center gap-2 text-[18px] font-semibold">
            <h5>No Data Found</h5>
          </div>
          <div className="text-gray-500 text-[12px] mb-2">No Data Found</div>
          {/* weight & type */}
        </div>
      </div>
      <div className="flex bg-white shadow-xl rounded-lg min-w-[350px] lg:min-w-[400px] max-w-[420px] mx-2 hover:translate-y-[-4px] transition ease-in-out">
        <div className="rounded-md text-center w-[40%] text-xl font-semibold text-indigo-700 bg-green-100">
          <img
            className="bg-center rounded-tl-md rounded-bl-md w-[100%] h-full object-cover"
            src="/images/nodata.png"
          />
        </div>
        {/* bottom section */}
        <div className="flex flex-col px-4 py-4 w-[60%]">
          <div className="flex items-center gap-2 text-[18px] font-semibold">
            <h5>No Data Found</h5>
          </div>
          <div className="text-gray-500 text-[12px] mb-2">No Data Found</div>
          {/* weight & type */}
        </div>
      </div>
      <div className="flex bg-white shadow-xl rounded-lg min-w-[350px] lg:min-w-[400px] max-w-[420px] mx-2 hover:translate-y-[-4px] transition ease-in-out">
        <div className="rounded-md text-center w-[40%] text-xl font-semibold text-indigo-700 bg-green-100">
          <img
            className="bg-center rounded-tl-md rounded-bl-md w-[100%] h-full object-cover"
            src="/images/nodata.png"
          />
        </div>
        {/* bottom section */}
        <div className="flex flex-col px-4 py-4 w-[60%]">
          <div className="flex items-center gap-2 text-[18px] font-semibold">
            <h5>No Data Found</h5>
          </div>
          <div className="text-gray-500 text-[12px] mb-2">No Data Found</div>
          {/* weight & type */}
        </div>
      </div>
    </div>
  );
};

export default CarNodata;
