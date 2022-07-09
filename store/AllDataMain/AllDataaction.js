import axios from "@utils/axios"
import {
    LOADS_DATA,
    LOADING
} from './AllDatatypes'

export const Getloads = () => async (dispatch, getState) => {
 
  dispatch({
    type: LOADING,
  })
  // @todo: add data to database
  try {
    const token = localStorage.getItem("token")
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
    console.log(config)
   
    const res = await axios.get("/loads", config)
    console.log(res)
    
  } catch (error) {
    console.error({ error })
    dispatch({
      type:LOADING,
    })
  }
}


