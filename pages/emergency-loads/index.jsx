import {
  EmergencyLoads as EmergencyLoadsComponent,
  MobileApp,
} from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmergencyLoads } from "@store/AllDataMain/AllDataaction";

const EmergencyLoads = ({ loads }) => {
  const [emergencyLoads, setEmergencyLoads] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    dispatch(getEmergencyLoads());
  }, []);

  useEffect(() => {
    setEmergencyLoads(selector?.emergency);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <EmergencyLoadsComponent loads={loads} />
      <MobileApp />
    </>
  );
};

EmergencyLoads.defaultProps = {
  loads: [
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
    {
      from: "3375 Homested Rd. Santa Cava",
      to: "Downtown San Jose",
      date: "25-04-2022, 11:35 PM",
      weight: "4.0 Tonnes(s)LCV",
      type: "Refrigerated",
    },
  ],
};

export default EmergencyLoads;
