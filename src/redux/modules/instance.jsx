import axios from "axios";

const accessToken = localStorage.getItem("token");

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  withCredentials: true,
});
