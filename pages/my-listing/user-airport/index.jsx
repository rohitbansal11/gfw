import { UserRide } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAirport } from "@store/UserListing/UserListingAction";

const RideAirportPage = () => {
  const [rideAirport, setRideAirport] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.listing);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(UserAirport());
  }, [selector?.airport]);

  useEffect(() => {
    setRideAirport(selector?.airport);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <UserRide type="airport" loadsData={rideAirport} loadingData={loading} />
    </>
  );
};

RideAirportPage.defaultProps = {};

export default RideAirportPage;
