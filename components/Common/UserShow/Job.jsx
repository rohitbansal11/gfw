import React, { useEffect } from "react";
import { Section, PrimaryHeading } from "@components/Common";
import { useState } from "react";
import Link from "next/link";
import JobCard from "./Cards/JobCard";
import { ModalSimple } from "@components/Common";
import { NoDataFound, CardLoading } from "@components/Common/index";

const Job = ({ loadsData, isWorkers, loadingData }) => {
  const [loads, setLoads] = useState([]);

  useEffect(() => {
    setLoads(loadsData);
  }, [loadsData]);

  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text={isWorkers ? "Local Worker Listing" : "Local Store Listing"}
        textCenter
      />

      {loadingData && <CardLoading />}

      {loadsData?.length == 0 && !loadingData && <NoDataFound />}

      {loadsData?.length > 0 && !loadingData && (
        <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
          {loads.map((item) => (
            <JobCard isWorkers={isWorkers} item={item} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Job;
