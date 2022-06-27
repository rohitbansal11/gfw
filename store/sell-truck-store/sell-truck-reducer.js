import {
  SELL_TRUCK_FAILURE,
  SELL_TRUCK_PARTS_FAILURE,
  SELL_TRUCK_PARTS_REQUEST,
  SELL_TRUCK_REQUEST,
  SELL_TRUCK_SUCCESS,
} from "./sell-truck-types"

const initialState = {
  loading: false,
  listings: [],
  error: [],
}

export const sellTruckReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SELL_TRUCK_REQUEST:
    case SELL_TRUCK_PARTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SELL_TRUCK_SUCCESS:
      return {
        ...state,
        loading: false,
        listings: [...state.listings, payload],
      }
    case SELL_TRUCK_FAILURE:
    case SELL_TRUCK_PARTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return {
        ...state,
      }
  }
}
