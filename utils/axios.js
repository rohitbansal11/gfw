import axios from "axios";
export default axios.create({
  baseURL: "https://gudguru.herokuapp.com/api/v1",
  //baseURL: "https://gud-guru-api-rohitbansal11.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});
