import axios from "@utils/axios";
import {
  SELL_HOUSE_REQUEST,
  SELL_HOUSE_SUCCESS,
  SELL_HOUSE_FAILURE,
  RENT_ROOMS_REQUEST,
  RENT_ROOMS_SUCCESS,
  RENT_ROOMS_FAILURE,
} from "./sell-or-rent-types";
import Swal from "sweetalert2";

export const sellhouseListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: SELL_HOUSE_REQUEST,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    // console.log({ payload })
    const res = await axios.post("/homerent", payload, config);
    console.log({ data: res?.data.data });
    dispatch({
      type: SELL_HOUSE_SUCCESS,
      payload: payload,
    });
    Swal.fire({
      title: "House For Sale Add  Success",
      icon: "success",
      text: "House For Sale  Add  Success",
    });
    window.location.href = "/";
  } catch (error) {
    console.error({ error });
    dispatch({
      type: SELL_HOUSE_FAILURE,
      payload: { error: error.message }, // error
    });
    Swal.fire({
      title: "Error!",
      icon: "success",
      text:
        error.response?.data?.error?.message || error.response?.data?.message,
      icon: "error",
    });
  }
};
export const rentroomsListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: RENT_ROOMS_REQUEST,
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
    const res = await axios.post("/roomrent", payload, config);
    console.log({ data: res?.data.data });
    dispatch({
      type: RENT_ROOMS_SUCCESS,
      payload: payload,
    });
    Swal.fire({
      title: "Room Add  Success",
      icon: "success",
      text: "Room  Add  Success",
    });
    window.location.href = "/";
  } catch (error) {
    console.error({ error });
    dispatch({
      type: RENT_ROOMS_FAILURE,
      payload: { error: error.message }, // error
    });
    Swal.fire({
      title: "Error!",
      icon: "success",
      text:
        error.response?.data?.error?.message || error.response?.data?.message,
      icon: "error",
    });
  }
};

export const removeSellHouseListing = () => {};

export const updateSellHouseListing = () => {};

export const getAllSellHouseListings = () => {};

export const removeRentRoomsListing = () => {};

export const updateRentRoomsListing = () => {};

export const getAllRentRoomsListings = () => {};
