import { Rent } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "@store/AllDataMain/AllDataaction";

const RentRoomPage = ({ loads }) => {
  const [rentRoom, setRentRoom] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    dispatch(getRoom(selector?.location));
  }, []);

  useEffect(() => {
    setRentRoom(selector?.room);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <Rent isRooms={true} loadsData={loads} />
    </>
  );
};

RentRoomPage.defaultProps = {
  loads: [
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
    {
      name: "Rooms For Rent",
      date: "25-04-2022, 11:30 PM",
      price: 50000,
      state: "MASSACHUSETTS",
      city: "BOSTON",
      type: "Share Room",
      rooms: 3,
      img: "/images/home.jpg",
    },
  ],
};

export default RentRoomPage;
