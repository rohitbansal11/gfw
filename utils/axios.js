import axios from "axios"
export default axios.create({
  baseURL: "https://gudguru.herokuapp.com/api/v1",
})
