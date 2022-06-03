import "../styles/globals.css"
import { wrapper, store } from "../store/store"
import { Provider } from "react-redux"
import Theme from "../utils/theme"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
