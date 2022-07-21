import {
  NAV_HIDE,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  LOGOUT,
} from "./userTypes";
const initialState = {
  token: "",
  error: "",
  Nav: "",
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        loading: false,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        error: [...state.error, payload],
        loading: false,
      };
    case NAV_HIDE: {
      return {
        ...state,
        Nav: payload,
        loading: false,
      };
    }
    case LOGOUT:
      return {
        ...state,
        token: "",
        error: "",
        Nav: "",
        loading: false,
      };
    default:
      return state;
  }
};
