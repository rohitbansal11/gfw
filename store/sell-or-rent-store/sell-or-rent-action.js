import {
SELL_HOUSE_REQUEST,
SELL_HOUSE_SUCCESS,
SELL_HOUSE_FAILURE,
RENT_ROOMS_REQUEST,
RENT_ROOMS_SUCCESS,
RENT_ROOMS_FAILURE,

} from "./sell-or-rent-types"

export const sellhouseListing = (payload) => async (dispatch) => {
  dispatch({
    type: SELL_HOUSE_REQUEST,
  })
  try {
    dispatch({
      type: SELL_HOUSE_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    dispatch({
      type: SELL_HOUSE_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}
export const rentroomsListing = (payload) => async (dispatch) => {
  dispatch({
    type: RENT_ROOMS_REQUEST,
  })
  // @todo: add data to database
  try {
    dispatch({
      type: RENT_ROOMS_SUCCESS,
      payload: payload,
    })
  } catch (error) {
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
