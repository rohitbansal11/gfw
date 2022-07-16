import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ModalSilver,
  ModalGold,
  ModalPlatinum,
} from "@components/Common/index";
import Swal from "sweetalert2";

const BecomeMemberCard = ({ items }) => {
  const [data, setData] = useState({});
  const [silverShow, setSilverShow] = useState(false);
  const [goldShow, setGoldShow] = useState(false);
  const [platinumShow, setPlatinumShow] = useState(false);
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    setData(selector?.token?.sub_data);
  }, [selector]);
  const HandleBackModalPlatinum = (value) => {
    setPlatinumShow(value);
  };
  const HandleBackModalGold = (value) => {
    setGoldShow(value);
  };
  const HandleBackModalSilver = (value) => {
    setSilverShow(value);
  };

  const HandleClickCheck = (value) => {
    if (data?.sub_role == value) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: ` You Already have ${value} role`,
      });
    } else {
      if (value == "silver") {
        setSilverShow(true);
      } else if (value == "gold") {
        setGoldShow(true);
      } else if (value == "platinum") {
        setPlatinumShow(true);
      }
    }
  };
  return (
    <section className="text-gray-600 body-font">
      <ModalPlatinum
        handleBackplatinum={HandleBackModalPlatinum}
        showModalPlatinum={platinumShow}
      />
      <ModalGold
        handleBackgold={HandleBackModalGold}
        showModalGold={goldShow}
      />
      <ModalSilver
        handleBacksilver={HandleBackModalSilver}
        showModalSilver={silverShow}
      />
      <div className="container py-10">
        <div className="flex flex-col mx-5 items-center">
          <div
            className={`xl:w-[600px] py-4 rounded-lg shadow-lg my-8 md:w-[550px] py-4 sm:ml-10 md:ml-10 sm:w-[500px] bg-gray-600`}
            onClick={() => HandleClickCheck("silver")}

          >
            <div className="flex flex-col">
              <div className="flex flex-col sm:mx-2 lg:mx-4 mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                <Icon
                  color="white "
                  height={70}
                  icon="file-icons:silverstripe"
                />
                <h2 className="text-5xl sm:mx-4 text-white md:text-5xl lg:text-6xl pt-3 mb-6 font-extrabold title-font mb-4">
                  Silver
                </h2>
              </div>
              <div className="lg:w-[58%] md:w-[60%] w-[90%] mx-6 my-0 md:mx-auto ">
                <ol
                  style={{ listStyleType: "upper-roman" }}
                  className="font-bold text-[12px] md:text-base text-white"
                >
                  <li className="my-1">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </li>
                  <li className="my-1">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </li>
                  <li className="my-1">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div
            onClick={() => HandleClickCheck("gold")}
            className={`xl:w-[600px] py-4 rounded-lg shadow-lg my-0 md:w-[550px] py-4 sm:ml-10 md:ml-10 sm:w-[500px] bg-[url('/images/gold.jpg')] bg-cover`}
            >
            <div className="flex flex-col">
              <div className="flex flex-col sm:mx-2 lg:mx-4 mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                <Icon
                  color="white "
                  height={70}
                  icon="cryptocurrency:gold"
                />
                <h2 className="text-5xl sm:mx-4 text-white md:text-5xl lg:text-6xl pt-3 mb-6 font-extrabold title-font mb-4">
                  Gold
                </h2>
              </div>
              <div className="lg:w-[58%] md:w-[60%] w-[90%] mx-6 my-0 md:mx-auto ">
                <ol
                  style={{ listStyleType: "upper-roman" }}
                  className="font-bold text-[12px] md:text-base text-white"
                >
                  <li className="my-1">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </li>
                  <li className="my-1">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </li>
                  <li className="my-1">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div
            onClick={() => HandleClickCheck("platinum")}
            className={`xl:w-[600px] py-4 rounded-lg shadow-lg my-8 md:w-[550px]  sm:ml-10 md:ml-10 sm:w-[500px] bg-[url('/images/platinumm.jpeg')] bg-cover`}
          >
            <div className="flex flex-col">
              <div className="flex flex-col sm:mx-2 lg:mx-4 mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                <Icon
                  color="white "
                  height={70}
                  icon="fluent:diamond-24-filled"
                />
                <h2 className="text-5xl sm:mx-4 text-white md:text-5xl lg:text-6xl pt-3 mb-6 font-extrabold title-font mb-4">
                  Platinum
                </h2>
              </div>
              <div className="lg:w-[58%] md:w-[60%] w-[90%] mx-6 my-0 md:mx-auto ">
                <ol
                  style={{ listStyleType: "upper-roman" }}
                  className="font-bold text-[12px] md:text-base text-white"
                >
                  <li className="my-1">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </li>
                  <li className="my-1">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </li>
                  <li className="my-1">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BecomeMemberCard.defaultProps = {
  items: [
    {
      name: "Silver",
      color: "bg-gray-600",
      icon: "file-icons:silverstripe",
      href: "/my-listing",
    },
    {
      name: "Gold",
      color: "bg-amber-400",
      icon: "cryptocurrency:gold",
      href: "/my-listing",
    },
    {
      name: "platinum",
      icon: "fluent:diamond-24-filled",
      href: "/my-listing",
    },
  ],
};

export default BecomeMemberCard;
