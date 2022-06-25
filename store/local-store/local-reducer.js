import{
    LOCALSTORE_REQUEST,
    LOCALSTORE_SUCCESS,
    LOCALSTORE_FAILURE,

    LOCALWORKERS_REQUEST,
    LOCALWORKERS_SUCCESS,
    LOCALWORKERS_FAILURE,
    

} from "./local-types"
const initialValue = {
  loading: false,
  
  storelisting:[],
  worklisting:[],
  error: [],
}


export const LocalReducer=(state=initialValue,action)=>{
    const {type,payload}=action
    switch (type){
        case LOCALSTORE_REQUEST:
        case LOCALWORKERS_REQUEST:
            return{
                ...state,
                loading:true,
            }

        case LOCALSTORE_SUCCESS:
            return{
                ...state,
                loading:false,
                storelisting:[...state.storelisting,payload],
            }
        case LOCALWORKERS_SUCCESS:
            return{
                ...state,
                loading:false,
            worklisting:[...state.worklisting, payload],
            }
        case LOCALSTORE_FAILURE:
        case LOCALWORKERS_FAILURE:
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