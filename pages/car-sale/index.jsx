import { CarSale } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarSale } from "@store/AllDataMain/AllDataaction";

const CarSalePage = ({ loads }) => {
  const [carSale, setCarSale] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    if (!selector?.loading) {
      dispatch(getCarSale(selector?.location));
    }
  }, [selector?.location]);

  useEffect(() => {
    setCarSale(selector?.carsale);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <CarSale loadsData={carSale} loadingData={loading} />
    </>
  );
};

CarSalePage.defaultProps = {
  loads: [
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
    {
      name: "2018 BMW X1 XDrive28i",
      date: "25-04-2022, 11:30 PM",
      miles: 26,
      make: "BMW",
      model: "DD15",
      year: 2018,
      price: 32998,
      img: "/images/car.jpg",
    },
  ],
};

export default CarSalePage;
