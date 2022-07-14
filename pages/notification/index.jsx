import { Aside, BecomeMemberCard } from "@components/Common";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetNotification,
  UpdateNotificationStatus,
  UpdateNotificationStatusAll,
} from "@store/AllDataMain/AllDataaction";

const index = () => {
  const selector = useSelector((pre) => pre?.alldata);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(GetNotification());
  }, []);
  useEffect(() => {
    setData(selector?.notification);
    setLoading(selector?.loading);
    console.log(selector?.notification);
  }, [selector]);
  return (
    <>
      <div className="bg-indigo-50 py-8 w-[100%] flex flex-row">
        <div className="flex w-[20%]">
          <Aside />
        </div>
        <div className="flex flex-col mt-14 w-[80%] ">
          <h1 className="font-black text-3xl text-blue-800 text-center">
            Notification
          </h1>

          <div className="flex flex-col justify-center">
            {/* ///////// */}
            {loading && (
              <div className="max-w-7xl mx-auto pt-5">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                      ></path>
                    </svg>
                    <div className="space-y-2 animate-pulse">
                      <div className="w-96 bg-gray-300 h-7 mt-4"></div>
                      <div className="w-96 bg-gray-300 h-7 mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!loading && data.length == 0 && (
              <div className="max-w-7xl mx-auto pt-5">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                      ></path>
                    </svg>
                    <div className="space-y-2 w-96">
                      <p className="text-slate-800">No Notification</p>
                      <a
                        href="#"
                        className="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                      >
                        No Notification
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!loading && data.length > 0 && (
              <>
                <div className="flex flex-row  max-w-7xl mx-auto pt-5  ">
                  <div
                    className=" cursor-pointer ml-96 flex font-semibold text-indigo-700 hover:text-zinc-100 hover:bg-indigo-700 rounded-lg border-[3px] border-indigo-700 sm:w-[160px] justify-center h-[40px] items-center transition ease-in-out"
                    onClick={() => {
                      dispatch(UpdateNotificationStatusAll());
                    }}
                  >
                    Mark All As Read
                  </div>
                </div>
                {data?.map((w) => {
                  let status = null;
                  if (w.status) {
                    status =
                      "relative px-7 py-6  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 bg-white";
                  } else {
                    status =
                      "relative px-7 py-6  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 bg-slate-200";
                  }
                  return (
                    <div className="max-w-7xl mx-auto pt-5">
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className={status}>
                          <svg
                            className="w-8 h-8 text-purple-600"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                            ></path>
                          </svg>
                          <div className="space-y-2 w-96">
                            <p className="text-slate-800">{w.notification}</p>
                            {w.status && (
                              <a
                                href="#"
                                className="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                                onClick={() => {
                                  dispatch(UpdateNotificationStatus(w._id));
                                }}
                              >
                                Mark As Read
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* ?/////////// */}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
