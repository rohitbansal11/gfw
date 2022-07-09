import axios from "@utils/axios";
import { LOADS_DATA, LOADING, CHECKTOKEN } from "./AllDatatypes";

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

export const LogoutAction = () => (dispatch) => {
  dispatch({
    type: CHECKTOKEN,
    payload: {},
  });
  localStorage.removeItem("token");
};
