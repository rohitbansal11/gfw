import { Rent } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "@store/AllDataMain/AllDataaction";

const RentRoomPage = () => {
  const [rentRoom, setRentRoom] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selector?.loading) {
      dispatch(getRoom(selector?.location));
    }
  }, [selector?.location]);

  useEffect(() => {
    setRentRoom(selector?.room);
    setLoading(selector?.loading);
  }, [selector]);
  return (
    <>
      <Hero
        reverse
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <Rent isRooms={true} loadsData={rentRoom} loadingData={loading} />
    </>
  );
};

RentRoomPage.defaultProps = {};

export default RentRoomPage;
