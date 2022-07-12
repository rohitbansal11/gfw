import { TruckParts } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTruckPart } from "@store/AllDataMain/AllDataaction";

const TruckPartsPage = ({ loads }) => {
  const [truckPart, setTruckPart] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getTruckPart(selector?.location));
  }, []);

  useEffect(() => {
    setTruckPart(selector?.truckpart);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <TruckParts isParts={true} loadsData={truckPart} loadingData={loading} />
    </>
  );
};

TruckPartsPage.defaultProps = {
  loads: [
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
    {
      name: "2011 FREIGHTLINER M2 106",
      date: "25-04-2022, 11:30 PM",
      part: "Engine Assys",
      make: "western star",
      model: "DD15",
      year: 2011,
      price: 200000,
      img: "/images/truck-parts.jpg",
    },
  ],
};

export default TruckPartsPage;
