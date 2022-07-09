import axios from "@utils/axios"
import {
  SELL_TRUCK_FAILURE,
  SELL_TRUCK_REQUEST,
  SELL_TRUCK_SUCCESS,
  SELL_TRUCK_PARTS_FAILURE,
  SELL_TRUCK_PARTS_REQUEST,
  SELL_TRUCK_PARTS_SUCCESS,
} from "./sell-truck-types"

import axiosApi from "axios"
export const uploadImage = async (base64) => {
  let base64Img = `data:image/jpg;base64,${base64.base64}`  
  //Add your cloud name
  let apiUrl = `https://api.cloudinary.com/v1_1/sourabhvaish/image/upload`
  let data = {
    file: base64Img,
    upload_preset: `chatapp`,
  }

  try {
    const res = await axiosApi.post(apiUrl, data, {
      headers: { "content-type": "application/json" },
    })
    console.log("cloud",res.data)
    return res.data
  } catch (err) {
    console.log(err)
  }
}
export const addSellTruckListing = (payload,image) => async (dispatch, getState) => {
  dispatch({
    type: SELL_TRUCK_REQUEST,
  })
  try {
    const token = localStorage.getItem("token")
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    console.log({ payload })
    const res = await axios.post("/truck", payload, config)
    console.log({ data: res.data.data })
    dispatch({
      type: SELL_TRUCK_SUCCESS,
      payload: payload,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: SELL_TRUCK_FAILURE,
      payload: { error: error.message }, // error
    })
  }
}


export const addSellTruckpartsListing =
  (payload) => async (dispatch, image) => {
    dispatch({
      type: SELL_TRUCK_PARTS_REQUEST,
    })
    const img=uploadImage(image)
    try {
      // const { user } = getState((state) => state)
      const token = localStorage.getItem("token")
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
      const res = await axios.post("/truckpart", payload, config)
      console.log("hhhhh",{ data: res.data.data })
      dispatch({
        type: SELL_TRUCK_PARTS_SUCCESS,
        payload: payload,
      })
    } catch (error) {
      console.error({ error })
      dispatch({
        type: SELL_TRUCK_PARTS_FAILURE,
        payload: { error: error.message }, // error
      })
    }
  }

 

export const removeSellTruckListing = () => {}

export const updateSellTruckListing = () => {}

export const getAllSellTruckListings = () => {}
