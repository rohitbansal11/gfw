import React, { useEffect, useState } from "react";
import { Section, Container, PrimaryHeading } from "@components/Common";
import LoadCard from "./Cards/LoadCard";
import { ModalLoadSimple } from "@components/Common";
import { NoDataFound, CardLoading } from "@components/Common/index";
import { useSelector } from "react-redux";
const Loads = ({ loads, loadingData }) => {
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
        text="Loads"
        textCenter
      />
      <ModalLoadSimple />

      {loadingData && <CardLoading />}

      {loads?.length == 0 && !loadingData && <NoDataFound />}

      {loads?.length > 0 && !loadingData && (
        <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
          {loads.map((item) => (
            <LoadCard item={item} role={role} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Loads;
