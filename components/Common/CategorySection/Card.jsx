import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { FadeUpDown } from "..";
import { useDispatch, useSelector } from "react-redux";
import {
  CheckTokenOne,
  LogoutAction,
} from "../../../store/AllDataMain/AllDataaction";
import { useRouter } from "next/router";
import {
  Container,
  PrimaryButton,
  ModalHidden,
  ModalSimple,
  ModalLoadshidden,
  ModalLoadSimple,
  ModalPlatinum,
  ModalSilver,
} from "@components/Common";
const Card = ({ item, index, type }) => {
  const [active, setActive] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const [tokenData, setTokenData] = useState({});
  const selector = useSelector((pre) => pre?.alldata);
  const [showModal, setShowModal] = useState(false);
  const [showModallodas, setShowModalloads] = useState(false);
  const [routeSet, setRouteName] = useState("");
  const [checkData, setCheckData] = useState({});
  const [checkDataLoads, setCheckDataLoads] = useState({});
  const [showPlatinum, setShowPlatinum] = useState(false);
  const [showSilver, setShowSilver] = useState(false);

  useEffect(() => {
    setTokenData(selector?.token);
    setCheckData(selector?.location);
    setCheckDataLoads(selector?.location_loads);
  }, [selector]);

  const HnadleReroute = (routeName) => {
    if (Object?.keys(tokenData)?.length == 0) {
      router.push("/login");
    } else {
      if (routeName == "/emergency-loads") {
        if (tokenData?.sub_data?.sub_role == "platinum") {
          setShowModalloads(true);
          setRouteName(routeName);
        } else {
          setShowPlatinum(true);
        }
      } else if (routeName == "/loads") {
        if (
          checkDataLoads?.stateOne !== "" &&
          checkData?.cityOne !== "" &&
          checkDataLoads?.stateTwo !== "" &&
          checkData?.cityTwo !== ""
        ) {
          router.push(routeName);
        } else {
          setShowModalloads(true);
          setRouteName(routeName);
        }
      } else {
        if (checkData?.state !== "" || checkData?.city !== "") {
          router.push(routeName);
        } else {
          setShowModal(true);
          setRouteName(routeName);
        }
      }
    }
  };

  const HandleBackModal = (value, endhere) => {
    setShowModal(value);
    if (endhere == "route") {
      router.push(routeSet);
    }
  };
  const HandleBackModalLoads = (value, endhere) => {
    setShowModalloads(value);
    if (endhere == "route") {
      router.push(routeSet);
    }
  };

  const HandleBackModalPlatinum = (value) => {
    setShowPlatinum(value);
  };
  const HandleBackModalSilver = (value) => {
    setShowSilver(value);
  };

  const HandleListingType = (value) => {
    if (tokenData?.role !== "subscribe") {
      setShowSilver(true);
    } else {
      router.push(value);
    }
  };

  return (
    <div className="relative">
      <ModalHidden handleSet={HandleBackModal} showModal={showModal} />
      <ModalLoadshidden
        handleSetLodas={HandleBackModalLoads}
        showModallodas={showModallodas}
      />
      <ModalPlatinum
        handleBackplatinum={HandleBackModalPlatinum}
        showModalPlatinum={showPlatinum}
      />
      <ModalPlatinum
        handleBacksilver={HandleBackModalSilver}
        showModalSilver={showSilver}
      />
      <FadeUpDown delay={index * 0.2}>
        <div onClick={() => setActive(item.text)}>
          <div className=" w-[33%] min-w-[320px] mx-auto rounded-md shadow-md bg-white hover:translate-y-[-4px] transition ease-in-out cursor-pointer">
            <div
              style={{
                backgroundImage: `url(${`/images/card-overlay.png`})`,
              }}
              className={`p-4 bg- py-10 flex justify-center items-center ${item.color} rounded-t-md`}
            >
              <Icon height={120} icon={item.icon} color="white" />
            </div>
            <p className="py-2 px-2 text-lg lg:text-xl font-semibold text-center">
              {item.text}
            </p>
          </div>
        </div>
      </FadeUpDown>

      {item?.subCategory && active === item.text ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-100 px-4 flex justify-center flex-col gap-y-4">
          <div
            onClick={() => {
              if (type == "show") {
                HnadleReroute(
                  item.subCategory[0]?.href ? item.subCategory[0]?.href : "/"
                );
              } else {
                HandleListingType(
                  item.subCategory[0]?.href ? item.subCategory[0]?.href : "/"
                );
              }
            }}
            className="h-[40px] border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white cursor-pointer flex rounded-md px-4 py-2 justify-center items-center"
          >
            <a className="text-xl font-semibold tracking-wide">
              {item.subCategory[0]?.title}
            </a>
          </div>

          {item.subCategory[1] && (
            <div
              onClick={() => {
                if (type == "show") {
                  HnadleReroute(
                    item.subCategory[1]?.href ? item.subCategory[1]?.href : "/"
                  );
                } else {
                  HandleListingType(
                    item.subCategory[1]?.href ? item.subCategory[1]?.href : "/"
                  );
                }
              }}
              className="h-[40px] border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white cursor-pointer flex rounded-md px-4 py-2 justify-center items-center"
            >
              <a className="text-xl font-semibold tracking-wide">
                {item.subCategory[1]?.title}
              </a>
            </div>
          )}

          {item.subCategory[2] && (
            <div
              onClick={() => {
                if (type == "show") {
                  HnadleReroute(
                    item.subCategory[2]?.href ? item.subCategory[2]?.href : "/"
                  );
                } else {
                  HandleListingType(
                    item.subCategory[2]?.href ? item.subCategory[2]?.href : "/"
                  );
                }
              }}
              className="h-[40px] border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white cursor-pointer flex rounded-md px-4 py-2 justify-center items-center"
            >
              <a className="text-xl font-semibold tracking-wide">
                {item.subCategory[2]?.title}
              </a>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card;
