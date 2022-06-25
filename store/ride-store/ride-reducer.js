import {
  RIDE_SCHOOL_REQUEST,
  RIDE_SCHOOL_SUCCESS,
  RIDE_SCHOOL_FAILURE,
  RIDE_OLDAGE_REQUEST,
  RIDE_OLDAGE_SUCCESS,
  RIDE_OLDAGE_FAILURE,
  RIDE_AIRPORT_REQUEST,
  RIDE_AIRPORT_SUCCESS,
  RIDE_AIRPORT_FAILURE,
} from "./ride-types"

const initialValue = {
  loading: false,
  listings: [],
  schoolListings: [],
  airportListings: [],
  oldAgeListings: [],
  error: [],
}

export const rideReducer = (state = initialValue, action) => {
  const { type, payload } = action
  switch (type) {
    case RIDE_SCHOOL_REQUEST:
    case RIDE_OLDAGE_REQUEST:
    case RIDE_AIRPORT_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case RIDE_SCHOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        schoolListings: [...state.schoolListings, payload],
      }
    case RIDE_OLDAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        oldAgeListings: [...state.oldAgeListings, payload],
      }
    case RIDE_AIRPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        airportListings: [...state.airportListings, payload],
      }

    case RIDE_SCHOOL_FAILURE:
    case RIDE_OLDAGE_FAILURE:
    case RIDE_AIRPORT_FAILURE:
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
