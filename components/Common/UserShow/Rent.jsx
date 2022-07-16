import React, { useEffect } from "react";
import { Section, PrimaryHeading } from "@components/Common";
import LoadImgCard from "./Cards/LoadImgCard";
import { useState } from "react";
import Link from "next/link";
import RentCard from "./Cards/RentCard";
import HomeRent from "./Cards/HomeRent";
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
        text={isRooms ? " Room Rent Listing" : "Home Rent Listing"}
        textCenter
      />

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
                <HomeRent isRooms={isRooms} item={item} />
              ))}
            </div>
          )}
        </>
      )}
    </Section>
  );
};

export default TruckParts;
