import axios from "@utils/axios";
import {
  LOCALSTORE_REQUEST,
  LOCALSTORE_SUCCESS,
  LOCALSTORE_FAILURE,
  LOCALWORKERS_REQUEST,
  LOCALWORKERS_SUCCESS,
  LOCALWORKERS_FAILURE,
} from "./local-types";

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

    window.location.href = "/";
  } catch (error) {
    console.error({ error });
    dispatch({
      type: LOCALSTORE_FAILURE,
      payload: { error: error.message }, // error
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
    window.location.href = "/";
  } catch (error) {
    console.error({ error });
    dispatch({
      type: LOCALWORKERS_FAILURE,
      payload: { error: error.message }, // error
    });
  }
};

export const removeLocalStoreListing = () => {};

export const updateLocalStoreListing = () => {};

export const getAllLocalStoreListings = () => {};

export const removeLocalWorkersListing = () => {};

export const updateLocalWorkersListing = () => {};

export const getAllLocalWorkersListings = () => {};
