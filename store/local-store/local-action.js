import axios from "@utils/axios";
import {
  LOCALSTORE_REQUEST,
  LOCALSTORE_SUCCESS,
  LOCALSTORE_FAILURE,
  LOCALWORKERS_REQUEST,
  LOCALWORKERS_SUCCESS,
  LOCALWORKERS_FAILURE,
} from "./local-types";
import Swal from "sweetalert2";
export const LocalStoreListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: LOCALSTORE_REQUEST,
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
    console.log({ payload });
    const res = await axios.post("/localstore", payload, config);
    console.log({ data: res?.data.data });
    dispatch({
      type: LOCALSTORE_SUCCESS,
      payload: payload,
    });
    Swal.fire({
      title: "Local Store Add  Success",
      icon: "success",
      text: "Local Store Add  Success",
    });
    window.location.href = "/";
  } catch (error) {
    console.error({ error });
    dispatch({
      type: LOCALSTORE_FAILURE,
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

export const LocalWorkersListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: LOCALWORKERS_REQUEST,
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
    console.log({ payload });
    const res = await axios.post("/worker", payload, config);
    console.log({ data: res?.data.data });
    dispatch({
      type: LOCALWORKERS_SUCCESS,
      payload: payload,
    });
    Swal.fire({
      title: "Local Worker Add  Success",
      icon: "success",
      text: "Local Worker Add  Success",
    });
    window.location.href = "/";
  } catch (error) {
    console.error({ error });
    dispatch({
      type: LOCALWORKERS_FAILURE,
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

export const removeLocalStoreListing = () => {};

export const updateLocalStoreListing = () => {};

export const getAllLocalStoreListings = () => {};

export const removeLocalWorkersListing = () => {};

export const updateLocalWorkersListing = () => {};

export const getAllLocalWorkersListings = () => {};
