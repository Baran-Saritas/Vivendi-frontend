import { createSlice } from "@reduxjs/toolkit";
import env from "../../env.json"
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
    reducers:  {
     /**
       * Assign the project to an employee.
       * @param {string} user.name
       * @param {string} user.lastname
       * @param {string} user.email
       * @param {string} user.password
       * @param {string} user.imageUrl
       */
      updateFurniture: (state, {id, user}) => {
        fetch(url+id,{
          method:"PUT",
          headers:{   
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
      })
          .then(response => response.json())
          .then(data => console.log(data));
      },
       /**
       * Assign the project to an employee.
       * @param {string} user.name
       * @param {string} user.lastname
       * @param {string} user.email
       * @param {string} user.password
       * @param {string} user.imageUrl
       */
        postFurniture: (state, user) => {
          fetch(url,{
            method:"POST",
            headers:{   
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => console.log(data));
        }
      ,


        login: state => {
            state.isLogin = true;
        },
        logout: state => {
            state.isLogin = false;
        }
    }
})

export const { login , logout } = userSlice.actions;
export default userSlice.reducer;