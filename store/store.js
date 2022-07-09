import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createWrapper } from "next-redux-wrapper"
import { userReducer } from "./user-store/userReducer"
import { sellTruckReducer } from "./sell-truck-store/sell-truck-reducer"
import { rideReducer } from "./ride-store/ride-reducer"
import { LocalReducer } from "./local-store/local-reducer"
import { carReducer } from "./cars-store/car.reducer"
import { sell_or_rent_Reducer } from "./sell-or-rent-store/sell-or-rent-reducer"
import { loadReducer } from "./load-store/load-reducer"
import { AllDatareducer } from "./AllDataMain/AllDatareducer"
const reducer = combineReducers({
  sellTruck: sellTruckReducer,
  ride: rideReducer,
  local: LocalReducer,
  cars: carReducer,
  sell_or_rent: sell_or_rent_Reducer,
  user: userReducer,
  load: loadReducer,
  alldata:AllDatareducer
})

// middleware
const middleware = [thunk]

// creating store
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
// assigning store to next wrapper
const makeStore = () => store
export const wrapper = createWrapper(makeStore)
