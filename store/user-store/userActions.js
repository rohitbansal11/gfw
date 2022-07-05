import axios from "../../utils/axios"
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  NAV_HIDE,
} from "./userTypes"

const config = {
  headers: {
    "Content-Type": "application/json",
  },
}

export const loginUser = (payload) => async (dispatch, getState) => {
  console.log("login user")
  const obj = {
    email: "nihalsub@gmail.com",
    password: "12345678",
  }
  dispatch({
    type: USER_LOGIN_REQUEST,
  })
  try {
    const res = await axios.post("/auth/login", obj, config)
    console.log(res.data.token)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data.token,
    })
  } catch (err) {
    console.error({ err })
    dispatch({
      type: USER_LOGIN_FAILED,
      payload: err.message,
    })
  }
}

export const Navhide = (data) => async (dispatch) => {
  
  dispatch({ type: NAV_HIDE, payload: data });
};