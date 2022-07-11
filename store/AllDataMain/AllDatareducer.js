import {
  LOADS_DATA,
  LOADING,
  CHECKTOKEN,
  SAVELOCATION,
  SAVELOCATIONLOADS,
  LOGOUT,
  GETEMERGENCYLOADS,
  GETTRUCK,
  GETTRUCKPART,
  CARSALE,
  HOME,
  ROOM,
  SCHOOL,
  OLDAGE,
  AIRPORT,
  WORKER,
  STORE,
} from "./AllDatatypes";

const initialValue = {
  loading: false,
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
    case STORE:
      return {
        ...state,
        loading: false,
        store: payload,
      };
    case WORKER:
      return {
        ...state,
        loading: false,
        worker: payload,
      };
    case AIRPORT:
      return {
        ...state,
        loading: false,
        airport: payload,
      };
    case OLDAGE:
      return {
        ...state,
        loading: false,
        oldage: payload,
      };
    case SCHOOL:
      return {
        ...state,
        loading: false,
        school: payload,
      };
    case ROOM:
      return {
        ...state,
        loading: false,
        room: payload,
      };
    case HOME:
      return {
        ...state,
        loading: false,
        home: payload,
      };
    case CARSALE:
      return {
        ...state,
        loading: false,
        carsale: payload,
      };
    case GETTRUCKPART:
      return {
        ...state,
        loading: false,
        truckpart: payload,
      };
    case GETTRUCK:
      return {
        ...state,
        loading: false,
        truck: payload,
      };
    case GETEMERGENCYLOADS:
      return {
        ...state,
        loading: false,
        emergency: payload,
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
