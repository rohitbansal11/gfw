import{
    CAR_REQUEST,
    CAR_SUCCESS,
    CAR_FAILURE,

} from "./car.types"
const initialValue = {
  loading: false,
  carlisting:[],
  error: [],
}


export const carReducer=(state=initialValue,action)=>{
    const {type,payload}=action
    switch (type){
        case CAR_REQUEST:
            return{
                ...state,
                loading:true,
            }

        case CAR_SUCCESS:
            return{
                ...state,
                loading:false,
                carlisting:[...state.carlisting,payload],
            }
        case CAR_FAILURE:
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