import {
SELL_HOUSE_REQUEST,
SELL_HOUSE_SUCCESS,
SELL_HOUSE_FAILURE,
RENT_ROOMS_REQUEST,
RENT_ROOMS_SUCCESS,
RENT_ROOMS_FAILURE,

} from "./sell-or-rent-types"
const initialValue = {
  loading: false,
  sellhouselistings: [],
  rentroomslistings: [],
  error: [],
}

export const sell_or_rent_Reducer = (state = initialValue, action) => {
  const { type, payload } = action
  switch (type) {
    case SELL_HOUSE_REQUEST:
    case RENT_ROOMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SELL_HOUSE_SUCCESS:
      console.log({payload})
      return {
        ...state,
        loading: false,
        sellhouselistings: [...state.sellhouselistings, payload],
      }
          case RENT_ROOMS_SUCCESS:
      console.log({payload})
      return {
        ...state,
        loading: false,
        rentroomslistings: [...state.rentroomslistings, payload],
      }
    case SELL_HOUSE_FAILURE:
    case RENT_ROOMS_FAILURE:
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
