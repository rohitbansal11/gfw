import { UserRide } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserOldage } from "@store/UserListing/UserListingAction";

const RideOldAgePage = ({ loads }) => {
  const [rideOldage, setRideOldAge] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.listing);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(UserOldage());
  }, []);

  useEffect(() => {
    setRideOldAge(selector?.oldage);
    setLoading(selector?.loading);
  }, [selector]);

  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <UserRide type="oldage" loadsData={rideOldage} loadingData={loading} />
    </>
  );
};

RideOldAgePage.defaultProps = {};

export default RideOldAgePage;
