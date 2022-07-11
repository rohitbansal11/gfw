import axios from "@utils/axios";
import {
  LOADS_DATA,
  LOADING,
  CHECKTOKEN,
  SAVELOCATION,
  SAVELOCATIONLOADS,
  LOGOUT,
} from "./AllDatatypes";

export const Getloads = () => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
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
    console.log(config);

    const res = await axios.get("/loads", config);
    console.log(res);
  } catch (error) {
    console.error({ error });
    dispatch({
      type: LOADING,
    });
  }
};

export const CheckTokenOne = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    const res = await axios.get("/auth/me", config);
    dispatch({
      type: CHECKTOKEN,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.error(error?.response?.data?.massage);
    dispatch({
      type: CHECKTOKEN,
      payload: {},
    });
  }
};
export const CheckTokenTwo = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    const res = await axios.get("/auth/me", config);
    dispatch({
      type: CHECKTOKEN,
      payload: res?.data?.data,
    });

    window.location.href = "/";
  } catch (error) {
    console.error(error?.response?.data?.massage);
    dispatch({
      type: CHECKTOKEN,
      payload: {},
    });
  }
};

export const LogoutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("token");
  window.location.href = "/";
};

export const SaveModalData = (data) => (dispatch) => {
  dispatch({
    type: SAVELOCATION,
    payload: data,
  });
};
export const SaveModalDataLoads = (data) => (dispatch) => {
  dispatch({
    type: SAVELOCATIONLOADS,
    payload: data,
  });
};
