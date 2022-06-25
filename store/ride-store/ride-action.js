import{
    RIDE_SCHOOL_REQUEST,
    RIDE_SCHOOL_SUCCESS,
    RIDE_SCHOOL_FAILURE,

    RIDE_OLDAGE_REQUEST,
    RIDE_OLDAGE_SUCCESS,
    RIDE_OLDAGE_FAILURE,
    
    RIDE_AIRPORT_REQUEST,
    RIDE_AIRPORT_SUCCESS,
    RIDE_AIRPORT_FAILURE
} from "./ride-types"

export const RideSchoolListing = (payload) => async (dispatch) => {
  dispatch({
    type: RIDE_SCHOOL_REQUEST,
  })
  // @todo: add data to database
  try {
    dispatch({
      type: RIDE_SCHOOL_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    dispatch({
      type: RIDE_SCHOOL_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}
export const RideOldAgeListing = (payload) => async (dispatch) => {
  dispatch({
    type: RIDE_OLDAGE_REQUEST,
  })
  try {
    dispatch({
      type: RIDE_OLDAGE_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    dispatch({
      type: RIDE_OLDAGE_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}
export const RideAirportListing = (payload) => async (dispatch) => {
  dispatch({
    type: RIDE_AIRPORT_REQUEST,
  })
  // @todo: add data to database
  try {
    dispatch({
      type: RIDE_AIRPORT_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    dispatch({
      type: RIDE_AIRPORT_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}

export const removeRideSchoolListing = () => {}

export const updateRideSchoolListing = () => {}

export const getAllRideSchoolListings = () => {}

export const removeOldAgeListing = () => {}

export const updateOldAgeListing = () => {}

export const getAllOldAgeListings = () => {}

export const removeAirportListing = () => {}

export const updateAirportListing = () => {}

export const getAllAirportListings = () => {}
