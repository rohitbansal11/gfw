import { UserLoads as UseLoadsCard } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserLoads } from "@store/UserListing/UserListingAction";

const LoadsPage = () => {
  const [loadsData, setLoadData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.listing);

  useEffect(() => {
    dispatch(UserLoads());
  }, []);

  useEffect(() => {
    setLoadData(selector?.loads);
    setLoading(selector?.loading);
  }, [selector]);

  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />

      <UseLoadsCard loads={loadsData} loadingData={loading} />
    </>
  );
};

LoadsPage.defaultProps = {};

export default LoadsPage;
