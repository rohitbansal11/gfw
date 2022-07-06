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
  try {
    const { user } = getState((state) => state)
    const token = user?.token
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
    console.log({ payload})
    const res = await axios.post("/load", payload, config)
    console.log({ data: res?.data })
    dispatch({
      type: LOAD_SUCCESS,
      payload: payload,
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
