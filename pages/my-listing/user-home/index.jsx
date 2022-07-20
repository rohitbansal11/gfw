import { UserRent } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Userhome } from "@store/UserListing/UserListingAction";

const RentPage = () => {
  const [rentHome, setRentHome] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.listing);

  useEffect(() => {
    dispatch(Userhome());
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
      <UserRent loadsData={rentHome} loadingData={loading} type="home" />
    </>
  );
};

RentPage.defaultProps = {};

export default RentPage;
