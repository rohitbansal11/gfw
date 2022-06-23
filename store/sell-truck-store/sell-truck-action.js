import axios from "../../utils/axios"
import {
  SELL_TRUCK_FAILURE,
  SELL_TRUCK_REQUEST,
  SELL_TRUCK_SUCCESS,
} from "./sell-truck-types"

export const addSellTruckListing = (payload) => async (dispatch) => {
  dispatch({
    type: SELL_TRUCK_REQUEST,
  })
  // @todo: add data to database
  try {
    dispatch({
      type: SELL_TRUCK_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    dispatch({
      type: SELL_TRUCK_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}

export const removeSellTruckListing = () => {}

export const updateSellTruckListing = () => {}

export const getAllSellTruckListings = () => {}
