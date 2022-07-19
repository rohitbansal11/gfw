import { TruckParts } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTruck } from "@store/AllDataMain/AllDataaction";

const TruckPage = () => {
  const [truck, setTruck] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selector?.loading) {
      dispatch(getTruck(selector?.location));
    }
  }, [selector?.location]);

  useEffect(() => {
    setTruck(selector?.truck);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <TruckParts loadsData={truck} loadingData={loading} isParts={false} />
    </>
  );
};

TruckPage.defaultProps = {};

export default TruckPage;
