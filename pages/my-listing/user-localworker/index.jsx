import { UserJob } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserWorker } from "@store/UserListing/UserListingAction";

const JobLocalWorkerPage = () => {
  const [loaclWorker, setLoaclWorker] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.listing);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(UserWorker());
  }, []);

  useEffect(() => {
    setLoaclWorker(selector?.worker);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <UserJob type="worker" loadsData={loaclWorker} loadingData={loading} />
    </>
  );
};

JobLocalWorkerPage.defaultProps = {};

export default JobLocalWorkerPage;
