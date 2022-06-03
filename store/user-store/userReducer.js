import {} from "./userTypes"
const initialState = {
  access_token: "",
  error: "",
  user: {},
  profile: {},
  loading: false,
}
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}
