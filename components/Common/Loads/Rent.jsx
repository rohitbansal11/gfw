import React, { useEffect } from "react";
import { Section, PrimaryHeading } from "@components/Common";
import LoadImgCard from "./Cards/LoadImgCard";
import { useState } from "react";
import Link from "next/link";
import RentCard from "./Cards/RentCard";
import { ModalSimple } from "@components/Common";
import { NoDataFound, CardLoading } from "@components/Common/index";

const TruckParts = ({ loadsData, loadingData, isRooms }) => {
  const [loads, setLoads] = useState([]);

  useEffect(() => {
    setLoads(loadsData);
  }, [loadsData]);
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Rent"
        textCenter
      />
      <ModalSimple />
      <div className="flex border-t-2 border-gray-400 pt-4 justify-center py-2 mb-6">
        <div className="flex justify-center gap-4">
          <div className="border-r-2 border-indigo-700 pr-4">
            {isRooms ? (
              <Link href="/rent-home">
                <a>
                  <button className="bg-white rounded-md shadow-md text-indigo-700 py-2 px-6 text-xl font-medium border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white">
                    Home
                  </button>
                </a>
              </Link>
            ) : (
              <Link href="/rent-home">
                <a>
                  <button className="bg-indigo-700 rounded-md shadow-md text-white py-2 px-6 text-xl font-medium border-2 border-indigo-700">
                    Home
                  </button>
                </a>
              </Link>
            )}
          </div>
          <div>
            {isRooms ? (
              <Link href="/rent-room">
                <a>
                  <button className="bg-indigo-700 border-2 border-indigo-700 rounded-md shadow-md text-white py-2 px-6 text-xl font-medium ">
                    Room
                  </button>
                </a>
              </Link>
            ) : (
              <Link href="/rent-room">
                <a>
                  <button className="bg-white rounded-md shadow-md text-indigo-700 py-2 px-6 text-xl font-medium border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white">
                    Room
                  </button>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>

      {loadingData && <CardLoading />}

      {loadsData?.length == 0 && !loadingData && <NoDataFound />}
      {loadsData?.length > 0 && !loadingData && (
        <>
          {isRooms ? (
            <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
              {loads.map((item) => (
                <RentCard isRooms={isRooms} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
              {loads.map((item) => (
                <RentCard isRooms={isRooms} item={item} />
              ))}
            </div>
          )}
        </>
      )}
    </Section>
  );
};

export default TruckParts;
