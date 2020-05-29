import axios from "axios"

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:3001",
  headers: {
    sessiontoken: localStorage.getItem("token"),
  },
})

export default axiosClient
