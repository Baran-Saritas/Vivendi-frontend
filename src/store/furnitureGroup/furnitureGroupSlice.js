import { createSlice } from "@reduxjs/toolkit";
import env from "../../env.json"
const url = env.fGroupUrl;
const initialState = {
    isLoading: false,
    error: null,
    isLogin: false,
    updatePassword: {
      isLoading: false,
      error: null,
    },
  };

export const FurnitureGroupSlice = createSlice({
    name: "furnitureGroup",
    initialState,
    reducers:  {
        /**
       * Assign the project to an employee.
       * @param {string} furniture.height
       * @param {string} furniture.width
       */
         updateFurniture: (state, {id, furniture}) => {
          fetch(url+id,{
            method:"PUT",
            headers:{   
              "Content-Type": "application/json",
            },
            body: JSON.stringify(furniture)
        })
            .then(response => response.json())
            .then(data => console.log(data));
        },
         /**
         * Assign the project to an employee.
         * @param {string} furniture.height
         * @param {string} furniture.width
         */
          postFurniture: (state, furniture) => {
            fetch(url,{
              method:"POST",
              headers:{   
                "Content-Type": "application/json",
              },
              body: JSON.stringify(furniture)
          })
              .then(response => response.json())
              .then(data => console.log(data));
          }
        ,
        getFurnitureGroup: (state) => {
            fetch('http://localhost:5052/furniture-group/',{
                method:"GET",
                headers:{   
                  "Content-Type": "application/json",
                }
            })
                .then(response => response.json())
                .then(data => console.log(data));
        },
        getFurnitureGroupById:(state,id) =>{  // id eklenir hale getir object sorunu verdi 
            fetch('http://localhost:5052/furniture-group/e4b80a57-ee33-4fcb-a5e3-cdaaaaaaaabb',{
                method:"GET",
                headers:{   
                  "Content-Type": "application/json",
                }
            })
                .then(response => response.json())
                .then(data => console.log(data));
        }
    }
})

export const { getFurnitureGroup, getFurnitureGroupById } = FurnitureGroupSlice.actions;
export default FurnitureGroupSlice.reducer;