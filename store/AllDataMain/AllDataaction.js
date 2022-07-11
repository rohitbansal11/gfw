import axios from "@utils/axios";
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

export const Getloads = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const { stateOne, stateTwo, cityOne, cityTwo } = location;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = await axios.get("/loads", config);
    let FinalData = [];
    if (cityTwo == "All" && cityOne == "All") {
      FinalData = res.data.data?.filter((w) => {
        return !w.isblock && w.from.state == stateOne && w.to.state == stateTwo;
      });
    } else if (cityTwo !== "All" && cityOne == "All") {
      FinalData = await res.data.data?.filter((w) => {
        return (
          !w.isblock &&
          w.from.state == stateOne &&
          w.to.state == stateTwo &&
          w.to.city == cityTwo
        );
      });
    } else if (cityTwo == "All" && cityOne !== "All") {
      FinalData = await res.data.data?.filter((w) => {
        return (
          !w.isblock &&
          w.from.state == stateOne &&
          w.to.state == stateTwo &&
          w.from.city == cityOne
        );
      });
    } else {
      FinalData = await res.data.data?.filter((w) => {
        return (
          !w.isblock &&
          w.from.state == stateOne &&
          w.to.state == stateTwo &&
          w.from.city == cityOne &&
          w.to.city == cityTwo
        );
      });
    }
    console.log(FinalData);
    dispatch({
      type: LOADS_DATA,
      payload: FinalData,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADS_DATA,
      payload: [],
    });
  }
};
export const getEmergencyLoads = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = await axios.get("/loads", config);

    let FinalData = res.data.data?.filter((w) => {
      return !w.isblock && w.emergency;
    });

    dispatch({
      type: GETEMERGENCYLOADS,
      payload: FinalData,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GETEMERGENCYLOADS,
      payload: [],
    });
  }
};

export const getTruck = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    let res = null;

    if (location.city == "All") {
      res = await axios.get(
        `/truck?isblock=false&state=${location.state}`,
        config
      );
    } else {
      res = await axios.get(
        `/truck?isblock=false&state=${location.state}&city=${location.city}`,
        config
      );
    }
    dispatch({
      type: GETTRUCK,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GETTRUCK,
      payload: [],
    });
  }
};

export const getTruckPart = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = null;

    if (location.city == "All") {
      res = await axios.get(
        `/truckpart?isblock=false&state=${location.state}`,
        config
      );
    } else {
      res = await axios.get(
        `/truckpart?isblock=false&state=${location.state}&city=${location.city}`,
        config
      );
    }
    dispatch({
      type: GETTRUCKPART,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GETTRUCKPART,
      payload: [],
    });
  }
};

export const getCarSale = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = null;
    if (location.city == "All") {
      res = await axios.get(
        `/car?isblock=false&state=${location.state}`,
        config
      );
    } else {
      res = await axios.get(
        `/car?isblock=false&state=${location.state}&city=${location.city}`,
        config
      );
    }
    dispatch({
      type: CARSALE,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CARSALE,
      payload: [],
    });
  }
};

export const getHome = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = null;
    if (location.city == "All") {
      res = await axios.get(
        `/homerent?isblock=false&state=${location.state}`,
        config
      );
    } else {
      res = await axios.get(
        `/homerent?isblock=false&state=${location.state}&city=${location.city}`,
        config
      );
    }

    dispatch({
      type: HOME,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: HOME,
      payload: [],
    });
  }
};

export const getRoom = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = null;

    if (location.city == "All") {
      res = await axios.get(
        `/roomrent?isblock=false&state=${location.state}`,
        config
      );
    } else {
      res = await axios.get(
        `/roomrent?isblock=false&state=${location.state}&city=${location.city}`,
        config
      );
    }
    dispatch({
      type: ROOM,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ROOM,
      payload: [],
    });
  }
};

export const getSchool = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = null;

    if (location.city == "All") {
      res = await axios.get(
        `/schoolride?isblock=false&state=${location.state}`,
        config
      );
    } else {
      res = await axios.get(
        `/schoolride?isblock=false&state=${location.state}&city=${location.city}`,
        config
      );
    }
    dispatch({
      type: SCHOOL,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SCHOOL,
      payload: [],
    });
  }
};

export const getOldage = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = null;
    if (location.city == "All") {
      res = await axios.get(
        `/oldageride?isblock=false&state=${location.state}`,
        config
      );
    } else {
      res = await axios.get(
        `/oldageride?isblock=false&state=${location.state}&city=${location.city}`,
        config
      );
    }
    dispatch({
      type: OLDAGE,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: OLDAGE,
      payload: [],
    });
  }
};

export const getAirport = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = null;
    if (location.city == "All") {
      res = await axios.get(
        `/airportride?isblock=false&state=${location.state}`,
        config
      );
    } else {
      res = await axios.get(
        `/airportride?isblock=false&state=${location.state}&city=${location.city}`,
        config
      );
    }
    dispatch({
      type: AIRPORT,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AIRPORT,
      payload: [],
    });
  }
};

export const getWorker = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = null;
    if (location.city == "All") {
      res = await axios.get(
        `/worker?isblock=false&state=${location.state}`,
        config
      );
    } else {
      res = await axios.get(
        `/worker?isblock=false&state=${location.state}&city=${location.city}`,
        config
      );
    }
    dispatch({
      type: WORKER,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: WORKER,
      payload: [],
    });
  }
};

export const getStore = (location) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    let res = null;
    if (location.city == "All") {
      res = await axios.get(
        `/localstore?isblock=false&state=${location.state}`,
        config
      );
    } else {
      res = await axios.get(
        `/localstore?isblock=false&state=${location.state}&city=${location.city}`,
        config
      );
    }
    dispatch({
      type: STORE,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: STORE,
      payload: [],
    });
  }
};

export const CheckTokenOne = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    const res = await axios.get("/auth/me", config);
    dispatch({
      type: CHECKTOKEN,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.error(error?.response?.data?.massage);
    dispatch({
      type: CHECKTOKEN,
      payload: {},
    });
  }
};
export const CheckTokenTwo = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    const res = await axios.get("/auth/me", config);
    dispatch({
      type: CHECKTOKEN,
      payload: res?.data?.data,
    });

    window.location.href = "/";
  } catch (error) {
    console.error(error?.response?.data?.massage);
    dispatch({
      type: CHECKTOKEN,
      payload: {},
    });
  }
};

export const LogoutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("token");
  window.location.href = "/";
};

export const SaveModalData = (data) => (dispatch) => {
  dispatch({
    type: SAVELOCATION,
    payload: data,
  });
};
export const SaveModalDataLoads = (data) => (dispatch) => {
  dispatch({
    type: SAVELOCATIONLOADS,
    payload: data,
  });
};
