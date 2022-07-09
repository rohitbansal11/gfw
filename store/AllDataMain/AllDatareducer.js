import { LOADS_DATA, LOADING, CHECKTOKEN } from "./AllDatatypes";

const initialValue = {
  loading: false,
  loads: [],
  token: {},
};

export const AllDatareducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
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
