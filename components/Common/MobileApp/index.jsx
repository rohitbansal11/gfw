import {
  Container,
  PrimaryHeading,
  SecondaryHeading,
  Section,
} from "@components/Common"
import React from "react"
import Image from "next/image"

const MobileApp = () => {
  return (
    <Section className="bg-[#F0F7FF]">
      <div className="flex flex-col md:flex-row">
        <div className="w-[100%] max-w-[500px] mx-auto md:w-[50%] ">
          <Image
            src={`/images/mobile-prototype.png`}
            height={500}
            width={700}
          />
        </div>
        <div className="w-[100%] flex flex-col items-center justify-center md:[50%] lg:items-start">
          <h2 className="text-4xl mb-2 font-bold  text-center text-indigo-900 md:6xl lg:8xl lg:text-left lg:ml-8 xl:ml-0 ">
            A Whole New Way{" "}
            <span className="text-red-600 lg:block">To Buy & sell</span>
          </h2>
          <h3 className="text-2xl font-semibold mb-8 text-center max-w-[34ch] lg:text-left">
            Download our Mobile App. Convenience At Your Fingertips
          </h3>
        </div>
        <div className="w-[100%]">
          <h5 className="text-xl text-center font-semibold">
            Get Your App Today
          </h5>
          <div className="flex flex-col items-center justify-center mt-6 gap-4">
            <div className="max-w-[200px]">
              <Image
                className=""
                src="/images/google-play.png"
                height={50}
                width={180}
              />
            </div>
            <div className="max-w-[200px] ">
              <Image
                className=""
                src="/images/app-store.png"
                height={50}
                width={180}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default MobileApp
