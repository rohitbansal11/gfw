import {
  UserEmergencyLoads as UserEmergencyLoadsComponent,
  MobileApp,
} from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserEmergencyLoads } from "@store/UserListing/UserListingAction";

const EmergencyLoads = () => {
  const [emergencyLoads, setEmergencyLoads] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.listing);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(UserEmergencyLoads());
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
      <UserEmergencyLoadsComponent
        loadsData={emergencyLoads}
        loadingData={loading}
      />
      <MobileApp />
    </>
  );
};

EmergencyLoads.defaultProps = {};

export default EmergencyLoads;
