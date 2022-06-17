import Image from "next/image"
import React from "react"
import SellTrucksForm from "./SellTrucksForm"

const FormSection = () => {
  return (
    <div className="flex bg-white w-full relative pb-8">
      <iframe
        className="absolute z-[0]"
        src="https://my.spline.design/lightingtoruscopy-c59cd5c704fd4ecac4dfc643bd3f2ed0/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
      <div className="w-full flex relative">
        <div className="flex-1 w-[100%] lg:w-[60%]">
          <div className=" ">
            <div className="flex justify-center">
              <h5 className="text-3xl lg:text-5xl font-semibold mt-8 pb-1 border-b-2 text-white  border-indigo-900 max-w-fit">
                Trucks
              </h5>
            </div>
            <SellTrucksForm className="bg-white" />
          </div>
        </div>
        <div className="hidden lg:block lg:w-[40%] my-auto rounded-lg relative">
          <div className="absolute w-8 h-[20%] bg-red-500 left-0 shadow-md rounded-tl-lg"></div>
          <div className="h-[400px] w-[400px]">
            <img
              src="/images/truck.jpg"
              className="h-[100%] w-[100%] bg-center object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormSection
