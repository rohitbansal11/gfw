import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { GetListing } from "@store/AllDataMain/AllDataaction";

const DashboardList = ({ items }) => {
  const selector = useSelector((pre) => pre?.alldata);
  const dispatch = useDispatch();
  const router = useRouter();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(GetListing());
  }, []);
  useEffect(() => {
    setData(selector?.listing);
  }, [selector]);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-10">
        <div className="flex flex-wrap">
          {/* ///////////  Sekelton*/}
          {loading && Object.keys(data).length == 0 && (
            <div className="xl:w-[500px] my-10 md:w-1/3 py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400">
              <div className="flex flex-col animate-pulse mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                <div className="  bg-gray-300 leading-relaxed text-bold text-lg  border-2 rounded-full px-8 py-8 h-10"></div>
                <div className="w-56 bg-gray-300 h-7 mt-4"></div>
                <div className="  bg-gray-300 leading-relaxed text-bold text-lg  border-2 rounded-full px-5 py-5 h-5 mt-4"></div>
              </div>
            </div>
          )}

          {/* ///////////  No listing Found*/}

          {!loading && Object.keys(data).length == 0 && (
            <div className="xl:w-[500px] my-10 md:w-1/3 py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400">
              <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                <Icon color="white" height={40} icon="fa-solid:truck-loading" />
                <h2 className="text-4xl md:text-4xl lg:text-5xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                  No Listing
                </h2>
                <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                  0
                </div>
              </div>
            </div>
          )}

          {!loading && Object.keys(data).length > 0 && (
            <>
              {/* ///////////  Loads*/}

              {data?.loads > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-loads");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon
                      color="white"
                      height={40}
                      icon="fa-solid:truck-loading"
                    />
                    <h2 className="text-[22px] md:text-3xl   pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Loads
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.loads}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////   Emergency Loads*/}

              {data?.emergency > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-emergency");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon
                      color="white"
                      height={40}
                      icon="fa6-solid:truck-arrow-right"
                    />
                    <h2 className="text-[22px] md:text-3xl  pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Emergency Loads
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.emergency}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////  Truck Sale */}

              {data?.truck > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-truck");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon
                      color="white"
                      height={40}
                      icon="fa6-solid:truck-arrow-right"
                    />
                    <h2 className="text-[22px] md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Truck Sale
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.truck}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////  Truck Parts Sale */}

              {data?.truckpart > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-truckpart");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon
                      color="white"
                      height={40}
                      icon="fa6-solid:truck-arrow-right"
                    />
                    <h2 className="text-[22px] md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Truck Parts Sale
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.truckpart}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////    Car Sale */}

              {data?.car > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-car");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="bxs:car" />
                    <h2 className="text-[22px] md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Car Sale
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.car}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////    School Ride */}

              {data?.school > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-school");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="bxs:car" />
                    <h2 className="text-[22px] md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      School Ride
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.school}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////    Oldage Ride */}
              {data?.oldage > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-oldage");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="bxs:car" />
                    <h2 className="text-[22px] md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Oldage Ride
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.oldage}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////    Airport Ride */}

              {data?.airport > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-airport");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="bxs:car" />
                    <h2 className="text-[22px] md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Airport Ride
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.airport}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////   local Stores */}

              {data?.store > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-localstore");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="fa-solid:suitcase" />
                    <h2 className="text-[22px] md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      local Stores
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.store}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////   local Workers */}
              {data?.worker > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-localworker");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="fa-solid:suitcase" />
                    <h2 className="text-[22px] md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      local Workers
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.worker}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////   Home Rent */}
              {data?.house > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-home");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="ri:hotel-line" />
                    <h2 className="text-[22px] md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Home Rent
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.house}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////  Room Rent */}

              {data?.room > 0 && (
                <div
                  className="xl:max-w-[500px] my-10 md:max-w-[400px] py-4 sm:ml-10 md:ml-10 bg-indigo-600 w-5/6  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    router.push("/my-listing/user-room");
                  }}
                >
                  <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="ri:hotel-line" />
                    <h2 className="text-[22px] md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Room Rent
                    </h2>
                    <div className="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.room}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

DashboardList.defaultProps = {};

export default DashboardList;
