import "../styles/globals.css"
import { wrapper, store } from "../store/store"
import { Provider } from "react-redux"
import Theme from "../utils/theme"
import { Navbar, Footer } from "@components/Common"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Theme>
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
