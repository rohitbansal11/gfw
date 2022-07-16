import React from "react";
import { Section, Container, PrimaryHeading } from "@components/Common";
import EmergencyCard from "./Cards/EmergencyCard";
import { NoDataFound, CardLoading } from "@components/Common/index";

const EmergencyLoads = ({ loadsData, loadingData }) => {
  console.log(loadsData);
  console.log(loadingData);
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Emergency Loads Listing"
        textCenter
      />

      {loadingData && <CardLoading />}

      {loadsData?.length == 0 && !loadingData && <NoDataFound />}
      {loadsData?.length > 0 && !loadingData && (
        <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
          {loadsData.map((item) => (
            <EmergencyCard item={item} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default EmergencyLoads;
