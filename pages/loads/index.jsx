import { Loads } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Getloads } from "../../store/AllDataMain/AllDataaction";

const LoadsPage = ({ loads }) => {
  const [loadsData, setLoadData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    dispatch(Getloads(selector?.location_loads));
  }, []);

  useEffect(() => {
    setLoadData(selector?.loads);
    setLoading(selector?.loading);
  }, [selector]);

  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />

      <Loads loads={loadsData} loadingData={loading} />
    </>
  );
};

LoadsPage.defaultProps = {
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

export default LoadsPage;
