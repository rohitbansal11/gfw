import { Loads } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Getloads } from "../../store/AllDataMain/AllDataaction";

const LoadsPage = () => {
  const [loadsData, setLoadData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    if (!selector?.loading) {
      dispatch(Getloads(selector?.location_loads));
    }
  }, [selector?.location_loads]);

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

export default LoadsPage;
