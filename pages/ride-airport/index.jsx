import { Ride } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAirport } from "@store/AllDataMain/AllDataaction";

const RideAirportPage = ({ loads }) => {
  const [rideAirport, setRideAirport] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selector?.loading) {
      dispatch(getAirport(selector?.location));
    }
  }, [selector?.location]);

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
      <Ride type="airport" loadsData={rideAirport} loadingData={loading} />
    </>
  );
};

RideAirportPage.defaultProps = {
  loads: [
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
    {
      from: "Los Angeles International Airport",
      to: "Historic South Central, Los Angeles",
      state: "California V",
      city: "Los Angeles",
    },
  ],
};

export default RideAirportPage;
