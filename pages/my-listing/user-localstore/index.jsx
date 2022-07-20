import { UserJob } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserStore } from "@store/UserListing/UserListingAction";

const JobLocalStoresPage = () => {
  const [loaclStore, setLoaclStore] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(UserStore());
  }, []);

  useEffect(() => {
    setLoaclStore(selector?.store);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <UserJob type="store" loadsData={loaclStore} loadingData={loading} />
    </>
  );
};

JobLocalStoresPage.defaultProps = {};

export default JobLocalStoresPage;
