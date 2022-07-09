import axios from "@utils/axios"
import {
    LOAD_REQUEST,
    LOAD_SUCCESS,
    LOAD_FAILURE,
} from "./load-types"

export const LoadListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: LOAD_REQUEST,
  })
  // @todo: add data to database
  const token = localStorage.getItem("token")
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  }
  try {
    console.log({payload})
    const res = await axios.post("/loads", payload, config)
    console.log({ data: res?.data.data })
    dispatch({
      type: LOAD_SUCCESS,
      payload: res
      ,
    })
  } catch (error) {
    console.error({ error })
    dispatch({
      type: LOAD_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}


export const removeLoadListing = () => {}

export const updateLocalLoadListing = () => {}

export const getAllLocalLoadListings = () => {}
