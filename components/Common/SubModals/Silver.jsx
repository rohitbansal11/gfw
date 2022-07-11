import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Section, Container } from "@components/Common";
import { PrimaryHeading } from "../Typography";
import { BsCheck2All } from "react-icons/bs";
import Image from "next/image";

export default function Silver({ handleBacksilver, showModalSilver }) {
  const customStyles = {
    content: {
      top: "150px",
      bottom: "150px",
      left: "350px",
      right: "350px",
    },
  };
  function closeModal() {
    handleBacksilver(false);
  }
  return (
    <>
      <Modal
        isOpen={showModalSilver}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex justify-end w-50 mb-3">
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <Section className="bg-indigo-600 py-[30px]">
          <Container>
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 mr-[30px]">
                <h2 className="text-xl font-medium mb-4 text-white drop-shadow-md lg:text-1xl">
                  Become a{" "}
                  <span className="text-red-600"> Silver Member Now</span>
                  <span className="inline-block">To Avail This Offer</span>
                </h2>
                <div className="ml-[-14px]">
                  <Image
                    src={`/images/gudguru-member.png`}
                    width={300}
                    height={80}
                  />
                </div>
                <div className="bg-white py-4 px-2 rounded-lg shadow-lg border-2 border-red-600 max-w-[350px]">
                  {[
                    "Get Full Access",
                    "Unlimited Listings",
                    "Unlimited Views",
                  ].map((item) => (
                    <div className="flex pl-4 gap-4 text-xl font-semibold items-center">
                      <BsCheck2All size={24} className="text-indigo-900" />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white cursor-pointer py-2 w-[300px] flex justify-center items-center shadow-md rounded-xl mt-8 text-indigo-700 hover:translate-y-[-4px] hover:shadow-xl transition ease-in-out ">
                  Book Now
                </div>
              </div>
              <div className="flex-1 my-[-30px] mt-4 md:mt-0 max-w-[500px]">
                <img src={`/images/become-member.svg`} />
              </div>
            </div>
          </Container>
        </Section>
      </Modal>
    </>
  );
}
