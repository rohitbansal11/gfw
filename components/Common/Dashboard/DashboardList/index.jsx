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
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-10">
        <div class="flex flex-wrap">
          {/* ///////////  Sekelton*/}
          {loading && Object.keys(data).length == 0 && (
            <div class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400">
              <div class="flex flex-col animate-pulse mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                <div class="  bg-gray-300 leading-relaxed text-bold text-lg  border-2 rounded-full px-8 py-8 h-10"></div>
                <div className="w-56 bg-gray-300 h-7 mt-4"></div>
                <div class="  bg-gray-300 leading-relaxed text-bold text-lg  border-2 rounded-full px-5 py-5 h-5 mt-4"></div>
              </div>
            </div>
          )}

          {/* ///////////  No listing Found*/}

          {!loading && Object.keys(data).length == 0 && (
            <div class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400">
              <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                <Icon color="white" height={40} icon="fa-solid:truck-loading" />
                <h2 class="text-4xl md:text-4xl lg:text-5xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                  No Listing
                </h2>
                <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                  0
                </div>
              </div>
            </div>
          )}

          {!loading && Object.keys(data).length > 0 && (
            <>
              {console.log(data)}
              {/* ///////////  Loads*/}

              {data?.loads > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon
                      color="white"
                      height={40}
                      icon="fa-solid:truck-loading"
                    />
                    <h2 class="text-4xl md:text-3xl  pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Loads
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.loads}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////   Emergency Loads*/}

              {data?.emergency > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon
                      color="white"
                      height={40}
                      icon="fa6-solid:truck-arrow-right"
                    />
                    <h2 class="text-2xl md:text-2xl  pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Emergency Loads
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.emergency}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////  Truck Sale */}

              {data?.truck > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon
                      color="white"
                      height={40}
                      icon="fa6-solid:truck-arrow-right"
                    />
                    <h2 class="text-4xl md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Truck Sale
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.truck}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////  Truck Parts Sale */}

              {data?.truckpart > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon
                      color="white"
                      height={40}
                      icon="fa6-solid:truck-arrow-right"
                    />
                    <h2 class="text-3xl md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Truck Parts Sale
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.truckpart}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////    Car Sale */}

              {data?.car > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="bxs:car" />
                    <h2 class="text-3xl md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Car Sale
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.car}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////    School Ride */}

              {data?.school > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="bxs:car" />
                    <h2 class="text-3xl md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      School Ride
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.school}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////    Oldage Ride */}
              {data?.oldage > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="bxs:car" />
                    <h2 class="text-3xl md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Oldage Ride
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.oldage}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////    Airport Ride */}

              {data?.airport > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="bxs:car" />
                    <h2 class="text-3xl md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Airport Ride
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.airport}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////   local Stores */}

              {data?.store > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="fa-solid:suitcase" />
                    <h2 class="text-3xl md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      local Stores
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.store}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////   local Workers */}
              {data?.worker > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="fa-solid:suitcase" />
                    <h2 class="text-3xl md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      local Workers
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.worker}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////   Home Rent */}
              {data?.house > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="ri:hotel-line" />
                    <h2 class="text-3xl md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Home Rent
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
                      {data?.house}
                    </div>
                  </div>
                </div>
              )}

              {/* ///////////  Room Rent */}

              {data?.room > 0 && (
                <div
                  class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400"
                  onClick={() => {
                    ///router.push('/)
                  }}
                >
                  <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
                    <Icon color="white" height={40} icon="ri:hotel-line" />
                    <h2 class="text-3xl md:text-3xl pt-3 mb-6 text-white font-extrabold title-font mb-4">
                      Room Rent
                    </h2>
                    <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">
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

DashboardList.defaultProps = {
  items: [
    {
      name: "Loads",
      icon: "fa-solid:truck-loading",
      href: "/my-listing",
      number: "4",
    },
    {
      name: "Emergency Loads",
      icon: "fa-solid:truck-loading",
      href: "/my-listing",
      number: "4",
    },
    {
      name: "Truck Sale",
      icon: "fa6-solid:truck-arrow-right",
      href: "/my-listing",
      number: "5",
    },
    {
      name: "Truck Parts Sale",
      icon: "fa6-solid:truck-arrow-right",
      href: "/my-listing",
      number: "5",
    },
    {
      name: "School Ride",
      icon: "bxs:car",
      href: "/my-listing",
      number: "6",
    },
    {
      name: "Oldage Ride",
      icon: "bxs:car",
      href: "/my-listing",
      number: "6",
    },
    {
      name: "Airport Ride",
      icon: "bxs:car",
      href: "/my-listing",
      number: "6",
    },
    {
      name: "local Stores",
      icon: "fa-solid:suitcase",
      href: "/my-listing",
      number: "7",
    },
    {
      name: "local Workers",
      icon: "fa-solid:suitcase",
      href: "/my-listing",
      number: "7",
    },
    {
      name: "Home Rent",
      icon: "ri:hotel-line",
      href: "/my-listing",
      number: "8",
    },
    {
      name: "Room Rent",
      icon: "ri:hotel-line",
      href: "/my-listing",
      number: "8",
    },
  ],
};

export default DashboardList;
