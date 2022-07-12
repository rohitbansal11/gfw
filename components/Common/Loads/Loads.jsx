import React from "react";
import { Section, Container, PrimaryHeading } from "@components/Common";
import LoadCard from "./Cards/LoadCard";
import { ModalLoadSimple } from "@components/Common";
import { NoDataFound, CardLoading } from "@components/Common/index";

const Loads = ({ loads, loadingData }) => {
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Loads"
        textCenter
      />
      <ModalLoadSimple />

      {loadingData && <CardLoading />}

      {loads?.length == 0 && !loadingData && <NoDataFound />}

      {loads?.length > 0 && !loadingData && (
        <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
          {loads.map((item) => (
            <LoadCard item={item} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Loads;
