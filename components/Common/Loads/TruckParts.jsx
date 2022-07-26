import React, { useEffect } from "react";
import { Section, Container, PrimaryHeading } from "@components/Common";
import LoadImgCard from "./Cards/LoadImgCard";
import { useState } from "react";
import Link from "next/link";
import LoadImgPartCard from "./Cards/LoadImgPartCard";
import { ModalSimple } from "@components/Common";
import { NoDataFound, CardLoading } from "@components/Common/index";
import { useSelector } from "react-redux";
const TruckParts = ({ loadsData, isParts, type, loadingData }) => {
  const [loads, setLoads] = useState([]);
  const [role, setRole] = useState("");

  const selector = useSelector((pre) => pre?.alldata);
  useEffect(() => {
    setRole(selector.token.role);
  }, [selector]);
  useEffect(() => {
    setLoads(loadsData);
  }, [loadsData]);
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Truck/part Sale"
        textCenter
      />
      <ModalSimple />
      <div className="flex bg-indigo-200 justify-center py-2 mb-6">
        <div className="flex justify-center gap-4">
          <div className="border-r-2 border-indigo-400 pr-4">
            {isParts ? (
              <Link href="/trucks">
                <a>
                  <button className="bg-white rounded-md shadow-md text-indigo-700 py-2 px-6 text-xl font-medium">
                    Truck
                  </button>
                </a>
              </Link>
            ) : (
              <Link href="/trucks">
                <a>
                  <button className="bg-indigo-700 rounded-md shadow-md text-white py-2 px-6 text-xl font-medium ">
                    Truck
                  </button>
                </a>
              </Link>
            )}
          </div>
          <div>
            {isParts ? (
              <Link href="/truck-parts">
                <a>
                  <button className="bg-indigo-700 rounded-md shadow-md text-white py-2 px-6 text-xl font-medium ">
                    Parts
                  </button>
                </a>
              </Link>
            ) : (
              <Link href="/truck-parts">
                <a>
                  <button className="bg-white rounded-md shadow-md text-indigo-700 py-2 px-6 text-xl font-medium">
                    Parts
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
          {isParts ? (
            <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
              {loads.map((item) => (
                <LoadImgPartCard isParts={isParts} item={item} role={role} />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
              {loads.map((item) => (
                <LoadImgCard isParts={isParts} item={item} role={role} />
              ))}
            </div>
          )}
        </>
      )}
    </Section>
  );
};

export default TruckParts;
