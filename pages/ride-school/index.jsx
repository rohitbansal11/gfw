import { Ride } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchool } from "@store/AllDataMain/AllDataaction";

const SchoolRidePage = () => {
  const [rideSchool, setRideSchool] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selector?.loading) {
      dispatch(getSchool(selector?.location));
    }
  }, [selector?.location]);

  useEffect(() => {
    setRideSchool(selector?.school);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <Ride type="school" loadsData={rideSchool} loadingData={loading} />
    </>
  );
};

SchoolRidePage.defaultProps = {};

export default SchoolRidePage;
