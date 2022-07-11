import { Job } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStore } from "@store/AllDataMain/AllDataaction";


const JobLocalStoresPage = ({ loads }) => {
  const [loaclStore, setLoaclStore] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);

  useEffect(() => {
    dispatch(getStore(selector?.location));
  }, []);

  useEffect(() => {
    setLoaclStore(selector?.store);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <Job isWorkers={false} loadsData={loads} />
    </>
  );
};

JobLocalStoresPage.defaultProps = {
  loads: [
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
    {
      position: "Guest Experience Lead",
      date: "26-04-2022, 11:35PM",
      name: "James",
      city: "Santa Clara, CA, USA",
    },
  ],
};

export default JobLocalStoresPage;
