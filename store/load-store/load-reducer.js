import {
    LOAD_REQUEST,
    LOAD_SUCCESS,
    LOAD_FAILURE,
} from "./load-types"


const initialValue = {
    loading: false,
    
    loadlisting:[],
    error: [],
  }
  
  
  export const loadReducer=(state=initialValue,action)=>{
      const {type,payload}=action
      switch (type){
          case LOAD_REQUEST:
              return{
                  ...state,
                  loading:true,
              }
  
          case LOAD_SUCCESS:
              return{
                  ...state,
                  loading:false,
                  loadlisting:[...state.loadlisting,payload],
              }
    

          case LOAD_FAILURE:
              return{
                  ...state,
                  loading:false,
                  error:payload,
              }
          default:
              return {
                  ...state,
              }
      }
  }