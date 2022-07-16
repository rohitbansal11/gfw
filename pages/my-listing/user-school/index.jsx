import { UserRide } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSchool } from "@store/UserListing/UserListingAction";

const SchoolRidePage = () => {
  const [rideSchool, setRideSchool] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.listing);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(UserSchool());
  }, []);

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
      <UserRide type="school" loadsData={rideSchool} loadingData={loading} />
    </>
  );
};

SchoolRidePage.defaultProps = {};

export default SchoolRidePage;
