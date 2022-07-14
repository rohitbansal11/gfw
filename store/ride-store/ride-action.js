import axios from "@utils/axios";
import {
  RIDE_SCHOOL_REQUEST,
  RIDE_SCHOOL_SUCCESS,
  RIDE_SCHOOL_FAILURE,
  RIDE_OLDAGE_REQUEST,
  RIDE_OLDAGE_SUCCESS,
  RIDE_OLDAGE_FAILURE,
  RIDE_AIRPORT_REQUEST,
  RIDE_AIRPORT_SUCCESS,
  RIDE_AIRPORT_FAILURE,
} from "./ride-types";

export const RideSchoolListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: RIDE_SCHOOL_REQUEST,
  });
  // @todo: add data to database
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    // console.log({ payload: payload })
    const res = await axios.post("/schoolride", payload, config);
    console.log({ data: res.data.data });
    dispatch({
      type: RIDE_SCHOOL_SUCCESS,
      payload: payload,
    });
    window.location.href = "/";
  } catch (error) {
    console.log({ error });
    dispatch({
      type: RIDE_SCHOOL_FAILURE,
      payload: { error: error.message }, // error
    });
  }
};
export const RideOldAgeListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: RIDE_OLDAGE_REQUEST,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const res = await axios.post("/oldageride", payload, config);
    console.log({ data: res?.data.data });
    dispatch({
      type: RIDE_OLDAGE_SUCCESS,
      payload: payload,
    });
    window.location.href = "/";
  } catch (error) {
    console.error({ error });
    dispatch({
      type: RIDE_OLDAGE_FAILURE,
      payload: { error: error.message }, // error
    });
  }
};
export const RideAirportListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: RIDE_AIRPORT_REQUEST,
  });
  // @todo: add data to database
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const res = await axios.post("/airportride", payload, config);
    console.log({ data: res?.data.data });
    dispatch({
      type: RIDE_AIRPORT_SUCCESS,
      payload: payload,
    });
    window.location.href = "/";
  } catch (error) {
    console.error({ error });
    dispatch({
      type: RIDE_AIRPORT_FAILURE,
      payload: { error: error.message }, // error
    });
  }
};

export const removeRideSchoolListing = () => {};

export const updateRideSchoolListing = () => {};

export const getAllRideSchoolListings = () => {};

export const removeOldAgeListing = () => {};

export const updateOldAgeListing = () => {};

export const getAllOldAgeListings = () => {};

export const removeAirportListing = () => {};

export const updateAirportListing = () => {};

export const getAllAirportListings = () => {};
