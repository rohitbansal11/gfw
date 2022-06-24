import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createWrapper } from "next-redux-wrapper"

import { userReducer } from "./user-store/userReducer"
import { sellTruckReducer } from "./sell-truck-store/sell-truck-reducer"
const reducer = combineReducers({
  sellTruck: sellTruckReducer,
  user: userReducer,
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
