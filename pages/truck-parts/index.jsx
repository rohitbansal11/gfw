import { TruckParts } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTruckPart } from "@store/AllDataMain/AllDataaction";

const TruckPartsPage = () => {
  const [truckPart, setTruckPart] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selector?.loading) {
      dispatch(getTruckPart(selector?.location));
    }
  }, [selector?.location]);

  useEffect(() => {
    setTruckPart(selector?.truckpart);
    setLoading(selector?.loading);
    // console.log("vv",selector?.truckpart)
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <TruckParts isParts={true} loadsData={truckPart} loadingData={loading} />
    </>
  );
};

TruckPartsPage.defaultProps = {};

export default TruckPartsPage;
