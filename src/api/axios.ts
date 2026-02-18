import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://76.13.17.48:8001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;