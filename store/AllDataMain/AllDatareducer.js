import {
    LOADS_DATA,
    LOADING
} from "./AllDatatypes"


const initialValue = {
    loading: false,
 loads:[]
  }
  
  
  export const AllDatareducer=(state=initialValue,action)=>{
      const {type,payload}=action
      switch (type){
          case LOADING:
              return{
                  ...state,
                  loading:true,
              }
  
          case LOADS_DATA:
              return{
                  ...state,
                  loading:false,
                  loads:payload,
              }
          default:
              return {
                  ...state,
              }
      }
  }