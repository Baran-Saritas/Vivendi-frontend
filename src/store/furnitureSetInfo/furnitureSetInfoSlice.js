import { createSlice } from "@reduxjs/toolkit";
import env from "../../env.json"
const url = env.fSetInfoUrl;
const initialState = {
    isLoading: false,
    error: null,
    isLogin: false,
    updatePassword: {
      isLoading: false,
      error: null,
    },
  };

export const FurnitureSetInfoSlice = createSlice({
    name: "furnitureSetInfo",
    initialState,
    reducers:  {
        /**
       * Assign the project to an employee.
       * @param {string} furnitureSetInfo.name
       * @param {string} furnitureSetInfo.price
       * @param {string} furnitureSetInfo.furnitureGroupId
       */
         updateFurnitureSetInfo: (state, {id, furnitureSetInfo}) => {
          fetch(url+id,{
            method:"PUT",
            headers:{   
              "Content-Type": "application/json",
            },
            body: JSON.stringify(furnitureSetInfo)
        })
            .then(response => response.json())
            .then(data => console.log(data));
        },
        /**
       * Assign the project to an employee.
       * @param {string} furnitureSetInfo.name
       * @param {string} furnitureSetInfo.price
       * @param {string} furnitureSetInfo.furnitureGroupId
       */
          postFurnitureSetInfo: (state, furnitureSetInfo) => {
            fetch(url,{
              method:"POST",
              headers:{   
                "Content-Type": "application/json",
              },
              body: JSON.stringify(furnitureSetInfo)
          })
              .then(response => response.json())
              .then(data => console.log(data));
          }
        ,
        getFurnitureSetInfo: (state) => {
            fetch('http://localhost:5053/furniture-set-info/',{
                method:"GET",
                headers:{   
                  "Content-Type": "application/json",
                }
            })
                .then(response => response.json())
                .then(data => console.log(data));
        },
        getFurnitureSetInfoById:(state,id) =>{  // id eklenir hale getir object sorunu verdi 
            fetch('http://localhost:5053/furniture-set-info/e4b80a57-ee23-4fcb-a5e3-cd9081899de1',{
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

export const { getFurnitureSetInfo,getFurnitureSetInfoById,updateFurnitureSetInfo,postFurnitureSetInfo } = FurnitureSetInfoSlice.actions;
export default FurnitureSetInfoSlice.reducer;