import React, { useEffect } from "react";
import { Section, PrimaryHeading } from "@components/Common";
import LoadImgCard from "./Cards/LoadImgCard";
import { useState } from "react";
import Link from "next/link";
import RentCard from "./Cards/RentCard";
import RideCard from "./Cards/RideCard";
import { ModalSimple } from "@components/Common";
import { NoDataFound, CardLoading } from "@components/Common/index";

const Ride = ({ loadsData, type, loadingData }) => {
  const [loads, setLoads] = useState([]);

  useEffect(() => {
    setLoads(loadsData);
  }, [loadsData]);
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text={
          type == "airport"
            ? "Airport Ride Listing"
            : type == "oldage"
            ? "OldAge Ride Listing"
            : "School Ride Listing"
        }
        textCenter
      />

      {loadingData && <CardLoading />}

      {loadsData?.length == 0 && !loadingData && <NoDataFound />}

      {loadsData?.length > 0 && !loadingData && (
        <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
          {loads.map((item) => (
            <RideCard type={type} item={item} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Ride;
