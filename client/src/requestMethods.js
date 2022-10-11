import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDVhNDFiN2NmMzYwODlhMzc0OGQ2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTc3MDgyMSwiZXhwIjoxNjYyMDMwMDIxfQ.AgZGQ42VBpJ6sMFPa-s5w8saDwTm5H0tUFrGUm-BOwY"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});