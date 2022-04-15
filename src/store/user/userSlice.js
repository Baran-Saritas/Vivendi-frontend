import { createSlice } from "@reduxjs/toolkit";
import env from "../../env.json";
import { user_api } from "../../utilrs/axiosInterceptors";
const url = env.userUrl;
const initialState = {
  isLoading: false,
  error: null,
  isLogin: false,
  updatePassword: {
    isLoading: false,
    error: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /**
     * Assign the project to an employee.
     * @param {string} user.name
     * @param {string} user.lastname
     * @param {string} user.email
     * @param {string} user.password
     * @param {string} user.imageUrl
     */
    postUser: (state, user) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    /**
     * Assign the project to an employee.
     * @param {string} user.name
     * @param {string} user.lastname
     * @param {string} user.email
     * @param {string} user.password
     * @param {string} user.imageUrl
     */
    updateUser: (state, { id, user }) => {
      fetch(url + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    /**
     * Assign the project to an employee.
     * @param {string} user.email
     * @param {string} user.password
     */
    signIn: (state, { payload }) => {
      user_api
        .post("/signin", payload)
        .then((res) => console.log("RES: ", res))
        .catch((err) => console.log("ERR : ", err.response));
    },
  },
});

export const { signIn, updateUser, postUser } = userSlice.actions;
export default userSlice.reducer;
