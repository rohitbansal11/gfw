import { Ride } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchool } from "@store/AllDataMain/AllDataaction";

const SchoolRidePage = ({ loads }) => {
  const [rideSchool, setRideSchool] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    dispatch(getSchool(selector?.location));
  }, []);

  useEffect(() => {
    setRideSchool(selector?.school);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <Ride type="school" loadsData={loads} />
    </>
  );
};

SchoolRidePage.defaultProps = {
  loads: [
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
    {
      from: "3375 Homestead Rd.",
      to: "Santa Clara High School",
      state: "California V",
      city: "Santa Clara",
    },
  ],
};

export default SchoolRidePage;
