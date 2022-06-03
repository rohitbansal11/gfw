import React from "react"
import styled from "styled-components"
const Navbar = () => {
  return <Heading>Navbar</Heading>
}
const Heading = styled.div`
  color: ${({ theme: { colors } }) => colors.lightBlue};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large}px;
`
export default Navbar
