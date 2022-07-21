import { UserTruck } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Usertruckpart } from "@store/UserListing/UserListingAction";

const TruckPage = () => {
  const [truck, setTruck] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.listing);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(Usertruckpart());
  }, []);

  useEffect(() => {
    setTruck(selector?.truckpart);

    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <UserTruck loadsData={truck} loadingData={loading} isParts={true} />
    </>
  );
};

TruckPage.defaultProps = {};

export default TruckPage;
