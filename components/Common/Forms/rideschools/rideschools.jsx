import Image from "next/image"
import React from "react"
import { Parallax } from "@components/Common"
import SellTrucksForm from "./SellTruck/SellTrucksForm"

const FormSection = ({ img, title, form }) => {
  return (
    <div className="flex bg-white w-full relative">
      <div className="w-full flex relative">
        {/* design block */}

        <div className="absolute top-0 bottom-0 w-[35%] bg-indigo-800 bg-[url(/images/form-pattern.png)] bg-cover bg-center bg-repeat right-0"></div>

        <div className="flex-1 w-[100%] lg:w-[60%]">
          <div className=" ">
            <div className="flex justify-center">
              <h5 className="text-3xl lg:text-5xl font-semibold mt-8 pb-1 border-b-2  border-indigo-900 max-w-fit">
                {title}
              </h5>
            </div>
            {form}
          </div>
        </div>
        <div className="hidden lg:block lg:w-[40%] my-auto rounded-lg relative">
          <Parallax>
            <div className="absolute w-8 h-[20%] bg-red-500 left-0 shadow-md rounded-tl-lg"></div>
            <div className="h-[400px] w-[400px]">
              <img
                src={img}
                className="h-[100%] w-[100%] bg-center object-cover rounded-lg shadow-lg"
              />
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  )
}

FormSection.defaultProps = {
  img: "/images/truck.jpg",
  title: "Title",
  form: <SellTrucksForm className="bg-white" />,
}

export default FormSection
