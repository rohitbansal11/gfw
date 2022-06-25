import{
    RIDE_SCHOOL_REQUEST,
    RIDE_SCHOOL_SUCCESS,
    RIDE_SCHOOL_FAILURE,

    RIDE_OLDAGE_REQUEST,
    RIDE_OLDAGE_SUCCESS,
    RIDE_OLDAGE_FAILURE,
    
    RIDE_AIRPORT_REQUEST,
    RIDE_AIRPORT_SUCCESS,
    RIDE_AIRPORT_FAILURE
} from "./ride-types"


const initialValue = {
  loading: false,
  listings: [],
  error: [],
}
export const rideReducer=(state=initialValue,action)=>{
    const {type,payload}=action
    switch (type){
        case RIDE_SCHOOL_REQUEST:
        case RIDE_OLDAGE_REQUEST:
        case RIDE_AIRPORT_REQUEST:
            return{
                ...state,
                loading:true,
            }

        case RIDE_SCHOOL_SUCCESS:
        case RIDE_OLDAGE_SUCCESS:
        case RIDE_AIRPORT_SUCCESS:
            return{
                ...state,
                loading:false,
                listings:[...state.listings, payload],
            }

        case RIDE_SCHOOL_FAILURE:
        case RIDE_OLDAGE_FAILURE:
        case RIDE_AIRPORT_FAILURE:
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