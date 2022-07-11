import { Ride } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOldage } from "@store/AllDataMain/AllDataaction";

const RideOldAgePage = ({ loads }) => {
  const [rideOldage, setRideOldAge] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    dispatch(getOldage(selector?.location));
  }, []);

  useEffect(() => {
    setRideOldAge(selector?.oldage);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <Ride type="oldage" loadsData={loads} />
    </>
  );
};

RideOldAgePage.defaultProps = {
  loads: [
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "South Pasadena",
      to: "Village Green Apartments, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
  ],
};

export default RideOldAgePage;
