import axios from "axios";

// const accessToken = localStorage.getItem("user");

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  // baseURL: "process.env.REACT_APP_SERVER_URL",
  // headers: {
  //   // Authorization: accessToken,
  // },
  // withCredentials: true,
});
