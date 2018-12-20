import axios from "axios";
import { baseURL } from "../config";

const request = axios.create({
  baseURL: baseURL
});

request.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    console.log(err.message);
  }
);

request.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    console.log(err.message);
  }
);

export default request;
