import axios from "axios"

const axiosClient = axios.create({
  baseURL: "https://final-web-2020.herokuapp.com/api",
  headers: {
    sessiontoken: localStorage.getItem("token"),
  },
})

export default axiosClient
