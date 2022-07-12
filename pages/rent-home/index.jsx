import { Rent } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "@store/AllDataMain/AllDataaction";

const RentPage = ({ loads }) => {
  const [rentHome, setRentHome] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    dispatch(getHome(selector?.location));
  }, []);

  useEffect(() => {
    setRentHome(selector?.home);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <Rent loadsData={rentHome} loadingData={loading} isRooms={false} />
    </>
  );
};

RentPage.defaultProps = {
  loads: [
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "3Bhk RENTAL IN BOSTON",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Houses & Villas",
      rooms: 3,
      img: "/images/home.jpg",
    },
  ],
};

export default RentPage;
