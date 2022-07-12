import React, { useEffect } from "react";
import { Section, PrimaryHeading } from "@components/Common";
import { useState } from "react";
import Link from "next/link";
import CarSaleCard from "./Cards/CarSaleCard";
import { NoDataFound, CardLoading } from "@components/Common/index";
import { ModalSimple } from "@components/Common";

const TruckParts = ({ loadsData, loadingData }) => {
  const [loads, setLoads] = useState([]);

  useEffect(() => {
    setLoads(loadsData);
  }, [loadsData]);
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Car Sale"
        textCenter
      />
      <ModalSimple />

      {loadingData && <CardLoading />}

      {loadsData?.length == 0 && !loadingData && <NoDataFound />}

      {loadsData?.length > 0 && !loadingData && (
        <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
          {loads.map((item) => (
            <CarSaleCard item={item} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default TruckParts;
