import {
  LOADS_DATA,
  LOADING,
  CHECKTOKEN,
  SAVELOCATION,
  SAVELOCATIONLOADS,
  LOGOUT,
} from "./AllDatatypes";

const initialValue = {
  loading: false,
  loads: [],
  token: {},
  location: {
    state: "",
    city: "",
  },
  location_loads: {
    stateOne: "",
    cityOne: "",
    stateTwo: "",
    cityTwo: "",
  },
};

export const AllDatareducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT:
      return {
        ...state,
        token: {},
        location: {
          state: "",
          city: "",
        },
        location_loads: {
          stateOne: "",
          cityOne: "",
          stateTwo: "",
          cityTwo: "",
        },
      };
    case SAVELOCATION:
      return {
        ...state,
        location: payload,
      };
    case SAVELOCATIONLOADS:
      return {
        ...state,
        location_loads: payload,
      };

    case LOADS_DATA:
      return {
        ...state,
        loading: false,
        loads: payload,
      };
    case CHECKTOKEN:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
