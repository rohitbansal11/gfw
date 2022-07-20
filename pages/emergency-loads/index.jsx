import {
  EmergencyLoads as EmergencyLoadsComponent,
  MobileApp,
} from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmergencyLoads } from "@store/AllDataMain/AllDataaction";
import Swal from "sweetalert2";

const EmergencyLoads = () => {
  const [emergencyLoads, setEmergencyLoads] = useState([]);
  const [data, setData] = useState([]);
  const [location, setlocation] = useState({
    lat: "",
    long: "",
  });
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getEmergencyLoads());
  }, []);

  useEffect(() => {
    setEmergencyLoads(selector?.emergency);
    setLoading(selector?.loading);
  }, [selector]);

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
              text: "Can Not See Emergency Loads WithOut Location",
            });
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    }
  }, []);

  const handleData = (pos) => {
    var crd = pos.coords;
    setlocation({
      ...location,
      lat: crd?.latitude,
      long: crd?.longitude,
    });
  };

  useEffect(() => {
    let mapGet = emergencyLoads?.map((q) => {
      let dist = distance(
        Number(location?.lat),
        Number(location?.long),
        Number(q?.location?.lat),
        Number(q?.location?.long)
      );
      if (Number(dist) < 100) {
        console.log(q);
        return q;
      }
    });
    setData(mapGet);
  }, [emergencyLoads, location]);

  const distance = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      return dist;
    }
  };
  const handleGeoError = (err) => {
    Swal.fire({
      title: "Error",
      icon: "error",
      text: "There is a Error to getting Your Loaction",
    });
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <EmergencyLoadsComponent loadsData={data} loadingData={loading} />
      <MobileApp />
    </>
  );
};

export default EmergencyLoads;
