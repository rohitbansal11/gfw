import { Job } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorker } from "@store/AllDataMain/AllDataaction";

const JobLocalWorkerPage = () => {
  const [loaclWorker, setLoaclWorker] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selector?.loading) {
      dispatch(getWorker(selector?.location));
    }
  }, [selector?.location]);

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
      <Job isWorkers={true} loadsData={loaclWorker} loadingData={loading} />
    </>
  );
};

export default JobLocalWorkerPage;
