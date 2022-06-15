import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
`

const theme = {
  colors: {
    primary: "#003399",
    secondary: "#FF2121",
    accent: "#FFE5E5",
    lightGray: "#dadada",
    black: "#000",
    white: "#fff",
  },
  fontSizes: {
    h1: "3.2rem",
    h2: "2.6rem",
    h3: "2rem",
    h4: "1.4rem",
    h5: "1.1rem",
    h6: "1rem",
    body: "1rem",
    btn: "1.1rem",
    cta: "1.1rem",
  },
  fontWeights: {
    w9: "900",
    w8: "800",
    w7: "700",
    w6: "600",
    w5: "500",
    w4: "400",
    w3: "300",
  },
}

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)

export default Theme
