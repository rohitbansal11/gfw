import axios from "@utils/axios"
import { CAR_REQUEST, CAR_SUCCESS, CAR_FAILURE } from "./car.types"

export const carListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: CAR_REQUEST,
  })
  try {
    const token = localStorage.getItem("token")
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    console.log({ payload })
    const res = await axios.post("/car", payload, config)
    console.log({ data: res?.data.data })
    dispatch({
      type: CAR_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    console.error({ error })
    dispatch({
      type: CAR_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}

export const removecarListing = () => {}

export const updatecarListing = () => {}

export const getAllcarListings = () => {}
