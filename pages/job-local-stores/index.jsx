import { Job } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStore } from "@store/AllDataMain/AllDataaction";

const JobLocalStoresPage = ({ loads }) => {
  const [loaclStore, setLoaclStore] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selector?.loading) {
      dispatch(getStore(selector?.location));
    }
  }, [selector?.location]);

  useEffect(() => {
    setLoaclStore(selector?.store);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      {console.log(loaclStore?.length)}
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <Job isWorkers={false} loadsData={loaclStore} loadingData={loading} />
    </>
  );
};

JobLocalStoresPage.defaultProps = {};

export default JobLocalStoresPage;
