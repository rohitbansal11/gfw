import{
    LOCALSTORE_REQUEST,
    LOCALSTORE_SUCCESS,
    LOCALSTORE_FAILURE,

    LOCALWORKERS_REQUEST,
    LOCALWORKERS_SUCCESS,
    LOCALWORKERS_FAILURE,
    
} from "./local-types"

export const LocalStoreListing = (payload) => async (dispatch) => {
  dispatch({
    type: LOCALSTORE_REQUEST,
  })
  // @todo: add data to database
  try {
    dispatch({
      type: LOCALSTORE_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    dispatch({
      type: LOCALSTORE_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}

export const LocalWorkersListing = (payload) => async (dispatch) => {
  dispatch({
    type: LOCALWORKERS_REQUEST,
  })
  // @todo: add data to database
  try {
    dispatch({
      type: LOCALWORKERS_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    dispatch({
      type: LOCALWORKERS_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}

export const removeLocalStoreListing = () => {}

export const updateLocalStoreListing = () => {}

export const getAllLocalStoreListings = () => {}

export const removeLocalWorkersListing = () => {}

export const updateLocalWorkersListing = () => {}

export const getAllLocalWorkersListings = () => {}

