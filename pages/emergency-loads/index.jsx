import {
  EmergencyLoads as EmergencyLoadsComponent,
  MobileApp,
} from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmergencyLoads } from "@store/AllDataMain/AllDataaction";

const EmergencyLoads = () => {
  const [emergencyLoads, setEmergencyLoads] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getEmergencyLoads());
  }, []);

  useEffect(() => {
    setEmergencyLoads(selector?.emergency);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <EmergencyLoadsComponent loadsData={[]} loadingData={loading} />
      <MobileApp />
    </>
  );
};

export default EmergencyLoads;
