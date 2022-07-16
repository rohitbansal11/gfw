import { UserRent } from "@components/Common";
import Hero from "@components/Common/Home/Hero";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserRoom } from "@store/UserListing/UserListingAction";

const RentRoomPage = ({ loads }) => {
  const [rentRoom, setRentRoom] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.listing);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(UserRoom());
  }, []);

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
      <UserRent isRooms={true} loadsData={rentRoom} loadingData={loading} />
    </>
  );
};

RentRoomPage.defaultProps = {};

export default RentRoomPage;
