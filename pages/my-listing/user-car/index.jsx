import { UserCarSale } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Usercarsale } from "@store/UserListing/UserListingAction";

const CarSalePage = () => {
  const [carSale, setCarSale] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.listing);

  useEffect(() => {
    dispatch(Usercarsale());
  }, []);

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
      <UserCarSale loadsData={carSale} loadingData={loading} />
    </>
  );
};

export default CarSalePage;
