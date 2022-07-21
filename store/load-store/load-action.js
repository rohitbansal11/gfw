import axios from "@utils/axios";
import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE } from "./load-types";
import Swal from "sweetalert2";
export const LoadListing = (payload) => async (dispatch, getState) => {
  dispatch({
    type: LOAD_REQUEST,
  });
  // @todo: add data to database
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    console.log({ payload });
    const res = await axios.post("/loads", payload, config);
    console.log({ data: res?.data.data });
    dispatch({
      type: LOAD_SUCCESS,
      payload: res,
    });
    Swal.fire({
      title: "Load Add  Success",
      icon: "success",
      text: "Load Add  Success",
    });

    window.location.href = "/";
  } catch (error) {
    console.error({ error });
    dispatch({
      type: LOAD_FAILURE,
      payload: { error: error.message }, // error
    });
    Swal.fire({
      title: "Error!",
      icon: "success",
      text:
        error.response?.data?.error?.message || error.response?.data?.message,
      icon: "error",
    });
  }
};

export const uploadImage = async (base64) => {
  let base64Img = `data:image/jpg;base64,${base64.base64}`;
  //Add your cloud name
  let apiUrl = `https://api.cloudinary.com/v1_1/${"sourabhvaish"}/image/upload`;
  let data = {
    file: base64Img,
    upload_preset: `${chatapp}`,
  };

  try {
    const res = await axiosApi.post(apiUrl, data, {
      headers: { "content-type": "application/json" },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const removeLoadListing = () => {};

export const updateLocalLoadListing = () => {};

export const getAllLocalLoadListings = () => {};
