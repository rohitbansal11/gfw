import {
  EmergencyLoads as EmergencyLoadsComponent,
  MobileApp,
} from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmergencyLoads } from "@store/AllDataMain/AllDataaction";

const EmergencyLoads = () => {
  const [emergencyLoads, setEmergencyLoads] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getEmergencyLoads());
  }, []);

  useEffect(() => {
    setEmergencyLoads(selector?.emergency);
    console.log(selector?.emergency);
    setLoading(selector?.loading);
  }, [selector]);

  const handleEmrgenyLoadInput = () => {};

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(handleData);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              handleData,
              handleGeoError,
              options
            );
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
            Swal.fire({
              title: "Error",
              icon: "error",
              text: "Can Not Enter Emergency Loads WithOut Location",
            });
            setFormData({
              ...formData,
              emergency: false,
            });
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    }
  }, []);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <EmergencyLoadsComponent loadsData={[]} loadingData={loading} />
      <MobileApp />
    </>
  );
};

export default EmergencyLoads;
