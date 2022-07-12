import axios from "axios";
export default axios.create({
  baseURL: "https://gudguru.herokuapp.com/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});
