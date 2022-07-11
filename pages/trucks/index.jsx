import { TruckParts } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTruck } from "@store/AllDataMain/AllDataaction";


const TruckPage = ({ loads }) => {
  const [truck, setTruck] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    dispatch(getTruck(selector?.location));
  }, []);

  useEffect(() => {
    setTruck(selector?.truck);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <TruckParts loadsData={loads} />
    </>
  );
};

TruckPage.defaultProps = {
  loads: [
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      miles: 50000,
      make: "freightliner",
      model: "M2 106",
      year: 2011,
      img: "/images/truck.jpg",
    },
  ],
};

export default TruckPage;
