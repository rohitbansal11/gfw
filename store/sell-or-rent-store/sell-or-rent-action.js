import axios from "@utils/axios"
import {
  SELL_HOUSE_REQUEST,
  SELL_HOUSE_SUCCESS,
  SELL_HOUSE_FAILURE,
  RENT_ROOMS_REQUEST,
  RENT_ROOMS_SUCCESS,
  RENT_ROOMS_FAILURE,
} from "./sell-or-rent-types"

export const sellhouseListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: SELL_HOUSE_REQUEST,
  })
  try {
const token=localStorage.getItem("auth.token")
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
    console.log({ payload })
    const res = await axios.post("/homerent", payload, config)
    console.log({ data: res?.data })
    dispatch({
      type: SELL_HOUSE_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    console.error({ error })
    dispatch({
      type: SELL_HOUSE_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}
export const rentroomsListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: RENT_ROOMS_REQUEST,
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
    const res = await axios.post("/roomrent", payload, config)
    console.log({ data: res?.data })
    dispatch({
      type: RENT_ROOMS_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    console.error({ error })
    dispatch({
      type: RENT_ROOMS_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}

export const removeSellHouseListing = () => {}

export const updateSellHouseListing = () => {}

export const getAllSellHouseListings = () => {}

export const removeRentRoomsListing = () => {}

export const updateRentRoomsListing = () => {}

export const getAllRentRoomsListings = () => {}
