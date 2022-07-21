import axios from "../../utils/axios";
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  NAV_HIDE,
  LOGOUT,
} from "./userTypes";
import Swal from "sweetalert2";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const loginUser = (payload) => async (dispatch, getState) => {};

export const LogInuser = (payload) => async (dispatch, getState) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });
  try {
    const res = await axios.post("/auth/login", payload, config);
    if (res.data.token) {
      localStorage.setItem(`token`, `Bearer ${res.data.token}`);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data.token,
      });
      Swal.fire({
        title: "Log In Success",
        icon: "success",
        text: "Log In Success",
      });
      window.location.href = "/";
    }
  } catch (err) {
    console.error(err?.response?.data?.massage);

    dispatch({
      type: USER_LOGIN_FAILED,
      payload: err.message,
    });

    Swal.fire({
      title: "Error",
      icon: "error",
      text: err?.response?.data?.massage,
    });
  }
};

export const signUpUser = (payload) => async (dispatch, getState) => {
  try {
    console.log(payload);
    const res = await axios.post("/auth/register", payload, config);
    console.log(res);
    if (res?.data?.success) {
      Swal.fire({
        title: "Register Success",
        icon: "success",
        text: "Register Success",
      }).then((result) => {
        window.location.href = "/login";
      });
    }
  } catch (err) {
    console.error(err.response?.data?.massage);

    if (err.response?.data?.massage) {
      Swal.fire({
        title: "Error!",
        icon: "success",
        text: err.response?.data?.massage,
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Error!",
        icon: "success",
        html: err.response?.data,
        icon: "error",
      });
    }
  }
};

export const Navhide = (data) => async (dispatch) => {
  dispatch({ type: NAV_HIDE, payload: data });
};

export const LogoutActionUsre = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
