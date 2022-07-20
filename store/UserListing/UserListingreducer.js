import {
  STATUS,
  LOADING,
  LOADINGFALSE,
  LOADS,
  EMERGENCY,
  TRUCK,
  TRUCKPART,
  CARSALE,
  HOME,
  ROOM,
  SCHOOL,
  OLDAGE,
  AIRPORT,
  WORKER,
  STORE,
} from "./userListingType";

const initialValue = {
  loading: false,
  status:[],
  loads: [],
  emergency: [],
  truck: [],
  truckpart: [],
  carsale: [],
  home: [],
  room: [],
  school: [],
  oldage: [],
  airport: [],
  worker: [],
  store: [],
};

export const UserListingReducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOADINGFALSE:
      return {
        ...state,
        loading: false,
      };
      case STATUS:
      return {
        ...state,
        loading: false,
        status: payload,
      };
    case LOADS:
      return {
        ...state,
        loading: false,
        loads: payload,
      };
    case EMERGENCY:
      return {
        ...state,
        loading: false,
        emergency: payload,
      };
    case TRUCK:
      return {
        ...state,
        loading: false,
        truck: payload,
      };
    case TRUCKPART:
      return {
        ...state,
        loading: false,
        truckpart: payload,
      };
    case CARSALE:
      return {
        ...state,
        loading: false,
        carsale: payload,
      };

    case HOME:
      return {
        ...state,
        loading: false,
        home: payload,
      };
    case ROOM:
      return {
        ...state,
        loading: false,
        room: payload,
      };
    case SCHOOL:
      return {
        ...state,
        loading: false,
        school: payload,
      };
    case OLDAGE:
      return {
        ...state,
        loading: false,
        oldage: payload,
      };
    case AIRPORT:
      return {
        ...state,
        loading: false,
        airport: payload,
      };
    case WORKER:
      return {
        ...state,
        loading: false,
        worker: payload,
      };
    case STORE:
      return {
        ...state,
        loading: false,
        store: payload,
      };

    default:
      return {
        ...state,
      };
  }
};
