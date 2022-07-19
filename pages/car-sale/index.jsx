import { CarSale } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarSale } from "@store/AllDataMain/AllDataaction";

const CarSalePage = () => {
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

export default CarSalePage;
