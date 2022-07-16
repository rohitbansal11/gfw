import {
  LOADS,
  LOADING,
  LOADINGFALSE,
  EMERGENCY,
  TRUCK,
  TRUCKPART,
  CARSALE,
  HOME,
  ROOM,
  SCHOOL,
  OLDAGE,
  AIRPORT,
  STORE,
  WORKER,
} from "./userListingType";
import axios from "@utils/axios";

export const UserLoads = () => async (dispatch) => {
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
    let res = await axios.post(`/loads/user-loads`, { name: "" }, config);

    dispatch({
      type: LOADS,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};

export const UserEmergencyLoads = () => async (dispatch) => {
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
    let res = await axios.post(`/loads/user-emerloads`, { name: "" }, config);

    dispatch({
      type: EMERGENCY,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};

export const Usertruck = () => async (dispatch) => {
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
    let res = await axios.post(`/truck/user-truck`, { name: "" }, config);

    dispatch({
      type: TRUCK,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};

export const Usertruckpart = () => async (dispatch) => {
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
    let res = await axios.post(
      `/truckpart/user-truckpart`,
      { name: "" },
      config
    );

    dispatch({
      type: TRUCKPART,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};

export const Usercarsale = () => async (dispatch) => {
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
    let res = await axios.post(`/car/user-car`, { name: "" }, config);

    dispatch({
      type: CARSALE,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};

export const Userhome = () => async (dispatch) => {
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
    let res = await axios.post(`/homerent/user-homerent`, { name: "" }, config);

    dispatch({
      type: HOME,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};

export const UserRoom = () => async (dispatch) => {
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
    let res = await axios.post(`/roomrent/user-roomrent`, { name: "" }, config);

    dispatch({
      type: ROOM,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};

export const UserSchool = () => async (dispatch) => {
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
    let res = await axios.post(
      `/schoolride/user-schoolride`,
      { name: "" },
      config
    );

    dispatch({
      type: SCHOOL,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};

export const UserOldage = () => async (dispatch) => {
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
    let res = await axios.post(
      `/oldageride/user-oldageride`,
      { name: "" },
      config
    );

    dispatch({
      type: OLDAGE,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};

export const UserAirport = () => async (dispatch) => {
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
    let res = await axios.post(
      `/airportride/user-airportride`,
      { name: "" },
      config
    );

    dispatch({
      type: AIRPORT,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};

export const UserWorker = () => async (dispatch) => {
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
    let res = await axios.post(`/worker/user-worker`, { name: "" }, config);

    dispatch({
      type: WORKER,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};
export const UserStore = () => async (dispatch) => {
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
    let res = await axios.post(
      `/localstore/user-localstore`,
      { name: "" },
      config
    );

    dispatch({
      type: STORE,
      payload: res?.data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADINGFALSE,
    });
  }
};
