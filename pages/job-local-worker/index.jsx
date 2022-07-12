import { Job } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorker } from "@store/AllDataMain/AllDataaction";

const JobLocalWorkerPage = ({ loads }) => {
  const [loaclWorker, setLoaclWorker] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getWorker(selector?.location));
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
      <Job isWorkers={true} loadsData={loaclWorker} loadingData={loading} />
    </>
  );
};

JobLocalWorkerPage.defaultProps = {
  loads: [
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Delivery Driver",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
  ],
};

export default JobLocalWorkerPage;
