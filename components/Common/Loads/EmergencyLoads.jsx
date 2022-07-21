import React, { useEffect, useState } from "react";
import { Section, Container, PrimaryHeading } from "@components/Common";
import EmergencyCard from "./Cards/EmergencyCard";
import { NoDataFound, CardLoading } from "@components/Common/index";
import { useSelector } from "react-redux";
const EmergencyLoads = ({ loadsData, loadingData }) => {
  const [role, setRole] = useState("");

  const selector = useSelector((pre) => pre?.alldata);
  useEffect(() => {
    setRole(selector.token.role);
  }, [selector]);
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Emergency, Loads"
        textCenter
      />

      {loadingData && <CardLoading />}

      {loadsData?.length == 0 && !loadingData && <NoDataFound />}
      {loadsData?.length > 0 && !loadingData && (
        <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
          {loadsData.map((item) => (
            <EmergencyCard item={item} role={role} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default EmergencyLoads;
