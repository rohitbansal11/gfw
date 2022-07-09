import axios from "@utils/axios"
import {
  SELL_TRUCK_FAILURE,
  SELL_TRUCK_REQUEST,
  SELL_TRUCK_SUCCESS,
  SELL_TRUCK_PARTS_FAILURE,
  SELL_TRUCK_PARTS_REQUEST,
  SELL_TRUCK_PARTS_SUCCESS,
} from "./sell-truck-types"

export const addSellTruckListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: SELL_TRUCK_REQUEST,
  })
  try {
    const token = localStorage.getItem("token")
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    // console.log({ payload })
    const res = await axios.post("/truck", payload, config)
    console.log({ data: res.data.data })
    dispatch({
      type: SELL_TRUCK_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: SELL_TRUCK_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}
export const addSellTruckpartsListing =
  (payload) => async (dispatch, getState) => {
    dispatch({
      type: SELL_TRUCK_PARTS_REQUEST,
    })
    try {
      // const { user } = getState((state) => state)
      const token = localStorage.getItem("token")
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
      const res = await axios.post("/truckpart", payload, config)
      console.log({ data: res.data.data })
      dispatch({
        type: SELL_TRUCK_PARTS_SUCCESS,
        payload: payload,
      })
    } catch (error) {
      console.error({ error })
      dispatch({
        type: SELL_TRUCK_PARTS_FAILURE,
        payload: { error: error.message }, // error
      })
    }
  }

export const removeSellTruckListing = () => {}

export const updateSellTruckListing = () => {}

export const getAllSellTruckListings = () => {}
