import{
    CAR_REQUEST,
    CAR_SUCCESS,
    CAR_FAILURE,
} from "./car.types"

export const carListing = (payload) => async (dispatch) => {
  dispatch({
    type: CAR_REQUEST,
  })
  try {
    dispatch({
      type: CAR_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    dispatch({
      type: CAR_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}

export const removecarListing = () => {}

export const updatecarListing = () => {}

export const getAllcarListings = () => {}


