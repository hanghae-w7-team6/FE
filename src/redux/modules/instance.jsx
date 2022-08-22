import axios from "axios";

// const accessToken = localStorage.getItem("user");

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  // baseURL: "http://localhost:3001",
  // headers: {
  //   // Authorization: accessToken,
  // },
  withCredentials: true,
});
