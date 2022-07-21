import axios from "@utils/axios";
import { CAR_REQUEST, CAR_SUCCESS, CAR_FAILURE } from "./car.types";
import Swal from "sweetalert2";
export const carListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: CAR_REQUEST,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    console.log({ payload });
    const res = await axios.post("/car", payload, config);
    console.log({ data: res?.data.data });
    dispatch({
      type: CAR_SUCCESS,
      payload: payload,
    });
    Swal.fire({
      title: "Car Add  Success",
      icon: "success",
      text: "Car Add  Success",
    });
    window.location.href = "/";
  } catch (error) {
    console.error({ error });
    dispatch({
      type: CAR_FAILURE,
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

export const removecarListing = () => {};

export const updatecarListing = () => {};

export const getAllcarListings = () => {};
