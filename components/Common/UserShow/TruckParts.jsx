import React, { useEffect } from "react";
import { Section, Container, PrimaryHeading } from "@components/Common";
import LoadImgCard from "./Cards/LoadImgCard";
import { useState } from "react";
import Link from "next/link";
import LoadImgPartCard from "./Cards/LoadImgPartCard";
import { ModalSimple } from "@components/Common";
import { NoDataFound, CardLoading } from "@components/Common/index";

const TruckParts = ({ loadsData, isParts, loadingData }) => {
  const [loads, setLoads] = useState([]);

  useEffect(() => {
    setLoads(loadsData);
  }, [loadsData]);
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text={isParts ? " Truck Part Listing" : " Truck Part Listing"}
        textCenter
      />

      {loadingData && <CardLoading />}

      {loadsData?.length == 0 && !loadingData && <NoDataFound />}

      {loadsData?.length > 0 && !loadingData && (
        <>
          {isParts ? (
            <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
              {loads.map((item) => (
                <LoadImgPartCard isParts={isParts} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
              {loads.map((item) => (
                <LoadImgCard isParts={isParts} item={item} />
              ))}
            </div>
          )}
        </>
      )}
    </Section>
  );
};

export default TruckParts;
